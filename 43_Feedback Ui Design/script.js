const panel = document.getElementById("panel")
const sendBtn = document.getElementById('send')
const ratings = document.querySelectorAll('.rating')
const ratingsContainer = document.querySelector('.ratings-container')
let selectedRating = 'Satisfied'


// this is called event bubbling
ratingsContainer.addEventListener('click',(e) => {
    if(e.target.parentNode.classList.contains('rating')){
        removeActive()
        e.target.parentNode.classList.add('active')
        selectedRating = e.target.nextElementSibling.innerHTML
    }
})

sendBtn.addEventListener('click', (e) => {
    panel.innerHTML = `
        <i class= "fas fa-heart"></i>
        <strong>Thank You!</strong>
        <br />
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support</p>
    `
})

function removeActive() {
    ratings.forEach(rating => rating.classList.remove('active'))
}