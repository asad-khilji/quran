const createNav = () => {
    let nav = document.querySelector('nav');

    nav.innerHTML = `
    <nav>
        <a href="Quran.html">Quran</a>
        <a href=#">Seerah</a>
        <a href="Books.html">Islamic Books</a>
    </nav>
    `;
}

createNav();
