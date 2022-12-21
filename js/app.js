const startButton = document.getElementById('start')
startButton.addEventListener('click', function () {
    document.querySelector('body').classList.add('started')
})

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
    .addTo(controller);

const tweenImgBottom = TweenMax.to("#ground", 1, {y: 0});
new ScrollMagic.Scene({
    triggerElement: "#trigger-ground",
    // triggerHook: "onEnter",
    duration: '100%'
})
    .setTween(tweenImgBottom)
    .addTo(controller);


new ScrollMagic.Scene({
    triggerElement: "#trigger-tree1",
    // triggerHook: "onEnter",
    duration: 500
})
    .setTween('#tree1', {x: '34%'})
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#trigger-tree2",
    // triggerHook: "onEnter",
    duration: 600
})
    .setTween('#tree2', {x: '0'})
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#trigger-tree2",
    // triggerHook: "onEnter",
    duration: 2000
})
    .setTween('#tree3', {x: '-40%'})
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#trigger-mountains",
    // triggerHook: "onEnter",
    duration: 500
})
    .setTween('#mountains', {y: 0, opacity: 1})
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#trigger-mountains",
    // triggerHook: "onEnter",
    duration: 800
})
    .setTween('#houses', {y: 0, opacity: 1})
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#trigger-moon",
    // triggerHook: "onEnter",
    duration: 800
})
    .setTween('#moon', {bottom: '24vw', visibility: 'visible'})
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#trigger-truck",
    // triggerHook: "onEnter",
    duration: 800
})
    .setTween('#truck', {x: '-50%', left: '50%'})
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#trigger-text",
    // triggerHook: "onEnter",
    duration: 0
})
    .setClassToggle('#text', 'visible')
    .addTo(controller);


new ScrollMagic.Scene({
    triggerElement: "#trigger-video",
    // triggerHook: "onEnter",
    duration: 500
})
    .on("enter", function (event) {
        const video = document.getElementById('video-player')
        video.play();
    })
    .setClassToggle('#video-container', 'visible')
    .addTo(controller);
