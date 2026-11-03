HUGO.add({
  id: 'dk', order: 7, name: 'Định kỳ',
  blurb: 'Tiền nhà, wifi, trả góp: Hugo nhắc đúng ngày, gõ ok là ghi.',
  fg: '#3E4A57', bg: '#E6EAEE', ico: 'M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM12 8v4l3 2',
  chips: ['.dk', '.dk them'],
  badges: ['Nhắc lúc 08:30', 'Vợ hay chồng gõ ok đều được'],
  cmds: [['.dk', 'Danh sách khoản định kỳ, thêm hoặc xóa', '.dk them 1 4tr tiền nhà']],
  sections: [
    { id: 'nhac', title: 'Hugo nhắc đúng ngày',
      text: 'Lúc 08:30 ngày đến hạn, Hugo nhắn vào nhóm.',
      rows: [['ok', 'Ghi tất cả khoản có số tiền cố định'], ['ok 1 3', 'Chỉ ghi khoản số 1 và 3'], ['.chi 1tr7 tiền điện', 'Khoản số tiền thay đổi (điện, nước): bạn tự nhắn khi có hóa đơn']],
      notes: ['Khoản nào tháng này đã có trên sheet thì Hugo không nhắc nữa. Khoản quá hạn 3 ngày mà chưa ghi sẽ được nhắc lại.'],
      chat: [['b', '╭─ 📌 Định kỳ hôm nay\n│ 1. Tiền nhà     4.000.000\n│ 2. Wifi           220.000\n│ Gõ ok để ghi tất cả\n╰────────'], ['u', 'ok']] },
    { id: 'quanly', title: 'Quản lý danh sách',
      rows: [['.dk', 'Xem danh sách: ✅ tháng này đã ghi, ⏳ chưa'], ['.dk them 1 4tr tiền nhà', 'Thêm khoản 4 triệu vào ngày 1 hằng tháng'], ['.dk them 29 ? tiền điện', 'Dấu ? nghĩa là số tiền thay đổi'], ['.dk them 30 1tr514 no trả góp samsung', 'Thêm no, tk hoặc thu sau số tiền nếu không phải chi'], ['.dk xoa 3', 'Bỏ khoản số 3']] }
  ]
});
