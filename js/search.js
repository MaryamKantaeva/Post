const searchTextPosts = window.location.search.substring(8).replaceAll('%20', ' ').toLowerCase()
const searchContainerPosts = document.querySelector('.search-containerPosts')

fetch(`https://jsonplaceholder.typicode.com/posts?title=${searchTextPosts}`)
.then((res) => res.json()).then((res) => renderResultPosts(res))

const renderResultPosts = (posts) => {
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
        div3.innerHTML += `<a href="comments.html?id=${post.id}" class="btn btn-primary">Open a post</a>`
        div1.append(div2)
        searchContainerPosts.append(div1)
    }
}

const searchTextUsers = window.location.search.substring(8)
const searchContainerUsers = document.querySelector('.search-containerUsers')

fetch(`https://jsonplaceholder.typicode.com/users?username=${searchTextUsers}`)
.then((res) => res.json()).then((res) => renderResultUsers(res))

const renderResultUsers = (users) => {
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
        tag.innerHTML += `<a href="user.html?id=${user.id}" class="btn btn-primary">Go to the user page</a>`
        div.append(tag)
        searchContainerUsers.append(div)
    }
}