function Request(firstName, lastName, email, phoneNo, address, designID) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phoneNo = phoneNo;
    this.address = address;
    this.designID = designID;
}

document.getElementById('form').onsubmit = async function(event) {
    event.preventDefault();
    
    const person = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value
    };
    const contact = {
        email: document.getElementById('email').value,
        phoneNo: document.getElementById('phone').value
    };
    const address = document.getElementById('address').value;
    const designID = document.getElementById('designs').value;

    const newRequest = new Request(person.firstName, person.lastName, contact.email, contact.phoneNo, address, designID);

    try {
        const response = await fetch('https://buildup-backend.onrender.com/requests/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newRequest)
        });

        if (response.ok) {
            alert(`Hello ${person.firstName}, your request has been sent to us. Please check your email.`);
            location.href = "../index.html";
        }
        else {
            const errorMessage = await response.text();
            throw new Error(`Server responded with status ${response.status}: ${errorMessage}`);
        }
    } catch (err) {
        console.error("Error when sending request to back-end:", err.message);
        alert(`Hello ${person.firstName}, there was an error when sending your request. Please try again later`);
    }
};