const header = document.createElement("header"),
    h1 = document.createElement("h1");
h1.textContent = "Customer Directory";
header.appendChild(h1);
document.body.appendChild(header);


const container = document.getElementById("container")
console.log(container)

for (customer of customers) {

    const card = document.createElement('div')
    container.appendChild(card)

    const customerImg = document.createElement('img')
    customerImg.src=customer.picture.medium
    card.appendChild(customerImg)

    const customerName = document.createElement('h3');
    customerName.innerText = customer.name.first + ' ' + customer.name.last
    card.appendChild(customerName)

    const customerEmail = document.createElement('p')
    customerEmail.innerText = customer.email
    card.appendChild(customerEmail)

    const customerAddress = document.createElement('p')
    customerAddress.innerText = customer.location.street.number + ' ' + customer.location.street.name  
    card.appendChild(customerAddress)

    const customerCity = document.createElement('p')
    customerCity.innerText = customer.location.city + ' ' + customer.location.state + ' ' + customer.location.postcode
    card.appendChild(customerCity)

    const customerDob = document.createElement('p')
    customerDob.innerText = 'DOB: ' + moment(customer.dob.date).format("MMM DD,YYYY")
    card.appendChild(customerDob)

    const customerReg = document.createElement('p')
    customerReg.innerText = 'Member since: ' + moment(customer.registered.date).format("MMM DD, YYYY")
    card.appendChild(customerReg)
}

