function hideNonSelectedItems(selectedElement) {
	const vitrine = document.getElementById('vitrine');
	const selectedElementText = selectedElement.innerText;

	for (const vitrineCard of vitrine.children) {
		const categoryTag = vitrineCard.querySelector('.card-categoryTag').innerText;
		if (selectedElementText === 'Todos') {
			vitrineCard.classList.remove('closed-header');
		} else if (categoryTag !== selectedElementText) {
			vitrineCard.classList.add('closed-header');
		} else {
			vitrineCard.classList.remove('closed-header');
		}
	}
}