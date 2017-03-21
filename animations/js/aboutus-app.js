// Adds scroll animation to SVG sprinkles on home page.
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
            // Create Animation for Icon-1
            //
            //

            // paper-airplane
            tl1.to('#paper-airplane #plane, #paper-airplane #air', 1, {
                    x: -5,
                    y: 5
                }, 1).to('#paper-airplane #plane', 2, {
                    x: 15,
                    y: -15
                }, 2)
                .to('#paper-airplane #air', 1, {
                    autoAlpha: 1
                }, 3)

            // flag
            tl2.fromTo('#flag #flagpole', 2, {
                y: 0

            }, {
                y: -10

            }, 1).to('#flag #cloud', 2, {
                y: 10

            }, 1)


            /* flight */
            // tl2.to('#flight #bow', 2, {
            //     transformOrigin: '50% 50%',
            //     rotation: -15
            //
            // }, 1).to('#flight #body', 2, {
            //     transformOrigin: '20% 100%',
            //     rotation: 10
            //
            // }, 1)
            /* robot */
            tl3.to('#robot #power-group', 2, {
                y: -10

            }, 1)

            // Create the Scene and trigger when visible
            //
            var scene1 = new ScrollMagic.Scene({
                    triggerElement: '.card-container svg#paper-airplane',
                    triggerHook: .4,
                    offset: 0,
                    duration: '20%'
                })
                .setTween(tl1)

                /* DEBUG this is for debugging only - comment out on production */
                // .addIndicators({
                //     name: 'loop'
                // }) // add indicators (requires plugin)
                /* End Debug -----------------------------------------------------------------*/
                .addTo(controller)

            var scene2 = new ScrollMagic.Scene({
                    triggerElement: '.card-container svg#flag',
                    triggerHook: .4,
                    offset: 0,
                    duration: '20%'
                })
                .setTween(tl2)

                /* DEBUG this is for debugging only - comment out on production */
                // .addIndicators({
                //     name: 'loop'
                // }) // add indicators (requires plugin)
                /* End Debug -----------------------------------------------------------------*/
                .addTo(controller)

            var scene3 = new ScrollMagic.Scene({
                    triggerElement: '.card-container svg#robot',
                    triggerHook: .4,
                    offset: 0,
                    duration: '20%'
                })
                .setTween(tl3)

                /* DEBUG this is for debugging only - comment out on production */
                // .addIndicators({
                //     name: 'loop'
                // }) // add indicators (requires plugin)
                /* End Debug -----------------------------------------------------------------*/
                .addTo(controller)
        }

    })
})(jQuery)
