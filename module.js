/* Trang canonical: giữ title, breadcrumb, fallback và liên kết module ngoài renderer dùng chung. */
(function () {
  const { el } = HUGO;
  HUGO.chrome('module');
  const page = document.getElementById('page');
  const m = HUGO.byId(new URLSearchParams(location.search).get('m')) || HUGO.mods[0];
  const breadcrumb = (name) => el('nav', { class: 'crumb', 'aria-label': 'Đường dẫn' },
    el('a', { href: 'index.html' }, 'Cẩm nang'), ' / ', name);

  if (!m) {
    page.append(el('div', { class: 'mh' }, breadcrumb('Module'),
      el('h1', {}, 'Chưa có module'), el('p', {}, 'Cẩm nang chưa có module để hiển thị.')));
    return;
  }
  document.title = `${m.name} · Cẩm nang Quản gia Hugo`;
  const content = HUGO.moduleContent(m);
  // Breadcrumb là trách nhiệm trang canonical; giữ vị trí và style cũ.
  content.querySelector('.mh').prepend(breadcrumb(m.name));
  page.append(content,
    el('div', { class: 'more' }, el('strong', {}, 'Module khác:'),
      HUGO.mods.filter((x) => x !== m).map((x) => el('a', { href: `module.html?m=${encodeURIComponent(x.id)}` }, x.name))));
})();
