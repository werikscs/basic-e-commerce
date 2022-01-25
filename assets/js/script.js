setupMenuSelection();
setupFloatCartButton();

function setupFloatCartButton() {

	const cartFloatButton = document.getElementById('cart-floatBtn');
	const closeCartButton = document.getElementById('cart-btnMobile-closeCart');

	const cart = document.getElementById('cart');
	const vitrine = document.getElementById('vitrine');

	const cartWithItems = document.getElementById('cart-withItems');
	const cartWithoutItems = document.getElementById('cart-withoutItems');
	const cartPurchaseInfo = document.getElementById('cart-purchaseInfo');

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