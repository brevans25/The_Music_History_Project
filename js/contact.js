//Hide the alert buttons
$('#nameRequest, #emailRequest, #confirmation').hide();

//Focus on the name field
//Capture user name
//Log user name to console
$("#name").on( "blur", function() {
    console.log($(this).val());
  });

//After TAB was pressed OR mouse focus on this field
//Capture user email
//Log user email to console
$("#email").on( "blur", function() {
      console.log($(this).val());
  });


//Capture comment
//Log COMMENT to console
$("#comment").on( "blur", function() {
        console.log($(this).val());
  });

//"Thank you, " + "user_name" button slide up
$('#submit').click(function(e) {
    var name = $('#name').val();
    var email = $('#email').val();

//Conditional Statements => notifies the users if they do not provide name or email by showing a button that slides down

if (name === "") {
    $('#nameRequest').slideDown(1000);
    $('#nameRequest').delay(15000);
    $('#nameRequest').slideUp();
    e.preventDefault();
} else if ( email === "") {
    $('#emailRequest').slideDown(1000);
    $('#emailRequest').delay(15000);
    $('#emailRequest').slideUp();
    e.preventDefault();
 } else {
    $('#userName').text(name.toUpperCase());
    $('#confirmation').slideDown(1000);
    $('#confirmation').delay(15000);
    $('#confirmation').slideUp();
    }
});

    
   








