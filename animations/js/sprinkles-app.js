// Adds scroll animation to SVG sprinkles on any page.

(function($) {
    "use strict";
    $(window).load(function() {
        var count = 0;
        var svgClass = "replaced-svg";
        // Check to see if class has been added to svgs after embed complete
        var pathCheck = window.setInterval(function() {
                var svg = document.getElementsByClassName(svgClass);
                if (svg.length > 0) {
                    window.clearInterval(pathCheck);
                    runAnimation();
                } else {
                    count = count + 100;
                    console.log(count + "Not Found");
                    if (count > 3000) {
                        console.log(svgClass + " was not found on this page.");
                        window.clearInterval(pathCheck);
                        return;
                    }
                }
            },
            100);

        function runAnimation() {

            var sd1 = '#sprinkles-desktop .sprinkle-1';
            var sd2 = '#sprinkles-desktop .sprinkle-2';
            var sd3 = '#sprinkles-desktop .sprinkle-3';
            var st1 = '#sprinkles-tablet .sprinkle-1';
            var st2 = '#sprinkles-tablet .sprinkle-2';
            var st3 = '#sprinkles-tablet .sprinkle-3';
            var sm1 = '#sprinkles-mobile .msprinkle-1';
            var sm2 = '#sprinkles-mobile .msprinkle-2';
            var sm3 = '#sprinkles-mobile .msprinkle-3';

            // Init ScrollMagic Controller
            var controller = new ScrollMagic.Controller();
            var tl1 = new TimelineMax({
                repeat: -1
            });
            var tl2 = new TimelineMax({
                repeat: -1
            });
            var tl3 = new TimelineMax({
                repeat: -1
            });
            // Create Animation
            tl1.to(sd1, 10, {
                    rotation: 360,
                    transformOrigin: "50% 40%",
                    ease: Linear.easeNone
                })
                .to(sd2, 10, {
                    rotation: -360,
                    transformOrigin: "30% 30%",
                    ease: Linear.easeNone
                }, 1)
                .to(sd3, 10, {
                    rotation: 360,
                    transformOrigin: "40% 40%",
                    ease: Linear.easeNone
                }, 2);

            tl2.to(st1, 10, {
                    rotation: 360,
                    transformOrigin: "50% 40%",
                    ease: Linear.easeNone
                })
                .to(st2, 10, {
                    rotation: -360,
                    transformOrigin: "30% 30%",
                    ease: Linear.easeNone
                }, 1)
                .to(st3, 10, {
                    rotation: 360,
                    transformOrigin: "40% 40%",
                    ease: Linear.easeNone
                }, 2);
            tl3.to(sm1, 10, {
                    rotation: 360,
                    transformOrigin: "50% 40%",
                    ease: Linear.easeNone
                })
                .to(sm2, 10, {
                    rotation: -360,
                    transformOrigin: "30% 30%",
                    ease: Linear.easeNone
                }, 1)
                .to(sm3, 10, {
                    rotation: 360,
                    transformOrigin: "40% 40%",
                    ease: Linear.easeNone
                }, 2);


            // Create the Scene and trigger when visible
            var scene1 = new ScrollMagic.Scene({
                    triggerElement: '#scene #sprinkles-desktop',
                    triggerHook: .5,
                    // offset: 0
                    duration: '70%'
                    // offset: '100%'
                })

                .setTween(tl1)

                /* DEBUG this is for debugging only - comment out on production */
                // add indicators (requires plugin)
                // .addIndicators({
                //     name: "loop"
                // })
                /* End Debug -----------------------------------------------------------------*/

                .addTo(controller);


            // Create the Scene and trigger when visible
            var scene2 = new ScrollMagic.Scene({
                    triggerElement: '#scene #sprinkles-tablet',
                    triggerHook: .5,
                    // offset: 0
                    duration: '70%'
                    // offset: '100%'
                })

                .setTween(tl2)

                /* DEBUG this is for debugging only - comment out on production */
                // add indicators (requires plugin)
                // .addIndicators({
                //     name: "loop"
                // })
                /* End Debug -----------------------------------------------------------------*/

                .addTo(controller); // Create the Scene and trigger when visible
            var scene3 = new ScrollMagic.Scene({
                    triggerElement: '#scene #sprinkles-mobile',
                    triggerHook: .5,
                    // offset: 0
                    duration: '70%'
                    // offset: '100%'
                })

                .setTween(tl3)

                /* DEBUG this is for debugging only - comment out on production */
                // add indicators (requires plugin)
                // .addIndicators({
                //     name: "loop"
                // })
                /* End Debug -----------------------------------------------------------------*/

                .addTo(controller);
        }
    });
})(jQuery);
