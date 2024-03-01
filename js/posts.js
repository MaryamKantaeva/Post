const postsContainer = document.querySelector('.row-cols-1')
        
fetch('https://jsonplaceholder.typicode.com/posts')
.then((res) => res.json()).then((res) => renderPost(res))
        
const renderPost = (posts) => {
    for (let post of posts)  {
        const div1 = document.createElement('div')
        div1.classList.add('col')
        const div2 = document.createElement('div')
        div2.classList.add('card')
        const div3 = document.createElement('div')
        div3.classList.add('card-body')
        div2.append(div3)
        const cardTitle = document.createElement('h5')
        cardTitle.classList.add('card-title')
        cardTitle.innerText = post.title
        div3.append(cardTitle)
        const cardText = document.createElement('p')
        cardText.classList.add('card-text')
        cardText.innerText = post.body
        div3.append(cardText)
        div3.innerHTML += `<a href="pages/comments.html?id=${post.id}" class="btn btn-primary">Open a post</a>`
        div1.append(div2)
        postsContainer.append(div1)
    }
}