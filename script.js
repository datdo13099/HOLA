$(document).ready(function(){
    var endTime = new Date('Oct 15, 2024 00:00:00').getTime();
    var setClock = function(){
        var timeinterval = setInterval(function(){
            var now = new Date().getTime();
            var t = endTime - now;
            if (t >= 0) {
                var txtdays = Math.floor(t / (1000 * 60 * 60 * 24));
                var txthours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var txtmins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
                var txtsecs = Math.floor((t % (1000 * 60)) / 1000);

                $('#tetornot').text('Sắp đến ngày ra khỏi HOLA!!! Chỉ còn...');
                $('#days').text(txtdays);
                $('#hours').text(txthours);
                $('#mins').text(txtmins);
                $('#secs').text(txtsecs);
                $('#days-text').text('Ngày');
                $('#hours-text').text('Giờ');
                $('#mins-text').text('Phút');
                $('#secs-text').text('Giây');

                document.title = 'Đếm ngược ngày ra khỏi HOLA – Sắp đến giờ!';
                $('meta[name="description"]').attr("content", "Còn bao nhiêu thời gian nữa đến ngày ra khỏi HOLA?");
                $('meta[property="og\\:title"]').attr("content", 'Đếm ngược ngày ra khỏi HOLA – Sắp đến giờ!');
                $('meta[property="og\\:description"]').attr("content", 'Còn bao nhiêu thời gian nữa đến ngày ra khỏi HOLA?');
                $('meta[property="og\\:image"]').attr("content", "https://b.anhmoecdn.icu/DARmFDLK.jpeg");

            } else {
                clearInterval(timeinterval);
                $('#tetornot').text('Đã đến ngày ra khỏi HOLA!');
                $('#days').text('');
                $('#hours').text('');
                $('#mins').text('');
                $('#secs').text('');
                $('#days-text').text('');
                $('#hours-text').text('');
                $('#mins-text').text('');
                $('#secs-text').text('');
            }
        }, 1000);
    }

    setClock();
});
