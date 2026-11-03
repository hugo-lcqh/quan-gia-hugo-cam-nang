HUGO.add({
  id: 'quy', order: 3, name: 'Quỹ & tiết kiệm',
  blurb: 'Gửi, rút và theo dõi tiến độ các quỹ có hạn.',
  fg: '#8A5200', bg: '#FCEBCB', ico: 'M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
  chips: ['.quy', '.tk', '.rut'],
  badges: ['Tên quỹ lấy từ sheet Cài đặt', 'Chỉ ghi sổ, không chuyển tiền ngân hàng'],
  cmds: [
    ['.tk', 'Gửi tiết kiệm vào quỹ', '.tk 2tr quỹ khẩn cấp'],
    ['.quy', 'Tiến độ quỹ, đặt hoặc bỏ mục tiêu có hạn', '.quy them du lịch 30tr 06/2027'],
    ['.rut', 'Rút quỹ về ví, hoặc rút kèm một khoản chi', '.rut 2tr du lịch cho giải trí']
  ],
  sections: [
    { id: 'gui', title: 'Gửi tiết kiệm',
      rows: [['.tk 2tr quỹ khẩn cấp', 'Gửi 2 triệu vào quỹ'], ['tk 2tr du lịch', 'Ghi nhanh, không cần dấu chấm']] },
    { id: 'quy', title: 'Quỹ có hạn',
      text: 'Đặt mục tiêu và hạn cho từng quỹ. Hugo tính còn thiếu bao nhiêu và mỗi tháng cần để dành bao nhiêu.',
      rows: [['.quy', 'Tiến độ: đã tích lũy, còn thiếu, hạn, số tháng còn lại, cần mỗi tháng'], ['.quy them du lịch 30tr 06/2027', 'Đặt mục tiêu 30 triệu, hạn tháng 06/2027'], ['.quy xoa du lịch', 'Bỏ mục tiêu có hạn, giữ nguyên giao dịch']],
      notes: ['Tên quỹ phải có sẵn trong sheet Cài đặt, mục TIẾT KIỆM. Gõ không dấu, hoa thường đều được.', 'Số cần mỗi tháng làm tròn lên bội số của 1.000 đ.'],
      chat: [['u', '.quy'], ['b', '╭─ 🎯 Tiến độ quỹ\n│ Du lịch: 12tr / 30tr (40%)\n│ Hạn 06/2027 · còn 8 tháng\n│ Cần ~2.250.000 đ/tháng\n╰────────']] },
    { id: 'rut', title: 'Rút quỹ',
      text: 'Hugo ghi ngay sau khi kiểm tra, và chặn rút quá số dư quỹ.',
      rows: [['.rut 2tr du lịch', 'Quỹ giảm 2 triệu, ví của bạn tăng 2 triệu'], ['.rut 2tr du lịch cho giải trí khách sạn', 'Quỹ giảm 2 triệu và ghi chi 2 triệu vào Giải trí. Ví không đổi']],
      notes: ['Không dùng .sua, .doi, .xoa để sửa rút quỹ. Sửa tay trên Sheet, cả cặp dòng nếu có Chi.', 'Nhờ AI rút quỹ thì Hugo luôn chờ chính người nhắn gõ ok trong 10 phút.'],
      chat: [['u', '.rut 2tr du lịch cho giải trí khách sạn'], ['b', '╭─ ✅ Đã rút quỹ\n│ Du lịch −2.000.000\n│ Chi Giải trí 2.000.000\n│ Ví không đổi\n╰────────']] }
  ]
});
