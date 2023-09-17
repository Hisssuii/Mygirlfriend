function changePage(pageNumber) {
    // Hide all pages
    const pages = document.getElementsByClassName('page');
    for (let i = 0; i < pages.length; i++) {
        pages[i].style.display = 'none';
    }

    // Show the selected page
    document.getElementById(`page${pageNumber}`).style.display = 'block';
}
