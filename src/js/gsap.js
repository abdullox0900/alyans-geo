// // GSAP va ScrollTrigger plaginini ishga tushirish
// gsap.registerPlugin(ScrollTrigger)

// // Vertikal harakatlanish uchun funksiya
// function verticalScroll(selector) {
//     gsap.to(selector, {
//         y: () => -(document.querySelector(selector).offsetHeight - window.innerHeight),
//         ease: "none",
//         scrollTrigger: {
//             trigger: selector,
//             start: "top top",
//             end: "bottom top",
//             scrub: true,
//             pin: true,
//             anticipatePin: 1
//         }
//     })
// }

// // Gorizontal harakatlanish uchun funksiya
// function horizontalScroll(selector) {
//     gsap.to(selector, {
//         x: () => -(document.querySelector(selector).offsetWidth - window.innerWidth),
//         ease: "none",
//         scrollTrigger: {
//             trigger: selector,
//             start: "top top",
//             end: () => `+=${document.querySelector(selector).offsetWidth - window.innerWidth}`,
//             scrub: true,
//             pin: true,
//             anticipatePin: 1
//         }
//     })
// }

// // Vertikal harakatlanish uchun sectionlarni tanlash
// verticalScroll("#section-1")
// verticalScroll("#section-2")

// // Gorizontal harakatlanish uchun sectionlarni tanlash
// horizontalScroll("#section-3")
// horizontalScroll("#section-4")
// horizontalScroll("#section-5")