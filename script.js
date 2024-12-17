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