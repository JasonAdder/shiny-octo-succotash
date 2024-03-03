document.addEventListener('DOMContentLoaded', function() {
    // Get the search button
    const searchButton = document.getElementById('searchButton');

    // Add event listener for search button click
    searchButton.addEventListener('click', function(event) {
        // Prevent default form submission
        event.preventDefault();

        // Get the search query entered by the user
        const searchQuery = document.getElementById('searchQuery').value.trim();

        // Check if the search query is not empty
        if (searchQuery) {
            // Construct the URL for the Google Images search results page
            const searchUrl = 'https://www.google.com/search?q=' + encodeURIComponent(searchQuery) + '&tbm=isch';

            // Redirect the user to the Google Images search results page
            window.location.href = searchUrl;
        }
    });

    // Get the switch element
    const switchElement = document.getElementById('toggleTheme');

    // Add event listener for switch change
    switchElement.addEventListener('change', function() {
        // Toggle dark mode class on the body
        document.body.classList.toggle('dark-mode');
    });
});
