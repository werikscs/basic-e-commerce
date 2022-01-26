function addProductToCart(element) {
	const divCardCart = createCartElement(element);
	const divCartWithItems = document.getElementById('cart-withItems');
	divCartWithItems.appendChild(divCardCart);
	updateCartLayout();
}

function removeProductFromCart(element) {
	const divCartWithItems = document.getElementById('cart-withItems');
	divCartWithItems.removeChild(element);
	updateCartLayout();
}

function createCartElement(element) {
	const productImg = element.querySelector('.card-img').getAttribute('src');
	const productName = element.querySelector('.card-productName').innerText;
	const productPrice = element.querySelector('.card-productPrice').innerText;

	const divCartItem = document.createElement('div');
	divCartItem.classList.add('cart-item');

	const divCartImgContainer = document.createElement('div');
	divCartImgContainer.classList.add('cart-imgContainer');

	const imgCart = document.createElement('img');
	imgCart.classList.add('cart-img');

	const divCartProductInfo = document.createElement('div');
	divCartProductInfo.classList.add('cart-productInfo');

	const pCartProductName = document.createElement('p');
	pCartProductName.classList.add('cart-productName');

	const pCartProductPrice = document.createElement('p');
	pCartProductPrice.classList.add('cart-productPrice');

	const btnRemoveFromCart = document.createElement('button');
	btnRemoveFromCart.classList.add('cart-removeFromCart');

	imgCart.src = productImg;
	divCartImgContainer.appendChild(imgCart);

	pCartProductName.innerText = productName;
	pCartProductPrice.innerText = productPrice;

	btnRemoveFromCart.innerText = "Remover produto";
	btnRemoveFromCart.addEventListener('click', function () {
		removeProductFromCart(divCartItem);
	});

	divCartProductInfo.appendChild(pCartProductName);
	divCartProductInfo.appendChild(pCartProductPrice);
	divCartProductInfo.appendChild(btnRemoveFromCart);

	divCartItem.appendChild(divCartImgContainer);
	divCartItem.appendChild(divCartProductInfo);

	return divCartItem;
}