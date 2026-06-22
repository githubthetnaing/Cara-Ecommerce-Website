// Script for navigation bar
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const Close = document.getElementById('Close');
const languageSwitcher = document.getElementById('language-switcher');

const translations = {
    en: {
        home: 'Home',
        shop: 'Shop',
        blog: 'Blog',
        about: 'About',
        contact: 'Contact',
        heroHeading: 'Trade-In-Offer',
        heroTitle: 'Super Value Deals',
        heroSubtitle: 'On all products',
        heroDescription: 'Save more with coupons & up to 70% off!',
        heroButton: 'Shop Now',
        freeShipping: 'Free Shipping',
        onlineOrder: 'Online Order',
        saveMoney: 'Save Money',
        promotion: 'Promotion',
        happySell: 'Happy Sell',
        support: '24/7 Support',
        featuredProducts: 'Featured Products',
        featuredDescription: 'Summer Collection New Morden Design',
        repairServices: 'Repair Services',
        repairOffer: 'Up to 70% Off All t-shirt & Accessories',
        exploreMore: 'Explore More',
        dealsHeading: 'crazy deals',
        dealsTitle: 'buy 1 get 1 free',
        dealsDescription: 'The Best classic dress is on sale at cara',
        learnMore: 'Learn More',
        seasonHeading: 'spring/summer',
        seasonTitle: 'upcoming season',
        collection: 'Collection',
        seasonSale: 'SEASON SALE',
        winterCollection: 'winter Collection -50% OFF',
        footwearCollection: 'NEW FOOTWEAR COLLECTION',
        seasonYear: 'spring / summer 2023',
        tshirt: 'T-SHIRT',
        trendyPrints: 'New Trendy Prints',
        newsletterHeading: 'Sign Up For NewsLetters',
        newsletterBody: 'Get E-mail updates about our latest shop and',
        specialOffers: 'special offers.',
        emailPlaceholder: 'Your email address',
        signUp: 'Sign Up',
        contactHeading: 'Contact',
        addressLabel: 'Address:',
        phoneLabel: 'Phone:',
        hoursLabel: 'Hours:',
        followUs: 'Follow us',
        aboutHeading: 'About',
        aboutUs: 'About Us',
        deliveryInfo: 'Delivery Information',
        privacyPolicy: 'Privacy Policy',
        termsCondition: 'Terms & Condition',
        contactUs: 'Contact Us',
        myAccount: 'My Account',
        signIn: 'Sign In',
        viewCart: 'View Cart',
        wishlist: 'My WishList',
        trackOrder: 'Track My Order',
        help: 'Help',
        installApp: 'Install App',
        appStore: 'From App Store or Google Play',
        securedPayment: 'Secured Payment Gateways',
        copyright: '©2023 Anurag Kumar. All Rights Reseverd.'
    },
    fr: {
        home: 'Accueil',
        shop: 'Boutique',
        blog: 'Blog',
        about: 'À propos',
        contact: 'Contact',
        heroHeading: 'Offre de reprise',
        heroTitle: 'Offres de grande valeur',
        heroSubtitle: 'Sur tous les produits',
        heroDescription: 'Économisez davantage avec des coupons et jusqu’à 70 % de réduction !',
        heroButton: 'Acheter maintenant',
        freeShipping: 'Livraison gratuite',
        onlineOrder: 'Commande en ligne',
        saveMoney: 'Économiser de l’argent',
        promotion: 'Promotion',
        happySell: 'Vente heureuse',
        support: 'Assistance 24/7',
        featuredProducts: 'Produits en vedette',
        featuredDescription: 'Collection d’été Nouveau design moderne',
        repairServices: 'Services de réparation',
        repairOffer: 'Jusqu’à 70 % de réduction sur tous les T-shirts et accessoires',
        exploreMore: 'Explorer davantage',
        dealsHeading: 'offres incroyables',
        dealsTitle: 'achetez-en un et obtenez-en un gratuitement',
        dealsDescription: 'La meilleure robe classique est en vente chez cara',
        learnMore: 'En savoir plus',
        seasonHeading: 'printemps/été',
        seasonTitle: 'saison à venir',
        collection: 'Collection',
        seasonSale: 'VENTE DE SAISON',
        winterCollection: 'collection d’hiver -50 %',
        footwearCollection: 'NOUVELLE COLLECTION DE CHAUSSURES',
        seasonYear: 'printemps / été 2023',
        tshirt: 'T-SHIRT',
        trendyPrints: 'Nouveaux imprimés tendance',
        newsletterHeading: 'Inscrivez-vous à la newsletter',
        newsletterBody: 'Recevez des mises à jour par e-mail sur notre dernière boutique et',
        specialOffers: 'offres spéciales.',
        emailPlaceholder: 'Votre adresse e-mail',
        signUp: 'S’inscrire',
        contactHeading: 'Contact',
        addressLabel: 'Adresse :',
        phoneLabel: 'Téléphone :',
        hoursLabel: 'Heures :',
        followUs: 'Suivez-nous',
        aboutHeading: 'À propos',
        aboutUs: 'À propos de nous',
        deliveryInfo: 'Informations de livraison',
        privacyPolicy: 'Politique de confidentialité',
        termsCondition: 'Conditions générales',
        contactUs: 'Contactez-nous',
        myAccount: 'Mon compte',
        signIn: 'Se connecter',
        viewCart: 'Voir le panier',
        wishlist: 'Ma liste de souhaits',
        trackOrder: 'Suivre ma commande',
        help: 'Aide',
        installApp: 'Installer l’application',
        appStore: 'Depuis l’App Store ou Google Play',
        securedPayment: 'Passerelles de paiement sécurisées',
        copyright: '©2023 Anurag Kumar. Tous droits réservés.'
    },
    ja: {
        home: 'ホーム',
        shop: 'ショップ',
        blog: 'ブログ',
        about: '会社情報',
        contact: 'お問い合わせ',
        heroHeading: 'トレードイン特典',
        heroTitle: 'お得な特価セール',
        heroSubtitle: 'すべての商品に',
        heroDescription: 'クーポンでさらにお得に、最大70%オフ！',
        heroButton: '今すぐ購入',
        freeShipping: '送料無料',
        onlineOrder: 'オンライン注文',
        saveMoney: 'お得に買う',
        promotion: 'プロモーション',
        happySell: '売れ筋商品',
        support: '24時間体制のサポート',
        featuredProducts: 'おすすめ商品',
        featuredDescription: '夏コレクション 新しいモダンデザイン',
        repairServices: '修理サービス',
        repairOffer: 'Tシャツやアクセサリーを最大70%オフ',
        exploreMore: 'もっと見る',
        dealsHeading: 'お得な特典',
        dealsTitle: '1枚買うと1枚お得',
        dealsDescription: '最高のクラシックドレスがcaraでセール中です',
        learnMore: '詳しく見る',
        seasonHeading: '春/夏',
        seasonTitle: '今シーズンの新作',
        collection: 'コレクション',
        seasonSale: 'シーズンセール',
        winterCollection: '冬コレクション -50%オフ',
        footwearCollection: '新作シューズコレクション',
        seasonYear: '春 / 夏 2023',
        tshirt: 'Tシャツ',
        trendyPrints: '新しいトレンド柄',
        newsletterHeading: 'ニュースレター登録',
        newsletterBody: '最新ショップ情報と',
        specialOffers: '特別オファーをお届けします。',
        emailPlaceholder: 'メールアドレスを入力',
        signUp: '登録する',
        contactHeading: 'お問い合わせ',
        addressLabel: '住所:',
        phoneLabel: '電話:',
        hoursLabel: '営業時間:',
        followUs: 'フォローする',
        aboutHeading: '会社情報',
        aboutUs: '会社概要',
        deliveryInfo: '配送情報',
        privacyPolicy: 'プライバシーポリシー',
        termsCondition: '利用規約',
        contactUs: 'お問い合わせ',
        myAccount: 'マイアカウント',
        signIn: 'ログイン',
        viewCart: 'カートを見る',
        wishlist: 'ウィッシュリスト',
        trackOrder: '注文状況を確認',
        help: 'ヘルプ',
        installApp: 'アプリを入手',
        appStore: 'App StoreまたはGoogle Playから',
        securedPayment: '安全な決済方法',
        copyright: '©2023 Anurag Kumar. All Rights Reserved.'
    }
};

function setLanguage(lang) {
    const selected = translations[lang] || translations.en;
    document.querySelectorAll('[data-i18n]').forEach((element) => {
        const key = element.getAttribute('data-i18n');
        if (selected[key]) {
            element.textContent = selected[key];
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (selected[key]) {
            element.setAttribute('placeholder', selected[key]);
        }
    });

    document.documentElement.lang = lang === 'ja' ? 'ja' : lang === 'fr' ? 'fr' : 'en';
}

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

if (Close) {
    Close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}

if (languageSwitcher) {
    languageSwitcher.addEventListener('change', (event) => {
        setLanguage(event.target.value);
    });
}

setLanguage('en');