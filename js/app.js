// ===================================
// DOM Ready
// ===================================
$(document).ready(function () {
    // Render all data
    renderProjects(projectsData);
    renderYouTube(youtubeData);
    renderActivity(activityData);
    generateContributionGraph();

    // Initialize features
    initAnimations();
});

// ===================================
// Render Projects
// ===================================
function renderProjects(data) {
    let html = "";

    data.forEach(project => {
        html += `
            <div class="project-card">
                <div class="project-header">
                    <i class="fas fa-book project-icon"></i>
                    <span class="project-title">${project.title}</span>
                    <span class="project-badge">Public</span>
                </div>
                <p class="project-description">${project.description}</p>
                <div class="project-footer">
                    <div class="project-language">
                        <span class="language-dot" style="background: ${project.languageColor}"></span>
                        <span>${project.language}</span>
                    </div>
                    <div class="project-stats">
                        <i class="fas fa-star"></i>
                        <span>${project.stars}</span>
                    </div>
                    <div class="project-stats">
                        <i class="fas fa-code-branch"></i>
                        <span>${project.forks}</span>
                    </div>
                </div>
            </div>
        `;
    });

    $("#pinnedProjects").html(html);
}

// ===================================
// Render YouTube Channels
// ===================================
function renderYouTube(data) {
    let html = "";

    data.forEach(channel => {
        html += `
            <div class="youtube-card">
                <div class="youtube-header">
                    <i class="fab fa-youtube youtube-icon"></i>
                    <span class="youtube-title">${channel.name}</span>
                </div>
                <p class="youtube-description">${channel.description}</p>
                <div class="youtube-stats">
                    <div class="youtube-stat">
                        <i class="fas fa-users"></i>
                        <span>${channel.subscribers} subscribers</span>
                    </div>
                    <div class="youtube-stat">
                        <i class="fas fa-video"></i>
                        <span>${channel.videos} videos</span>
                    </div>
                </div>
            </div>
        `;
    });

    $("#youtubeChannels").html(html);
}

// ===================================
// Render Activity Timeline
// ===================================
function renderActivity(data) {
    let html = "";

    data.forEach(activity => {
        let icon = "";
        let text = "";

        switch (activity.type) {
            case "commit":
                icon = '<i class="fas fa-code-branch activity-icon"></i>';
                text = `Pushed ${activity.commits} commits to <strong>${activity.repo}</strong>`;
                break;
            case "star":
                icon = '<i class="fas fa-star activity-icon"></i>';
                text = `Starred <strong>${activity.repo}</strong>`;
                break;
            case "fork":
                icon = '<i class="fas fa-code-branch activity-icon"></i>';
                text = `Forked <strong>${activity.repo}</strong>`;
                break;
        }

        html += `
            <div class="activity-item">
                <div class="activity-header">
                    ${icon}
                    <span class="activity-text">${text}</span>
                </div>
                ${activity.message ? `<p class="muted">${activity.message}</p>` : ''}
                <span class="activity-time">${activity.time}</span>
            </div>
        `;
    });

    $("#activityTimeline").html(html);
}

// ===================================
// Generate Contribution Graph
// ===================================
function generateContributionGraph() {
    const graph = $("#contributionGraph");
    let html = "";

    // Generate 365 squares (1 year)
    for (let i = 0; i < 365; i++) {
        // Random level for demo (0-4)
        const level = Math.floor(Math.random() * 5);
        const className = level > 0 ? `contribution-square level-${level}` : 'contribution-square';
        html += `<span class="${className}"></span>`;
    }

    graph.html(html);

    // Animate contribution count
    animateCounter($("#contributionCount"), 1234, 2000);
}

// ===================================
// Animated Counter
// ===================================
function animateCounter(element, target, duration) {
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

// ===================================
// Scroll Animations
// ===================================
function initAnimations() {
    // Fade in cards on load
    $(".project-card, .youtube-card").each(function (index) {
        $(this).css({
            opacity: 0,
            transform: 'translateY(20px)'
        }).delay(index * 100).animate({
            opacity: 1
        }, 500).css({
            transform: 'translateY(0)'
        });
    });
}

// ===================================
// Mobile Menu Toggle
// ===================================
$(".menu-btn").click(function () {
    alert("Mobile menu - Add your navigation here!");
});

// ===================================
// Smooth Hover Effects
// ===================================
$(document).on("mouseenter", ".project-card", function () {
    $(this).css("transform", "translateY(-4px)");
});

$(document).on("mouseleave", ".project-card", function () {
    $(this).css("transform", "translateY(0)");
});

// ===================================
// Console Easter Egg
// ===================================
console.log('%c👋 Hey Developer!', 'font-size: 20px; font-weight: bold; color: #58a6ff;');
console.log('%cBuilt with HTML + CSS + JS + jQuery + Local Data', 'font-size: 14px; color: #8b949e;');
console.log('%cNo more CORS issues! 💪', 'font-size: 12px; color: #238636;');
