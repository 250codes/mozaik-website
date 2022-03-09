/**
 * Scrolls to an element with header offset
 */
const scrollto = (el) => {
	let header = select("#header");
	let offset = header.offsetHeight;

	if (!header.classList.contains("header-scrolled")) {
		offset -= 20;
	}

	let elementPos = select(el).offsetTop;
	window.scrollTo({
		top: elementPos - offset,
		behavior: "smooth",
	});
};

/**
 * Toggle .header-scrolled class to #header when page is scrolled
 */
let selectHeader = select("#header");
if (selectHeader) {
	const headerScrolled = () => {
		if (window.scrollY > 100) {
			selectHeader.classList.add("header-scrolled");
		} else {
			selectHeader.classList.remove("header-scrolled");
		}
	};
	window.addEventListener("load", headerScrolled);
	onscroll(document, headerScrolled);
}
