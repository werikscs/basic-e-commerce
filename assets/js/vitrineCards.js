addProductsToVitrine(products);

function createVitrineElements(product) {
	const divCardVitrine = document.createElement('div');
	divCardVitrine.classList.add('vitrine-card');

	const divCardHeader = document.createElement('div');
	divCardHeader.classList.add('card-header')

	const imgCard = document.createElement('img');
	imgCard.classList.add('card-img');

	const divCardBody = document.createElement('div');
	divCardBody.classList.add('card-body');

	const pCardCategoryTag = document.createElement('p');
	pCardCategoryTag.classList.add('card-categoryTag');

	const pCardProductName = document.createElement('p');
	pCardProductName.classList.add('card-productName');

	const pCardProductDescription = document.createElement('p');
	pCardProductDescription.classList.add('card-productDescription');

	const pCardProductPrice = document.createElement('p');
	pCardProductPrice.classList.add('card-productPrice');

	const btnCardAddToCart = document.createElement('button');
	btnCardAddToCart.classList.add('card-addToCart');

	imgCard.src = product['img'];
	divCardHeader.appendChild(imgCard);

	pCardCategoryTag.innerText = product['categoryTag'];
	pCardProductName.innerText = product['name'];
	pCardProductDescription.innerText = product['description'];
	pCardProductPrice.innerText = "R$ " + product['price'];

	btnCardAddToCart.innerText = "Adicionar ao carrinho"
	btnCardAddToCart.addEventListener('click', function () {
		addProductToCart(divCardVitrine);
	});

	divCardBody.appendChild(pCardCategoryTag);
	divCardBody.appendChild(pCardProductName);
	divCardBody.appendChild(pCardProductDescription);
	divCardBody.appendChild(pCardProductPrice);
	divCardBody.appendChild(btnCardAddToCart);

	divCardVitrine.appendChild(divCardHeader);
	divCardVitrine.appendChild(divCardBody);

	return divCardVitrine;
}

function addProductsToVitrine(products) {

	const divVitrine = document.getElementById('vitrine');
	divVitrine.classList.add('vitrine');

	products.forEach(product => {
		const divCardVitrine = createVitrineElements(product)
		divVitrine.appendChild(divCardVitrine);
	});
}
