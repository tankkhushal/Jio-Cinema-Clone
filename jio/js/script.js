document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.querySelector('.search-button');
    const searchInput = document.querySelector('.search-bar input');
    const voiceSearchButton = document.querySelector('.voice-search');

    searchButton.addEventListener('click', () => {
        const query = searchInput.value;
        if (query) {
            console.log(`Searching for: ${query}`);
        }
    });

    voiceSearchButton.addEventListener('click', () => {
        console.log('Voice search activated');
    });

    const userProfile = document.querySelector('.user-profile img');
    userProfile.addEventListener('click', () => {
        console.log('User profile clicked');
    });
});
