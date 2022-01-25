function initFloatButton() {

	const floatButton = document.getElementById('float-btn');
	const closeCartButton = document.getElementById('cart-btnMobile-toggle');

	const cart = document.getElementById('cart');
	const vitrine = document.getElementById('vitrine');

	const cartWithItems = document.getElementById('cart-withItems');
	const cartWithoutItems = document.getElementById('cart-withoutItems');
	const cartPurchaseInfo = document.getElementById('cart-purchaseInfo');

	//Opening the cart
	floatButton.addEventListener('click', function () {

		const cartWithItemsIsEmpty = cartWithItems.children;
		console.log(cartWithItemsIsEmpty.length);

		if (!cartWithItemsIsEmpty.length) {
			cartPurchaseInfo.classList.add('closed');
			cartWithoutItems.classList.remove('closed');
		} else {
			cartPurchaseInfo.classList.remove('closed');
			cartWithoutItems.classList.add('closed');
		}

		cart.classList.add('opened');
		vitrine.classList.add('closed');

	});

	//Closing the cart
	closeCartButton.addEventListener('click', function () {
		cart.classList.remove('opened');
		vitrine.classList.remove('closed');
	});
}

init();