//Initialize Firebase
var config = {
    apiKey: "AIzaSyAqBw9GPzolZ2zv_7doBAgoKc7hvQ-q0W0",
    authDomain: "profilesitecontactform.firebaseapp.com",
    databaseURL: "https://profilesitecontactform.firebaseio.com",
    projectId: "profilesitecontactform",
    storageBucket: "profilesitecontactform.appspot.com",
    messagingSenderId: "111010280588"
};
firebase.initializeApp(config);

//Reference messages collection
var messagesRef = firebase.database().ref('messages');

//Listen for form submit
document.getElementById('contactform1').addEventListener('submit', submitForm);

$('#alert').hide();

//Submit Form
function submitForm(e) {
    e.preventDefault();

    // Get Values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var project = getInputVal('project');
    var info = getInputVal('info');

    //Save Message
    saveMessage(name, email, phone, project, info);

    $('.alert').show();
}


function clearForm(e) {
    e.preventDefault();
    document.getElementById('contactForm1').reset();
}

//Function to go get form vaules
function getInputVal(id) {
    return document.getElementById(id).value;
}

//Save message to Firebase
function saveMessage(name, email, phone, project, info) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        phone: phone,
        project: project,
        info: info,
    });
}