$(document).on("click", ".header_languages_flags_links_icon_title", function() {
    var src = $(this).data("src");
    console.log(src);
    $(".header_languages_flag_link_icon img").attr("src", src);
    $(".header_languages_flags_links_hidden_popup").removeClass("open");
    $("body").removeClass("hidden_body");
   
});

$(document).on("click", ".header_languages_flags_links_icon_wrapper", function (){
      $(".header_languages_flags_links_hidden_popup").addClass("open");
      $("body").addClass("hidden_body");
})


$(document).on("click", ".hamburger_menu_icon", function() {
    $(".mobile_version_popup").addClass("open");
    $(this).hide();
    $(".hamburger_menu_close_icon").show();
    $("body").addClass("hidden_body");
})


$(document).on("click", ".hamburger_menu_close_icon", function(){
    $(".mobile_version_popup").removeClass("open");
    $(this).hide();
    $(".hamburger_menu_icon").show();
    $("body").removeClass("hidden_body");
})

$(document).on("click", ".questions_answers_item_child_icon_title_box", function(){
      $(this).closest(".questions_answers_item_child").toggleClass("open");
})






  $('.advertisment_second_item_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true
  });




  $(document).on("click", ".advertisment_first_item_become_partner_btn", function(){
    $(".become_partner_popup").addClass("open");
    $("body").addClass("hidden_body");
  })


  $(document).on("click", ".become_partner_popup_close", function(){
    $(".become_partner_popup").removeClass("open");
    $("body").removeClass("hidden_body");
  })

  $(document).on("click", ".become_partner_popup_form_create_account_btn", function(){
    $(".become_partner_popup").removeClass("open");
    $(".become_partner_almost_done_popup").addClass("open");
    $("body").addClass("hidden_body");
  })


  $(document).on("click", ".become_partner_almost_done_popup_close", function(){
    $(".become_partner_almost_done_popup").removeClass("open");
    $("body").removeClass("hidden_body");
  })

