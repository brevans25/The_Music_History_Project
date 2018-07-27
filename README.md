# The Music History Project

## Description

_The Music History Project_ is a project that aims to compile important facts, 
photos, audio and videos to tell, in a didactic and inclusive way, how music 
has been transformed in Western civilization throughout the centuries 
from Middle Ages to the present day.
  The project is still under construction and I intend to develop more content and thus
apply what I have learned on a daily basis during my personal studies and attending the weekly 
meetings at Code Louisville where I am pleased to be mentored by skillful local professionals.

## Custom CSS Classes

The class(es) I created are:

`.title`,`.invitation` and `.smallcaps`

1. Class name `.title` can be found in the **main_styles.css, line 37**

This class targets all the titles in the pages presented in this project and set styles to them. 
For example, it sets `font-size: 1.15rem` and `line-height: 1.2` in small devices, `font-size: 1.999` and `line-height: 1.2` for medium devices _(line 150)_ and `font-size: 2.827rem` and `line-height: 1.07` for large devices such as Desktops, TVs and other sort of devices _(line 190)_.

2. Class name `.invitation` can be found in the **index.css, line 44**

This class targets the link in the *index.html* and set some styles to it. 
For example, it sets `font-family: 'Cinzel', serif`, `color: #333` and `font-weight: normal` in normal state. 
The pseudo-class `:hover` was used to change the color of the link to `color: #000`, set `font-weight: 500` and add a border to the bottom of the link by setting `border-bottom: 1px solid #F79E2A` when the user interacts with the link using by hovering over the link with a pointing device _(line 56)_.

3. Class name `.smallcaps` can be found in the **main_styles.css, line 165**

This class targets the first letters of each first paragraph in each section and set its `font-family` to `'Alegreya SC'`. 
The fonts `'Alegreya'` and `'Arial'`  were added as a fallback, in case the users of _The Music History Project_ do not have the smallcaps version of `Alegreya` installed in their computer.
Also, note that the smallcaps were added to the version for Desktops and medium devices only, being "deactived" for small devices. 

## Custom JavaScript Functions

JavaScript is still a challenging language for me. In this project, I tried to implement it in a simple contact form that retrieves the users name, their email and also gives the user the chance to provide some comment about the site.

```
$("#name").on( "blur", function() {
    console.log($(this).val());
  });
  
```

The NAME field has an id of `#name` in the `contact.html` file _(line 35)_.
In the `contact.js` file, this field was selected using the jquery selector `$('#name')`.
A `.on()` method was used to attach an event handler to the element.
This method has two arguments:
1. `.blur` that makes the data provided by the user in the field to lose focus;
2. an anonymous function `function()` that logs to the console the data provided by the user and captures it using the `.val()` method.



Once captured, the name and email were stored in variables named `name` and `email` respectively. Check it out:

```
var name = $('#name').val();
var email = $('#email').val();

```

A serie of conditional statements were introduced to display a button informing the user that the name or email was not provided. In other words, in case the `name` and `email` variables were empty strings.
Also, the `.preventDefault()` method was added to prevent the user from submitting the form. Check it out:

```
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
```
If all the fiels are provided, the user is able to submit the form by clicking the SUBMIT button.
A CONFIRMATION button showing a "Thank You" not + the `name` provided by the user is displayed.

```

else {
    $('#userName').text(name.toUpperCase());
    $('#confirmation').slideDown(1000);
    $('#confirmation').delay(15000);
    $('#confirmation').slideUp();
    }
    
    
```

Thank you for taking the time to reviewing my project!

Brytner
