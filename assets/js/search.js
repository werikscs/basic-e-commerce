const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementsByClassName('searchBtn');
const vitrine = document.getElementById('vitrine');

searchBtn[0].addEventListener('click', function () {
	const textToSearch = searchInput.value;
	hideNonSearchedItems(textToSearch);
});

searchBtn[1].addEventListener('click', function () {
	const textToSearch = searchInput.value;
	hideNonSearchedItems(textToSearch);
});

function hideNonSearchedItems(textToSearch) {
	const re = new RegExp(textToSearch, 'i');

	for (const vitrineCard of vitrine.children) {
		const productName = vitrineCard.querySelector('.card-productName').innerText;
		if (!re.test(productName)) {
			vitrineCard.classList.add('closed');
		} else {
			vitrineCard.classList.remove('closed');
		}
	}
}

