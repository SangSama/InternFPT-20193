$(document).ready(function () {
  $(".user").click(function () {
    $(".account").toggle();
  });
  $("#form").validate({
    rules: {
      title: {
        required: true,
        minlength: 10,
        maxlength: 200,
      },
      brief: {
        required: true,
        minlength: 30,
        maxlength: 150,
      },
      content: {
        required: true,
        minlength: 50,
        maxlength: 1000,
      },
      userName: {
        required: true,
        minlength: 3,
        maxlength: 30,
      },
      firstName: {
        required: true,
        minlength: 3,
        maxlength: 30,
      },
      lastName: {
        required: true,
        minlength: 3,
        maxlength: 30,
      },
      phone: {
        required: true,
        minlength: 9,
        maxlength: 13,
      },
      description: {
        required: true,
        maxlength: 200,
      },
      email: {
        required: true,
        minlength: 5,
      },
      password: {
        required: true,
        minlength: 8,
        maxlength: 30,
      },
      repassword: {
        required: true,
        minlength: 8,
        maxlength: 30,
      },
    },

    messages: {
      userName: {
        required: "Please provide a userName",
        minlength: "Your userName must be at least 3 characters long",
        maxlength: "Your userName must be 30 characters long",
      },
      password: {
        required: "Please provide a password",
        minlength: "Your password must be at least 8 characters long",
        maxlength: "Your password must be 30 characters long",
      },
      repassword: {
        required: "Please provide a password",
        minlength: "Your password must be at least 8 characters long",
        maxlength: "Your password must be 30 characters long",
      },
      email: {
        required: "Please enter a valid email address",
        minlength: "Your email must be at least 5 characters long",
      },
      firstName: {
        required: "Please provide a firstName",
        minlength: "Your firstName must be at least 3 characters long",
        maxlength: "Your firstName must be 30 characters long",
      },
      lastName: {
        required: "Please provide a lastName",
        minlength: "Your lastName must be at least 3 characters long",
        maxlength: "Your lastName must be 30 characters long",
      },
      phone: {
        required: "Please provide a phone",
        minlength: "Your phone must be at least 9 characters long",
        maxlength: "Your phone must be 13 characters long",
      },
      description: {
        required: "Please provide a description",
        maxlength: "Your description must be 200 characters long",
      },
      title: {
        required: "Please provide a title",
        minlength: "Your title must be at least 10 characters long",
        maxlength: "Your title must be 200 characters long",
      },
      brief: {
        required: "Please provide a brief",
        minlength: "Your brief must be at least 30 characters long",
        maxlength: "Your brief must be 150 characters long",
      },
      content: {
        required: "Please provide a content",
        minlength: "Your content must be at least 50 characters long",
        maxlength: "Your content must be 1000 characters long",
      },
    },

    submitHandler: function (form) {
      form.submit();
    },
  });
});
