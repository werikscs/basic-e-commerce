setupMenuSelection();
setupCartVisibility();
setupFloatCartButton();


function setupCartVisibility() {

	const cart = document.getElementById('cart');
	const vitrine = document.getElementById('vitrine');

	//se começar no modo desktop, aparece o carrinho vazio por padrão
	if (innerWidth >= 1024) {
		cart.classList.remove('closed');
	}

	updateCartLayout();

	//se modo desktop, aparece carrinho
	//se modo mobile, carrinho não começa aberto
	window.addEventListener('resize', function () {

		cart.classList.remove('opened');

		if (innerWidth < 1024) {
			cart.classList.add('closed');
			updateCartLayout();
		}

		if (innerWidth >= 1024) {
			cart.classList.remove('closed');
			updateCartLayout();
		}

		vitrine.classList.remove('closed');

	});

	vitrine.addEventListener('click', function () {
		if (cart.classList.contains('opened')) {
			cart.classList.remove('opened');
			cart.classList.add('closed');
		}
	})

}

function setupFloatCartButton() {
	const cart = document.getElementById('cart');
	const vitrine = document.getElementById('vitrine');

	const cartFloatButton = document.getElementById('cart-floatBtn');
	const cartCloseButton = document.getElementById('cart-btnMobile-closeCart');

	cartFloatButton.addEventListener('click', function () {

		if (innerWidth < 655) {
			vitrine.classList.add('closed');
		}

		if (cart.classList.contains('opened')) {
			cart.classList.add('closed');
			cart.classList.remove('opened');
		} else {
			cart.classList.remove('closed');
			cart.classList.add('opened');
		}

	});

	cartCloseButton.addEventListener('click', function () {
		cart.classList.add('closed');
		cart.classList.remove('opened');
		vitrine.classList.remove('closed');
	});

}

function isCartWithItems() {
	const cartWithItemsCollection = document.getElementById('cart-withItems');
	if (cartWithItemsCollection.childElementCount === 0) {
		return false;
	} else {
		return true;
	}
}

function updateCartLayout() {
	const cartWithoutItems = document.getElementById('cart-withoutItems');
	const cartWithItems = document.getElementById('cart-withItems')
	const cartPurchaseInfo = document.getElementById('cart-purchaseInfo');
	if (isCartWithItems()) {
		cartWithoutItems.classList.add('closed');
		cartWithItems.classList.remove('closed');
		cartPurchaseInfo.classList.remove('closed');
	} else {
		cartWithItems.classList.add('closed');
		cartPurchaseInfo.classList.add('closed');
		cartWithoutItems.classList.remove('closed');
	}
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
			hideNonSelectedItems(selectedLink);
		});
	}
}