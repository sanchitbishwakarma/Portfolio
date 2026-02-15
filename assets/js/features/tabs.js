import { fetchGitHubData } from '../core/api.js';
import { renderRepos } from '../components/render.js';
import { initAnimations } from '../components/animations.js';

export function initTabs(mainAreaId) {
    const overviewTab = $('#overviewTab');
    const reposTab = $('#reposTab');
    const starsTab = $('#starsTab');
    const mainArea = $(`#${mainAreaId}`);
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
        fetchAndRender('https://api.github.com/users/sanchitbishwakarma/repos?type=public&sort=updated&direction=desc', mainArea);
    });

    starsTab.on('click', function () {
        if ($(this).hasClass('active')) return;
        switchTab($(this));
        fetchAndRender('https://api.github.com/users/sanchitbishwakarma/starred', mainArea);
    });
}

function switchTab(tab) {
    $('.sub-nav-item').removeClass('active');
    tab.addClass('active');

    if (tab.attr('id') === 'overviewTab') {
        $('.container').removeClass('side-hidden');
    } else {
        $('.container').addClass('side-hidden');
    }
}

function fetchAndRender(url, container) {
    container.html(`
        <div class="loading-container">
            <div class="spinner"></div>
        </div>
    `);

    fetchGitHubData(url, (data) => {
        renderRepos(data, container.attr('id'));
    }, () => {
        container.html('<p class="muted" style="text-align:center; padding: 40px;">Failed to load data. Please try again later.</p>');
    });
}
