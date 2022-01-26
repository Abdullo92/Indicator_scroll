const scrollLine = document.querySelector('.scroll');

window.onscroll = () => {
    scrollIndocator();
};

function scrollIndocator() {
    // the same -->> window.scrollY
    const top = document.documentElement.scrollTop;
    // do minus between -->> scrollHeight - clientHeight <<--
    const height = document.documentElement.scrollHeight -
                   document.documentElement.clientHeight;
    

    const scrollcounter = (top / height) * 100;           

    scrollLine.style.width = scrollcounter + '%'

}