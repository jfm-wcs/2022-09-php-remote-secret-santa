const vw = (coef) => window.innerWidth * (coef / 100)
// init controller
const controller = new ScrollMagic.Controller();

// build scene and set duration to window height
new ScrollMagic.Scene({
    triggerElement: "#trigger-sky",
    // triggerHook: "onEnter",
    duration: 0
})
    .setClassToggle('#sky', 'visible')
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

const tweenImgBottom = TweenMax.to("#ground", 1, {y: 0});
new ScrollMagic.Scene({
    triggerElement: "#trigger-ground",
    // triggerHook: "onEnter",
    duration: '100%'
})
    .setTween(tweenImgBottom)
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);


new ScrollMagic.Scene({
    triggerElement: "#trigger-tree1",
    // triggerHook: "onEnter",
    duration: 500
})
    .setTween('#tree1', {x: '34%'})
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#trigger-tree2",
    // triggerHook: "onEnter",
    duration: 600
})
    .setTween('#tree2', {x: '0'})
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#trigger-tree2",
    // triggerHook: "onEnter",
    duration: 2000
})
    .setTween('#tree3', {x: '-40%'})
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#trigger-mountains",
    // triggerHook: "onEnter",
    duration: 500
})
    .setTween('#mountains', {y: '0', opacity: 1})
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#trigger-mountains",
    // triggerHook: "onEnter",
    duration: 800
})
    .setTween('#houses', {y: '0', opacity: 1})
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#trigger-moon",
    // triggerHook: "onEnter",
    duration: 800
})
    .setTween('#moon', {bottom: '24vw', visibility: 'visible'})
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);
