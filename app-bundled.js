// ==================== EXAM QUESTIONS DATA ====================
// Exam topics
const examTopics = [
    {
        id: 'kassa-bank',
        name: 'Kassa va Bank',
        icon: '💰',
        description: 'Naqd pul va bank operatsiyalari',
        maxScore: 30
    },
    {
        id: 'ish-haqi',
        name: 'Ish haqi',
        icon: '💼',
        description: 'Mehnat haqi hisob-kitoblari',
        maxScore: 30
    },
    {
        id: 'asosiy-vositalar',
        name: 'Asosiy vositalar',
        icon: '🏭',
        description: 'Asosiy vositalar hisobi',
        maxScore: 30
    },
    {
        id: 'av-eskirish',
        name: 'AV eskirish',
        icon: '📉',
        description: 'Amortizatsiya hisob-kitoblari',
        maxScore: 30
    },
    {
        id: 'kreditorlar',
        name: 'Kreditorlar',
        icon: '📊',
        description: 'Kreditorlik qarzlari hisobi',
        maxScore: 30
    },
    {
        id: 'materiallar',
        name: 'Materiallar',
        icon: '📦',
        description: 'Moddiy-texnik ta\'minot hisobi',
        maxScore: 30
    },
    {
        id: 'debitorlar',
        name: 'Debitorlar',
        icon: '💳',
        description: 'Debitorlik qarzlari hisobi',
        maxScore: 30
    }
];

