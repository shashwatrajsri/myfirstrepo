const table = document.querySelector('table')
console.log(table)





fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(data => {
    data.forEach(user => {
        let newRow = document.createElement('tr')
        let dataID = document.createElement('td')
        let dataIDtextNode = document.createTextNode('user.id')
        dataID.appendChild(dataIDtextNode)
        newRow.appendChild(dataID)

        table.appendChild(newRow)
    })
})