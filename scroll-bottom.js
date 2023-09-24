function click_bottom(bl) {
    const a = document.getElementById("scroll");
    var href = window.location.hash.substring(1);
    if(href=="bottom"==bl) {
        a.style.rotate = "180deg";
        a.href = "#main";
    } else {
        a.style.rotate = "0deg";
        a.href = "#bottom";
    }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        click_bottom(true);

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const offsetTop = targetElement.getBoundingClientRect().top;
            const scrollOptions = {
                behavior: 'smooth'
            };

            window.scrollTo({
                top: offsetTop,
                ...scrollOptions
            });

            history.pushState(null, null, `#${targetId}`);
        }
    });
});

click_bottom(false);