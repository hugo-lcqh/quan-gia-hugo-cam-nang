HUGO.add({
  id: 'vi', order: 4, name: 'Ví & số dư',
  blurb: 'Hai ví vợ chồng, đối soát, chuyển nội bộ và ghi hộ bằng @tag.',
  fg: '#6130B8', bg: '#EBE2FB', ico: 'M4 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zM16 13h4',
  chips: ['.sodu', '.chuyen', '@tên'],
  badges: ['Mỗi người một ví', '@tag chỉ trong nhóm'],
  cmds: [
    ['.sodu', 'Xem số dư ví, hoặc đối soát với tiền thực có', '.sodu 8tr5 chốt ví cá nhân'],
    ['.chuyen', 'Chuyển tiền nội bộ giữa hai vợ chồng', '.chuyen 2tr đưa vợ'],
    ['@tên', 'Ghi hộ vào ví người kia bằng tag Zalo thật', '.chi 200k đi chợ @Bà Chã Húi']
  ],
  sections: [
    { id: 'sodu', title: 'Số dư và đối soát',
      text: 'Mỗi người có một ví. Tiền thực có = tài khoản thanh toán + ví điện tử + tiền mặt bạn đang giữ, không gồm sổ tiết kiệm.',
      rows: [['.sodu', 'Số dư ví của bạn, ví người kia, tổng cả nhà và 3 lần đối soát gần nhất'], ['.sodu 8tr5 chốt ví cá nhân', 'Đối soát: so tiền thực với sổ sách ví của bạn'], ['.sodu 0', 'Cũng hợp lệ, không nhận số âm']],
      notes: ['Có chênh lệch thì gõ ok trong 10 phút để ghi điều chỉnh. Gõ 0 hoặc hủy để bỏ. Điều chỉnh không ảnh hưởng ví người kia.', 'Nên đối soát cuối tháng. Lần đầu chênh lệch lớn là bình thường.'],
      chat: [['u', '.sodu 8tr5'], ['b', '╭─ ⚖️ Đối soát ví Chồng\n│ Thực tế   8.500.000\n│ Sổ sách   8.620.000\n│ Chênh lệch −120.000\n│ Gõ ok để ghi · 0 để hủy\n╰────────']] },
    { id: 'chuyen', title: 'Chuyển tiền nội bộ',
      text: 'Ví người chuyển trừ đi, ví người nhận cộng thêm. Khoản này không tính vào thu chi chung của gia đình.',
      rows: [['.chuyen 5tr nộp quỹ ăn uống', 'Chuyển 5 triệu cho người kia'], ['.chuyen 2tr đưa vợ', 'Kèm nội dung ngắn']] },
    { id: 'tag', title: 'Ghi hộ vào ví bằng @tag',
      text: 'Tag thành viên bằng mention thật của Zalo để ghi chi, thu hoặc tiết kiệm vào ví của họ.',
      rows: [['.chi 200k đi chợ @Bà Chã Húi', 'Ghi chi vào ví người được tag'], ['200k đi chợ @Bà Chã Húi', 'Ghi nhanh cũng được'], ['@Hugo ghi giúp anh 200k đi chợ @Bà Chã Húi', 'Nhờ Hugo ghi']],
      notes: ['Phải là tag Zalo thật (chữ xanh). Gõ tay tên thì ví không đổi.', 'Tag nhiều hơn một thành viên: Hugo từ chối cả đề xuất, nhắc chỉ tag một người.', 'Không áp dụng cho .rut, .chuyen, .sodu, trả nợ, ảnh bill và khoản định kỳ.', 'Người nhập vẫn tự sửa, xóa, hoàn tác khoản mình ghi hộ. Chủ ví thì không.'],
      chat: [['u', '.chi 200k đi chợ @Bà Chã Húi'], ['b', '╭─ ✅ Đã ghi chi\n│ 200.000 đ · Chợ\n│ Ví Vợ · Người nhập: Chồng\n╰────────']] }
  ]
});