// Questions database - simplified version with 10 questions per topic
const questions = {
    'kassa-bank': {
        test: [
            { id: 1, question: 'Kassada naqd pulning maksimal qoldig\'i qancha bo\'lishi mumkin?', options: ['Cheklanmagan', 'Bank tomonidan belgilangan limit', '5 million so\'m', '10 million so\'m'], points: 1 },
            { id: 2, question: 'Kassa kitobini kim yuritadi?', options: ['Bosh hisobchi', 'Kassir', 'Direktor', 'Nazoratchi'], points: 1 },
            { id: 3, question: 'Kassadan pul chiqimini qaysi hujjat bilan rasmiylashtiriladi?', options: ['Kirim orderi', 'Chiqim orderi', 'Avans hisoboti', 'Faktura'], points: 1 },
            { id: 4, question: 'Bank hisobvarag\'i qaysi hisob raqamida yuritiladi?', options: ['5010', '5110', '5210', '5310'], points: 1 },
            { id: 5, question: 'Kassaga naqd pul qabul qilinganda qaysi hujjat tuziladi?', options: ['Chiqim orderi', 'Kirim orderi', 'Kassa kitobchasi', 'Avans hisoboti'], points: 1 },
            { id: 6, question: 'Bankka naqd pul topshirilganda qaysi provodka tuziladi?', options: ['Dt 5010 Kt 5110', 'Dt 5110 Kt 5010', 'Dt 5210 Kt 5010', 'Dt 5010 Kt 6710'], points: 1 },
            { id: 7, question: 'Kassa revizyasini kim o\'tkazadi?', options: ['Faqat kassir', 'Maxsus komissiya', 'Faqat direktor', 'Faqat bosh hisobchi'], points: 1 },
            { id: 8, question: 'Kassadan ortiqcha pul topilsa, qaysi hisobga kiritiladi?', options: ['9410', '9510', '6710', '5710'], points: 1 },
            { id: 9, question: 'Bank to\'lovi qaysi hujjat bilan rasmiylashtiriladi?', options: ['Kirim orderi', 'To\'lov topshirig\'i', 'Chiqim orderi', 'Faktura'], points: 1 },
            { id: 10, question: 'Kassa kitobida xatolik topilsa, nima qilish kerak?', options: ['O\'chirib tashlash', 'Yangi sahifa ochish', 'Chizib, imzo qo\'yish', 'E\'tibor bermaslik'], points: 1 }
        ],
        practical: [
            { id: 1, question: 'Korxona bankdan 15,000,000 so\'m naqd pul oldi va kassaga qabul qildi. Ushbu operatsiya uchun buxgalteriya yozuvini tuzing.', points: 2 },
            { id: 2, question: 'Xodimga ish haqi sifatida kassadan 3,500,000 so\'m to\'landi. Hisob-kitobni amalga oshiring.', points: 2 },
            { id: 3, question: 'Kassadan ta\'minotchiga 8,200,000 so\'m to\'landi. Qanday provodka tuziladi?', points: 2 },
            { id: 4, question: 'Korxona kassasiga xaridordan 12,000,000 so\'m tushdi. Buxgalteriya yozuvini yozing.', points: 2 },
            { id: 5, question: 'Kassa revizyasi natijasida 50,000 so\'m ortiqcha pul topildi. Qanday qayd etiladi?', points: 2 }
        ],
        accounting: [
            { id: 1, question: 'Bankdan kassaga 20,000,000 so\'m naqd pul olindi', points: 2 },
            { id: 2, question: 'Kassadan xodimga avans sifatida 2,000,000 so\'m berildi', points: 2 },
            { id: 3, question: 'Kassaga mahsulot sotishdan 5,500,000 so\'m tushdi', points: 2 },
            { id: 4, question: 'Kassadan bankga 10,000,000 so\'m topshirildi', points: 2 },
            { id: 5, question: 'Kassa kamomadi 100,000 so\'m kassir hisobiga qoplandi', points: 2 }
        ]
    },
    'ish-haqi': {
        test: [
            { id: 1, question: 'Ish haqi qaysi hisob raqamida aks ettiriladi?', options: ['6710', '6610', '6510', '6410'], points: 1 },
            { id: 2, question: 'Ish haqidan ushlab qolinadigan asosiy soliq qaysi?', options: ['QQS', 'Daromad solig\'i', 'Mulk solig\'i', 'Yer solig\'i'], points: 1 },
            { id: 3, question: 'Jismoniy shaxslarning daromad solig\'i stavkasi necha foiz?', options: ['10%', '12%', '15%', '20%'], points: 1 },
            { id: 4, question: 'Ish haqiga hisoblangan INPS qaysi hisobda aks etadi?', options: ['6410', '6510', '6610', '6710'], points: 1 },
            { id: 5, question: 'Kasallik varaqasi bo\'yicha to\'lov qayerdan amalga oshiriladi?', options: ['Korxona hisobidan', 'INPS hisobidan', 'Davlat byudjeti', 'Sug\'urta kompaniyasi'], points: 1 },
            { id: 6, question: 'Ish haqi fondi qaysi xarajat hisobida aks etadi?', options: ['9010', '9110', '9210', '9410'], points: 1 },
            { id: 7, question: 'Xodimga berilgan avans qaysi hisobda ko\'rsatiladi?', options: ['4010', '4210', '5610', '6710'], points: 1 },
            { id: 8, question: 'Ish haqidan ushlab qolingan daromad solig\'i qaysi hisobda?', options: ['6410', '6510', '6610', '6710'], points: 1 },
            { id: 9, question: 'Mehnat haqi hisob-kitob varaqasi nima deb ataladi?', options: ['Tabel', 'Vedomost', 'Nakladnaya', 'Akt'], points: 1 },
            { id: 10, question: 'Ish haqi to\'lanmagan xodim qarzini qaysi hisob ko\'rsatadi?', options: ['6710', '6610', '6510', '5610'], points: 1 }
        ],
        practical: [
            { id: 1, question: 'Xodimning oylik ish haqi 5,000,000 so\'m. Daromad solig\'i (12%) va INPS (0.1%) ni hisoblab, qo\'lga beriladigan summani aniqlang.', points: 2 },
            { id: 2, question: 'Ishlab chiqarish xodimlariga 25,000,000 so\'m ish haqi hisoblandi. Provodkani yozing.', points: 2 },
            { id: 3, question: 'Xodimga avans sifatida 2,000,000 so\'m berildi. Oylik ish haqi 4,500,000 so\'m. Yakuniy to\'lovni hisoblang.', points: 2 },
            { id: 4, question: 'Ish haqidan ushlab qolingan daromad solig\'i 3,600,000 so\'m byudjetga o\'tkazildi. Provodka?', points: 2 },
            { id: 5, question: 'Kasallik varaqasi bo\'yicha xodimga 1,500,000 so\'m to\'landi. Buxgalteriya yozuvini tuzing.', points: 2 }
        ],
        accounting: [
            { id: 1, question: 'Ishlab chiqarish xodimlariga ish haqi 30,000,000 so\'m hisoblandi', points: 2 },
            { id: 2, question: 'Ish haqidan daromad solig\'i 3,600,000 so\'m ushlab qolindi', points: 2 },
            { id: 3, question: 'Ish haqidan INPS 30,000 so\'m ushlab qolindi', points: 2 },
            { id: 4, question: 'Xodimga kassadan ish haqi 4,200,000 so\'m to\'landi', points: 2 },
            { id: 5, question: 'Daromad solig\'i 3,600,000 so\'m bankdan byudjetga o\'tkazildi', points: 2 }
        ]
    },
    'asosiy-vositalar': {
        test: [
            { id: 1, question: 'Asosiy vositalar qaysi hisob raqamida hisoblanadi?', options: ['0100', '0200', '0300', '0400'], points: 1 },
            { id: 2, question: 'Asosiy vositalarning foydalanish muddati kamida necha yil?', options: ['6 oy', '1 yil', '2 yil', '3 yil'], points: 1 },
            { id: 3, question: 'Asosiy vosita sotib olinganda QQS qaysi hisobda aks etadi?', options: ['4410', '4510', '6410', '6510'], points: 1 },
            { id: 4, question: 'Asosiy vositani ishga tushirish qaysi hujjat bilan rasmiylashtiriladi?', options: ['Faktura', 'Akt', 'Nakladnaya', 'Dogovor'], points: 1 },
            { id: 5, question: 'Asosiy vositaning dastlabki qiymati nimani o\'z ichiga oladi?', options: ['Faqat sotib olish narxi', 'Narx + yetkazib berish + o\'rnatish', 'Faqat yetkazib berish', 'Faqat o\'rnatish'], points: 1 },
            { id: 6, question: 'Asosiy vositani bepul olish qaysi hisobdan aks ettiriladi?', options: ['9410', '9510', '6710', '8310'], points: 1 },
            { id: 7, question: 'Asosiy vositani sotishdan foyda qaysi hisobda?', options: ['9110', '9210', '9310', '9410'], points: 1 },
            { id: 8, question: 'Asosiy vositani ta\'mirlash xarajatlari qayerga kiritiladi?', options: ['Dastlabki qiymatga', 'Davr xarajatlariga', 'Eskirish summaga', 'Kapital qo\'yilmaga'], points: 1 },
            { id: 9, question: 'Asosiy vositalar inventarizatsiyasi qachon o\'tkaziladi?', options: ['Har oy', 'Har chorak', 'Yiliga 1 marta', '3 yilda 1 marta'], points: 1 },
            { id: 10, question: 'Yaroqsiz asosiy vosita qaysi hisob orqali hisobdan chiqariladi?', options: ['0100', '0120', '0130', '0200'], points: 1 }
        ],
        practical: [
            { id: 1, question: 'Korxona stanok sotib oldi: narxi 50,000,000 so\'m, yetkazib berish 2,000,000 so\'m, o\'rnatish 1,500,000 so\'m. Dastlabki qiymatni hisoblang.', points: 2 },
            { id: 2, question: 'Asosiy vosita (dastlabki qiymati 30,000,000 so\'m) ishga tushirildi. Provodkani yozing.', points: 2 },
            { id: 3, question: 'Asosiy vosita 25,000,000 so\'mga sotildi. Uning qoldiq qiymati 20,000,000 so\'m. Foyda/zararni aniqlang.', points: 2 },
            { id: 4, question: 'Bepul olingan asosiy vositaning bozor qiymati 15,000,000 so\'m. Qanday qayd etiladi?', points: 2 },
            { id: 5, question: 'Asosiy vositani ta\'mirlash uchun 3,000,000 so\'m sarflandi. Provodka?', points: 2 }
        ],
        accounting: [
            { id: 1, question: 'Asosiy vosita sotib olindi: 40,000,000 so\'m (QQS 4,800,000 so\'m)', points: 2 },
            { id: 2, question: 'Asosiy vosita ishga tushirildi: dastlabki qiymati 45,000,000 so\'m', points: 2 },
            { id: 3, question: 'Asosiy vosita sotildi: qoldiq qiymati 20,000,000 so\'m', points: 2 },
            { id: 4, question: 'Sotishdan tushum: 28,000,000 so\'m (QQS 3,360,000 so\'m)', points: 2 },
            { id: 5, question: 'Asosiy vositani sotishdan foyda 4,640,000 so\'m aniqlandi', points: 2 }
        ]
    },
    'av-eskirish': {
        test: [
            { id: 1, question: 'Amortizatsiya qaysi hisob raqamida to\'planadi?', options: ['0200', '0210', '0220', '0230'], points: 1 },
            { id: 2, question: 'Chiziqli amortizatsiya usulida oylik stavka qanday hisoblanadi?', options: ['Qiymat / muddat', 'Qiymat / muddat / 12', 'Qiymat * stavka', 'Qiymat - qoldiq'], points: 1 },
            { id: 3, question: 'Amortizatsiya qachondan boshlab hisoblanadi?', options: ['Sotib olingan kundan', 'Ishga tushirilgan oydan keyin', 'Yil boshidan', 'Chorak boshidan'], points: 1 },
            { id: 4, question: 'Amortizatsiya hisoblash uchun minimal qiymat chegarasi?', options: ['Cheklanmagan', '1,000,000 so\'m', '5,000,000 so\'m', '10,000,000 so\'m'], points: 1 },
            { id: 5, question: 'Ishlab chiqarish asosiy vositalari amortizatsiyasi qaysi hisobga?', options: ['9010', '9110', '9210', '9410'], points: 1 },
            { id: 6, question: 'Qoldiq qiymat qanday aniqlanadi?', options: ['Dastlabki qiymat - amortizatsiya', 'Dastlabki qiymat + amortizatsiya', 'Dastlabki qiymat * stavka', 'Bozor qiymati'], points: 1 },
            { id: 7, question: 'Tezlashtirilgan amortizatsiya qachon qo\'llaniladi?', options: ['Hech qachon', 'Texnologik jihatdan eskiradigan ob\'ektlarda', 'Barcha ob\'ektlarda', 'Faqat binolarda'], points: 1 },
            { id: 8, question: 'Yer uchastkalariga amortizatsiya hisoblanadimi?', options: ['Ha', 'Yo\'q', 'Ba\'zan', 'Faqat shahar yerlariga'], points: 1 },
            { id: 9, question: 'Amortizatsiya to\'xtatilgan asosiy vosita qayerda ko\'rsatiladi?', options: ['0100', '0110', '0120', '0130'], points: 1 },
            { id: 10, question: 'To\'liq amortizatsiyalangan asosiy vosita hisobdan chiqariladimi?', options: ['Darhol chiqariladi', 'Foydalanilguncha hisobda qoladi', 'Yil oxirida chiqariladi', 'Direktor qaroriga ko\'ra'], points: 1 }
        ],
        practical: [
            { id: 1, question: 'Asosiy vosita qiymati 24,000,000 so\'m, foydalanish muddati 5 yil. Chiziqli usulda oylik amortizatsiyani hisoblang.', points: 2 },
            { id: 2, question: 'Ishlab chiqarish uskunasi uchun oylik amortizatsiya 500,000 so\'m hisoblandi. Provodka?', points: 2 },
            { id: 3, question: 'Dastlabki qiymati 36,000,000 so\'m, to\'plangan amortizatsiya 12,000,000 so\'m. Qoldiq qiymatni aniqlang.', points: 2 },
            { id: 4, question: 'Bino uchun yillik amortizatsiya 6,000,000 so\'m. Oylik amortizatsiya summasi?', points: 2 },
            { id: 5, question: 'Savdo asosiy vositalari uchun oylik amortizatsiya 300,000 so\'m. Qaysi hisobga kiritiladi?', points: 2 }
        ],
        accounting: [
            { id: 1, question: 'Ishlab chiqarish uskunasi uchun oylik amortizatsiya 800,000 so\'m', points: 2 },
            { id: 2, question: 'Boshqaruv binosi uchun oylik amortizatsiya 1,200,000 so\'m', points: 2 },
            { id: 3, question: 'Savdo zali jihozlari uchun oylik amortizatsiya 400,000 so\'m', points: 2 },
            { id: 4, question: 'Transport vositalari uchun oylik amortizatsiya 600,000 so\'m', points: 2 },
            { id: 5, question: 'Kompyuter texnikasi uchun oylik amortizatsiya 250,000 so\'m', points: 2 }
        ]
    },
    'kreditorlar': {
        test: [
            { id: 1, question: 'Kreditorlik qarzlari qaysi hisob guruhida aks etadi?', options: ['4000', '5000', '6000', '7000'], points: 1 },
            { id: 2, question: 'Ta\'minotchilarga qarz qaysi hisobda ko\'rsatiladi?', options: ['6010', '6110', '6210', '6310'], points: 1 },
            { id: 3, question: 'Byudjet oldidagi qarz qaysi hisobda?', options: ['6310', '6410', '6510', '6610'], points: 1 },
            { id: 4, question: 'Xodimlarga ish haqi bo\'yicha qarz qaysi hisobda?', options: ['6610', '6710', '6810', '6910'], points: 1 },
            { id: 5, question: 'Qisqa muddatli kredit qaysi hisobda aks etadi?', options: ['6610', '6710', '6810', '6910'], points: 1 },
            { id: 6, question: 'Kreditorlik qarzining muddati o\'tganda nima qilinadi?', options: ['Hisobdan chiqariladi', 'Daromadga kiritiladi', 'Eskirgan qarzga o\'tkaziladi', 'Hech narsa'], points: 1 },
            { id: 7, question: 'Ta\'minotchiga to\'lov qaysi provodka bilan?', options: ['Dt 6010 Kt 5110', 'Dt 5110 Kt 6010', 'Dt 6010 Kt 5010', 'Dt 5010 Kt 6010'], points: 1 },
            { id: 8, question: 'Kredit olish qaysi hisobda aks etadi?', options: ['6810', '6910', '5110', '5010'], points: 1 },
            { id: 9, question: 'Kreditorlik qarzini kamaytirish qaysi tomonda?', options: ['Debet', 'Kredit', 'Ikkalasida ham', 'Hech qayerda'], points: 1 },
            { id: 10, question: 'Qarz muddati 3 yildan ortiq bo\'lsa, u qanday nomlanadi?', options: ['Qisqa muddatli', 'Uzoq muddatli', 'O\'rta muddatli', 'Eskirgan'], points: 1 }
        ],
        practical: [
            { id: 1, question: 'Ta\'minotchidan 20,000,000 so\'m qarzga material olindi. Provodkani yozing.', points: 2 },
            { id: 2, question: 'Ta\'minotchiga qarzni to\'lash uchun bankdan 15,000,000 so\'m o\'tkazildi. Buxgalteriya yozuvi?', points: 2 },
            { id: 3, question: 'Byudjetga soliq to\'lash uchun 5,000,000 so\'m qarz hisoblandi. Provodka?', points: 2 },
            { id: 4, question: 'Bankdan 50,000,000 so\'m kredit olindi. Qanday qayd etiladi?', points: 2 },
            { id: 5, question: 'Kredit bo\'yicha foizlar 2,500,000 so\'m hisoblandi. Provodkani tuzing.', points: 2 }
        ],
        accounting: [
            { id: 1, question: 'Ta\'minotchidan material olindi: 18,000,000 so\'m (QQS 2,160,000 so\'m)', points: 2 },
            { id: 2, question: 'Ta\'minotchiga qarz to\'landi: bankdan 20,160,000 so\'m', points: 2 },
            { id: 3, question: 'Byudjetga soliq 4,500,000 so\'m hisoblandi', points: 2 },
            { id: 4, question: 'Bankdan kredit olindi: 50,000,000 so\'m', points: 2 },
            { id: 5, question: 'Kredit foizlari 2,500,000 so\'m hisoblandi', points: 2 }
        ]
    },
    'materiallar': {
        test: [
            { id: 1, question: 'Materiallar qaysi hisob raqamida hisoblanadi?', options: ['1000', '1010', '1020', '1030'], points: 1 },
            { id: 2, question: 'Materiallarni qabul qilish qaysi hujjat bilan rasmiylashtiriladi?', options: ['Faktura', 'Nakladnaya', 'Akt', 'Dogovor'], points: 1 },
            { id: 3, question: 'Materiallarni ishlab chiqarishga chiqarish qaysi hisobda?', options: ['2010', '2020', '2030', '2040'], points: 1 },
            { id: 4, question: 'FIFO usuli nima?', options: ['Birinchi kirgan - birinchi chiqadi', 'Oxirgi kirgan - birinchi chiqadi', 'O\'rtacha qiymat', 'Aniq qiymat'], points: 1 },
            { id: 5, question: 'Materiallar inventarizatsiyasi qachon o\'tkaziladi?', options: ['Har oy', 'Har chorak', 'Yiliga kamida 1 marta', 'Hech qachon'], points: 1 },
            { id: 6, question: 'Material ortiqchasi topilsa, qaysi hisobga?', options: ['9410', '9510', '6710', '1010'], points: 1 },
            { id: 7, question: 'Material kamomadi qaysi hisobda?', options: ['9410', '9510', '6710', '1010'], points: 1 },
            { id: 8, question: 'Materiallarni sotib olishda QQS qaysi hisobda?', options: ['4410', '4510', '6410', '6510'], points: 1 },
            { id: 9, question: 'Yaroqsiz materiallar qanday hisobdan chiqariladi?', options: ['1010 Kt', '1010 Dt', '2010 Dt', '9510 Dt'], points: 1 },
            { id: 10, question: 'Material narxini hisoblashda qaysi usullar mavjud?', options: ['Faqat FIFO', 'Faqat LIFO', 'FIFO, LIFO, O\'rtacha', 'Faqat O\'rtacha'], points: 1 }
        ],
        practical: [
            { id: 1, question: 'Ta\'minotchidan 10,000,000 so\'m material sotib olindi (QQS 1,200,000 so\'m). Provodkani yozing.', points: 2 },
            { id: 2, question: 'Ishlab chiqarishga 8,000,000 so\'m qiymatdagi material chiqarildi. Buxgalteriya yozuvi?', points: 2 },
            { id: 3, question: 'Inventarizatsiya natijasida 500,000 so\'m material ortiqchasi topildi. Qanday qayd etiladi?', points: 2 },
            { id: 4, question: 'Material kamomadi 300,000 so\'m mas\'ul shaxs hisobiga qoplandi. Provodka?', points: 2 },
            { id: 5, question: 'Yaroqsiz material 200,000 so\'m qiymatda hisobdan chiqarildi. Buxgalteriya yozuvini tuzing.', points: 2 }
        ],
        accounting: [
            { id: 1, question: 'Material sotib olindi: 12,000,000 so\'m (QQS 1,440,000 so\'m)', points: 2 },
            { id: 2, question: 'Ishlab chiqarishga material chiqarildi: 9,000,000 so\'m', points: 2 },
            { id: 3, question: 'Material ortiqchasi topildi: 600,000 so\'m', points: 2 },
            { id: 4, question: 'Material kamomadi mas\'ul shaxs hisobiga: 400,000 so\'m', points: 2 },
            { id: 5, question: 'Yaroqsiz material hisobdan chiqarildi: 250,000 so\'m', points: 2 }
        ]
    },
    'debitorlar': {
        test: [
            { id: 1, question: 'Debitorlik qarzlari qaysi hisob guruhida?', options: ['4000', '5000', '6000', '7000'], points: 1 },
            { id: 2, question: 'Xaridorlar qarzini qaysi hisob ko\'rsatadi?', options: ['4010', '4110', '4210', '4310'], points: 1 },
            { id: 3, question: 'Xodimlarga berilgan avans qaysi hisobda?', options: ['4010', '4210', '5610', '6710'], points: 1 },
            { id: 4, question: 'Debitorlik qarzini oshirish qaysi tomonda?', options: ['Debet', 'Kredit', 'Ikkalasida ham', 'Hech qayerda'], points: 1 },
            { id: 5, question: 'Eskirgan debitorlik qarzini qanday qayd etiladi?', options: ['Daromadga', 'Xarajatga', 'Hisobdan chiqarilmaydi', 'Kreditorlikka'], points: 1 },
            { id: 6, question: 'Xaridordan to\'lov kelganda qaysi provodka?', options: ['Dt 5110 Kt 4010', 'Dt 4010 Kt 5110', 'Dt 5010 Kt 4010', 'Dt 4010 Kt 5010'], points: 1 },
            { id: 7, question: 'Xodimga avans berilganda qaysi hisob Dt?', options: ['4210', '5010', '6710', '5110'], points: 1 },
            { id: 8, question: 'Debitorlik qarzini kamaytirish qaysi tomonda?', options: ['Debet', 'Kredit', 'Ikkalasida ham', 'Hech qayerda'], points: 1 },
            { id: 9, question: 'Shubhali qarzlar uchun zahira qaysi hisobda?', options: ['6910', '6810', '6710', '6610'], points: 1 },
            { id: 10, question: 'Debitorlik qarzining muddati necha yil?', options: ['1 yil', '3 yil', '5 yil', 'Cheksiz'], points: 1 }
        ],
        practical: [
            { id: 1, question: 'Xaridorga mahsulot sotildi: 25,000,000 so\'m (QQS 3,000,000 so\'m). Provodkani yozing.', points: 2 },
            { id: 2, question: 'Xaridordan to\'lov keldi: bankka 28,000,000 so\'m tushdi. Buxgalteriya yozuvi?', points: 2 },
            { id: 3, question: 'Xodimga avans sifatida 3,000,000 so\'m berildi. Qanday qayd etiladi?', points: 2 },
            { id: 4, question: 'Xodim avansni hisobga oldi: ish haqi 5,000,000 so\'m, avans 3,000,000 so\'m. Provodka?', points: 2 },
            { id: 5, question: 'Eskirgan debitorlik qarzi 1,500,000 so\'m xarajatga kiritildi. Buxgalteriya yozuvini tuzing.', points: 2 }
        ],
        accounting: [
            { id: 1, question: 'Xaridorga mahsulot sotildi: 30,000,000 so\'m (QQS 3,600,000 so\'m)', points: 2 },
            { id: 2, question: 'Xaridordan to\'lov keldi: 33,600,000 so\'m', points: 2 },
            { id: 3, question: 'Xodimga avans berildi: 2,500,000 so\'m', points: 2 },
            { id: 4, question: 'Xodim avansni hisobga oldi: ish haqi 4,000,000 so\'m', points: 2 },
            { id: 5, question: 'Eskirgan debitorlik qarzi xarajatga: 1,200,000 so\'m', points: 2 }
        ]
    }
};

