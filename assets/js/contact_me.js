$(function() {

    $("#formContato input,#formContato textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            // Prevent spam click and default submit behaviour
            $("#btnSubmit").attr("disabled", true);
            event.preventDefault();
            
            // get values from FORM
            var name = $("input#nome").val();
            var email = $("input#email").val();
            var message = $("textarea#mensagem").val();
            var firstName = name; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }
            $.ajax({
                url: "././mail/contact_me.php",
                type: "POST",
                data: {
                    name: name,
                    email: email,
                    message: message
                },
                cache: false,
                success: function() {
                    // Enable button & show success message
                    $("#btnSubmit").attr("disabled", false);
                    $('#sucesso').html("<div class='alert alert-success'>");
                    $('#sucesso > .alert-success').html("<button type='button' class='closeBtn' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#sucesso > .alert-success')
                        .append("<strong>Sua mensagem foi enviada! Agradecemos o contato.</strong>");
                    $('#sucesso > .alert-success')
                        .append('</div>');

                    //clear all fields
                    $('#formContato').trigger("reset");
                },
                error: function() {
                    // Fail message
                    $('#sucesso').html("<div class='alert alert-danger'>");
                    //$('#sucesso > .alert-danger').html("<button type='button' class='closeBtn' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
                    $('#sucesso > .alert-danger').append("<strong>Desculpe " + firstName + 
                    ", parece que nosso servidor de e-mail não responde. Por favor tente mais tarde ou envie uma mensagem para contato@clinicafundamento.com.br");
                    $('#sucesso > .alert-danger').append('</div>');
                    //clear all fields
                    $('#formContato').trigger("reset");
                },
            });
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});

// When clicking on Full hide fail/success boxes
$('#nome').focus(function() {
    $('#sucesso').html('');
});
