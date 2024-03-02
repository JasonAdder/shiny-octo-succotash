document.addEventListener('DOMContentLoaded', function() {
    var themeToggle = document.getElementById('toggleTheme');
    themeToggle.addEventListener('change', function() {
        document.body.classList.toggle('dark-mode');
        if (!document.body.classList.contains('dark-mode')) {
            document.body.classList.add('light-mode');
        } else {
            document.body.classList.remove('light-mode');
        }
    });
});
