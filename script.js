const form = document.getElementById('form');
const productName = document.getElementById('productName');
const productPrice = document.getElementById('productPrice');
const productType = document.getElementById('productType');
const errorsDiv = document.getElementById('errors');
const productsDiv = document.getElementById('products');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    errorsDiv.innerHTML = '';
    let errors = [];

    const name = productName.value.trim();
    let price = productPrice.value.trim();
    const category = productType.value;

    if (name === '' || price === '' || category === '') {
        errors.push('Nenhum campo pode estar vazio!');
    }

    price = price.replace(',', '.');
    const priceNumber = Number(price);

    if (isNaN(priceNumber) || priceNumber <= 0) {
        errors.push('O preço deve ser maior que R$ 00,00!');
    }

    if(price.split('.')[1]?.length !== 2) errors.push('O preço deve ter duas casas decimais!')

    if (errors.length > 0) {
        errors.forEach(error => {
            errorsDiv.innerHTML += `<p style="color:red;">${error}</p>`;
        });
    } else {
        let productHTML = `<div class="card" style="padding: 5px; margin: 5px 0;">`;

        if (category === 'Tecnologia') {
            productHTML += `<span style="font-weight: bold;">Produto: ${name} - R$ ${price} - Categoria: ${category}</span>`;
        } else if (category === 'Alimentos') {
            productHTML += `<span style="background-color: yellow;">Produto: ${name} - R$ ${price} - Categoria: ${category}</span>`;
        } else {
            productHTML += `<span>Produto: ${name} - R$ ${price} - Categoria: ${category}</span>`;
        }

        productHTML += `</div>`;

        productsDiv.innerHTML += productHTML;

        form.reset();
    }
});