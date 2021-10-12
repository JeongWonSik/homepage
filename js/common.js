$(window).on('scroll', function() {
    $('section').each(function(){
      if ( $(window).scrollTop() > $(this).position().top - 600) {
        $(this).not(":animated").animate({ opacity: 1 }, 500)
      }
      else  {
        $(this).not(":animated").animate({ opacity: 0 }, 500)
      }
    })
    if ( $(window).scrollTop() >= $("#headersection").position().top+200) {
      $("#headersection").css({ top: -130 })
               .animate({ top: 0 },100)
               .addClass('nav2Wrap')
    } else if ( $(window).scrollTop() <= $("#headersection").position().top+200 ) {
        $("#headersection").removeClass('nav2Wrap')
    }
})
/*header background*/
let headerclassname, headernum;
function prevSlider() {
  $("#headersliderlist:not(:animated)").prepend($("#headersliderlist li:last"))
                                 .css({ marginLeft: "-100%" })
                                 .animate({ marginLeft: 0 })
}
function nextSlider() {
    $("#headersliderlist:not(:animated)").animate({ marginLeft: "-100%" }, function() {
      $(this).append($(">li:first", this)).css({ marginLeft: 0 })
    })
  }
  let timer = setInterval(nextSlider, 3000)
  $("#posNum a, #btnNum a").on('click', function(e) {
    clearInterval(timer)
    timer = setInterval(nextSlider, 3000)
    e.preventDefault();
  })
$("#headersliderbutton a").on('click', function() {
    $("#headersliderbutton a").removeClass("active")
    $(this).addClass("active")
    let headerclassnum = $(this).index() + 1;
    let headerpos = $("#headersliderlist .headerslider" + headerclassnum).position().left;
  
    let headeraddnum = headerclassnum;
    $("#headersliderlist").animate({ marginLeft: -headerpos }, function() {
      for ( let i=1; i<$("#headersliderlist li").length; i++) {
        headeraddnum++;
        if ( headeraddnum == $("#headersliderlist li").length+1 ) headeraddnum = 1;
        $("#headersliderlist").append($(".headerslider"+headeraddnum))
      }
      $(this).css({ margin: 0 })
    })
  })
  