$("#formValidate").validate({
    rules: {
        uname: {
            required: true,
            minlength: 5
        },
        id:{
            required: true,
            equalTo: "###-##-####"
        },
        cemail: {
            required: true,
            email: true
        },
        password: {
            required: true,
            minlength: 5
        },
        cpassword: {
            required: true,
            minlength: 5,
            equalTo: "#password"
        },
    },
    //For custom messages
    messages: {
        uname: {
            required: "Enter your name",
            minlength: "Enter at least 5 characters"
        },
        cpassword: "Your enter password is different",
    },
    errorElement: 'div',
    errorPlacement: function(error, element) {
        var placement = $(element).data('error');
        if (placement) {
            $(placement).append(error)
        } else {
            error.insertAfter(element);
        }
    }
});