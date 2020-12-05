
    $(document).ready(function(){
        $(window).scroll(function(){
            if($(window).scrollTop() > $("#about-me").offset().top){
              $('.navbar').addClass('navbar-scroll');   
            }else{
                $('.navbar').removeClass('navbar-scroll');
            }
        });
    });


    $(window).scroll(function(){
        var aboutMe = $("#aboutText").offset().top;
        if($(window).scrollTop() > aboutMe){
            $(".navbar").addClass('fixed');
            $(".nav-link").css("color","#212121");
        }else{
            $('.navbar').removeClass('fixed');
            $(".nav-link").css("color","white");
        }
    });

    function smoothScroll(target, duration) {
        var target = document.querySelector(target);
        var targetPos = target.getBoundingClientRect().top + window.pageYOffset;
        var stratingPos = window.pageYOffset;
        var dis = targetPos - stratingPos;
        var stratTime = null;
      
        function theScroll(currentTime) {
          if (stratTime === null) {
            stratTime = currentTime;
          }
          var time = currentTime - stratTime;
          var run = ease(time, stratingPos, dis, duration);
          window.scrollTo(0, run);
          if (time < duration) {
            requestAnimationFrame(theScroll);
          }
      
        }
      
        function ease(t, b, c, d) {
          t /= d / 2;
          if (t < 1) return c / 2 * t * t + b;
          t--;
          return -c / 2 * (t * (t - 2) - 1) + b;
        }
      
        requestAnimationFrame(theScroll);
      }


      var arrow = document.querySelector(".arrow");

      arrow.addEventListener('click', function () {
        smoothScroll("#about-me", 1000);
      });