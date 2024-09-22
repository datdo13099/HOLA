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
                $('meta[property="og\\:image"]').attr("content", "https://b.anhmoecdn.icu/q544ST.jpeg-webp");

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
