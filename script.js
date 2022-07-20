let counter = 0

function handleIncrement() {
    counter++
    renderScreen()
}

function handleDecrement() {
    counter--
    renderScreen()
}

function renderScreen() {
    const result = document.querySelector("#resultado")
    result.innerText = counter
}

renderScreen()