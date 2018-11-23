$(document).ready(function() {
  $(".dropdown-toggle").dropdown();

  // scroll ke ---

  var scrollKe = function(trigger, target) {
    $(trigger).click(function(e) {
      e.preventDefault();
      window.scrollTo({
        top:
          document.querySelectorAll(target)[0].offsetTop -
          document.querySelectorAll("nav.row")[0].offsetHeight,
        behavior: "smooth"
      });
    });
  };

  $(".list-tab a").on("click", function(e) {
    e.preventDefault();
    $(this).tab("show");
  });

  scrollKe(".tgt-gallery", ".haikyuu-gallery");
  scrollKe(".tgt-video", ".video-haikyuu");
  scrollKe(".tgt-contact", ".contact-us");
  scrollKe(".tgt-home", ".home");
  scrollKe(".tgt-team", ".team");
  scrollKe(".tgt-member", ".member");
  scrollKe(".tgt-squad", ".bagian-card");
  scrollKe(".tgt-aboutme", ".about-me");
  // mansory

  var $grid = $(".grid").masonry({
    // options
    itemSelector: ".grid-item",
    percentPosition: true,
    columnWidth: ".grid-sizer",
    gutter: 10
  });

  $(".mereng-mereng ")
    .imagesLoaded()
    .progress(function(instance, image) {
      console.log("DONE  - all images have been successfully loaded");
    });

  $(".grid")
    .imagesLoaded()
    .progress(function(instance, image) {
      $(image.img)
        .show()
        .addClass(" animated bounceIn");
      $grid.masonry("layout");
    });

  var showHide = function(target, trigger) {
    var counterKarasuno = 1;
    $(trigger).on("click", function() {
      var that = $(this);

      if (counterKarasuno % 2 != 0) {
        that.html("Show");
        $(target)
          .removeClass("bounceIn bounceOut")
          .addClass("bounceOut")
          .toggle("fast");
      } else {
        that.html("Hide");
        $(target)
          .removeClass("bounceOut bounceIn")
          .addClass("bounceIn")
          .toggle();
      }

      counterKarasuno++;
    });
  };

  showHide("#karasuno-image", "#karasuno-show");
  showHide("#aoba-image", "#aoba-show");
  // Table
});
