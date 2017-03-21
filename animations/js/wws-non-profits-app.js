// Adds scroll animation to WWS Non Profits Page
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
            // liftweight
            tl1.to('#liftweight #weights', 2, {
                y: -15
            }, 1)

            // nurture
            tl2.to('#nurture #growth', 2, {
                    x: 0,
                    y: -9

                }, 1)
                .to('#nurture #buds', 2, {
                    autoAlpha: 1
                }, 2)

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
                    triggerElement: '.card-container svg#liftweight',
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
                    triggerElement: '.card-container  svg#nurture',
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
