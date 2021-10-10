let Name = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve('Shashwat')
    },3000)
})

Name.then(name => {console.log(name)})