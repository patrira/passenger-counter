let counterEl = document.getElementById("counter-el")

let saveEl = document.getElementById("save-el")
console.log(counterEl)
console.log(saveEl)
count = 0

function myIncrement() {
    
    count = count + 1
    counterEl.textContent = count
}

function save() {
    let countStr = count + " - "

    saveEl.textContent += countStr
    counterEl.textContent = 0
    count = 0

    
}