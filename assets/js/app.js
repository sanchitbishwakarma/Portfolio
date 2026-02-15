// DOM Ready
$(document).ready(function () {
    // Render all data
    renderProjects(projectsData);
    renderYouTube(youtubeData);
    renderPlatforms(platformsData);
    renderActivity(activityData);
    generateContributionGraph();

    // Theme Toggle
    const themeToggle = $('#themeToggle');
    const themeIcon = themeToggle.find('i');

    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    themeToggle.on('click', function () {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });

    function updateThemeIcon(theme) {
        if (theme === 'dark') {
            themeIcon.removeClass('fa-sun').addClass('fa-moon');
        } else {
            themeIcon.removeClass('fa-moon').addClass('fa-sun');
        }
    }

    // Tab Switching
    const overviewTab = $('#overviewTab');
    const reposTab = $('#reposTab');
    const starsTab = $('#starsTab');
    const mainArea = $('#mainContentArea');
    let overviewCache = mainArea.html();

    overviewTab.on('click', function () {
        if ($(this).hasClass('active')) return;
        switchTab($(this));
        mainArea.html(overviewCache);
        initAnimations();
    });

    reposTab.on('click', function () {
        if ($(this).hasClass('active')) return;
        switchTab($(this));
        fetchGitHubData('https://api.github.com/users/sanchitbishwakarma/repos?type=public&sort=updated&direction=desc');
    });

    starsTab.on('click', function () {
        if ($(this).hasClass('active')) return;
        switchTab($(this));
        fetchGitHubData('https://api.github.com/users/sanchitbishwakarma/starred');
    });

    function switchTab(tab) {
        $('.sub-nav-item').removeClass('active');
        tab.addClass('active');

        // Hide sidebar on mobile for repos and stars
        if (tab.attr('id') === 'overviewTab') {
            $('.container').removeClass('side-hidden');
        } else {
            $('.container').addClass('side-hidden');
        }
    }

    function fetchGitHubData(url) {
        mainArea.html(`
            <div class="loading-container">
                <div class="spinner"></div>
            </div>
        `);

        $.ajax({
            url: url,
            method: 'GET',
            success: function (data) {
                renderRepos(data);
            },
            error: function () {
                mainArea.html('<p class="muted" style="text-align:center; padding: 40px;">Failed to load data. Please try again later.</p>');
            }
        });
    }

    function renderRepos(repos) {
        if (repos.length === 0) {
            mainArea.html('<p class="muted" style="text-align:center; padding: 40px;">No public items found.</p>');
            return;
        }

        let html = '<div class="repo-list">';
        repos.forEach(repo => {
            const updatedAt = repo.updated_at ? new Date(repo.updated_at).toLocaleDateString(undefined, {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
            }) : 'Recently';

            html += `
                <div class="repo-item">
                    <a href="${repo.html_url}" target="_blank" class="repo-name">${repo.name}</a>
                    ${repo.description ? `<p class="repo-description">${repo.description}</p>` : ''}
                    <div class="repo-meta">
                        ${repo.language ? `
                            <div class="repo-language">
                                <span class="language-dot" style="background: ${getLanguageColor(repo.language)}"></span>
                                <span>${repo.language}</span>
                            </div>
                        ` : ''}
                        <div class="repo-stats">
                            <i class="far fa-star"></i>
                            <span>${repo.stargazers_count}</span>
                        </div>
                        <div class="repo-stats">
                            <i class="fas fa-code-branch"></i>
                            <span>${repo.forks_count}</span>
                        </div>
                        ${repo.updated_at ? `<span>Updated on ${updatedAt}</span>` : ''}
                    </div>
                </div>
            `;
        });
        html += '</div>';
        mainArea.html(html);
    }

    function getLanguageColor(lang) {
        const colors = {
            'JavaScript': '#f1e05a',
            'Python': '#3572A5',
            'HTML': '#e34c26',
            'CSS': '#563d7c',
            'TypeScript': '#3178c6',
            'Go': '#00ADD8',
            'Java': '#b07219',
            'C++': '#f34b7d',
            'C#': '#178600',
            'PHP': '#4F5D95',
            'Ruby': '#701516'
        };
        return colors[lang] || '#8b949e';
    }

    // Initial Counts
    fetchUserCounts();

    function fetchUserCounts() {
        // Fetch User Profile for Repo Count
        $.ajax({
            url: 'https://api.github.com/users/sanchitbishwakarma',
            method: 'GET',
            success: function (user) {
                $('#reposCount').text(user.public_repos);
            }
        });

        // Fetch Starred for Star Count
        $.ajax({
            url: 'https://api.github.com/users/sanchitbishwakarma/starred',
            method: 'GET',
            success: function (stars) {
                $('#starsCount').text(stars.length);
            }
        });
    }

    // Initialize features
    initAnimations();
});

