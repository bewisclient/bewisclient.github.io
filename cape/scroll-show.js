    function isElementInViewport(el) {
        const offset = 0;
        const rect = el.getBoundingClientRect();
        const viewportHöhe = (window.innerHeight || document.documentElement.clientHeight)-offset;
        return (
          rect.top <= viewportHöhe &&
          rect.bottom >= offset
        );
    }

    function fadeInElementOnScroll() {
        const fadeElements = document.getElementsByClassName('div-element');
        for (let i = 0; i < fadeElements.length; i++) {
            const fadeElement = fadeElements[i];
            if (isElementInViewport(fadeElement)) {
                fadeElement.style.transitionDuration = "1s";
                fadeElement.style.transitionDelay = "0.2s";
                fadeElement.style.opacity = 1;
            } else {
                fadeElement.style.transitionDuration = "0s";
                fadeElement.style.transitionDelay = "0s";
                fadeElement.style.opacity = 0;
            }
        }
    }

    window.addEventListener('scroll', fadeInElementOnScroll);
    fadeInElementOnScroll();