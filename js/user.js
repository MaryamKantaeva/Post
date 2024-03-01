const userId = window.location.search.substring(4)
const containerXl = document.querySelector('.container-m-top')
const postsContainer = document.querySelector('.row-cols-1')

fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
.then((res) => res.json()).then((res) => renderUser(res))

fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
.then((res) => res.json()).then((res) => renderPost(res))

const renderUser = async (data) => {
    const div = document.createElement('div')
    div.classList.add('card-body')
    const h5 = document.createElement('h5')
    h5.classList.add('card-title')
    h5.innerText = data.name
    div.append(h5)
    const p1 = document.createElement('p')
    p1.classList.add('card-text')
    p1.innerText = data.username
    div.append(p1)
    const p2 = document.createElement('p')
    p2.classList.add('card-text')
    p2.innerText = data.email
    div.append(p2)
    const p3 = document.createElement('p')
    p3.classList.add('card-text')
    p3.innerText = `Address: ${data.address.street},  ${data.address.suite},  ${data.address.city},  ${data.address.zipcode}.`
    div.append(p3)
    const p4 = document.createElement('p')
    p4.classList.add('card-text')
    p4.innerText = `Geo: ${data.address.geo.lat},  ${data.address.geo.lng}.`
    div.append(p4)
    containerXl.append(div)


}

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
        div3.innerHTML += `<a href="comments.html?id=${post.id}" class="btn btn-primary">Open a post</a>`
        div1.append(div2)
        postsContainer.append(div1)
    }
}