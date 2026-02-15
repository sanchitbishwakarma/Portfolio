export function fetchGitHubData(url, successCallback, errorCallback) {
    $.ajax({
        url: url,
        method: 'GET',
        success: successCallback,
        error: errorCallback
    });
}

export function fetchUserProfile(username, successCallback) {
    $.ajax({
        url: `https://api.github.com/users/${username}`,
        method: 'GET',
        success: successCallback
    });
}

export function fetchStarred(username, successCallback) {
    $.ajax({
        url: `https://api.github.com/users/${username}/starred`,
        method: 'GET',
        success: successCallback
    });
}
