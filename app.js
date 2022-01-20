document.getElementById("color-selector").addEventListener('change', changeColor)

function changeColor(event) {
    console.log(event.target.value)
    const elements = document.getElementsByClassName('color')
    console.log(Array.from(elements))
    Array.from(elements).forEach((e) => {
        e.style.color = event.target.value
    })
}