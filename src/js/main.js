gsap.registerPlugin(ScrollTrigger)

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "200% bottom",
        scrub: 1,
        pin: true,
        pinSpacing: true
    }
})

tl.to("#section-1", {
    x: "-100%",
    ease: "none",
})

tl.to("#section-2", {
    x: "-100%",
    ease: "none",
}, "<")

tl.to("#section-3", {
    x: "-200%",
    ease: "none",
}, "<")

tl.to("#u-element", {
    x: "-30%",
    ease: "none",
}, "<")

tl.to("#header", {
    y: "-100vw",
    ease: "none",
}, "<")

tl.to("#nav-wrapper", {
    y: "-10px",
    ease: "none",
}, "<")

tl.to("#nav", {
    backgroundColor: "#F4F7FF",
}, "<")

tl.to("#hero", {
    x: "140vh",
    ease: "none",
}, "<")

tl.to("#hero-2", {
    x: "145vh",
    ease: "none",
}, "<")

tl.to("#hero-2-inner", {
    x: "0",
    y: "10%",
    scale: 1.3,
    ease: "none",
    duration: 1,
}, ">")

    .to("#u-img-top", {
        x: -50,
        y: -150,
        duration: 2,
        ease: "none"
    }, "<")

    .to("#u-img-oval", {
        x: -100,
        y: -40,
        duration: 2,
        ease: "none"
    }, "<")

    .to("#u-img-center", {
        y: -50,
        duration: 2,
        ease: "none"
    }, "<")

    .to("#u-img-body", {
        x: 100,
        y: 50,
        duration: 2,
        ease: "none"
    }, "<")

    .to("#u-img-bottom", {
        x: -50,
        y: 150,
        duration: 2,
        ease: "none"
    }, "<")

    .to("#u-element-one, #u-element-one", {
        y: "-100vh",
        ease: "none",
        duration: 2,
    }, "<")

gsap.to('.title', {
    x: '-50vw', // Ekran kengligi bo'yicha chapga siljitish
    y: '30vw',
    ease: "none", // Tekis harakat
    scrollTrigger: {
        trigger: 'body',
        start: "top top", // Sahifa tepasidan boshlanadi
        end: "bottom bottom", // Sahifa oxirigacha davom etadi
        scrub: 1, // Scroll bilan bog'liq ravon animatsiya, 1 soniya kechikish bilan
        pin: '.title', // Elementni scroll davomida fiksatsiya qilish
    }
})

gsap.to('.box-2', {
    y: '-250vw', // Ekran kengligi bo'yicha chapga siljitish
    ease: "none", // Tekis harakat
    scrollTrigger: {
        trigger: 'body',
        start: "top top", // Sahifa tepasidan boshlanadi
        end: "bottom bottom", // Sahifa oxirigacha davom etadi
        scrub: 1, // Scroll bilan bog'liq ravon animatsiya, 1 soniya kechikish bilan
        pin: '.box-2', // Elementni scroll davomida fiksatsiya qilish
    }
})