<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JamalGoldVault</title>
    <!-- ربط ملف CSS -->
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- رأس الصفحة -->
    <header>
        <div class="logo">JamalGoldVault</div>
        <nav>
            <ul>
                <li><a href="#home">الرئيسية</a></li>
                <li><a href="#about">حول</a></li>
                <li><a href="#apps">التطبيقات</a></li>
                <li><a href="#contact">اتصل بنا</a></li>
            </ul>
        </nav>
    </header>

    <!-- قسم الرئيسية -->
    <section id="home">
        <h1>مرحبًا بكم في JamalGoldVault</h1>
        <p>اكتشف أفضل تطبيقات الأندرويد المميزة والآمنة!</p>
        <button onclick="scrollToApps()">تصفح التطبيقات</button>
    </section>

    <!-- قسم حول -->
    <section id="about">
        <h2>حول الموقع</h2>
        <p>JamalGoldVault هو موقع يتيح لك تحميل أفضل وأحدث تطبيقات الأندرويد بسهولة وأمان.</p>
    </section>

    <!-- قسم التطبيقات -->
    <section id="apps">
        <h2>أفضل التطبيقات</h2>
        <div class="app-list">
            <div class="app-item">
                <h3>تطبيق 1</h3>
                <p>وصف التطبيق هنا.</p>
                <button>تحميل</button>
            </div>
            <div class="app-item">
                <h3>تطبيق 2</h3>
                <p>وصف التطبيق هنا.</p>
                <button>تحميل</button>
            </div>
        </div>
    </section>

    <!-- قسم الاتصال -->
    <section id="contact">
        <h2>اتصل بنا</h2>
        <p>يمكنك التواصل معنا عبر البريد الإلكتروني: <strong>info@jamalgoldvault.com</strong></p>
    </section>

    <!-- أسفل الصفحة -->
    <footer>
        <p>&copy; 2024 JamalGoldVault. جميع الحقوق محفوظة.</p>
    </footer>

    <!-- ربط JavaScript -->
    <script src="script.js"></script>
</body>
</html>
