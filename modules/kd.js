HUGO.add({
  id: 'kd', order: 8, name: 'Kinh doanh MORETECH',
  blurb: 'Đồng bộ dòng tiền kinh doanh vào sổ gia đình, chỉ đọc.',
  fg: '#A3225E', bg: '#FBE0EC', ico: 'M4 9a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zM9 7V5h6v2',
  chips: ['.kd'],
  badges: ['Tùy chọn, người quản trị bật', 'Hugo chỉ đọc sheet kinh doanh'],
  cmds: [['.kd', 'Đồng bộ và xem dòng tiền MORETECH', '.kd']],
  sections: [
    { id: 'kd', title: 'Xem dòng tiền',
      text: 'Gõ .kd để đồng bộ ngay và xem tháng này cùng tháng trước: tiền vào, tiền ra, dòng tiền, số đơn chưa thanh toán và trạng thái dòng thu trong sổ gia đình.',
      rows: [['Tiền vào', 'Doanh thu các đơn bắt đầu trong tháng, trừ đơn Chưa thanh toán'], ['Tiền ra', 'Chi phí mọi đơn cộng chi phí ngoài đã trả'], ['Dòng tiền', 'Tiền vào trừ tiền ra, ghi thành một dòng thu mỗi tháng']],
      notes: ['Sheet MORETECH là nguồn gốc: sửa tay dòng thu đã đồng bộ sẽ bị ghi đè lần sau.', 'Chỉ tháng này và tháng trước còn được cập nhật. Khoản phát sinh muộn ghi ở nguồn theo ngày thực trả.', 'Hugo tự đồng bộ trước tổng kết 21:00, trước tổng kết ngày 1 và đầu .sodu.'] }
  ]
});
