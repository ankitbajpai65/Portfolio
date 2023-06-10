window.addEventListener('scroll', function () {
    if (window.scrollY > 1) {
        document.getElementById('hamburger').classList.add("mobNav");
        document.getElementById('navSec').classList.add("navbarColor");
    } else {
        document.getElementById('hamburger').classList.remove("mobNav");
        document.getElementById('navSec').classList.remove("navbarColor");
    }
});

let profile = document.querySelector('#profile');
// let text = "Frontend Developer"
// let index = 0;
// let id = setInterval(() => {
//     profile.innerText = text.slice(0, index);
//     index > text.length ? index = 1 : index++;
// }, 200)

const typewriterEffect = () => {
    const words = [" a Frontend Developer", "an Aspiring Software Developer"];

    let wordCount = 0, letterCount = 0;
    let currentText = "", currentWord = "";

    let timeout = 200;
    let isDeleting = false;

    function type() {
        if (wordCount === words.length)
            wordCount = 0;

        currentWord = words[wordCount];

        if (isDeleting)
            currentText = currentWord.slice(0, --letterCount)
        else
            currentText = currentWord.slice(0, ++letterCount)

        profile.textContent = currentText;

        timeout = isDeleting ? 100 : 200;

        if (!isDeleting && currentText.length === currentWord.length) {
            timeout = 1000;
            isDeleting = true;
        }
        else if (isDeleting && currentText.length === 0) {
            timeout = 500;
            isDeleting = false;
            wordCount++;
        }
        setTimeout(type, timeout);
    }
    type();
}
typewriterEffect();

const validate = () => {
    submitted = true;

    const string = document.getElementById('name');
    let reg1 = /^[a-zA-Z ]+$/;
    if (!reg1.test(string.value)) {
        alert("Please enter valid name!");
        string.style.border = "2px solid red";
        return false;
    }
    string.style.border = "";

    const mail = document.getElementById('email');
    let reg2 = /^[a-zA-Z0-9._]+@+[a-zA-Z0-9._]+\.[a-zA-Z]{2,4}$/;
    if (!reg2.test(mail.value)) {
        alert("Please enter valid email id!");
        mail.style.border = "2px solid red";
        return false;
    }
    mail.style.border = "";

    const num = document.getElementById('mobile');
    let reg3 = /^[0-9]{10}$/;
    if (!reg3.test(num.value)) {
        alert("Please enter valid mobile number!");
        num.style.border = "2px solid red";
        return false;
    }
    num.style.border = "";

    const msg = document.getElementById('message');
    if (msg.value == "") {
        alert("Message is required");
        string.style.border = "2px solid red";
        return false;
    }
    msg.style.border = "";

    alert('Your form has been submitted successfully!');
    function removeVal() {
        document.querySelectorAll('.form').forEach(element => {
            element.value = "";
        });
    }
    setTimeout(removeVal, 1000);
}

// for mobile hamburger

function openNav() {
    document.getElementById('mobileDiv').style.height = '100%';
    document.getElementById('hamburger').style.display = 'none';
}
function closeNav() {
    document.getElementById('mobileDiv').style.height = '0%';
    document.getElementById('hamburger').style.display = '';
}