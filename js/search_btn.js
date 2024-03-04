const btn = document.querySelector('.btn')
const formControl = document.querySelector('.form-control')

const searchForm = (e) => {
    e.preventDefault()
    window.location.href = `${window.location.origin}/pages/search.html?search=${formControl.value}`
}

btn.addEventListener('click', searchForm)