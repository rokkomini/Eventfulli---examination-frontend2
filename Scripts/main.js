$(function () {
  //Modal open and close

  $(".open-modal").click(function () {
    $(".modal-div").css("display", "block");
  });

  $(".close-modal").click(function () {
    $(".modal-div").css("display", "none");
  });

  //Hover on detail image
  $(".detail-image").mouseenter(function () {
    $(this).animate({ width: "+=10px" });
  });

  $(".detail-image").mouseleave(function () {
    $(this).animate({ width: "-=10px" });
  });

  //Form submission
  $(".hiddenSubmitMessage").hide();

  $(".submit-button").click(function () {
    $(".form-container, .secondary-page-header").fadeOut();
    {
      $(".hiddenSubmitMessage").show("slow");
    }
  });

/*   $(window).scroll(function(){
    $('.navbar').addClass('sticky')
  }) */
});
