const purchaseInfoObj = { 'quantidade': 0, 'total': 0 };

const cartQuantityValue = document.getElementById('cart-quantityValue');
const cartTotalValue = document.getElementById('cart-totalValue');
const cartIconQuantity = document.getElementById('cart-icon-quantity');

function updatePurchaseInfo(element, action) {
	const elementPrice = element.querySelector('.cart-productPrice').innerText.slice(3);
	const cartProductsQuantity = document.getElementById('cart-withItems').children.length;

	purchaseInfoObj['quantidade'] = cartProductsQuantity;

	if (action === 'add') {
		purchaseInfoObj['total'] += +elementPrice;
	} else {
		purchaseInfoObj['total'] -= +elementPrice;
	}

	cartQuantityValue.innerText = purchaseInfoObj['quantidade'];
	cartTotalValue.innerText = 'R$ ' + purchaseInfoObj['total'];

	cartIconQuantity.innerText = purchaseInfoObj['quantidade'];
}