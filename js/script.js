const usersContainer = document.querySelector('.users')

fetch('https://jsonplaceholder.typicode.com/users')
.then((res) => res.json()).then((res) => renderUser(res))

const renderUser = (users) => {
    for (let user of users)  {
        const div = document.createElement('div')
        div.classList.add('card')
        const tag = document.createElement('div')
        tag.classList.add('card-body')
        const cardTitle = document.createElement('h5')
        cardTitle.classList.add('card-title')
        cardTitle.innerText = user.name
        tag.append(cardTitle)
        const cardText1 = document.createElement('p')
        cardText1.classList.add('card-text')
        cardText1.innerText = user.username
        tag.append(cardText1)
        const cardText2 = document.createElement('p')
        cardText2.classList.add('card-text')
        cardText2.innerText = user.email
        tag.append(cardText2)
        const cardText3 = document.createElement('p')
        cardText3.classList.add('card-text')
        cardText3.innerText = user.address.zipcode
        tag.append(cardText3)
        tag.innerHTML += `<a href="user.html" class="btn btn-primary">Go to the user page</a>`
        div.append(tag)
        usersContainer.append(div)
    }
}

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
        div3.innerHTML += `<a href="pages/comments.html" class="btn btn-primary">Open a post</a>`
        div1.append(div2)
        postsContainer.append(div1)
    }
}