// ==================== TIMER CLASS ====================
class ExamTimer {
    constructor(durationMinutes, onTick, onComplete) {
        this.duration = durationMinutes * 60;
        this.remaining = this.duration;
        this.onTick = onTick;
        this.onComplete = onComplete;
        this.interval = null;
        this.isPaused = false;
    }

    start() {
        if (this.interval) return;

        this.interval = setInterval(() => {
            if (!this.isPaused) {
                this.remaining--;

                if (this.remaining <= 0) {
                    this.stop();
                    if (this.onComplete) this.onComplete();
                } else {
                    if (this.onTick) this.onTick(this.getFormattedTime());
                }
            }
        }, 1000);
    }

    stop() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
    }

    pause() {
        this.isPaused = true;
    }

    resume() {
        this.isPaused = false;
    }

    getFormattedTime() {
        const minutes = Math.floor(this.remaining / 60);
        const seconds = this.remaining % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    getProgress() {
        return ((this.duration - this.remaining) / this.duration) * 100;
    }
}

// ==================== STORAGE UTILITY ====================
const Storage = {
    saveExamState(topic, answers) {
        const state = {
            topic,
            answers,
            timestamp: new Date().toISOString()
        };
        localStorage.setItem('currentExam', JSON.stringify(state));
    },

    getExamState() {
        const state = localStorage.getItem('currentExam');
        return state ? JSON.parse(state) : null;
    },

    clearExamState() {
        localStorage.removeItem('currentExam');
    },

    saveCompletedExam(topic, answers, timeSpent) {
        const exams = this.getCompletedExams();
        exams.push({
            topic,
            answers,
            timeSpent,
            completedAt: new Date().toISOString()
        });
        localStorage.setItem('completedExams', JSON.stringify(exams));
    },

    getCompletedExams() {
        const exams = localStorage.getItem('completedExams');
        return exams ? JSON.parse(exams) : [];
    },

    isTopicCompleted(topic) {
        const exams = this.getCompletedExams();
        return exams.some(exam => exam.topic === topic);
    },

    getAdminStats() {
        const exams = this.getCompletedExams();
        return {
            totalExams: exams.length,
            exams: exams.map(exam => ({
                topic: exam.topic,
                completedAt: new Date(exam.completedAt).toLocaleString('uz-UZ'),
                timeSpent: exam.timeSpent,
                totalAnswers: Object.keys(exam.answers).length
            }))
        };
    },

    saveUserInfo(name, group) {
        localStorage.setItem('userInfo', JSON.stringify({ name, group }));
    },

    getUserInfo() {
        const info = localStorage.getItem('userInfo');
        return info ? JSON.parse(info) : null;
    }
};

