const resetButton = document.querySelector('#reset-button')
const daysInput = document.querySelector('#days-text')

resetButton.addEventListener('click', function () {
    daysInput.value = 0
})

document.querySelector('#form-time').addEventListener('submit', function (e) {
    e.preventDefault()

    const getDate = new Date()
    const timeStampOfActualDate = getDate.getTime()


    const daysToCompleteProject = e.target.elements.days.value
    let daysInMilliseconds = 1000 * 60 * 60 * 24 * daysToCompleteProject

    const tempDate = timeStampOfActualDate + daysInMilliseconds
    const dateToPrint = new Date(tempDate)
    const dateEl = document.createElement('p')

    dateEl.setAttribute('id', 'item-project-date')
    dateEl.textContent = `Days needed: ${daysToCompleteProject} -- Your project will be finished on: ${ dateToPrint.getDate() } / ${ dateToPrint.getMonth() + 1 } / ${ dateToPrint.getFullYear() }`
    document.querySelector('#output-text').appendChild(dateEl)

    daysInput.value = 0
})

document.querySelector('#clear-button').addEventListener('click', function () {
    const list = document.getElementById('output-text')

    while (list.lastElementChild) {
        list.removeChild(list.lastElementChild)
    }

    daysInput.value = 0

})