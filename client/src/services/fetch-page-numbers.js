export const LEFT_PAGE = 'LEFT';
export const RIGHT_PAGE = 'RIGHT';
	
const range = (from, to, step = 1) => {
	let i = from;
	const range = [];

	while (i <= to) {
		range.push(i);
		i += step;
	}
	return range;
}

const fetchPageNumbers = (currentPage, totalPages, pageNeighbours) => {
	const totalNumbers = (pageNeighbours * 2) + 3;
	const totalBlocks = totalNumbers + 2;

	if (totalPages > totalBlocks) {

		const startPage = Math.max(2, currentPage - pageNeighbours);
		const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);
		let pages = range(startPage, endPage);

		const hasLeftSpill = startPage > 2;
		const hasRightSpill = (totalPages - endPage) > 1;
		const spillOffset = totalNumbers - (pages.length + 1);

		if (hasLeftSpill && !hasRightSpill) {
			const extraPages = range(startPage - spillOffset, startPage - 1);
				
			pages = [LEFT_PAGE, ...extraPages, ...pages];
		} else if (!hasLeftSpill && hasRightSpill) {
			const extraPages = range(endPage + 1, endPage + spillOffset);
			pages = [...pages, ...extraPages, RIGHT_PAGE];
		} else if (hasLeftSpill && hasRightSpill) {
			pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
		}		
		
		return [1, ...pages, totalPages];
	}
	return range(1, totalPages);
}

export default fetchPageNumbers;