// ==================== MAIN APPLICATION ====================
let currentTopic = null;
let currentAnswers = {};
let examTimer = null;

// DOM Elements
const homePage = document.getElementById('homePage');
const examPage = document.getElementById('examPage');
const resultPage = document.getElementById('resultPage');
const topicsGrid = document.getElementById('topicsGrid');
const examTitle = document.getElementById('examTitle');
const timerDisplay = document.getElementById('timer');
const progressFill = document.getElementById('progressFill');
const testQuestions = document.getElementById('testQuestions');
const practicalQuestions = document.getElementById('practicalQuestions');
const accountingQuestions = document.getElementById('accountingQuestions');
const submitBtn = document.getElementById('submitBtn');
const adminBtn = document.getElementById('adminBtn');
const adminPanel = document.getElementById('adminPanel');
const adminContent = document.getElementById('adminContent');

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    loadTopics();
    setupEventListeners();
    checkExamState();
});

// Load topics on home page
function loadTopics() {
    topicsGrid.innerHTML = '';

    examTopics.forEach(topic => {
        const isCompleted = Storage.isTopicCompleted(topic.id);

        const card = document.createElement('div');
        card.className = 'topic-card';
        if (isCompleted) {
            card.style.opacity = '0.6';
            card.style.cursor = 'not-allowed';
        }

        card.innerHTML = `
            <span class="topic-icon">${topic.icon}</span>
            <h3>${topic.name}</h3>
            <p>${topic.description}</p>
            <span class="topic-score">${topic.maxScore} ball</span>
            ${isCompleted ? '<p style="color: var(--success); margin-top: 1rem;">✅ Topshirilgan</p>' : ''}
        `;

        if (!isCompleted) {
            card.addEventListener('click', () => startExam(topic.id));
            card.addEventListener('touchend', (e) => {
                e.preventDefault();
                startExam(topic.id);
            });
        }

        topicsGrid.appendChild(card);
    });
}

