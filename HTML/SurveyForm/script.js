function submitForm() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var dob = document.getElementById('dob').value;
    var country = document.getElementById('country').value;
    var male = document.getElementById('male').checked;
    var female = document.getElementById('female').checked;
    var profession = document.getElementById('profession').value;
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;

    if (!firstName || !lastName || !dob || !country || (!male && !female) || !profession || !email || !mobile) {
        alert('Please fill in all fields');
        return;
    }

    var popupContent = '<h2>Survey Form Submission</h2>';
    popupContent += '<p><strong>First Name:</strong> ' + firstName + '</p>';
    popupContent += '<p><strong>Last Name:</strong> ' + lastName + '</p>';
    popupContent += '<p><strong>Date of Birth:</strong> ' + dob + '</p>';
    popupContent += '<p><strong>Country:</strong> ' + country + '</p>';
    popupContent += '<p><strong>Gender:</strong> ' + (male ? 'Male' : 'Female') + '</p>';
    popupContent += '<p><strong>Profession:</strong> ' + profession + '</p>';
    popupContent += '<p><strong>Email:</strong> ' + email + '</p>';
    popupContent += '<p><strong>Mobile Number:</strong> ' + mobile + '</p>';

    var popup = document.getElementById('popup');
    popup.innerHTML = popupContent + '<button onclick="closePopup()">OK</button>';
    popup.style.display = 'block';

    resetForm();
}

function resetForm() {
    document.getElementById('surveyForm').reset();
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}