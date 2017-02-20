// Adds scroll animation to Design Services Page
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
            // billboard
            tl1.to('#billboard #right-poly', 2, {
                x: -4,
                y: 4



            }, 1).to('#billboard #second-row', 2, {
                autoAlpha: 1



            }, 2).to('#billboard #third-row', 2, {

                autoAlpha: 1


            }, 3)


            // balloon
            tl2.to('#balloon #top-balloon', 2, {
                    y: -12

                }, 1).to('#balloon #top-dashes', 2, {
                    x: -15,
                    y: -5

                }, 1)
                .to('#balloon #top-cloud', 2, {
                    x: -45,
                    y: 1
                }, 1).to('#balloon #lower-cloud', 2, {
                    y: 5

                }, 1).to('#balloon #body', 2, {
                    y: 3

                }, 1)


            // jumpinphone
            tl3.to('#jumpinphone #legs', 2, {
                    x: 20,
                    y: 0,
                    transformOrigin: '0% 70%',
                    rotation: -45
                }, 1)
                .to('#jumpinphone #top-star', 2, {
                    autoAlpha: 1
                }, 2).to('#jumpinphone #middle-star', 2, {
                    autoAlpha: 1

                }, 2).to('#jumpinphone #lower-star', 2, {
                    autoAlpha: 1

                }, 2)




            // Create the Scene and trigger when visible
            //
            var scene1 = new ScrollMagic.Scene({
                    triggerElement: '.card-container svg#billboard',
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
                    triggerElement: '.card-container  svg#balloon',
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
                    triggerElement: '.card-container svg#jumpinphone',
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
