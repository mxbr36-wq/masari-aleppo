طريقة تفعيل الحفظ المركزي:
1) أنشئ Google Sheet جديداً، وأنشئ ورقة باسم Visitors.
2) ضع في الصف الأول: التاريخ | الاسم | رقم الهاتف
3) افتح Extensions > Apps Script.
4) ضع محتوى Code.gs، واستبدل PUT_YOUR_SHEET_ID_HERE بمعرّف ملف Google Sheet.
5) Deploy > New deployment > Web app.
6) Execute as: Me، وWho has access: Anyone.
7) انسخ رابط Web app وضعه في VISITOR_ENDPOINT داخل js/app.js.
