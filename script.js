document.addEventListener('DOMContentLoaded', function() {
    // Get the search form
    const form = document.getElementById('searchForm');

    // Add event listener for form submission
    form.addEventListener('submit', function(event) {
        // Prevent default form submission
        event.preventDefault();

        // Get the search query entered by the user
        const searchQuery = document.getElementById('searchQuery').value.trim();

        // Check if the search query is not empty
        if (searchQuery) {
            // Construct the URL for the search results page
            const searchUrl = 'https://www.google.com/search?sca_esv=d0136fcaccc01fe6&q=food&tbm=isch&source=lnms&sa=X&ved=2ahUKEwjc_rSPrNiEAxVkVTABHURwBGQQ0pQJegQIDRAB&biw=719&bih=782&dpr=1.25&q=' + encodeURIComponent(searchQuery);

            // Redirect the user to the search results page
            window.location.href = searchUrl;
        }
    });
});
