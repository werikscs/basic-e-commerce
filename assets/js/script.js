function setupFloatButton() {

	const floatButton = document.getElementById('float-btn');
	const closeCartButton = document.getElementById('cart-btnMobile-closeCart');

	const cart = document.getElementById('cart');
	const vitrine = document.getElementById('vitrine');

	const cartWithItems = document.getElementById('cart-withItems');
	const cartWithoutItems = document.getElementById('cart-withoutItems');
	const cartPurchaseInfo = document.getElementById('cart-purchaseInfo');

	//Opening the cart
	floatButton.addEventListener('click', function () {

		const cartWithItemsIsEmpty = cartWithItems.children;

		if (!cartWithItemsIsEmpty.length) {
			cartPurchaseInfo.classList.add('closed');
			cartWithoutItems.classList.remove('closed');
		} else {
			cartPurchaseInfo.classList.remove('closed');
			cartWithoutItems.classList.add('closed');
		}

		cart.classList.remove('closed');
		vitrine.classList.add('closed');

	});

	//Closing the cart
	closeCartButton.addEventListener('click', function () {
		cart.classList.add('closed');
		vitrine.classList.remove('closed');
	});
}

function setupMenuSelection() {
	//Muda fundo da categoria selecionada
	const menuLinks = document.getElementsByClassName('menu-link');
	let selectedLink = menuLinks[0];
	for (const link of menuLinks) {
		link.addEventListener('click', function () {
			selectedLink.classList.remove('selected');
			link.classList.add('selected');
			selectedLink = link;
		})
	}
}

setupMenuSelection();
setupFloatButton();