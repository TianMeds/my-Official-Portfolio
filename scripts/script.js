let intro = document.querySelector('.intro');
let logo1 = document.querySelector('.logo-header');
let logo1Span = document.querySelectorAll('.logo1');

window.addEventListener('DOMContentLoaded', ()=>{

    setTimeout(()=>{

        logo1Span.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            },(idx + 1) * 400)
        });

        setTimeout (()=>{
            logo1Span.forEach((span, idx)=>{
                
                setTimeout (()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50)
            })
        },2000);

        setTimeout(()=>{
            intro.style.top = '-100vh';
        },2300)
            
    })
})


var t1 = new TimelineMax({ paused: true });

t1.to(".nav-container", 1, {
    left: 0,
    ease: Expo.easeInOut,
});

t1.staggerFrom(
    ".menu > div",
    0.8,
    { y: 100, opacity: 0, ease: Expo.easeOut },
    "0.1",
    "-=0.4"
);

t1.staggerFrom(
    ".socials",
    0.8,
    { y: 100, opacity: 0, ease: Expo.easeOut },
    "0.4",
    "-=0.6"
);

t1.reverse();
$(document).on("click", ".menu-open", function () {
    t1.reversed(!t1.reversed());
});
$(document).on("click", ".menu-close", function () {
    t1.reversed(!t1.reversed());
});


    var cursor = $(".cursor"),
                follower = $(".cursor-follower");

            var posX = 0,
                posY = 0,
                mouseX = 0,
                mouseY = 0;

            TweenMax.to({}, 0.016, {
                repeat: -1,
                onRepeat: function() {
                    posX += (mouseX - posX) / 9;
                    posY += (mouseY - posY) / 9;

                    TweenMax.set(follower, {
                        css: {
                            left: posX - 20,
                            top: posY - 20
                        }
                    });

                    TweenMax.set(cursor, {
                        css: {
                            left: mouseX,
                            top: mouseY
                        }
                    });
                }
            });

            

            $(document).on("mousemove", function(e) {
                mouseX = e.pageX;
                mouseY = e.pageY;
            });

            $(".row .project1").on("mouseenter", function() {
                cursor.addClass("active");
                follower.addClass("active");
            });

            $(".row .project1").on("mouseleave", function() {
                cursor.removeClass("active");
                follower.removeClass("active");
            });

            $(".row .project2").on("mouseenter", function() {
                cursor.addClass("active");
                follower.addClass("active");
            });

            $(".row .project2").on("mouseleave", function() {
                cursor.removeClass("active");
                follower.removeClass("active");
            });
            $(".row .project3").on("mouseenter", function() {
                cursor.addClass("active");
                follower.addClass("active");
            });

            $(".row .project3").on("mouseleave", function() {
                cursor.removeClass("active");
                follower.removeClass("active");
            });
            $(".row .project4").on("mouseenter", function() {
                cursor.addClass("active");
                follower.addClass("active");
            });

            $(".row .project4").on("mouseleave", function() {
                cursor.removeClass("active");
                follower.removeClass("active");
            });
            $(".row .project5").on("mouseenter", function() {
                cursor.addClass("active");
                follower.addClass("active");
            });

            $(".row .project5").on("mouseleave", function() {
                cursor.removeClass("active");
                follower.removeClass("active");
            });
            $(".row .project6").on("mouseenter", function() {
                cursor.addClass("active");
                follower.addClass("active");
            });

            $(".row .project6").on("mouseleave", function() {
                cursor.removeClass("active");
                follower.removeClass("active");
            });
            $(".row .project7").on("mouseenter", function() {
                cursor.addClass("active");
                follower.addClass("active");
            });

            $(".row .project7").on("mouseleave", function() {
                cursor.removeClass("active");
                follower.removeClass("active");
            });
            $(".row .project8").on("mouseenter", function() {
                cursor.addClass("active");
                follower.addClass("active");
            });

            $(".row .project8").on("mouseleave", function() {
                cursor.removeClass("active");
                follower.removeClass("active");
            });

            $(".row .project9").on("mouseenter", function() {
                cursor.addClass("active");
                follower.addClass("active");
            });

            $(".row .project9").on("mouseleave", function() {
                cursor.removeClass("active");
                follower.removeClass("active");
            });

            $(".row .project10").on("mouseenter", function() {
                cursor.addClass("active");
                follower.addClass("active");
            });

            $(".row .project10").on("mouseleave", function() {
                cursor.removeClass("active");
                follower.removeClass("active");
            });

            $(".row .project11").on("mouseenter", function() {
                cursor.addClass("active");
                follower.addClass("active");
            });

            $(".row .project11").on("mouseleave", function() {
                cursor.removeClass("active");
                follower.removeClass("active");
            });

            $(".row .project12").on("mouseenter", function() {
                cursor.addClass("active");
                follower.addClass("active");
            });

            $(".row .project12").on("mouseleave", function() {
                cursor.removeClass("active");
                follower.removeClass("active");
            });
            $(".row .project13").on("mouseenter", function() {
                cursor.addClass("active");
                follower.addClass("active");
            });

            $(".row .project13").on("mouseleave", function() {
                cursor.removeClass("active");
                follower.removeClass("active");
            });
    

            var cursors = $(".cursors"),
                        followers = $(".cursor-followers");

                var posX = 0,
                    posY = 0,
                    mouseX = 0,
                    mouseY = 0;

                TweenMax.to({}, 0.016, {
                    repeat: -1,
                    onRepeat: function() {
                        posX += (mouseX - posX) / 9;
                        posY += (mouseY - posY) / 9;

                        TweenMax.set(followers, {
                            css: {
                                left: posX - 20,
                                top: posY - 20
                            }
                        });

                        TweenMax.set(cursors, {
                            css: {
                                left: mouseX,
                                top: mouseY
                            }
                        });
                    }
                });

                $(document).on("mousemove", function(e) {
                    mouseX = e.pageX;
                    mouseY = e.pageY;
                });

            $(".award-body .cert").on("mouseenter", function() {
                cursors.addClass("active");
                followers.addClass("active");
            });

            $(".award-body .cert").on("mouseleave", function() {
                cursors.removeClass("active");
                followers.removeClass("active");
            });

            let image = document.querySelector('.image_div');
            image.addEventListener('wheel',(evnt) => {
                evnt.preventDefault();
                image.scrollLeft += evnt.deltaY;
            })
    
            
            
      new WOW().init();

    
