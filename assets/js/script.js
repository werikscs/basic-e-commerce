setupMenuSelection();
setupCartVisibilityAtResize();
setupFloatCartButton();


function setupCartVisibilityAtResize() {

	const cart = document.getElementById('cart');
	const vitrine = document.getElementById('vitrine');

	const cartFloatButton = document.getElementById('cart-floatBtn');
	const closeCartButton = document.getElementById('cart-btnMobile-closeCart');

	const cartWithItems = document.getElementById('cart-withItems');
	const cartWithoutItems = document.getElementById('cart-withoutItems');
	const cartPurchaseInfo = document.getElementById('cart-purchaseInfo');

	//se começar no modo desktop, aparece o carrinho vazio por padrão
	if (innerWidth >= 1125) {
		cart.classList.remove('closed');
	}

	//se modo desktop, aparece carrinho
	//se modo mobile, carrinho não começa aberto
	window.addEventListener('resize', function () {
		if (innerWidth < 1125) {
			cart.classList.add('closed');
		}

		if (innerWidth >= 1125) {
			cart.classList.remove('closed');
		}
	});

}

function setupFloatCartButton() {
	const cart = document.getElementById('cart');
	const vitrine = document.getElementById('vitrine');

	const cartFloatButton = document.getElementById('cart-floatBtn');
	const closeCartButton = document.getElementById('cart-btnMobile-closeCart');

	cartFloatButton.addEventListener('click', function () {
		cart.classList.remove('closed');
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
		});
	}
}