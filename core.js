/* Lõi cẩm nang: sổ đăng ký module + hàm dựng DOM dùng chung.
   Thêm module mới = tạo site/modules/<id>.js gọi HUGO.add({...}) và thêm 1 thẻ <script> vào index.html + module.html. */
(function () {
  const H = (window.HUGO = {
    updated: '08/11/2026',
    mods: [],
    add(m) { this.mods.push(m); this.mods.sort((a, b) => a.order - b.order); },
    rules: [
      { n: '1', title: 'Nhóm gia đình và chat riêng', text: 'Hugo chỉ trả lời nhóm gia đình và chat riêng với thành viên. Lịch và Nhà dùng được trong chat riêng khi đã bật; ghi hộ chỉ trong nhóm.' },
      { n: '2', title: 'Hugo hỏi thì gõ ok', text: 'Gõ ok để xác nhận (trong 10 phút), gõ 0 hoặc huy để hủy. Chỉ người nhắn mới xác nhận được.' },
      { n: '3', title: 'Ghi nhầm thì sửa ngay', text: 'Gõ .xoa, .sua hoặc .doi để chữa khoản bạn vừa ghi. Quên lệnh thì gõ .help.' },
      { n: '4', title: 'Hỏi tự nhiên', text: 'Hỏi Hugo bằng câu tự nhiên, không cần nhớ lệnh. Trong chat riêng nhắn thẳng; trong nhóm gọi "Hugo" trước câu. Hugo chưa hiểu hết câu thì nhờ AI hiểu và hỏi lại; AI tắt/hết lượt thì hiện hướng dẫn cách gõ (thay đổi đang chờ deploy).' }
    ],
    // Lịch Hugo chủ động nhắn vào nhóm
    auto: [
      { time: '07:00', when: 'MỖI SÁNG', title: 'Bản tin gia đình', text: 'Lịch hôm nay, khoản định kỳ đến hạn chưa ghi, ngân sách, giấy tờ và bảo trì sắp tới hạn.' },
      { time: '08:30', when: 'MỖI SÁNG', title: 'Nhắc khoản định kỳ', text: 'Gõ ok để ghi tất cả, hoặc ok 1 3 để chọn.' },
      { time: '−15p', when: 'TRƯỚC SỰ KIỆN CÓ GIỜ', title: 'Nhắc hẹn', text: 'Hugo nhắn vào nhóm trước giờ bắt đầu 15 phút.' },
      { time: '−30/7 ngày', when: 'TRƯỚC HẠN GIẤY TỜ, BẢO HÀNH, BẢO TRÌ', title: 'Nhắc tới hạn', text: 'Hugo nhắn vào nhóm hai lần, khi còn 30 ngày và 7 ngày.' },
      { time: '21:00', when: 'MỖI TỐI', title: 'Tổng kết hôm nay', text: 'Nhắc ghi chép nếu cả nhà chưa ghi khoản nào.' },
      { time: '20:00', when: 'CHỦ NHẬT', title: 'Báo cáo tuần', text: 'Tổng thu chi tuần, so tuần trước, nhận xét của Hugo.' },
      { time: '08:00', when: 'NGÀY 1 HẰNG THÁNG', title: 'Báo cáo tháng trước', text: 'Tổng kết, tiền dư chưa phân bổ và tiến độ quỹ.' }
    ]
  });

  /* el('div', {class:'x'}, 'text', node, [nodes]) : luôn dùng textContent, không bao giờ innerHTML */
  H.el = function el(tag, attrs, ...kids) {
    const n = document.createElement(tag);
    for (const k in attrs || {}) {
      if (k === 'style') n.setAttribute('style', attrs[k]);
      else if (k.startsWith('on')) n.addEventListener(k.slice(2), attrs[k]);
      else n.setAttribute(k, attrs[k]);
    }
    kids.flat().forEach((c) => { if (c != null && c !== false) n.append(c.nodeType ? c : document.createTextNode(c)); });
    return n;
  };

  H.norm = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd').toLowerCase();
  H.tint = (m) => `background:${m.bg};color:${m.fg}`;
  H.byId = (id) => H.mods.find((m) => m.id === id);

  H.icon = function (m, px) {
    const ns = 'http://www.w3.org/2000/svg';
    const s = document.createElementNS(ns, 'svg');
    [['width', px], ['height', px], ['viewBox', '0 0 24 24'], ['fill', 'none'], ['stroke', m.fg], ['stroke-width', 2], ['stroke-linecap', 'round'], ['stroke-linejoin', 'round'], ['aria-hidden', 'true']].forEach(([k, v]) => s.setAttribute(k, v));
    const p = document.createElementNS(ns, 'path');
    p.setAttribute('d', m.ico);
    s.append(p);
    return s;
  };

  /* msgs: [['u','45k cafe'], ['b','╭─ ...']] */
  H.chat = (msgs, caption) => H.el('div', { class: 'chat', role: 'group', 'aria-label': 'Ví dụ cuộc trò chuyện với Hugo' },
    msgs.map(([who, t]) => H.el('div', { class: who }, t)),
    caption === false ? null : H.el('small', {}, 'Minh họa cách Hugo trả lời'));

  /* Dựng thanh đầu + chân trang. active: 'home' | 'module' */
  H.chrome = function (active) {
    const home = active === 'home' ? '' : 'index.html';
    const link = (h, t) => H.el('a', { href: home + h }, t);
    document.body.prepend(H.el('header', { class: 'top' }, H.el('div', { class: 'wrap' },
      H.el('a', { class: 'logo', href: 'index.html' }, H.el('i', { 'aria-hidden': 'true' }, 'H'), 'Cẩm nang Quản gia Hugo'),
      H.el('nav', { 'aria-label': 'Mục chính' }, link('#batdau', 'Bắt đầu'), link('#module', 'Module'), link('#lenh', 'Tra lệnh'), link('#tudong', 'Hugo tự nhắn')),
      H.el('span', { class: 'stamp' }, 'Cập nhật ' + H.updated))));
    document.body.append(H.el('footer', { class: 'foot' }, H.el('div', { class: 'wrap' },
      H.el('span', {}, `Cẩm nang theo bản bot cập nhật ${H.updated}. Ví dụ trong khung chat chỉ để minh họa.`),
      H.el('span', {}, 'Bot chỉ trả lời trong nhóm Zalo gia đình và chat riêng với thành viên.'))));
  };
})();
