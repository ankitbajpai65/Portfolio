window.addEventListener('scroll', function () {
    if (window.scrollY > 1) {
        document.getElementById('hamburger').classList.add("mobNav");
        document.getElementById('navSec').classList.add("navbarColor");
    } else {
        document.getElementById('hamburger').classList.remove("mobNav");
        document.getElementById('navSec').classList.remove("navbarColor");
    }
});

// SUBMIT BUTTON 
// const submitBtn = document.getElementById('submitBtn');
// submitBtn.addEventListener('submit', function (e) {
//     alert("Your form has been submitted!");
//     function removeVal() {
//         document.querySelectorAll('.form').forEach(element => {
//             element.value = "";
//         });
//     }
//     setTimeout(removeVal, 500);
// });
// const validateName = () => {
//     const string = document.getElementById('name');
//     let regex = /^[a-zA-Z ]+$/;
//     if (!regex.test(string.value)) {
//         alert("Please enter valid name!");
//         string.style.border = "2px solid red";
//         return false;
//     }
//     string.style.border = "";
// }
// const validateEmail = () => {
//     const email = document.getElementById('email');
//     let regex = /^[a-zA-Z0-9._]+@+[a-zA-Z0-9._]+\.[a-zA-Z]{2,4}$/;
//     if (!regex.test(email.value)) {
//         alert("Please enter valid email id!");
//         email.style.border = "2px solid red";
//         return false;
//     }
//     email.style.border = "";
// }
// const validateNum = () => {
//     const num = document.getElementById('mobile');
//     let regex = /^[0-9]{10}$/;
//     if (!regex.test(num.value)) {
//         alert("Please enter valid mobile number!");
//         num.style.border = "2px solid red";
//         return false;
//     }
//     num.style.border = "";
// }
const validate = () => {
    submitted = true;
    // const name = document.myForm.name;
    // const email = document.myForm.email;
    // const mobile = document.myForm.mobile;
    // const message = document.myForm.message;

    // console.log("message ", message.value.length <= 0);
    // console.log("email ", email.value.length <= 0);
    // console.log("mobile ", mobile.value.length <= 0);
    // console.log("name ", name.value.length <= 0);
    // if ((message.value.length <= 0) || (email.value.length <= 0) || (mobile.value.length <= 0) || (name.value.length <= 0))
    //     alert("Please fill the form");
    //  else {
    //     alert('Your form has been submitted');
    //     function removeVal() {
    //         document.querySelectorAll('.form').forEach(element => {
    //             element.value = "";
    //         });
    //     }
    //     setTimeout(removeVal, 1000);
    // }

    // if (name.value.length <= 0) {
    //     alert("Name is required");
    //     name.focus();
    //     return false;
    // }
    // if (mobile.value.length <= 0) {
    //     alert("Mobile is required");
    //     mobile.focus();
    //     return false;
    // }
    // if (email.value.length <= 0) {
    //     alert("Email is required");
    //     email.focus();
    //     return false;
    // }
    // if (message.value.length <= 0) {
    //     alert("Message is required");
    //     message.focus();
    //     return false;
    // }
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