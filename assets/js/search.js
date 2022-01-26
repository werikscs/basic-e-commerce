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

	for (const element of vitrine.children) {

		const elementText = element.querySelector('.card-productName').innerText;

		if (!re.test(elementText)) {
			element.classList.add('closed');
		} else {
			element.classList.remove('closed');
		}
	}
}

