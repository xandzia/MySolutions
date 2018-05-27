const btnOneRow = document.getElementById('createOneRow')
btnOneRow.addEventListener('click', create)

const btnDoubleArray = document.getElementById('createDoubleArray')
btnDoubleArray.addEventListener('click', createDA)

const btnrandom = document.getElementById('random')
btnrandom.addEventListener('click', randomN)

function createDA(e) {
    let rowHtml = document.getElementById('row')
    let columnHtml = document.getElementById('column')
    doubleArray(rowHtml.value, columnHtml.value)
    e.preventDefault()
}

function randomN(e) {
    document.getElementById('table').innerHTML = '';
    doubleArray(getRandomInt(10), getRandomInt(10))
    e.preventDefault()    
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function create(e) {
    document.getElementById('table').innerHTML = '';
    let number = document.getElementById('number')
    createOneRow(number.value)
    e.preventDefault()
}

function doubleArray(rows, columns) {
    document.getElementById('table').innerHTML = '';
    for (let i = 0; i < columns; i++) {
        createOneRow(rows)
    }
}

function createOneRow(num) {
    let container = document.createElement("tr")
    let tr
    document.getElementById('table').appendChild(container)

    for (let i = 0; i < num; i++) {
        let text = i+1
        td = document.createElement("td")
        tr = document.createElement("tr")
        tr.className = "pink"
        tr.append(text)
        td.append(tr)
        container.append(td)
    }
}

