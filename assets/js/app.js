import { initTheme } from './features/theme.js';
import { initTabs } from './features/tabs.js';
import { initAnimations } from './components/animations.js';
import {
    renderProjects,
    renderYouTube,
    renderPlatforms,
    renderActivity,
    generateContributionGraph,
    renderTestimonials
} from './components/render.js';
import { fetchUserProfile, fetchStarred } from './core/api.js';

$(document).ready(async function () {
    // 1. Load Components
    await loadComponents();

    // 2. Initial Render (from data.js globals)
    if (typeof projectsData !== 'undefined') renderProjects(projectsData);
    if (typeof youtubeData !== 'undefined') renderYouTube(youtubeData);
    if (typeof platformsData !== 'undefined') renderPlatforms(platformsData);
    if (typeof activityData !== 'undefined') renderActivity(activityData);
    if (typeof testimonialsData !== 'undefined') renderTestimonials(testimonialsData);
    generateContributionGraph();

    // 3. Initialize Features
    initTheme();
    initTabs('mainContentArea');
    initAnimations();

    // 4. Initial API Counts
    fetchUserProfile('sanchitbishwakarma', (user) => {
        $('#reposCount').text(user.public_repos);
    });
    fetchStarred('sanchitbishwakarma', (stars) => {
        $('#starsCount').text(stars.length);
    });

    // 5. Easter Eggs & Global listeners
    setupGlobalEvents();
});

async function loadComponents() {
    const components = [
        { id: 'navbar-placeholder', url: 'components/navbar.html' },
        { id: 'subnav-placeholder', url: 'components/subnav.html' },
        { id: 'sidebar-placeholder', url: 'components/sidebar.html' },
        { id: 'footer-placeholder', url: 'components/footer.html' }
    ];

    const promises = components.map(comp =>
        new Promise((resolve) => {
            $(`#${comp.id}`).load(comp.url, resolve);
        })
    );

    return Promise.all(promises);
}

function setupGlobalEvents() {
    // Smooth Hover Effects
    $(document).on("mouseenter", ".project-card", function () {
        $(this).css("transform", "translateY(-4px)");
    });

    $(document).on("mouseleave", ".project-card", function () {
        $(this).css("transform", "translateY(0)");
    });

    // Status Icon Easter Egg
    $(document).on("dblclick", "#status-icon", function () {
        const emojis = ["😏", "😌", "😔", "😌", "😏", "😂", "😍", "😎", "🤔", "😭", "😁", "😡", "🥳", "😱", "🤯", "🙄", "😴", "🤓", "😇", "😅"];
        const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
        $(this).html(randomEmoji);
    });

    console.log('%c👋 Hey Developer!', 'font-size: 20px; font-weight: bold; color: #58a6ff;');
}
