const container = document.getElementById("container")
console.log(container)

const customer = customers[0]
console.log(customer)
const card = document.createElement('div')
card.id = customer.email

const customerName = document.createElement('h3');

customerName.innerText = customer.name.first + ' ' + customer.name.last

container.appendChild(card)

card.appendChild(customerName)

const customerEmail = document.createElement('p')
customerEmail.innerText = customer.email

// for (customer of customers) {
//     const card = document.createElement('div')
//     card.id = customer.email
//     const customerName = document.createElement('h3');
//     container.appendChild(card)
//     customerEmail.innerText = customer.email

// }