// Render Platforms
function renderPlatforms(data) {
    let html = "";

    data.forEach(platform => {
        html += `
            <div class="platform-card">
                <div class="platform-left">
                    <div class="platform-header">
                        <i class="fa-brands fa-hashnode"></i>
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

// Render Projects
function renderProjects(data) {
    let html = "";

    data.forEach(project => {
        html += `
            <a href="${project.link}" target="_blank" class="project-card">
                <div class="project-header">
                    <i class="fas fa-book project-icon"></i>
                    <span class="project-title">${project.title}</span>
                    <span class="project-badge">Public</span>
                    <i class="fas fa-ellipsis-h project-icon"></i>
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
            </a>
        `;
    });

    $("#pinnedProjects").html(html);
}

// Render YouTube Channels
function renderYouTube(data) {
    let html = "";

    data.forEach(channel => {
        html += `
            <a href="https://youtube.com/${channel.channelHandle}" target="_blank" class="youtube-card">
                <div class="youtube-main-content">
                    <div class="youtube-left-side">
                        <div class="youtube-header-row">
                            <div class="youtube-brand">
                                <i class="fab fa-youtube youtube-brand-icon"></i>
                                <span class="youtube-channel-name">${channel.name}</span>
                            </div>
                            <div class="youtube-menu-dots">
                                <i class="fas fa-ellipsis-h"></i>
                            </div>
                        </div>
                        <p class="youtube-channel-desc">${channel.description}</p>
                        <div class="youtube-footer-stats">
                            <div class="youtube-footer-stat">
                                <i class="fas fa-user-group"></i>
                                <span>${channel.subscribers} subscribers</span>
                            </div>
                            <div class="youtube-footer-stat">
                            <i class="fa-brands fa-youtube"></i>
                                <span>${channel.videos} videos</span>
                            </div>
                        </div>
                    </div>
                    <div class="youtube-right-side">
                        <img src="${channel.avatar}" alt="${channel.name}" class="youtube-channel-avatar">
                    </div>
                </div>
            </a>
        `;
    });

    $("#youtubeChannels").html(html);
}

// Render Activity Timeline
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

// Generate Contribution Graph
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
// Animated Counter
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

// Scroll Animations
function initAnimations() {
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


// Smooth Hover Effects
$(document).on("mouseenter", ".project-card", function () {
    $(this).css("transform", "translateY(-4px)");
});

$(document).on("mouseleave", ".project-card", function () {
    $(this).css("transform", "translateY(0)");
});

// Status Icon Easter Egg
$("#status-icon").on("dblclick", function () {
    const emojis = ["😏", "😌", "😔", "😌", "😏", "😂", "😍", "😎", "🤔", "😭", "😁", "😡", "🥳", "😱", "🤯", "🙄", "😴", "🤓", "😇", "😅"];
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    $(this).html(randomEmoji);
});

// Console Easter Egg
console.log('%c👋 Hey Developer!', 'font-size: 20px; font-weight: bold; color: #58a6ff;');
console.log('%cBuilt with HTML + CSS + JS + jQuery + Local Data', 'font-size: 14px; color: #8b949e;');
console.log('%cNo more CORS issues! 💪', 'font-size: 12px; color: #238636;');
