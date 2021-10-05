const a = document.querySelectorAll('input')[0]
const b = document.querySelectorAll('input')[1]
const add = document.querySelector('#add')
const sub = document.querySelector('#sub')
const multiply = document.querySelector('#multiply')
const result = document.querySelector('.result')

/*const sum = () => {
    const result = parseInt(a.value) + parseInt(b.value)  
    resultbox.innerHTML =result
}

const product = () => {
    const result = parseInt(a.value) * parseInt(b.value)  
    resultbox.innerHTML =result
}*/

const calculate = (event,operation) => {
    //if(operation=='add'){
        //console.log('adding')
    //}else if(operation=='multiply'){
        //console.log('multiply')
    //}
    console.log(event.target)
    switch(operation){
        case "add":
            resultbox.innerHTML= parseInt(a.value) + parseInt(b.value)
            break
        case "multiply":
            result.innerHTML= parseInt(a.value) * parseInt(b.value)
            break
        case "sub":
            result.innerHTML= parseInt(a.value) - parseInt(b.value)
            break
        default:
            result.innerHTML= "not a valid operation"
    }
}

add.addEventListener('click', (event) => calculate(event,'add'))
multiply.addEventListener('click', (event) => calculate(event,'multiply'))
sub.addEventListener('click', (event) => calculate(event,'sub'))


