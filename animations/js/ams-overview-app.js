// Adds scroll animation to AMS Overview Page
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
            // botany
            tl1.to('#botany #stem', 2, {

                    y: -6

                }, 1).to('#botany #right_leaf', 2, {
                    y: -6


                }, 1).to('#botany #left-leaf', 2, {
                    y: -6

                }, 1)


                .to('#botany #right_leaf', 2, {
                    scale: 1.4,
                    x: 0
                }, 1).to('#botany #left-leaf', 2, {
                    scale: 1.4,
                    x: -5
                }, 1)


                .to('#botany #lower-bubble', 2, {
                    x: 0,
                    y: -12,
                    scale: .8

                }, 1).to('#botany #upper-bubble', 2, {
                    x: 2,
                    y: 12,
                    scale: 1.4


                }, 1).to('#botany #right-bubble', 2, {
                    x: -2,
                    y: -5,
                    scale: 1.2

                }, 1)


            // cupcake
            tl2.to('#cupcake #cherry', 2, {

                y: 12,
                transformOrigin: "center",
                rotation: -40,

            }, 1).to('#cupcake #new-frosting', 2, {
                autoAlpha: 1


            }, 2).to('#cupcake #splash', 2, {
                autoAlpha: 1
            }, 2)


            tl3.set('#plug #panel', {
                fill: '#fff'
            })

            // plug
            tl3.to('#plug #top-plug', 2, {
                x: -7.9,
                y: 7.9


            }, 1).to('#plug #lower-plug', 2, {
                x: 7.9,
                y: -7.9
            }, 2).to('#plug #click', 2, {
                autoAlpha: 1
            }, 2)

            // Create the Scene and trigger when visible
            //
            var scene1 = new ScrollMagic.Scene({
                    triggerElement: '.card-container svg#botany',
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
                    triggerElement: '.card-container  svg#cupcake',
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
                    triggerElement: '.card-container svg#plug',
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
