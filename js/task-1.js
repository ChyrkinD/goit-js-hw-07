const list = document.querySelector('#categories');
const listChildrens = list.children;
console.log(`Number of categories: ${listChildrens.length}`);
Array.from(listChildrens).forEach((item) => {
    const title = item.querySelector('h2').textContent;
    const elements = item.querySelectorAll('li').length;
    console.log(`Category: ${title}`);
    console.log(`Elements: ${elements}`);
});