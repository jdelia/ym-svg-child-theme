// Adds scroll animation to LMS Overview Page
(function($) {
    'use strict'
    $(window).load(function() {
        var count = 0
        var svgClass = 'replaced-svg'
        // Check to see if class has been added to svgs after embed complete
        var pathCheck = window.setInterval(function() {
                var svg = document.getElementsByClassName(svgClass)
                if (svg.length > 0) {
                    window.clearInterval(pathCheck)
                    runAnimation()
                } else {
                    count = count + 100
                    console.log(count + 'Not Found')
                    if (count > 3000) {
                        console.log(svgClass + ' was not found on this page.')
                        window.clearInterval(pathCheck)
                        return
                    }
                }
            },
            100)

        function runAnimation() {
            // var iconContainer = $('.svg-animated-icon-container')
            // var iconContainerLink = $('.svg-animated-icon-container figure > a')

            // Init ScrollMagic Controller
            var controller = new ScrollMagic.Controller()

            var tl1 = new TimelineMax({
                repeat: 0,
                smoothChildTiming: true,
                yoyo: true,
                ease: Power4.easeInOut

            })
            var tl2 = new TimelineMax({
                repeat: 0,
                smoothChildTiming: true,
                yoyo: true,
                ease: Power4.easeInOut

            })
            var tl3 = new TimelineMax({
                repeat: 0,
                smoothChildTiming: true,
                yoyo: true,
                ease: Power4.easeInOut

            })
            // Create Animations
            // high fives
            tl1.fromTo('#highfives #left-hand', 2, {
                    rotation: 0,
                    transformOrigin: "100% 100%"

                }, {
                    rotation: 20,
                    y: 10,
                    transformOrigin: "100% 100%"

                }, 1).fromTo('#highfives #right-hand', 2, {
                    rotation: 0,
                    transformOrigin: "100% 100%"

                }, {
                    rotation: -20,
                    y: -10,
                    transformOrigin: "100% 100%"

                }, 1)
                .to('#highfives #noise', 0, {
                    autoAlpha: 1

                }, 2)


            // rocket
            tl2.to('#rocket #aircraft', .1, {
                    rotation: 3,
                    transformOrigin: '50% 50%',
                    ease: Quad.easeInOut
                }, 1)
                .to('#rocket #aircraft', .1, {
                    repeat: 2,
                    rotation: -3,
                    transformOrigin: '50% 50%',
                    yoyo: true,
                    delay: .1,
                    ease: Quad.easeInOut
                }, 1)
                .to('#rocket #aircraft', .1, {
                    rotation: 0,
                    transformOrigin: '50% 50%',
                    delay: .1 * 4
                }, 1)
                .to('#rocket #aircraft', 3.8, {
                    x: 12,
                    y: -12,
                    delay: .5
                }, 2)


                .to('#rocket #fire', 3.8, {
                    x: 12,
                    y: -12,
                    autoAlpha: 1

                }, 2)



            // lightning
            tl3.to('#lightning #blast-small', 1, {
                autoAlpha: 0

            }, 1).to('#lightning #blast-big', 1, {
                autoAlpha: 1
            }, 2)

            // Create the Scene and trigger when visible
            //
            var scene1 = new ScrollMagic.Scene({
                    triggerElement: '.card-container svg#highfives',
                    triggerHook: .4,
                    offset: 0,
                    duration: '20%'
                })
                .setTween(tl1)

                /* DEBUG this is for debugging only - comment out on production */
                .addIndicators({
                    name: 'loop'
                }) // add indicators (requires plugin)
                /* End Debug -----------------------------------------------------------------*/
                .addTo(controller)

            var scene2 = new ScrollMagic.Scene({
                    triggerElement: '.card-container  svg#rocket',
                    triggerHook: .4,
                    offset: 0,
                    duration: '20%'
                })
                .setTween(tl2)

                /* DEBUG this is for debugging only - comment out on production */
                .addIndicators({
                    name: 'loop'
                }) // add indicators (requires plugin)
                /* End Debug -----------------------------------------------------------------*/
                .addTo(controller)

            var scene3 = new ScrollMagic.Scene({
                    triggerElement: '.card-container svg#lightning',
                    triggerHook: .4,
                    offset: 0,
                    duration: '20%'
                })
                .setTween(tl3)

                /* DEBUG this is for debugging only - comment out on production */
                .addIndicators({
                    name: 'loop'
                }) // add indicators (requires plugin)
                /* End Debug -----------------------------------------------------------------*/
                .addTo(controller)
        }

    })
})(jQuery)