// Start exam
function startExam(topicId) {
    currentTopic = topicId;
    currentAnswers = {};

    const topic = examTopics.find(t => t.id === topicId);
    examTitle.textContent = topic.name;

    loadQuestions();

    examTimer = new ExamTimer(
        90,
        (time) => {
            timerDisplay.textContent = `⏱️ ${time}`;
        },
        () => {
            alert('Vaqt tugadi! Imtixon avtomatik topshirildi.');
            submitExam();
        }
    );
    examTimer.start();

    showPage('exam');
}

// Load all questions
function loadQuestions() {
    const topicQuestions = questions[currentTopic];

    testQuestions.innerHTML = '';
    topicQuestions.test.forEach((q, index) => {
        const questionDiv = createTestQuestion(q, index);
        testQuestions.appendChild(questionDiv);
    });

    practicalQuestions.innerHTML = '';
    topicQuestions.practical.forEach((q, index) => {
        const questionDiv = createPracticalQuestion(q, index);
        practicalQuestions.appendChild(questionDiv);
    });

    accountingQuestions.innerHTML = '';
    topicQuestions.accounting.forEach((q, index) => {
        const questionDiv = createAccountingQuestion(q, index);
        accountingQuestions.appendChild(questionDiv);
    });
}

// Create test question
function createTestQuestion(question, index) {
    const div = document.createElement('div');
    div.className = 'question';

    const optionsHtml = question.options.map((option, i) => `
        <div class="option">
            <input type="radio" 
                   id="test_${index}_${i}" 
                   name="test_${index}" 
                   value="${i}"
                   onchange="saveAnswer('test', ${question.id}, ${i})">
            <label for="test_${index}_${i}">${option}</label>
        </div>
    `).join('');

    div.innerHTML = `
        <div class="question-header">
            <span class="question-number">Savol ${question.id}</span>
            <span class="question-points">${question.points} ball</span>
        </div>
        <div class="question-text">${question.question}</div>
        <div class="options">
            ${optionsHtml}
        </div>
    `;

    return div;
}

