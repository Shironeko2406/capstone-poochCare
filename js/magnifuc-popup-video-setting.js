$(document).ready(function () {
    // Khi trang đã tải xong

    // Kích hoạt MagnificPopup cho các phần tử có class 'video-play'
    $('.video-play').magnificPopup({
        disableOn: false, // Tắt MagnificPopup trên màn hình có chiều rộng nhỏ hơn 700px
        type: 'iframe', // Loại popup là iframe
        mainClass: 'mfp-fade', // Class chính của popup có hiệu ứng fade
        removalDelay: 160, // Thời gian trễ trước khi loại bỏ popup (đơn vị: ms)
        preloader: false, // Tắt preloader (hiển thị biểu tượng chờ)
        fixedContentPos: false, // Không giữ nội dung cố định khi cuộn trang
        iframe: {
            patterns: {
                youtube: {
                    index: 'youtube.com/', // Chuỗi để xác định loại video (trong trường hợp này là YouTube) bằng cách kiểm tra url.indexOf(index).

                    id: 'v=', // Chuỗi để chia URL thành hai phần, phần thứ hai nên là %id%
                    // Hoặc null - URL đầy đủ sẽ được trả về
                    // Hoặc một hàm có thể trả về %id%, ví dụ:
                    // id: function(url) { return 'parsed id'; }

                    src: 'https://vimeo.com/101587706' // URL sẽ được thiết lập là nguồn cho iframe.
                },

                // Bạn có thể thêm nhiều nguồn khác ở đây

            },

            srcAction: 'iframe_src', // Khóa của đối tượng mẫu. Phần đầu tiên xác định bộ chọn CSS, phần thứ hai là thuộc tính. "iframe_src" có nghĩa là: tìm "iframe" và thiết lập thuộc tính "src".
        }
    });
});
