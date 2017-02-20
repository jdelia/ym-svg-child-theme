// Adds scroll animation to Ad Media Overview Page
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
            // megaphone
            tl1.fromTo('#megaphone #body', 2, {
                rotation: 0,
                transformOrigin: "100% 100%"

            }, {
                rotation: -10,
                y: -10,
                transformOrigin: "100% 100%"

            }, 1).fromTo('#megaphone #noise', 2, {
                rotation: 0,
                transformOrigin: "100% 100%"

            }, {
                rotation: -10,
                y: -10,
                transformOrigin: "100% 100%",
                autoAlpha: 1

            }, 2)



            // growmoney
            tl2.to('#growmoney #left-leaf', 2, {

                    rotation: -10,
                    transformOrigin: "100% 100%"


                }, 1)
                .to('#growmoney #right-leaf', 2, {
                    rotation: 10,
                    y: 4,
                    x: 4,
                    transformOrigin: "100% 0%"
                }, 1)

                // growmoney
                .to('#growmoney #pedals', .5, {
                    autoAlpha: 1
                }, 1)
                .to('#growmoney #pedals', 1, {
                    autoAlpha: 0
                }, 2)
                .to('#growmoney #pedals', .5, {
                    autoAlpha: 1
                }, 3)






            // delivermoney
            tl3.to('#delivermoney-icon', 3, {
                    x: 45

                }, 1).to('#delivermoney #top-money', 1, {
                    x: 2,
                    y: -2,
                    rotation: 5,
                    scale: 1,
                    transformOrigin: "50% 50%"
                }, 2).to('#delivermoney #top-money', 1, {
                    rotation: 12,
                    transformOrigin: "50% 50%"
                }, 3)
                .to('#delivermoney #top-money', 1, {
                    x: 0,
                    y: 0,
                    rotation: 0,
                    scale: 1,
                    transformOrigin: "50% 50%"
                }, 4)

            // Create the Scene and trigger when visible
            //
            var scene1 = new ScrollMagic.Scene({
                    triggerElement: '.card-container svg#megaphone',
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
                    triggerElement: '.card-container  svg#growmoney',
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
                    triggerElement: '.card-container svg#delivermoney',
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
