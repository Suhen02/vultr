function submitForm(event) {
    event.preventDefault();

    // Fetching form data
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const email = document.getElementById('email').value;
    const contactNumber = document.getElementById('contactNumber').value;
    const bloodType = document.getElementById('bloodType').value;

    // Here you can handle form submission, like sending it to a server or displaying a success message
    console.log(`Form submitted with data:
    First Name: ${firstName}
    Last Name: ${lastName}
    Date: ${date}
    Time: ${time}
    Email: ${email}
    Contact Number: ${contactNumber}
    Blood Type: ${bloodType}`);
}
