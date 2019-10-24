
function login() {
    //let language = (i18next.language == 'lk' ? 'si' : i18next.language);
    window.location = "https://portal.sinric.pro/login"; // 
}

function signup() {
    // Pass the selected language to the registration page
    //console.log("Selected language: ", i18next.language);
    //let language = (i18next.language == 'lk' ? 'si' : i18next.language);
    //window.location = "https://portal.sinric.pro/register?lang="+ language;
    //window.location = "http://localhost:4200/register?lang="+ language;
    window.location = "https://portal.sinric.pro/register";
}

const profile1 = document.querySelector('.image-link1');
const profile2 = document.querySelector('.image-link2');
const profile3 = document.querySelector('.image-link3');

profile1.addEventListener('click',()=>{
    window.open('https://github.com/imdhanush');
});


profile2.addEventListener('click',()=>{
    window.open('https://github.com/sivar2311');
});

profile3.addEventListener('click',()=>{
    window.open('https://github.com/kakopappa');
}); 
