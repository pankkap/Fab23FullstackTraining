export class Data
{
    constructor(name, id, money)
    {
        this.name = name
        this.id = id
        this.money= money
    }
    getDetails()
    {
        var newDiv = document.createElement('div')
        newDiv.innerHTML = `<p>${this.name}</p> <p>${this.id}</p> <p>${this.money}</p>`
        document.querySelector('.code').appendChild(newDiv)

        console.log(`Name: ${this.name}\nAge: ${this.id}\nSalary: ${this.money}`)
    }
}