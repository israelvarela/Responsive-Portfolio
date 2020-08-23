// $('.carousel').carousel('cycle')({
//     interval: 2000
//   })

$('#myCarousel').on('slid.bs.carousel', function (e) {
    $('#myCarousel').carousel('2') // Will slide to the slide 2 as soon as the transition to slide 1 is finished
  })