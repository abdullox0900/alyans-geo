const boxes = gsap.utils.toArray('.box')
const totalScroll = 70 // Total scroll percentage
const sectionHeight = totalScroll / boxes.length

boxes.forEach((box, index) => {
    const initialWidth = box.offsetWidth
    const initialHeight = box.offsetHeight

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: document.body,
            start: `top+=${index * sectionHeight}% top`,
            end: `top+=${(index + 1) * sectionHeight}% top`,
            scrub: true,
        }
    })

    // First stage: Move to bottom center and grow
    tl.to(box, {
        left: '40%',
        top: '80%',
        xPercent: -70,
        yPercent: -100,
        width: 600,
        height: 600,
        ease: "none",
        duration: 1,
        filter: "blur(0px)",
    })

    // Second stage: Move to bottom left
    tl.to(box, {
        left: '0%',
        // top: '',
        xPercent: -200,
        yPercent: 120,
        ease: "none",
        duration: 1,
    })

    // Update font size throughout the animation
    tl.to(box, {
        onUpdate: function () {
            const progress = this.progress()
            const currentWidth = initialWidth + (600 - initialWidth) * progress
            box.style.fontSize = `${currentWidth / 10}px`
        },
        duration: 1,
    }, 0)
})