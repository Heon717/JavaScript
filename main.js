let black_background = document.querySelector('.black-background');
let nav_sub_btn = document.querySelector('.nav-sub-btn');
let modal_close = document.querySelector('.modal-close');
let nav_sub = document.getElementById('nav-sub');
let form_email = document.querySelector('.form-email');
let form_password = document.querySelector('.form-password');
let alert_email = document.querySelector('.alert-email');
let alert_password = document.querySelector('.alert-password');

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

let slide_2 = document.querySelector('.slide-2');
let slide_container = document.querySelector('.slide-container');
slide_2.addEventListener('click', function() {
    // slide_container.animate.
})
