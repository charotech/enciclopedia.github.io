// Real-time search functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const entries = document.querySelectorAll('.entry');

    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase();
        
        entries.forEach(entry => {
            const entryText = entry.textContent.toLowerCase();
            if (entryText.includes(searchTerm)) {
                entry.style.display = 'block';
            } else {
                entry.style.display = 'none';
            }
        });
    }

    searchInput.addEventListener('input', performSearch);
});

// Real-time search functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const entries = document.querySelectorAll('.entry');

    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase();
        
        entries.forEach(entry => {
            const entryText = entry.textContent.toLowerCase();
            if (entryText.includes(searchTerm)) {
                entry.style.display = 'block';
            } else {
                entry.style.display = 'none';
            }
        });
    }

    searchInput.addEventListener('input', performSearch);
});