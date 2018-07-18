$('#confirmation').hide();

//When ENTER is pressed OR mouse focus on next field...
//Log user name to console
//Capture user name
$("#name").on( "blur", function() {
    console.log($(this).val());
  });
//Capture user email
$("#email").on( "blur", function() {
      console.log($(this).val());
  });
//When ENTER is pressed OR mouse focus on next field...
    //log user email to console

//Shout error IF input is not a valid email AND make border red


//Capture comment
$("#comment").on( "blur", function() {
        console.log($(this).val());
  });

//When ENTER is pressed OR SUBMIT is clicked...
    //Log COMMENT to console and

    //"Thank you, " + "user_name" button slide up
$('#submit').click(function(e) {
var name = $('#name').val();
var email = $('#email').val();
var comment = $('#comment').val();

// const $email = $('#email').val;
// const $comment = $('#comment').val;
    if (name === ""||email === "" || comment === "" ) {
        alert('');
        e.preventDefault();
    } else {
    $('#userName').text(name.toUpperCase());
    $('#confirmation').slideDown(1000);
    $('#confirmation').delay(3000);
    $('#confirmation').slideUp();
    }
});

    
   








