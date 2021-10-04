const a = document.querySelectorAll('input')[0]
const b = document.querySelectorAll('input')[1]
const add = document.querySelector('#add')
const multiply = document.querySelector('#multiply')
const resultbox = document.querySelector('.result')

const sum = () => {
    const result = parseInt(a.value) + parseInt(b.value)  
    resultbox.innerHTML =result
}

const product = () => {
    const result = parseInt(a.value) * parseInt(b.value)  
    resultbox.innerHTML =result
}

const calculate = (event,operation) => {
    console.log(event.target)

    if(operation=='add'){
        console.log('adding')
    }else if(operation=='multiply'){
        console.log('multiply')
    }
}

add.addEventListener('click', (event) => calculate(event,'add'))
multiply.addEventListener('click', (event) => calculate(event,'multiply'))


