// ===================================
// DOM Ready
// ===================================
$(document).ready(function () {
    // Render all data
    renderProjects(projectsData);
    renderYouTube(youtubeData);
    renderPlatforms(platformsData);
    renderActivity(activityData);
    generateContributionGraph();

    // Initialize features
    initAnimations();
});

// ===================================
// Render Platforms
// ===================================
function renderPlatforms(data) {
    let html = "";

    data.forEach(platform => {
        html += `
            <div class="platform-card">
                <div class="platform-left">
                    <div class="platform-header">
                        <i class="fas fa-circle-dot platform-icon"></i>
                        <a href="${platform.website}" target="_blank" class="platform-title">${platform.name}</a>
                    </div>
                    <p class="platform-description">${platform.description}</p>
                    <div class="platform-buttons">
                        <a href="${platform.iosLink}" class="platform-btn">
                            <i class="fab fa-apple"></i> iOS App
                        </a>
                        <a href="${platform.androidLink}" class="platform-btn">
                            <i class="fab fa-android"></i> Android App
                        </a>
                    </div>
                </div>
                <div class="platform-right">
                    <div class="platform-image-container">
                        <img src="${platform.icon}" alt="${platform.name}">
                    </div>
                </div>
            </div>
        `;
    });

    $("#platforms").html(html);
}

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
                    <a href="https://youtube.com/${channel.channelHandle}" target="_blank" class="youtube-title">${channel.name}</a>
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
                text = `pushed ${activity.commits} commits to`;
                break;
            case "star":
                icon = '<i class="fas fa-star activity-icon"></i>';
                text = `starred`;
                break;
            case "fork":
                icon = '<i class="fas fa-code-branch activity-icon"></i>';
                text = `forked`;
                break;
        }

        html += `
            <div class="activity-item">
                <div class="activity-header">
                    ${icon}
                        <a href="https://github.com/${activity.username}" target="_blank" class="activity-username">${activity.username}</a>
                    <span class="activity-text">${text}</span>
                        <a href="https://github.com/${activity.repo}" target="_blank" class="activity-repo">${activity.repo}</a>
                </div>
                ${activity.message ? `<p class="muted">${activity.message}</p>` : ''}
                ${activity.repoBio ? `<p class="muted">${activity.repoBio}</p>` : ''}
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

    const count = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;

    for (let i = 0; i < 365; i++) {
        const density = count / 1000;
        const level = Math.random() < density ? Math.floor(Math.random() * 4) + 1 : 0;
        const className = level > 0 ? `contribution-square level-${level}` : 'contribution-square';
        html += `<span class="${className}"></span>`;
    }

    graph.html(html);
    animateCounter($("#contributionCount"), count, 2000);
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
    $(".project-card, .youtube-card, .platform-card, .activity-item").each(function (index) {
        $(this).css({
            opacity: 0,
            transform: 'translateY(20px)'
        }).delay(index * 100).animate({
            opacity: 1
        }, 200).css({
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
