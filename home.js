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
})();
