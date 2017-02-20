// Adds scroll animation to Careers Overview Page
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
                repeat: 2,
                smoothChildTiming: true,
                yoyo: false,
                ease: Power4.easeInOut

            })
            // Create Animations
            // funnel
            tl1.to('#funnel #left-drip', 2, {
                y: 19



            }, 1).to('#funnel #right-drip', 2, {
                y: 6



            }, 1).to('#funnel #center-drip', 2, {

                y: 50


            }, 1)


            // kite
            tl2.to('#kite #body', 2, {
                x: -2,
                y: -12

            }, 1).to('#kite #body', 2, {
                transformOrigin: '40% 100%',
                rotation: 10

            }, 2).to('#kite #body', 1, {
                transformOrigin: '40% 100%',
                rotation: -10

            }, 3).to('#kite #body', 1, {
                transformOrigin: '40% 100%',
                rotation: 0

            }, 4)


            // piggy-bank
            tl3.to('#piggy-bank #big-coin', .6, {
                x: 5,
                y: -5
            }, 1).to('#piggy-bank #big-coin', 3.4, {
                x: 8,
                y: 50
            }, 2)




            // Create the Scene and trigger when visible
            //
            var scene1 = new ScrollMagic.Scene({
                    triggerElement: '.card-container svg#funnel',
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
                    triggerElement: '.card-container  svg#kite',
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
                    triggerElement: '.card-container svg#piggy-bank',
                    triggerHook: .4,
                    offset: 0,
                    reverse: true,
                    duration: '20%'
                })
                // .on("end", function(e) {
                //     tl3.reverse();
                // })
                // .on("start", function(e) {
                //     tl3.play();
                // })
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
