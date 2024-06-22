document.addEventListener('DOMContentLoaded', function() {
    const stockTableBody = document.getElementById('stock-table-body');

    // Récupérer les stocks depuis le stockage local
    const tonerStock = JSON.parse(localStorage.getItem('tonerStock')) || [];

    // Ajouter chaque élément de toner au tableau
    tonerStock.forEach(({ reference, quantite, imprimante }) => {
        const row = document.createElement('tr');

        const referenceCell = document.createElement('td');
        referenceCell.textContent = reference;
        row.appendChild(referenceCell);

        const quantiteCell = document.createElement('td');
        quantiteCell.textContent = quantite;
        row.appendChild(quantiteCell);

        const imprimanteCell = document.createElement('td');
        imprimanteCell.textContent = imprimante;
        row.appendChild(imprimanteCell);

        stockTableBody.appendChild(row);
    });
});
