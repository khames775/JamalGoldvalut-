 الضغط على زر "تصفح التطبيقات"
function scrollToApps() {
    // البحث عن العنصر الذي يحتوي على ID "apps"
    const appsSection = document.getElementById("apps");
    
    // التمرير بسلاسة إلى هذا القسم
    appsSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

// دالة لإظهار نافذة رسالة عند الضغط على زر "تحميل" في التطبيقات
function showDownloadAlert(appName) {
    alert(`تم الضغط على تحميل ${appName}`);
}

// إضافة مستمعين للأحداث لأزرار تحميل التطبيقات
document.querySelectorAll('.app-item button').forEach(button => {
    button.addEventListener('click', (event) => {
        // تحديد اسم التطبيق عند الضغط
        const appName = event.target.closest('.app-item').querySelector('h3').textContent;
        showDownloadAlert(appName);
    });
});
script src="script.js"></script>
// وظيفة التمرير إلى قسم التطبيقات
function scrollToApps() {
    document.getElementById("apps").scrollIntoView({ behavior: "smooth" });
}
// التبديل بين وضع النهار والليل
document.getElementById('darkModeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    this.classList.toggle('dark-mode');
    
    // تغيير نص الزر بناءً على الوضع
    if (document.body.classList.contains('dark-mode')) {
        this.textContent = "وضع النهار";
    } else {
        this.textContent = "وضع الليل";
    }
});

// إضافة العد التنازلي
let countdownTime = 20;
const countdownElement = document.createElement('div');
countdownElement.id = 'countdown';
countdownElement.textContent = countdownTime;

document.body.appendChild(countdownElement);

let countdownInterval = setInterval(function() {
    countdownTime--;
    countdownElement.textContent = countdownTime;
    
    if (countdownTime <= 0) {
        clearInterval(countdownInterval);
    }
}, 1000);
