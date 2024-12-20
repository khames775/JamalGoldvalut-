// تغيير الوضع بين النهار والليل
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

themeToggleBtn.addEventListener('click', () => {
    if (document.body.classList.contains('dark-theme')) {
        document.body.classList.remove('dark-theme');
        themeIcon.textContent = '☀️'; // أيقونة النهار
    } else {
        document.body.classList.add('dark-theme');
        themeIcon.textContent = '🌙'; // أيقونة الليل
    }
});

// تسجيل الدخول عبر جوجل (توضيحي فقط، يجب أن تكون لديك API Google)
document.querySelector('.google-btn').addEventListener('click', () => {
    alert("تسجيل الدخول عبر جوجل سيتم مستقبلاً!");
});

// تسجيل الدخول عبر فيسبوك (توضيحي فقط، يجب أن تكون لديك API Facebook)
document.querySelector('.facebook-btn').addEventListener('click', () => {
    alert("تسجيل الدخول عبر فيسبوك سيتم مستقبلاً!");
});

// نموذج تسجيل الدخول
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert("تم تسجيل الدخول بنجاح!");
});