// Create practical question
function createPracticalQuestion(question, index) {
    const div = document.createElement('div');
    div.className = 'question';

    div.innerHTML = `
        <div class="question-header">
            <span class="question-number">Masala ${question.id}</span>
            <span class="question-points">${question.points} ball</span>
        </div>
        <div class="question-text">${question.question}</div>
        <textarea class="answer-input" 
                  placeholder="Javobingizni yozing..."
                  onchange="saveAnswer('practical', ${question.id}, this.value)"></textarea>
    `;

    return div;
}

// Create accounting question
function createAccountingQuestion(question, index) {
    const div = document.createElement('div');
    div.className = 'question';

    div.innerHTML = `
        <div class="question-header">
            <span class="question-number">Provodka ${question.id}</span>
            <span class="question-points">${question.points} ball</span>
        </div>
        <div class="question-text">${question.question}</div>
        <div class="accounting-entry">
            <div class="entry-field">
                <label>Debet (Dt)</label>
                <input type="text" 
                       placeholder="Hisob raqami"
                       onchange="saveAccountingAnswer(${question.id}, 'debet', this.value)">
            </div>
            <div class="entry-field">
                <label>Kredit (Kt)</label>
                <input type="text" 
                       placeholder="Hisob raqami"
                       onchange="saveAccountingAnswer(${question.id}, 'kredit', this.value)">
            </div>
        </div>
    `;

    return div;
}

