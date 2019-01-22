$(document).ready(function() {
    $('#order').click(function() {
        // alert('trung');
        var name = $('#name').val();
        var phone = $('#phone').val();
        var des = $('#desc').val();
        if(!name || !phone || !des) {
            alert('Bạn cần điền đầy đủ thông tin');
            return;
        } else {
            $.ajax({
                url : "https://formspress.io/zimmi123cook@gmail.com",
                method: "POST",
                data : $('#form-submit').serialize(),
                dataType : 'json'
            });
        }
        $('#form-submit')[0].reset();
        alert('Cảm ơn bạn đã quan tâm đến sản phẩm bên mình');
        // console.log($('#form-submit').serialize());
    })
    // $('#form-submit').submit(function() {
    //     alert('ok');
    // })
})