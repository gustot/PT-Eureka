const navbarNav = document.querySelector('.navbar-nav');
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click',function(e){
    if(!hamburger.contains(e.target)&& !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});

function sendMail (){
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("massage").value,
    };


const serviceID = "service_a00r5eg";
const templateID = "template_ksktx68";

emailjs
.send(serviceID,templateID,params)
.then ((res) =>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("massage").value = "";
        alert("your message sent succes");
    })
    .catch((err) => console.log(err));
}