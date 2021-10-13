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
  let timer = setInterval(nextSlider, 4500)
  $("#headerssliderbutton a, #headerbtnWrap a").on('click', function(e) {
    clearInterval(timer)
    timer = setInterval(nextSlider, 4500)
    e.preventDefault();
  })
  $(".leftbtn").on('click', function() {
    headerclassname = $("#headersliderlist li:last").attr('class')
    headernum = headerclassname.substr(10, 1) - 1;
    $("#headerbtnWrap a").removeClass('active')
    $("#headerbtnWrap a:eq("+ headernum +")").addClass('active')
    prevSlider()
  })
  $(".rightbtn").on('click', function() {
    headerclassname = $("#headersliderlist li:first").attr("class")
    headernum = headerclassname.substr(10, 1)
    if (headernum == 3) headernum = 0;
    $("#headerbtnWrap a").removeClass('active')
    $("#headerbtnWrap a:eq("+ headernum +")").addClass('active')
    nextSlider()
  })
$("#headersliderbutton a").on('click', function() {
    $("#headersliderbutton a").removeClass("active")
    $(this).addClass("active")
    let headerclassnum = $(this).index() + 1;
    let headerpos = $("#headersliderlist .headerslider" + headerclassnum).position().left;
  
    let headernum = headerclassnum;
    $("#headersliderlist").animate({ marginLeft: -headerpos }, function() {
      for ( let i=1; i<$("#headersliderlist li").length; i++) {
        headernum++;
        if ( headernum == $("#headersliderlist li").length+1 ) headernum = 1;
        $("#headersliderlist").append($(".headerslider"+headernum))
      }
      $(this).css({ margin: 0 })
    })
  })
/*섹션 1 슬라이더*/
let newproductclassname, newproductnum;
  function section1prevSlider() {
    $("#newproductlist:not(:animated)").prepend($("#newproductlist li:last"))
                                   .css({ marginLeft: "-25%" })
                                   .animate({ marginLeft: 0 })
  }
  function section1nextSlider() {
      $("#newproductlist:not(:animated)").animate({ marginLeft: "-25%" }, function() {
        $(this).append($(">li:first", this)).css({ marginLeft: 0 })
      })
    }
    let section1timer = setInterval(section1nextSlider, 6000)
    $("#newproductbtn a").on('click', function(e) {
      clearInterval(section1timer)
      section1timer = setInterval(section1nextSlider, 6000)
      e.preventDefault();
    })
    $(".section1leftbtn").on('click', function() {
      section1prevSlider()
    })
    $(".section1rightbtn").on('click', function() {
      section1nextSlider()
    })
/*섹션 2 슬라이더 */
$(".section2leftbtn").on('click', function() {
  $("#top10list:not(:animated)").animate({ scrollLeft: "-="+306 })
  e.preventDefault();
})
$(".section2rightbtn").on('click', function() {
  $('#top10list:not(:animated)').animate({ scrollLeft: "+="+306 })
  e.preventDefault();
})
/*섹션 3 슬라이더 */
  function section3prevSlider() {
    $("#hotdeallist:not(:animated)").prepend($("#hotdeallist li:last"))
                                   .css({ marginLeft: "-25%" })
                                   .animate({ marginLeft: 0 })
  }
  function section3nextSlider() {
      $("#hotdeallist:not(:animated)").animate({ marginLeft: "-25%" }, function() {
        $(this).append($(">li:first", this)).css({ marginLeft: 0 })
      })
    }
    let section3timer = setInterval(section3nextSlider, 6000)
    $("#hotdealproductbtn a").on('click', function(e) {
      clearInterval(section3timer)
      section3timer = setInterval(section3nextSlider, 6000)
      e.preventDefault();
    })
    $(".section3leftbtn").on('click', function() {
      section3prevSlider()
    })
    $(".section3rightbtn").on('click', function() {
      section3nextSlider()
    })
    $('.top10menu > a:not(:animated) , .newmenu > a:not(:animated) , .hotdealmenu > a:not(:animated)').on('mouseenter',function() {
      $(this).children('img:not(:animated)').animate({width : "300px",height : "300px"})
    })
    $('.top10menu > a:not(:animated) , .newmenu > a:not(:animated) , .hotdealmenu > a:not(:animated)').on('mouseleave',function() {
      $(this).children('img').animate({width : "250px",height : "250px"})
    })

    $(window).on('scroll', function(){
			let bannerpos = $(window).scrollTop();
			console.log(bannerpos)
			//$('#banner').css({ top : pos+20})
			$('#bannerWrap').stop().css({top : bannerpos + 50})

		})
    let bannerstate = 1;
    $('#bannermenu1 > a').on('click',function(e){
      if(bannerstate ==1){
        $('#bannerWrap:not(:animated)').animate({width : "330px" ,height : "900px" ,marginTop : "0px"})
        $('#bannermenu1 > ul').css({ marginTop:"300px"})
        bannerstate = 0;
        e.preventDefault();
      }else{
        $('#bannerWrap:not(:animated)').animate({width : "70px" ,height : "330px"})
        bannerstate = 1;
        e.preventDefault();
      }
    })