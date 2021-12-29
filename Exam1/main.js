const black_background = document.querySelector('.black-background');
const nav_sub_btn = document.querySelector('.nav-sub-btn');
const modal_close = document.querySelector('.modal-close');
const nav_sub = document.getElementById('nav-sub');
const form_email = document.querySelector('.form-email');
const form_password = document.querySelector('.form-password');
const alert_email = document.querySelector('.alert-email');
const alert_password = document.querySelector('.alert-password');

nav_sub.style.opacity = 0.1;

// document.querySelector('.btn-primary').addEventListener('click', function(e) {
//     if(form_email.value == '') {
//         alert_email.style.display="block";
//         return e.preventDefault();
//     }
//     if(form_password.value == '') {
//         alert_password.style.display="block";
//         return e.preventDefault();
//     }
// });


document.querySelector('.btn-primary').addEventListener('click', function(e) {
    if(form_email.value == '') {
        alert("이메일을 입력해주세요 !");
        return e.preventDefault();
    } else if(/\S+@\S+\.\S+/.test(form_email.value) == false ) {
        alert("이메일형식이 아닙니다.")
        return e.preventDefault();
    }
    if(form_password.value == '') {
        alert("비밀번호를 입력해주세요 !");
        return e.preventDefault();
    } else if(/[A-Z]+/.test(form_password.value) == false) {
        alert("패스워드 형식이 아닙니다.")
        return e.preventDefault();
    }
    // 정규식과 동일하냐가 아닌 포홤되어있느냐 물어보는 것
});


modal_close.addEventListener('click',function() {
    black_background.style.display="none";
})


// function show() {
//     black_background.style.display = 'block';
// }
const show = () => {
    black_background.style.display = 'block';
}

nav_sub_btn.addEventListener('click',function(e){
    let count = 0;
    if (nav_sub.style.display == 'block') {
        nav_sub.style.display = 'none';
        return;
    } 
        nav_sub.style.display = 'block';
    let period = setInterval(function() {
        nav_sub.style.opacity = count;
        count = count + 0.1;
        if(count > 0.9) {
            clearInterval(period);
        }
    },100)
})

const slide_2 = document.querySelector('.slide-2');
const slide_container = document.querySelector('.slide_container');
const nav_menu = document.querySelector('.nav-menu');
const large_logo = document.querySelector('.large-logo');

window.addEventListener('scroll',function() {
        if (window.scrollY > nav_menu.offsetHeight) {
            nav_menu.className = 'nav-black';
            large_logo.className = 'small-logo';
        } else {
            nav_menu.classList.remove('nav-black');
            nav_menu.className = 'nav-menu';
            large_logo.className = 'large-logo';

        }
})

const tab_button = document.querySelectorAll('.tab-button');
const tab_content = document.querySelectorAll('.tab-content');

// for (let i = 0; i < tab_button.length; i++) {
//     tab_button[i].addEventListener('click',function() {;
//     tab_button.classList.remove('active');
//     tab_content.classList.remove('show');
//     tab_button[i].className = 'active';
//     tab_content[i].className = 'show';
// });
// }
// 바닐라js로는 아직 구현하지못하였음..

// 버튼을 클릭하면 active 클래스가 생성 되고 , 기존 active 가 있던 클래스를 삭제한다.