// Save answer
window.saveAnswer = function (type, questionId, answer) {
    if (!currentAnswers[type]) {
        currentAnswers[type] = {};
    }
    currentAnswers[type][questionId] = answer;

    Storage.saveExamState(currentTopic, currentAnswers);
    updateProgress();
};

// Save accounting answer
window.saveAccountingAnswer = function (questionId, field, value) {
    if (!currentAnswers.accounting) {
        currentAnswers.accounting = {};
    }
    if (!currentAnswers.accounting[questionId]) {
        currentAnswers.accounting[questionId] = {};
    }
    currentAnswers.accounting[questionId][field] = value;

    Storage.saveExamState(currentTopic, currentAnswers);
    updateProgress();
};

// Update progress bar
function updateProgress() {
    const totalQuestions = 20;
    const answeredCount =
        (currentAnswers.test ? Object.keys(currentAnswers.test).length : 0) +
        (currentAnswers.practical ? Object.keys(currentAnswers.practical).length : 0) +
        (currentAnswers.accounting ? Object.keys(currentAnswers.accounting).length : 0);

    const progress = (answeredCount / totalQuestions) * 100;
    progressFill.style.width = `${progress}%`;
}

// Submit exam
function submitExam() {
    if (examTimer) {
        examTimer.stop();
    }

    const timeSpent = examTimer ? examTimer.getFormattedTime() : '00:00';

    Storage.saveCompletedExam(currentTopic, currentAnswers, timeSpent);
    Storage.clearExamState();

    const topic = examTopics.find(t => t.id === currentTopic);
    document.getElementById('completionTime').textContent = new Date().toLocaleString('uz-UZ');
    document.getElementById('resultTopic').textContent = topic.name;

    showPage('result');
}

