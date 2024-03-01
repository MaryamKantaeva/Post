const postId = window.location.search.substring(4)
const containerXl = document.querySelector('.mb-3')
const containerXll = document.querySelector('.mb-4')

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
.then((res) => res.json()).then((res) => renderPost(res))

fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
.then((res) => res.json()).then((res) => renderComments(res))

const getUserName = (userId) => {
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((res) => res.json()).then((res) => res)
}

const renderPost = async (data) => {
    const div = document.createElement('div')
    div.classList.add('card-body')
    const h4 = document.createElement('h4')
    h4.classList.add('card-title')
    h4.innerText = data.title
    div.append(h4)
    const p = document.createElement('p')
    p.classList.add('card-text')
    p.innerText = data.body
    div.append(p)
    const user = await getUserName(data.userId)
    const h6 = document.createElement('h6')
    h6.classList.add('card-title-h6')
    h6.innerText = `Author: ${user.username}`
    div.append(h6)
    containerXl.append(div)
}

const renderComments = (comments) => {
    for(let comment of comments){
        const div1 = document.createElement('div')
        div1.classList.add('card')
        const h5 = document.createElement('h5')
        h5.classList.add('card-header')
        h5.innerText = comment.email
        div1.append(h5)
        const div2 = document.createElement('div')
        div2.classList.add('card-body')
        const h5Small = document.createElement('h5')
        h5Small.classList.add('card-title')
        h5Small.innerText = comment.name
        div2.append(h5Small)
        const p = document.createElement('p')
        p.classList.add('card-text')
        p.innerText = comment.body
        div2.append(p)
        div1.append(div2)
        containerXll.append(div1)
    }
}