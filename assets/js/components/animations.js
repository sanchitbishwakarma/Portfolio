export function initAnimations() {
    const selectors = [
        ".profile-section",
        ".sub-nav-item",
        ".section-header",
        ".project-card",
        ".youtube-card",
        ".platform-card",
        ".activity-item",
        ".contribution-graph",
        ".footer"
    ];

    $(selectors.join(", ")).each(function (index) {
        $(this).css({
            opacity: 0,
            transform: 'translateY(20px)',
            transition: 'opacity 0.5s ease, transform 0.5s ease'
        });

        setTimeout(() => {
            $(this).css({
                opacity: 1,
                transform: 'translateY(0)'
            });
        }, index * 50);
    });
}

export function animateCounter(element, target, duration) {
    let start = 0;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.text(target.toLocaleString());
            clearInterval(timer);
        } else {
            element.text(Math.floor(start).toLocaleString());
        }
    }, 16);
}
