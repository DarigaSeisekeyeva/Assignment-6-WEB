document.addEventListener('DOMContentLoaded', () => {
    const filterSelect = document.getElementById('filterSelect');
    const cards = document.querySelectorAll('.card');

    const savedFilter = localStorage.getItem('dishFilter') || 'all';
    filterSelect.value = savedFilter;
    filterDishes(savedFilter);

    filterSelect.addEventListener('change', (event) => {
        const selectedValue = event.target.value;
        localStorage.setItem('dishFilter', selectedValue);
        filterDishes(selectedValue);
    });

    function filterDishes(filter) {
        cards.forEach(card => {
            const cardTitle = card.querySelector('.card-title').textContent.toLowerCase();
            if (filter === 'all' || cardTitle.includes(filter)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    }
});