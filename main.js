var mySwiper = new Swiper(".swiper-container", {
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
var videos = [
  "https://www.youtube.com/embed/ZMLoJEgI2mY",
  "https://www.youtube.com/embed/O7eCTlYx2qw",
  "https://www.youtube.com/embed/Lx7HfeL50vI",
  "https://www.youtube.com/embed/5dtN0ApAGZs",
];
$(document).ready(function () {
  var pos1;
  $(".video").click(function () {
    $("#my-modal").css("display", "block");
    pos1 = $(this).attr("startPosition");
    console.log(pos1);
    var src = videos[parseInt(pos1)];
    console.log(src);
    $("#video1").attr("src", src);
    var currentIndex = parseInt(pos1);
    $("#next").on("click", function () {
      if (currentIndex != videos.length - 1) {
        currentIndex = currentIndex + 1;
        console.log(currentIndex);
        var t = videos[currentIndex];
        console.log(t);
        $("#video1").attr("src", t);
      }
    });
    $("#previous").on("click", function () {
      if (currentIndex != 0) {
        currentIndex = currentIndex - 1;
        console.log(currentIndex);
        var t = videos[currentIndex];
        console.log(t);
        $("#video1").attr("src", t);
      }
    });
    $(".close").on("click", function () {
      pos = 0;
      console.log(pos);
      $("#video1").attr("src", "");
      $("#my-modal").css("display", "none");
    });
  });
});
