//function greet(name = 'john', age = 99){
    //console.log(name,age)
    //console.log('hey' + name + "your age is" age)
    //console.log('hello')


//greet('Shashwat',21)

//function add(a=0,b=0){
    //var sum=a+b;
    //return sum;
//}

/*var add = function (a=0,b=0){
    var sum=a+b;
    return sum;
}

console.log(add(10,20))

var add = (a=0,b=0) => {
    return a+b
}

var add = (a=0,b=0) => a+b

console.log(add(10, 20))

const greet = name => 'h1' + name
console.log(greet('prabhakaran'))*/

//var arr = ['go to the gym', 'eat food', 'clean house']
/*for(var i=0;i<arr.length;i++){
    console.log(arr[i])
}*/

//const greet = age => 'hello' + age
//console.log(greet('Shashwat'))

//var callbackfunction = (element, index)=>{
    //console.log(element,index)
//}

//arr.forEach((element, index) => 
    //console.log(element,index)
//)

var body= document.querySelector('body')
var button= document.querySelector('button')

const callbackfunc = (event) => {
    body.classList.toggle('dark')
}

button.addEventListener('click', callbackfunc)




