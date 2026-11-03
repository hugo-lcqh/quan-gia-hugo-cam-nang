/* Trang chi tiết module: module.html?m=<id> dựng tiêu đề, mục lục và từng mục lệnh + demo từ HUGO.mods */
(function () {
  const { el, tint, icon } = HUGO;
  HUGO.chrome('module');
  const m = HUGO.byId(new URLSearchParams(location.search).get('m')) || HUGO.mods[0];
  document.title = `${m.name} · Cẩm nang Quản gia Hugo`;

  const section = (s) => el('section', { class: 'sec', id: s.id },
    el('div', { class: 'txt' },
      el('h2', {}, s.title),
      s.text ? el('p', {}, s.text) : null,
      s.rows ? el('div', {}, s.rows.map(([c, d]) => el('div', { class: 'row' }, el('code', {}, c), el('span', {}, d)))) : null,
      (s.notes || []).map((n) => el('div', { class: 'note' }, el('b', { 'aria-hidden': 'true' }, '!'), el('span', {}, n)))),
    s.chat ? HUGO.chat(s.chat) : null);

  document.getElementById('page').append(
    el('div', { class: 'mh' },
      el('nav', { class: 'crumb', 'aria-label': 'Đường dẫn' }, el('a', { href: 'index.html' }, 'Cẩm nang'), ' / ', m.name),
      el('div', { class: 'mh-t' }, el('span', { class: 'ico', style: `background:${m.bg}` }, icon(m, 32)),
        el('div', {}, el('h1', {}, m.name), el('p', {}, m.blurb))),
      el('div', { class: 'badges' }, m.badges.map((b) => el('span', { class: 'badge', style: tint(m) }, b)))),
    el('div', { class: 'layout' },
      el('nav', { class: 'toc', 'aria-label': 'Trong trang này' }, el('small', {}, 'TRONG TRANG NÀY'), m.sections.map((s) => el('a', { href: '#' + s.id }, s.title))),
      el('div', { class: 'secs' }, m.sections.map(section))),
    el('div', { class: 'more' }, el('strong', { style: 'align-self:center;margin-right:8px' }, 'Module khác:'),
      HUGO.mods.filter((x) => x !== m).map((x) => el('a', { href: `module.html?m=${x.id}` }, x.name))));
})();
