// Adds scroll animation to Mobile event app Page
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
            var tl4 = new TimelineMax({
                repeat: 0,
                smoothChildTiming: true,
                yoyo: true,
                ease: Power4.easeInOut

            })
            // Create Animations
            // clock
            tl1.to('#clock #big-hand', 2, {
                rotation: 507,
                transformOrigin: "10% 0%",
            }, 1).to('#clock #little-hand', 2, {
                rotation: 85,
                transformOrigin: "100% 90%",
            }, 1)


            // hands
            tl2.to('#hands #lower-girl', 4, {

                x: 11

            }, 1).to('#hands #upper-girl', 4, {

                x: -10

            }, 1).to('#hands #right-guy', 4, {

                y: -10

            }, 1).to('#hands #left-guy', 4, {

                y: 11

            }, 1)


            // plattercoins
            tl3.to('#plattercoins #cover', 2, {
                rotation: -35,
                transformOrigin: "0% 50%",
                x: -10,
                y: 4

            }, 1)


            // sneaker
            tl4.to('#sneaker #shoe', 4, {
                x: 30

            }, 1).to('#sneaker #stars, #sneaker #dashes', 4, {
                autoAlpha: 1

            }, 1)



            // Create the Scene and trigger when visible
            //
            var scene1 = new ScrollMagic.Scene({
                    triggerElement: '.card-container svg#clock',
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
                    triggerElement: '.card-container  svg#hands',
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
                    triggerElement: '.card-container svg#plattercoins',
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


            var scene4 = new ScrollMagic.Scene({
                    triggerElement: '.card-container svg#sneaker',
                    triggerHook: .4,
                    offset: 0,
                    duration: '20%'
                })
                .setTween(tl4)

                /* DEBUG this is for debugging only - comment out on production */
                .addIndicators({
                    name: 'loop'
                }) // add indicators (requires plugin)
                /* End Debug -----------------------------------------------------------------*/
                .addTo(controller)
        }

    })
})(jQuery)