// Check if there's an ongoing exam
function checkExamState() {
    const state = Storage.getExamState();
    if (state) {
        const resume = confirm('Tugallanmagan imtixon topildi. Davom ettirasizmi?');
        if (resume) {
            currentTopic = state.topic;
            currentAnswers = state.answers;
            startExam(currentTopic);
            restoreAnswers();
        } else {
            Storage.clearExamState();
        }
    }
}

// Restore answers
function restoreAnswers() {
    if (currentAnswers.test) {
        Object.entries(currentAnswers.test).forEach(([questionId, answer]) => {
            const radio = document.querySelector(`input[name="test_${questionId - 1}"][value="${answer}"]`);
            if (radio) radio.checked = true;
        });
    }

    if (currentAnswers.practical) {
        Object.entries(currentAnswers.practical).forEach(([questionId, answer]) => {
            const textareas = practicalQuestions.querySelectorAll('textarea');
            if (textareas[questionId - 1]) textareas[questionId - 1].value = answer;
        });
    }

    if (currentAnswers.accounting) {
        Object.entries(currentAnswers.accounting).forEach(([questionId, answer]) => {
            const entries = accountingQuestions.querySelectorAll('.accounting-entry');
            if (entries[questionId - 1]) {
                const inputs = entries[questionId - 1].querySelectorAll('input');
                if (answer.debet) inputs[0].value = answer.debet;
                if (answer.kredit) inputs[1].value = answer.kredit;
            }
        });
    }

    updateProgress();
}

// Show page
function showPage(page) {
    homePage.classList.remove('active');
    examPage.classList.remove('active');
    resultPage.classList.remove('active');

    if (page === 'home') {
        homePage.classList.add('active');
        loadTopics();
    } else if (page === 'exam') {
        examPage.classList.add('active');
    } else if (page === 'result') {
        resultPage.classList.add('active');
    }
}

// Setup event listeners
function setupEventListeners() {
    submitBtn.addEventListener('click', () => {
        const confirm = window.confirm('Imtixonni yakunlashga ishonchingiz komilmi?');
        if (confirm) {
            submitExam();
        }
    });

    adminBtn.addEventListener('click', () => {
        // Check if already authenticated
        const isAuthenticated = sessionStorage.getItem('adminAuth') === 'true';

        if (!isAuthenticated) {
            const password = prompt('🔒 Admin panelga kirish uchun parolni kiriting:');

            // Admin password: chihota-6yastvie-9smaz
            if (password === 'chihota-6yastvie-9smaz') {
                sessionStorage.setItem('adminAuth', 'true');
                adminPanel.classList.add('active');
                loadAdminData();
            } else if (password !== null) {
                alert('❌ Noto\'g\'ri parol! Kirish rad etildi.');
            }
        } else {
            adminPanel.classList.toggle('active');
            if (adminPanel.classList.contains('active')) {
                loadAdminData();
            }
        }
    });

    document.addEventListener('click', (e) => {
        if (!adminPanel.contains(e.target) && e.target !== adminBtn) {
            adminPanel.classList.remove('active');
        }
    });
}

// Load admin data
function loadAdminData() {
    const stats = Storage.getAdminStats();

    if (stats.totalExams === 0) {
        adminContent.innerHTML = '<p style="color: var(--gray);">Hali hech qanday imtixon topshirilmagan.</p>';
        return;
    }

    let html = `
        <div style="margin-bottom: 1rem;">
            <strong>Jami topshirilgan:</strong> ${stats.totalExams} ta imtixon
        </div>
    `;

    stats.exams.forEach((exam, index) => {
        html += `
            <div style="background: var(--light); padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
                <strong>${index + 1}. ${exam.topic}</strong><br>
                <small style="color: var(--gray);">
                    📅 ${exam.completedAt}<br>
                    ⏱️ Qolgan vaqt: ${exam.timeSpent}<br>
                    ✍️ Javoblar: ${exam.totalAnswers} ta
                </small>
            </div>
        `;
    });

    adminContent.innerHTML = html;
}

// Prevent accidental page close during exam
window.addEventListener('beforeunload', (e) => {
    if (examPage.classList.contains('active')) {
        e.preventDefault();
        e.returnValue = '';
    }
});
