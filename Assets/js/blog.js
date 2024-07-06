const body = document.body;
// creates a cost variable 
const blogData = getLocalStorage();
function displayData(index) {
    const postContainer = document.createElement('section');
    const postHeader = document.createElement('header');
    const h1E1 = document.createElement('h1');
    h1E1.textContent = blogData [index] .blogTitle;
    const postContent = document.createElement('p');
    postContent.textContent = blogData[index].content;
    const postUsername = document.createElement('p');
    postUsername.textContent = 'posted by ${blogData[index].userName}';
    
}