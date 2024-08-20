function Request(firstName, lastName, email, phoneNo, address, designs) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phoneNo = phoneNo;
    this.address = address;
    this.designs = designs;
}

document.getElementById('submit').onclick = async function() {
    const person = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value
    };
    const contact = {
        email: document.getElementById('email').value,
        phoneNo: document.getElementById('phone').value
    };
    const address = document.getElementById('address').value;
    const design = document.getElementById('designs').value;

    const newRequest = new Request(person.firstName, person.lastName, contact.email, contact.phoneNo, address, design);

    alert(`Hello ${person.firstName}, your request has been sent to us. We will contact you shortly.`);
};