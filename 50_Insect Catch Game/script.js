const screens = document.querySelectorAll('.screen')
const choose_insect_btns = document.querySelectorAll('.choose-insect-btn')
const game_container = document.querySelector('.game-container')
const start_btn = document.getElementById('start-btn')
const timeEl = document.getElementById('time')
const scoreEl = document.getElementById('score')
const message = document.getElementById('message')

let seconds = 0
let score = 0
let selected_insect = {}
let interval = 20
let myInterval = setInterval(increaseTime, 1000)

start_btn.addEventListener('click', () => {
    screens[0].classList.add('up')
})

choose_insect_btns.forEach(btn => {
    btn.addEventListener('click', () => {
        const img = btn.querySelector('img')
        const src = img.getAttribute('src')
        const alt = img.getAttribute('alt')
        selected_insect = {src, alt}
        screens[1].classList.add('up')
        setTimeout(createInsect, 1000)
        startGame()
    })
})

function startGame() {
    myInterval
}

function increaseTime() {
    let m = Math.floor(seconds / 60)
    let s = seconds % 60
    m = m < 10 ? `0${m}` : m
    s = s < 10 ? `0${s}` : s
    timeEl.innerHTML = `Time: ${m}:${s}`
    seconds++
}

function createInsect() {
    const insect = document.createElement('div')
    insect.classList.add('insect')
    const {x, y} = getRandomLocation()
    insect.style.top = `${y}px`
    insect.style.left = `${x}px`
    insect.innerHTML = `<img src="${selected_insect.src}" alt="${selected_insect.alt}" style="transform: rotate(${Math.random() * 360}deg)" />`

    insect.addEventListener('click', catchInsect)

    game_container.appendChild(insect)
 
}

function getRandomLocation() {
    const width = window.innerWidth
    const height = window.innerHeight
    const x = Math.random() * (width - 200) + 100
    const y = Math.random() * (height - 200) + 100
    return {x, y}
}

function catchInsect() {
    increaseScore()
    this.classList.add('caught')
    setTimeout(() => this.remove(), 2000)
    addInsects()
}


function addInsects() {
    setTimeout(createInsect, 500)
    setTimeout(createInsect, 1000)
}

function increaseScore() {
    score++
    if(score > 200){
        clearInterval(myInterval)
        const time = document.getElementById('time')
        message.innerHTML = `You Won!!! <br> ${time.innerText}`
        
        setTimeout(clearGame, 1050)

        setTimeout(() => {
            message.classList.add('visible')
        }, 1000)

        setTimeout(() => {
            document.addEventListener('click', () => {
                screens.forEach(screen => screen.classList.remove('up'))
            })
        },5000)
        
    }
    if(score >= interval) {
        message.classList.add('visible')
        setTimeout(hideMessage, 2000)
        interval += 20
    }
    scoreEl.innerHTML = `Score: ${score}`
}

function hideMessage() {
    message.classList.remove('visible')
}

function clearGame() {
    const insects = document.querySelectorAll('.insect')
    insects.forEach(insect => {
        insect.remove();
    })
}