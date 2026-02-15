import { getLanguageColor, formatDate } from '../core/utils.js';
import { animateCounter } from './animations.js';

export function renderProjects(data) {
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

export function renderYouTube(data) {
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
                            <div class="youtube-menu-dots"><i class="fas fa-ellipsis-h"></i></div>
                        </div>
                        <p class="youtube-channel-desc">${channel.description}</p>
                        <div class="youtube-footer-stats">
                            <div class="youtube-footer-stat"><i class="fas fa-user-group"></i><span>${channel.subscribers} subscribers</span></div>
                            <div class="youtube-footer-stat"><i class="fa-brands fa-youtube"></i><span>${channel.videos} videos</span></div>
                        </div>
                    </div>
                    <div class="youtube-right-side"><img src="${channel.avatar}" alt="${channel.name}" class="youtube-channel-avatar"></div>
                </div>
            </a>
        `;
    });
    $("#youtubeChannels").html(html);
}

export function renderPlatforms(data) {
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
                        <a href="${platform.iosLink}" class="platform-btn"><i class="fab fa-apple"></i> iOS App</a>
                        <a href="${platform.androidLink}" class="platform-btn"><i class="fab fa-android"></i> Android App</a>
                    </div>
                </div>
                <div class="platform-right">
                    <div class="platform-image-container"><img src="${platform.icon}" alt="${platform.name}"></div>
                </div>
            </div>
        `;
    });
    $("#platforms").html(html);
}

export function renderActivity(data) {
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

export function generateContributionGraph() {
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

export function renderRepos(repos, containerId) {
    const container = $(`#${containerId}`);
    if (repos.length === 0) {
        container.html('<p class="muted" style="text-align:center; padding: 40px;">No public items found.</p>');
        return;
    }
    let html = '<div class="repo-list">';
    repos.forEach(repo => {
        const updatedAt = formatDate(repo.updated_at);
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
                    <div class="repo-stats"><i class="far fa-star"></i><span>${repo.stargazers_count}</span></div>
                    <div class="repo-stats"><i class="fas fa-code-branch"></i><span>${repo.forks_count}</span></div>
                    ${repo.updated_at ? `<span>Updated on ${updatedAt}</span>` : ''}
                </div>
            </div>
        `;
    });
    html += '</div>';
    container.html(html);
}
