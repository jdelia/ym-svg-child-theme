// Adds scroll animation to AMS Social Page
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
            // desk-bell
            tl1.to('#desk-bell #whole-finger', 2, {

                y: 10

            }, 1).to('#desk-bell #ding', 2, {
                y: 5


            }, 2).to('#desk-bell #noise', 2, {
                autoAlpha: 1

            }, 2)





            // diamond
            tl2.to('#diamond #diamond-body', 2, {
                y: -12
            }, 1).to('#diamond #shine', 2, {
                y: -12
            }, 1).to('#diamond #shine', 2, {
                scale: 1.2,
                x: -7
            }, 2).to('#diamond #shine #one', .1, {
                autoAlpha: 0
            }, 3).to('#diamond #shine #one', .3, {
                autoAlpha: 1
            }, 4).to('#diamond #shine #two', .1, {
                autoAlpha: 0
            }, 4).to('#diamond #shine #two', .3, {
                autoAlpha: 1
            }, 5).to('#diamond #shine #three', .1, {
                autoAlpha: 0
            }, 3).to('#diamond #shine #three', .3, {
                autoAlpha: 1
            }, 4).to('#diamond #shine #four', .1, {
                autoAlpha: 0
            }, 4).to('#diamond #shine #four', .3, {
                autoAlpha: 1
            }, 5).to('#diamond #shine #five', .1, {
                autoAlpha: 0
            }, 3).to('#diamond #shine #five', .3, {
                autoAlpha: 1
            }, 4)


            // paper-airplane
            tl3.to('#paper-airplane #plane, #paper-airplane #air', 1, {
                    x: -5,
                    y: 5
                }, 1).to('#paper-airplane #plane', 2, {
                    x: 15,
                    y: -15
                }, 2)
                .to('#paper-airplane #air', 1, {
                    autoAlpha: 1
                }, 3)

            // Create the Scene and trigger when visible
            //
            var scene1 = new ScrollMagic.Scene({
                    triggerElement: '.card-container svg#desk-bell',
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
                    triggerElement: '.card-container  svg#diamond',
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
                    triggerElement: '.card-container svg#paper-airplane',
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
