// Adds scroll animation to LMS Content Development Page
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
            // engage
            tl1.to('#engage #girl', 2, {
                y: 14


            }, 1)


            // educationallearning
            tl2.to('#educationallearning #cap', 2, {

                y: 12

            }, 1).to('#educationallearning #tassel', 2, {
                y: 12


            }, 1).to('#educationallearning #tassel', 1, {
                transformOrigin: "50% 0%",
                rotation: 8,
                repeat: 3,
                yoyo: true

            }, 2).to('#educationallearning #tassel', 1, {
                transformOrigin: "50% 0%",
                rotation: -8,
                repeat: 3,
                yoyo: true

            }, 2)


            // contentlife
            tl3.to('#contentlife #wolf', .3, {
                autoAlpha: 1

            }, 1).to('#contentlife #dolphin', 2, {
                autoAlpha: 1
            }, 2).to('#contentlife #wolf', 2, {
                autoAlpha: 0
            }, 2)

            // Create the Scene and trigger when visible
            //
            var scene1 = new ScrollMagic.Scene({
                    triggerElement: '.card-container svg#engage',
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
                    triggerElement: '.card-container  svg#educationallearning',
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
                    triggerElement: '.card-container svg#contentlife',
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
