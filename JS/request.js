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

    const submitBtn = document.getElementById('submit');
    const resetBtn = document.getElementById('reset');

    submitBtn.disabled = true;
    resetBtn.disabled = true;
    
    submitBtn.style.cursor = "not-allowed";
    resetBtn.style.cursor = "not-allowed";

    submitBtn.textContent = "Submitting...";
    
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
        const message = await response.text();

        if (response.ok && message === "Done") {
            submitBtn.textContent = "Success";
            alert(`Hello ${person.firstName}, your request has been sent to us. Please check your email for confirmation.`);
            location.href = "../index.html";
        }
        else {
            submitBtn.textContent = "Failed";
            throw new Error(`Server responded with status ${response.status} & message ${message}`);
        }
    } catch (err) {
        console.error("Error when sending request to back-end:", err.message);
        alert(`Hello ${person.firstName}, there was an error when sending your request. Please try again later.`);
    } finally {
        submitBtn.textContent = "Submit";

        submitBtn.disabled = false;
        resetBtn.disabled = false;

        submitBtn.style.cursor = "pointer";
        resetBtn.style.cursor = "pointer";
    }
};
