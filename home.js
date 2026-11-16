/* Trang chủ: dựng thẻ module, bảng tra lệnh (lọc tab + tìm không dấu) và lịch tự nhắn từ HUGO.mods */
(function () {
  const { el, mods, norm, tint, icon } = HUGO;
  const $ = (id) => document.getElementById(id);
  HUGO.chrome('home');

  // [module, cmd, desc, example] cho toàn bộ module
  const rows = mods.flatMap((m) => m.cmds.map((c) => ({ m, cmd: c[0], desc: c[1], ex: c[2] })));

  $('count').textContent = `${mods.length} module · ${rows.length} lệnh chính · đang mở rộng`;

  ['45k cafe', '.thang', '.rut', '.lich', '.giayto', '@Hugo'].forEach((t) => $('hot').append(el('a', { class: 'mono', href: '#lenh' }, t)));

  $('demo').replaceWith(HUGO.chat([
    ['u', '45k cafe'],
    ['b', '╭─ ✅ Đã ghi chi\n│ 45.000 đ · Cafe\n│ Ví Chồng · hôm nay\n│ 🟢 Ngân sách Cafe: 62%\n╰────────'],
    ['u', '.thang'],
    ['b', '╭─ 📊 Tháng 11/2026\n│ Thu        18.000.000\n│ Chi         7.450.000\n│ Còn lại    10.550.000\n╰────────']
  ]));

  HUGO.rules.forEach((r) => $('rules').append(el('div', { class: 'rule' }, el('i', {}, r.n), el('div', {}, el('b', {}, r.title), el('span', {}, r.text)))));

  mods.forEach((m) => $('cards').append(el('a', { class: 'card', href: `module.html?m=${m.id}` },
    el('div', { class: 'card-h' },
      el('span', { class: 'ico', style: `background:${m.bg}` }, icon(m, 22)),
      el('span', { class: 'badge', style: tint(m) }, `${m.cmds.length} lệnh`)),
    el('div', {}, el('strong', {}, m.name), el('p', {}, m.blurb)),
    el('div', { class: 'chips' }, m.chips.map((c) => el('span', { class: 'mono' }, c))))));
  $('cards').append(el('div', { class: 'soon' }, el('strong', {}, 'Module mới sẽ xuất hiện ở đây'),
    el('span', {}, 'Thêm một file module, thẻ này tự có trong danh sách và bảng tra lệnh.')));

  HUGO.auto.forEach((a) => $('auto').append(el('div', {}, el('span', { class: 't mono' }, a.time), el('small', {}, a.when), el('strong', {}, a.title), el('p', {}, a.text))));

  // --- bảng tra lệnh ---
  let tab = 'all', q = '';
  const tabs = [{ id: 'all', name: 'Tất cả' }].concat(mods.map((m) => ({ id: m.id, name: m.name })));
  function draw() {
    $('tabs').replaceChildren(...tabs.map((t) => el('button', { type: 'button', class: 'tab', 'aria-pressed': String(tab === t.id), onclick: () => { tab = t.id; draw(); } }, t.name)));
    const hit = rows.filter((r) => (tab === 'all' || r.m.id === tab) && (!q || norm([r.cmd, r.desc, r.ex, r.m.name].join(' ')).includes(q)));
    $('tbl').replaceChildren(...(hit.length ? hit.map((r) => el('a', { class: 'tr', href: `module.html?m=${r.m.id}` },
      el('span', { class: 'c mono' }, r.cmd), el('span', { class: 'd' }, r.desc), el('span', { class: 'e mono' }, r.ex),
      el('span', { class: 'badge', style: tint(r.m) }, r.m.name))) : [el('div', { class: 'empty' }, 'Không thấy lệnh nào khớp. Thử gõ ngắn hơn, hoặc nhắn .help cho Hugo.')]));
  }
  $('q').addEventListener('input', (e) => { q = norm(e.target.value.trim()); draw(); });
  draw();

  // Independent of the command filters: the URL is the only scene authority.
  const controls = $('module-view-controls'), overview = $('mindmap-overview'), detail = $('mindmap-detail');
  const cards = $('cards'), status = $('module-view-status'), homeTitle = document.title;
  const cardsButton = $('module-view-cards'), mapButton = $('module-view-map');
  const routeHref = (m, s) => '#mindmap/' + encodeURIComponent(m.id) + (s ? '/' + encodeURIComponent(s.id) : '');
  const nodes = new Map();
  let state = { kind: 'cards' }, generation = 0, animation, lastModule, overviewScroll;
  const reducedMotion = () => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  function parseRoute() {
    const hash = window.location.hash;
    if (!hash.startsWith('#mindmap')) return { kind: 'cards' };
    if (hash === '#mindmap') return { kind: 'map' };
    try {
      const parts = hash.slice(1).split('/');
      if (parts[0] !== 'mindmap' || parts.length < 2 || parts.length > 3) throw new Error('route');
      const moduleId = decodeURIComponent(parts[1]), sectionId = parts.length === 3 ? decodeURIComponent(parts[2]) : undefined;
      const m = HUGO.byId(moduleId);
      if (!m) throw new Error('module');
      const s = parts.length === 3 ? (m.sections || []).find(s => s.id === sectionId) : undefined;
      if (parts.length === 3 && !s) return { kind: 'detail', m, canonical: routeHref(m), message: 'Không tìm thấy mục này. Đang hiển thị module.' };
      return { kind: 'detail', m, s };
    } catch (_) {
      return { kind: 'map', canonical: '#mindmap', message: 'Liên kết sơ đồ không hợp lệ. Hãy chọn một module.' };
    }
  }

  function buildOverview() {
    const midpoint = Math.ceil(mods.length / 2);
    const branch = (m) => {
      const node = el('a', { class: 'mindmap-node', href: routeHref(m) },
        el('span', { class: 'ico', style: `background:${m.bg}` }, icon(m, 22)),
        el('span', { class: 'mindmap-label' }, el('strong', {}, m.name), el('span', {}, m.blurb)),
        el('span', { class: 'badge', style: tint(m) }, `${m.cmds.length} lệnh`));
      nodes.set(m.id, node);
      return el('li', { class: 'mindmap-branch' }, node);
    };
    const group = (items, side) => el('ul', { class: `mindmap-branches mindmap-${side}`, 'aria-label': 'Module của Hugo' }, items.map(branch));
    overview.append(el('div', { class: 'mindmap' },
      el('div', { class: 'mindmap-root' }, el('span', { 'aria-hidden': 'true' }, 'H'),
        el('h3', { id: 'mindmap-heading', tabindex: '-1' }, 'Quản gia Hugo')),
      group(mods.slice(0, midpoint), 'left'), group(mods.slice(midpoint), 'right'),
      mods.length ? null : el('p', { class: 'empty' }, 'Chưa có module để hiển thị.')));
  }

  function buildDetail(m) {
    const content = HUGO.moduleContent(m, { idPrefix: `mm-${m.id}-`, includeCommands: true, includeRules: true,
      sectionHref: (s) => routeHref(m, s) });
    const heading = content.querySelector('h1');
    heading.setAttribute('tabindex', '-1');
    detail.replaceChildren(el('nav', { class: 'mindmap-detail-nav', 'aria-label': 'Điều hướng sơ đồ' },
      el('a', { class: 'btn alt', href: '#mindmap' }, 'Về sơ đồ'),
      el('a', { class: 'btn alt', href: `module.html?m=${encodeURIComponent(m.id)}` }, 'Mở trang module riêng')), content);
  }

  function focusScene(next, previous) {
    let target;
    if (next.kind === 'detail') target = next.s ? $(`mm-${next.m.id}-${next.s.id}`) : detail.querySelector('h1');
    else if (next.kind === 'map') target = nodes.get(lastModule) || $('mindmap-heading');
    else if (previous.kind !== 'cards') {
      try { target = $(decodeURIComponent(window.location.hash.slice(1))); } catch (_) { /* Invalid legacy anchor: keep cards usable. */ }
      // Legacy fragments may point into an inactive scene, including the hidden panel itself.
      if (target?.closest('[hidden]')) target = undefined;
      target ||= $('module-heading');
    }
    if (!target) return;
    if (target.localName !== 'a') target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
    if (next.kind === 'map' && overviewScroll) window.scrollTo({ ...overviewScroll, behavior: 'instant' });
    else target.scrollIntoView({ block: 'start', behavior: 'instant' });
  }

  function enhanceScene(panel, token) {
    // Element animations scope the effect to this panel, never snapshot the whole page.
    // Navigation is already committed; missing/rejected animation APIs cannot undo it.
    if (reducedMotion() || typeof panel.animate !== 'function') return;
    try {
      const current = panel.animate([{ opacity: 0, transform: 'translateY(8px)' }, { opacity: 1, transform: 'translateY(0)' }],
        { duration: 240, easing: 'ease-out' });
      animation = current;
      Promise.resolve(current.finished).catch(() => {}).then(() => {
        if (token === generation && animation === current) animation = undefined;
      });
    } catch (_) { /* The new scene remains usable without animation. */ }
  }

  function navigate(initial = false) {
    const token = ++generation, previous = state;
    try { animation?.cancel(); } catch (_) { /* Failed cancellation cannot block a newer URL. */ }
    animation = undefined;
    const next = parseRoute();
    if (next.canonical) window.history.replaceState(window.history.state, '', next.canonical);
    if (previous.kind === 'map' && next.kind !== 'map') overviewScroll = { left: window.scrollX, top: window.scrollY };
    if (next.kind === 'detail') {
      if (previous.kind !== 'detail' || previous.m.id !== next.m.id) buildDetail(next.m);
      lastModule = next.m.id;
    }
    state = next;
    cards.hidden = next.kind !== 'cards';
    overview.hidden = next.kind !== 'map';
    detail.hidden = next.kind !== 'detail';
    cardsButton.setAttribute('aria-pressed', String(next.kind === 'cards'));
    mapButton.setAttribute('aria-pressed', String(next.kind !== 'cards'));
    document.title = next.kind === 'detail' ? `${next.m.name} · Sơ đồ · ${homeTitle}` : homeTitle;
    status.textContent = next.message || (next.kind === 'detail' ? next.m.name : next.kind === 'map' ? 'Sơ đồ module' : 'Thẻ module');
    focusScene(next, previous);
    if (!initial) enhanceScene(next.kind === 'detail' ? detail : next.kind === 'map' ? overview : cards, token);
  }

  function recover() {
    ++generation;
    try { animation?.cancel(); } catch (_) { /* Keep the card fallback available. */ }
    animation = undefined;
    state = { kind: 'cards' };
    cards.hidden = false;
    overview.hidden = detail.hidden = controls.hidden = true;
    document.title = homeTitle;
    status.textContent = 'Chưa mở được sơ đồ. Bạn vẫn có thể chọn thẻ để xem hướng dẫn.';
    if (document.activeElement?.closest('[hidden]')) $('module-heading').focus({ preventScroll: true });
  }
  try {
    if (typeof HUGO.moduleContent !== 'function') throw new Error('Shared module renderer unavailable');
    buildOverview();
    navigate(true);
    controls.hidden = false;
    cardsButton.addEventListener('click', () => { window.location.hash = '#module'; });
    mapButton.addEventListener('click', () => { window.location.hash = '#mindmap'; });
    window.addEventListener('hashchange', () => { try { navigate(); } catch (_) { recover(); } });
  } catch (_) { recover(); }
})();
