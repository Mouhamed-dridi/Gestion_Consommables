document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('take-toner-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        
        const reference = document.getElementById('reference').value;
        const quantite = parseInt(document.getElementById('quantite').value);

        
        const tonerStock = JSON.parse(localStorage.getItem('tonerStock')) || [];

        
        const tonerIndex = tonerStock.findIndex(item => item.reference === reference);

        if (tonerIndex !== -1 && tonerStock[tonerIndex].quantite >= quantite) {
            
            tonerStock[tonerIndex].quantite -= quantite;

            
            if (tonerStock[tonerIndex].quantite <= 0) {
                tonerStock.splice(tonerIndex, 1);
            }

            
            localStorage.setItem('tonerStock', JSON.stringify(tonerStock));

            
            alert('Toner removed successfully!');
        } else {
            alert('Insufficient stock or invalid reference.');
        }

        
        form.reset();
    });
});
