import { a as e } from "./rolldown-runtime-BYbx6iT9.js";
import {
  C as t,
  T as n,
  _ as r,
  a as i,
  b as a,
  c as o,
  d as s,
  f as c,
  g as l,
  h as u,
  i as d,
  l as f,
  m as p,
  n as m,
  o as h,
  p as g,
  r as _,
  s as v,
  t as y,
  u as b,
  v as x,
  x as S,
  y as C,
} from "./react-vendor-BLM6SkXl.js";
import {
  $ as w,
  A as T,
  B as ee,
  C as te,
  D as ne,
  E as re,
  F as E,
  G as D,
  H as O,
  I as k,
  J as A,
  K as j,
  L as M,
  M as N,
  N as P,
  O as F,
  P as ie,
  Q as I,
  R as ae,
  S as oe,
  T as se,
  U as ce,
  V as L,
  W as le,
  X as ue,
  Y as de,
  Z as fe,
  _ as pe,
  a as me,
  at as he,
  b as R,
  c as ge,
  ct as _e,
  d as ve,
  dt as ye,
  et as z,
  f as be,
  ft as xe,
  g as Se,
  h as Ce,
  ht as B,
  i as V,
  it as we,
  j as H,
  k as Te,
  l as Ee,
  lt as De,
  m as Oe,
  mt as ke,
  n as Ae,
  nt as je,
  o as U,
  ot as Me,
  p as Ne,
  pt as Pe,
  q as Fe,
  r as W,
  rt as Ie,
  s as Le,
  st as Re,
  t as ze,
  tt as G,
  u as K,
  ut as q,
  v as Be,
  w as Ve,
  x as He,
  y as Ue,
  z as We,
} from "./vendor-DOP_z4is.js";
(function () {
  let e = document.createElement(`link`).relList;
  if (e && e.supports && e.supports(`modulepreload`)) return;
  for (let e of document.querySelectorAll(`link[rel="modulepreload"]`)) n(e);
  new MutationObserver((e) => {
    for (let t of e)
      if (t.type === `childList`)
        for (let e of t.addedNodes)
          e.tagName === `LINK` && e.rel === `modulepreload` && n(e);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(e) {
    let t = {};
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
      e.crossOrigin === `use-credentials`
        ? (t.credentials = `include`)
        : e.crossOrigin === `anonymous`
          ? (t.credentials = `omit`)
          : (t.credentials = `same-origin`),
      t
    );
  }
  function n(e) {
    if (e.ep) return;
    e.ep = !0;
    let n = t(e);
    fetch(e.href, n);
  }
})();
var J = e(n(), 1),
  Ge = t(),
  Ke = {
    en: {
      topbar_language: `Language`,
      nav_home: `Home`,
      nav_about: `About Us`,
      nav_services: `Services`,
      nav_corporate: `Corporate`,
      nav_contact: `Contact`,
      nav_login: `Account Login`,
      nav_signup: `Sign Up`,
      nav_admin: `Admin`,
      nav_dashboard: `Dashboard`,
      footer_global_support: `Global Support`,
      footer_connect: `Connect with us`,
      footer_links: `Quick Links`,
      footer_services: `Services`,
      footer_contact: `Contact Us`,
      footer_copyright: `All rights reserved.`,
      home_hero_subtitle: `Global Banking`,
      home_hero_title: `Private Banking for the Modern World`,
      home_hero_cta: `Learn Our Story`,
      home_legacy_subtitle: `Our Legacy`,
      home_legacy_title: `Over 30 Years of Institutional Excellence`,
      home_legacy_text: `Since 1990, Crown Summit Bank has served as a global cornerstone of financial stability.`,
      home_bullet_1: `Tier-1 Capital Ratios`,
      home_bullet_2: `Global Asset Custody`,
      home_bullet_3: `Bespoke Wealth Advisory`,
      about_hero_title: `Legacy of Trust.`,
      about_hero_text: `Discover the principles, history, and vision that drive Crown Summit Bank.`,
      about_section_title: `Thirty Years of Stability and Evolution`,
      about_section_text: `Founded as a specialized commercial lender focused on local market stability.`,
      services_hero_title: `Capital Without Borders.`,
      services_hero_text: `Crown Summit Bank provides the infrastructure for your global lifestyle.`,
      contact_hero_title: `Personalized Partnership.`,
      contact_hero_text: `Our dedicated asset managers are available globally to ensure your institutional needs are met.`,
      contact_form_title: `Inquiry Form`,
      contact_form_text: `Typical response time: Under 15 minutes.`,
      login_title: `Sign In`,
      login_text: `Enter your official credentials to access your private banking portal.`,
      login_button: `Secure Login`,
      login_forgot: `Forgot Password?`,
      signup_title: `Create your account`,
      signup_text: `Start your private banking journey with Crown Summit Bank.`,
      forgot_title: `Forgot Password?`,
      forgot_text: `Please enter the email associated with your Crown Summit Bank account.`,
      update_title: `Set New Password`,
      update_text: `Create a strong password to protect your institutional assets.`,
      corporate_title: `Powering Global Enterprise.`,
      corporate_text: `Customized liquidity solutions, risk management, and strategic advisory for ambitious corporations.`,
      insurance_title: `Insuring Global Assets.`,
      insurance_text: `From maritime logistics to corporate liability, we provide underwriting precision for institutions.`,
      wealth_title: `Wealth Redefined.`,
      wealth_text: `We provide the financial engineering required to protect, grow, and transition institutional-scale capital.`,
      privacy_title: `Privacy & Asset Data Policy.`,
      privacy_intro: `At Crown Summit Bank, physical wealth protection and digital data integrity are treated as a unified operational layer.`,
      terms_title: `Terms of Global Service.`,
      terms_intro: `By interacting with Crown Summit Bank, you accept compliance protocols governing institutional actions.`,
      cookie_title: `Cookie & Telemetry Preferences.`,
      cookie_intro: `Adjust your baseline configuration tracking layers and preference settings.`,
      admin_portal_title: `Admin Portal`,
      admin_portal_text: `Crown Summit Bank Internal System`,
      admin_username: `Username`,
      admin_password: `Password`,
      admin_signin: `Sign In`,
      account_login: `Account Login`,
      account_signup: `Sign Up`,
      lang_en: `English`,
      lang_tr: `Türkçe`,
      lang_es: `Español`,
      lang_fr: `Français`,
    },
    tr: {
      topbar_language: `Dil`,
      nav_home: `Ana Sayfa`,
      nav_about: `Hakkımızda`,
      nav_services: `Hizmetler`,
      nav_corporate: `Kurumsal`,
      nav_contact: `İletişim`,
      nav_login: `Hesap Girişi`,
      nav_signup: `Kayıt Ol`,
      nav_admin: `Yönetici`,
      nav_dashboard: `Kontrol Paneli`,
      footer_global_support: `Küresel Destek`,
      footer_connect: `Bizimle Bağlanın`,
      footer_links: `Hızlı Bağlantılar`,
      footer_services: `Hizmetler`,
      footer_contact: `Bize Ulaşın`,
      footer_copyright: `Tüm hakları saklıdır.`,
      home_hero_subtitle: `Küresel Bankacılık`,
      home_hero_title: `Modern Dünya İçin Özel Bankacılık`,
      home_hero_cta: `Hikayemizi Öğrenin`,
      home_legacy_subtitle: `Mirasımız`,
      home_legacy_title: `30 Yılı Aşkın Kurumsal Mükemmellik`,
      home_legacy_text: `1990'dan beri Crown Summit Bank finansal istikrarın küresel bir mihenk taşı olmuştur.`,
      home_bullet_1: `Tier-1 Sermaye Oranları`,
      home_bullet_2: `Küresel Varlık Saklama`,
      home_bullet_3: `Özel Varlık Danışmanlığı`,
      about_hero_title: `Güven Mirası.`,
      about_hero_text: `Crown Summit Bank'ı yönlendiren ilke, tarih ve vizyonu keşfedin.`,
      about_section_title: `İstikrar ve Evrimin Otuz Yılı`,
      about_section_text: `Yerel pazar istikrarına odaklanan özel bir ticari kredi kuruluşu olarak kuruldu.`,
      services_hero_title: `Sınırlar Olmaksızın Sermaye.`,
      services_hero_text: `Crown Summit Bank, küresel yaşam tarzınız için altyapı sağlar.`,
      contact_hero_title: `Kişiselleştirilmiş Ortaklık.`,
      contact_hero_text: `Kurumsal ihtiyaçlarınızın karşılanmasını sağlamak için varlık yöneticilerimiz küresel olarak hizmet vermektedir.`,
      contact_form_title: `Talep Formu`,
      contact_form_text: `Tipik yanıt süresi: 15 dakika içinde.`,
      login_title: `Giriş Yap`,
      login_text: `Özel bankacılık portalınıza erişmek için resmi kimlik bilgilerinizi girin.`,
      login_button: `Güvenli Giriş`,
      login_forgot: `Şifremi Unuttum?`,
      signup_title: `Hesabınızı Oluşturun`,
      signup_text: `Crown Summit Bank ile özel bankacılık yolculuğunuza başlayın.`,
      forgot_title: `Şifremi Unuttum?`,
      forgot_text: `Crown Summit Bank hesabınızla ilişkili e-postayı girin.`,
      update_title: `Yeni Şifre Belirle`,
      update_text: `Kurumsal varlıklarınızı korumak için güçlü bir şifre oluşturun.`,
      corporate_title: `Küresel Kurumsal Güç.`,
      corporate_text: `Hırslı şirketler için özelleştirilmiş likidite çözümleri ve stratejik danışmanlık.`,
      insurance_title: `Küresel Varlıkları Sigortalıyoruz.`,
      insurance_text: `Deniz taşımacılığından kurumsal sorumluluğa kadar kurumlar için sigorta hassasiyeti sunuyoruz.`,
      wealth_title: `Servet Yeniden Tanımlandı.`,
      wealth_text: `Kurumsal ölçekli sermayeyi korumak, büyütmek ve devretmek için finansal mühendislik sağlıyoruz.`,
      privacy_title: `Gizlilik ve Varlık Veri Politikası.`,
      privacy_intro: `Crown Summit Bank'de fiziksel varlık koruması ve dijital veri bütünlüğü birleşik bir operasyonel katman olarak ele alınır.`,
      terms_title: `Küresel Hizmet Şartları.`,
      terms_intro: `Crown Summit Bank ile etkileşime girerek kurumsal eylemleri yöneten uyum protokollerini kabul edersiniz.`,
      cookie_title: `Çerez ve Telemetri Tercihleri.`,
      cookie_intro: `Temel yapılandırma izleme katmanlarınızı ve tercih ayarlarınızı ayarlayın.`,
      admin_portal_title: `Yönetici Portalı`,
      admin_portal_text: `Crown Summit Bank İç Sistemi`,
      admin_username: `Kullanıcı Adı`,
      admin_password: `Şifre`,
      admin_signin: `Giriş Yap`,
      account_login: `Hesap Girişi`,
      account_signup: `Kayıt Ol`,
      lang_en: `English`,
      lang_tr: `Türkçe`,
      lang_es: `Español`,
      lang_fr: `Français`,
    },
    es: {
      topbar_language: `Idioma`,
      nav_home: `Inicio`,
      nav_about: `Sobre Nosotros`,
      nav_services: `Servicios`,
      nav_corporate: `Corporativo`,
      nav_contact: `Contacto`,
      nav_login: `Acceso`,
      nav_signup: `Registrarse`,
      nav_admin: `Admin`,
      nav_dashboard: `Panel`,
      footer_global_support: `Soporte Global`,
      footer_connect: `Conéctate con nosotros`,
      footer_links: `Enlaces Rápidos`,
      footer_services: `Servicios`,
      footer_contact: `Contáctanos`,
      footer_copyright: `Todos los derechos reservados.`,
      home_hero_subtitle: `Banca Global`,
      home_hero_title: `Banca Privada para el Mundo Moderno`,
      home_hero_cta: `Conoce nuestra historia`,
      home_legacy_subtitle: `Nuestro Legado`,
      home_legacy_title: `Más de 30 Años de Excelencia Institucional`,
      home_legacy_text: `Desde 1990, Crown Summit Bank ha sido un pilar global de estabilidad financiera.`,
      home_bullet_1: `Ratios de Capital Tier-1`,
      home_bullet_2: `Custodia Global de Activos`,
      home_bullet_3: `Asesoría Patrimonial a Medida`,
      about_hero_title: `Legado de Confianza.`,
      about_hero_text: `Descubre los principios, la historia y la visión que impulsan a Crown Summit Bank.`,
      about_section_title: `Treinta Años de Estabilidad y Evolución`,
      about_section_text: `Fundada como prestamista comercial especializado enfocado en la estabilidad del mercado local.`,
      services_hero_title: `Capital Sin Fronteras.`,
      services_hero_text: `Crown Summit Bank proporciona infraestructura para tu estilo de vida global.`,
      contact_hero_title: `Asociación Personalizada.`,
      contact_hero_text: `Nuestros gestores de activos están disponibles globalmente para atender tus necesidades institucionales.`,
      contact_form_title: `Formulario de Consulta`,
      contact_form_text: `Tiempo de respuesta típico: Menos de 15 minutos.`,
      login_title: `Iniciar Sesión`,
      login_text: `Introduce tus credenciales oficiales para acceder a tu portal privado.`,
      login_button: `Acceso Seguro`,
      login_forgot: `¿Olvidaste tu contraseña?`,
      signup_title: `Crea tu cuenta`,
      signup_text: `Inicia tu viaje bancario privado con Crown Summit Bank.`,
      forgot_title: `¿Olvidaste tu contraseña?`,
      forgot_text: `Introduce el correo electrónico asociado a tu cuenta de Crown Summit Bank.`,
      update_title: `Establece una nueva contraseña`,
      update_text: `Crea una contraseña fuerte para proteger tus activos institucionales.`,
      corporate_title: `Impulsando la Empresa Global.`,
      corporate_text: `Soluciones de liquidez personalizadas, gestión de riesgos y asesoría estratégica.`,
      insurance_title: `Asegurando Activos Globales.`,
      insurance_text: `Desde logística marítima hasta responsabilidad corporativa, ofrecemos precisión de seguros.`,
      wealth_title: `Riqueza Redefinida.`,
      wealth_text: `Ofrecemos ingeniería financiera sofisticada para proteger y hacer crecer capital institucional.`,
      privacy_title: `Política de Privacidad y Datos.`,
      privacy_intro: `En Crown Summit Bank, la protección de la riqueza y la integridad de los datos se tratan como una sola capa.`,
      terms_title: `Términos de Servicio Global.`,
      terms_intro: `Al interactuar con Crown Summit Bank, aceptas los protocolos de cumplimiento.`,
      cookie_title: `Preferencias de Cookies y Telemetría.`,
      cookie_intro: `Ajusta tus capas de seguimiento y preferencias de configuración.`,
      admin_portal_title: `Portal Admin`,
      admin_portal_text: `Sistema Interno Crown Summit Bank`,
      admin_username: `Usuario`,
      admin_password: `Contraseña`,
      admin_signin: `Iniciar Sesión`,
      account_login: `Acceso`,
      account_signup: `Registrarse`,
      lang_en: `English`,
      lang_tr: `Türkçe`,
      lang_es: `Español`,
      lang_fr: `Français`,
    },
    fr: {
      topbar_language: `Langue`,
      nav_home: `Accueil`,
      nav_about: `À Propos`,
      nav_services: `Services`,
      nav_corporate: `Corporate`,
      nav_contact: `Contact`,
      nav_login: `Connexion`,
      nav_signup: `Inscription`,
      nav_admin: `Admin`,
      nav_dashboard: `Tableau`,
      footer_global_support: `Support Global`,
      footer_connect: `Contactez-nous`,
      footer_links: `Liens Rapides`,
      footer_services: `Services`,
      footer_contact: `Nous Contacter`,
      footer_copyright: `Tous droits réservés.`,
      home_hero_subtitle: `Banque Globale`,
      home_hero_title: `Banque Privée pour le Monde Moderne`,
      home_hero_cta: `Découvrez notre histoire`,
      home_legacy_subtitle: `Notre Héritage`,
      home_legacy_title: `Plus de 30 Ans d'Excellence Institutionnelle`,
      home_legacy_text: `Depuis 1990, Crown Summit Bank est un pilier mondial de stabilité financière.`,
      home_bullet_1: `Ratios de Capital Tier-1`,
      home_bullet_2: `Garde d'Actifs Globale`,
      home_bullet_3: `Conseil Patrimonial Sur Mesure`,
      about_hero_title: `Héritage de Confiance.`,
      about_hero_text: `Découvrez les principes, l'histoire et la vision qui animent Crown Summit Bank.`,
      about_section_title: `Trente Ans de Stabilité et d'Évolution`,
      about_section_text: `Fondé comme prêteur commercial spécialisé axé sur la stabilité du marché local.`,
      services_hero_title: `Capital Sans Frontières.`,
      services_hero_text: `Crown Summit Bank fournit l'infrastructure pour votre style de vie mondial.`,
      contact_hero_title: `Partenariat Personnalisé.`,
      contact_hero_text: `Nos gestionnaires de patrimoine sont disponibles globalement pour répondre à vos besoins institutionnels.`,
      contact_form_title: `Formulaire de Contact`,
      contact_form_text: `Temps de réponse typique : moins de 15 minutes.`,
      login_title: `Connexion`,
      login_text: `Saisissez vos identifiants officiels pour accéder à votre portail privé.`,
      login_button: `Connexion Sécurisée`,
      login_forgot: `Mot de passe oublié ?`,
      signup_title: `Créez votre compte`,
      signup_text: `Commencez votre parcours bancaire privé.`,
      forgot_title: `Mot de passe oublié ?`,
      forgot_text: `Entrez l'adresse e-mail associée à votre compte Crown Summit Bank.`,
      update_title: `Définir un nouveau mot de passe`,
      update_text: `Créez un mot de passe fort pour protéger vos actifs institutionnels.`,
      corporate_title: `Alimenter l'Entreprise Globale.`,
      corporate_text: `Solutions de liquidité personnalisées, gestion des risques et conseil stratégique.`,
      insurance_title: `Assurer les Actifs Mondiaux.`,
      insurance_text: `De la logistique maritime à la responsabilité d'entreprise, nous offrons une précision en assurance.`,
      wealth_title: `Richesse Redéfinie.`,
      wealth_text: `Nous fournissons l'ingénierie financière nécessaire pour protéger et faire croître le capital institutionnel.`,
      privacy_title: `Politique de Confidentialité et de Données.`,
      privacy_intro: `Chez Crown Summit Bank, la protection de la richesse et l'intégrité des données sont traitées comme une seule couche.`,
      terms_title: `Conditions de Service Globales.`,
      terms_intro: `En interagissant avec Crown Summit Bank, vous acceptez les protocoles de conformité.`,
      cookie_title: `Préférences de Cookies et Télémetrie.`,
      cookie_intro: `Ajustez vos couches de suivi et vos préférences de configuration.`,
      admin_portal_title: `Portail Admin`,
      admin_portal_text: `Système Interne Crown Summit Bank`,
      admin_username: `Nom d'utilisateur`,
      admin_password: `Mot de passe`,
      admin_signin: `Connexion`,
      account_login: `Connexion`,
      account_signup: `Inscription`,
      lang_en: `English`,
      lang_tr: `Türkçe`,
      lang_es: `Español`,
      lang_fr: `Français`,
    },
  },
  Y = p(),
  qe = (0, J.createContext)({
    locale: `en`,
    setLocale: () => void 0,
    t: (e) => e,
    languages: [],
  }),
  Je = `doksanlarb_locale`,
  Ye = () => {
    if (typeof Intl < `u` && typeof Intl.supportedValuesOf == `function`)
      try {
        return Array.from(new Set(Intl.supportedValuesOf(`language`)));
      } catch (e) {
        console.warn(`Intl.supportedValuesOf('language') is unavailable:`, e);
      }
    return `en.tr.es.fr.de.ru.ar.zh.ja.pt.hi.ko.it.nl.af.am.az.be.bg.bn.bs.ca.cs.da.el.et.fa.fi.fil.ga.he.hr.hu.hy.id.is.ka.kk.km.lo.lt.lv.mk.mn.ms.nb.ne.pl.ro.si.sk.sl.sq.sr.sv.sw.ta.te.th.uk.ur.uz.vi.zu`.split(
      `.`,
    );
  },
  Xe = (e) => {
    try {
      if (typeof Intl > `u`) return e;
      let t = new Intl.DisplayNames([e], { type: `language` }).of(e);
      return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
    } catch {
      return e;
    }
  },
  Ze = () =>
    Ye()
      .map((e) => ({ code: e, label: Xe(e) }))
      .filter((e) => e.label && e.label !== e.code)
      .sort((e, t) => e.label.localeCompare(t.label)),
  Qe = ({ children: e }) => {
    let [t, n] = (0, J.useState)(`en`),
      [r, i] = (0, J.useState)(() => Ze());
    (0, J.useEffect)(() => {
      let e = typeof localStorage < `u` ? localStorage.getItem(Je) : null;
      if (e) (n(e), a(e));
      else if (typeof navigator < `u`) {
        let e = navigator.language.split(`-`)[0];
        Ye().includes(e) && (n(e), a(e));
      }
      typeof navigator < `u` && i(Ze());
    }, []);
    let a = (e) => {
        if (typeof document > `u`) return;
        let t = [`ar`, `he`, `fa`, `ur`];
        document.body.dir = t.includes(e) ? `rtl` : `ltr`;
      },
      o = (e) => {
        (n(e), a(e), typeof localStorage < `u` && localStorage.setItem(Je, e));
      },
      s = (e) => Ke[t]?.[e] ?? Ke.en?.[e] ?? e,
      c = (0, J.useMemo)(
        () => ({ locale: t, setLocale: o, t: s, languages: r }),
        [t, r],
      );
    return (0, Y.jsx)(qe.Provider, { value: c, children: e });
  },
  $e = () => (0, J.useContext)(qe),
  et = () => {
    let { locale: e, setLocale: t, languages: n, t: r } = $e();
    return (0, Y.jsxs)(`div`, {
      "data-no-translate": !0,
      className: `flex items-center gap-3`,
      children: [
        (0, Y.jsxs)(`div`, {
          className: `flex items-center gap-2 text-slate-400 text-[11px] uppercase tracking-[0.28em] font-bold`,
          children: [
            (0, Y.jsx)(O, { size: 16, className: `text-blue-700` }),
            r(`topbar_language`),
          ],
        }),
        (0, Y.jsx)(`select`, {
          value: e,
          onChange: (e) => t(e.target.value),
          className: `rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-800 shadow-sm outline-none transition-all focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10`,
          children: n.map((e) =>
            (0, Y.jsx)(`option`, { value: e.code, children: e.label }, e.code),
          ),
        }),
      ],
    });
  },
  tt = () => {
    let [e, t] = (0, J.useState)(!1),
      [n, i] = (0, J.useState)(!1);
    (0, J.useEffect)(() => {
      let e = () => i(window.scrollY > 20);
      return (
        window.addEventListener(`scroll`, e),
        () => window.removeEventListener(`scroll`, e)
      );
    }, []);
    let { t: a } = $e(),
      o = [
        { name: a(`nav_home`), path: `/` },
        { name: a(`nav_about`), path: `/about` },
        { name: a(`nav_services`), path: `/services` },
        { name: a(`nav_corporate`), path: `/corporate` },
        { name: a(`nav_contact`), path: `/contact` },
      ];
    return (0, Y.jsxs)(`nav`, {
      className: `fixed w-full z-100`,
      children: [
        (0, Y.jsx)(`div`, {
          className: `w-full bg-slate-950 text-slate-100 border-b border-slate-800/50`,
          children: (0, Y.jsxs)(`div`, {
            className: `max-w-7xl mx-auto flex items-center justify-between h-10 sm:h-12 px-4 sm:px-6 md:px-12 text-xs sm:text-sm`,
            children: [
              (0, Y.jsxs)(`a`, {
                href: `mailto:info@doksanlarb.com`,
                className: `flex items-center font-bold uppercase tracking-wider sm:tracking-widest hover:text-blue-400 transition-colors py-1 h-full`,
                title: `Email us at info@doksanlarb.com`,
                children: [
                  (0, Y.jsx)(`div`, {
                    className: `flex sm:hidden items-center bg-slate-900 border border-slate-800 rounded-full p-2 text-blue-400 hover:bg-slate-800 transition-colors`,
                    children: (0, Y.jsx)(g, { size: 16 }),
                  }),
                  (0, Y.jsxs)(`div`, {
                    className: `hidden sm:flex items-center`,
                    children: [
                      (0, Y.jsx)(g, {
                        size: 14,
                        className: `mr-2 text-blue-400 shrink-0`,
                      }),
                      (0, Y.jsx)(`span`, {
                        className: `text-gray-400`,
                        children: `info@doksanlarb.com`,
                      }),
                    ],
                  }),
                ],
              }),
              (0, Y.jsx)(`div`, {
                className: `flex items-center justify-end h-full py-10`,
                children: (0, Y.jsx)(et, {}),
              }),
            ],
          }),
        }),
        (0, Y.jsx)(`div`, {
          className: `transition-all duration-500 ${n ? `bg-white/95 backdrop-blur-md border-b border-slate-100 h-16 md:h-20 shadow-sm` : `bg-white h-20 md:h-28`}`,
          children: (0, Y.jsxs)(`div`, {
            className: `max-w-450 mx-auto px-6 md:px-12 h-full flex items-center justify-between`,
            children: [
              (0, Y.jsxs)(l, {
                to: `/`,
                className: `flex items-center gap-3 z-130`,
                children: [
                  (0, Y.jsx)(`img`, {
                    src: `favicon.png`,
                    alt: `Crown Summit Bank Logo`,
                    className: `w-15 h-18 sm:w-12 sm:h-12 md:w-25 md:h-20 object-contain`,
                  }),
                  (0, Y.jsx)(`div`, {
                    className: `flex items-center gap-2 group cursor-pointer`,
                    children: (0, Y.jsxs)(`span`, {
                      className: `relative text-xl md:text-3xl font-black tracking-tighter uppercase italic transition-all duration-500`,
                      children: [
                        (0, Y.jsx)(`span`, {
                          className: `bg-linear-to-b from-slate-900 via-slate-800 to-slate-950 bg-clip-text text-transparent drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]`,
                          children: `Doksanlarb-`,
                        }),
                        (0, Y.jsx)(`span`, {
                          className: `bg-linear-to-tr from-blue-600 via-blue-400 to-blue-800 bg-clip-text text-transparent ml-1 drop-shadow-[0_2px_8px_rgba(37,99,235,0.3)]`,
                          children: `Finance`,
                        }),
                        (0, Y.jsx)(`span`, {
                          className: `absolute -bottom-1 left-0 w-0 h-1 bg-blue-600 rounded-full transition-all duration-500 group-hover:w-full shadow-[0_0_15px_rgba(37,99,235,0.6)]`,
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, Y.jsxs)(`div`, {
                className: `hidden lg:flex items-center gap-12`,
                children: [
                  (0, Y.jsx)(`ul`, {
                    className: `flex items-center gap-10`,
                    children: o.map((e) =>
                      (0, Y.jsx)(
                        `li`,
                        {
                          className: ``,
                          children: (0, Y.jsx)(r, {
                            to: e.path,
                            className: ({ isActive: e }) =>
                              `text-md font-bold uppercase tracking-[0.2em] transition-all ${e ? `text-blue-700 border-b-2 border-blue-700` : `text-slate-600 hover:text-slate-900`}`,
                            children: e.name,
                          }),
                        },
                        e.name,
                      ),
                    ),
                  }),
                  (0, Y.jsxs)(l, {
                    to: `/login`,
                    className: `px-8 py-3 bg-slate-950 text-white text-[11px] font-black uppercase tracking-widest rounded-xl hover:bg-blue-700 transition-all flex items-center gap-2`,
                    children: [(0, Y.jsx)(P, { size: 14 }), ` Account Login`],
                  }),
                ],
              }),
              (0, Y.jsx)(`button`, {
                onClick: () => t(!e),
                className: `lg:hidden z-130 p-2 text-slate-900`,
                children: e
                  ? (0, Y.jsx)(U, { size: 28 })
                  : (0, Y.jsx)(Te, { size: 28 }),
              }),
            ],
          }),
        }),
        (0, Y.jsx)(V, {
          children:
            e &&
            (0, Y.jsxs)(Y.Fragment, {
              children: [
                (0, Y.jsx)(W.div, {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0 },
                  onClick: () => t(!1),
                  className: `fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-110 lg:hidden`,
                }),
                (0, Y.jsxs)(W.div, {
                  initial: { x: `100%` },
                  animate: { x: 0 },
                  exit: { x: `100%` },
                  transition: { type: `spring`, damping: 25, stiffness: 200 },
                  className: `fixed top-0 right-0 w-[85%] sm:w-100 h-screen bg-white z-120 lg:hidden shadow-2xl flex flex-col`,
                  children: [
                    (0, Y.jsxs)(`div`, {
                      className: `p-8 pt-24 flex-1`,
                      children: [
                        (0, Y.jsx)(`span`, {
                          className: `text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-8 block border-b border-slate-100 pb-2`,
                          children: `Navigation`,
                        }),
                        (0, Y.jsx)(`div`, {
                          className: `flex flex-col gap-1`,
                          children: o.map((e, n) =>
                            (0, Y.jsx)(
                              W.div,
                              {
                                initial: { opacity: 0, x: 20 },
                                animate: { opacity: 1, x: 0 },
                                transition: { delay: n * 0.05 },
                                children: (0, Y.jsxs)(r, {
                                  to: e.path,
                                  onClick: () => t(!1),
                                  className: ({ isActive: e }) =>
                                    `group flex items-center justify-between py-4 border-b border-slate-50 transition-all ${e ? `text-blue-700` : `text-slate-900`}`,
                                  children: [
                                    (0, Y.jsx)(`span`, {
                                      className: `text-xl font-black uppercase tracking-tight text-slate-900`,
                                      children: e.name,
                                    }),
                                    (0, Y.jsx)(G, {
                                      size: 18,
                                      className: `text-slate-300 group-hover:translate-x-1 transition-transform`,
                                    }),
                                  ],
                                }),
                              },
                              e.name,
                            ),
                          ),
                        }),
                        (0, Y.jsxs)(`div`, {
                          className: `mt-12 space-y-6`,
                          children: [
                            (0, Y.jsxs)(`div`, {
                              className: `flex items-center gap-4 text-slate-500`,
                              children: [
                                (0, Y.jsx)(F, {
                                  size: 18,
                                  className: `text-blue-600`,
                                }),
                                (0, Y.jsx)(`span`, {
                                  className: `text-sm font-bold`,
                                  children: `+1 (800) Crown Summit Bank - VIP`,
                                }),
                              ],
                            }),
                            (0, Y.jsxs)(`div`, {
                              className: `flex items-center gap-4 text-slate-500`,
                              children: [
                                (0, Y.jsx)(O, {
                                  size: 18,
                                  className: `text-blue-600`,
                                }),
                                (0, Y.jsx)(`span`, {
                                  className: `text-sm font-bold`,
                                  children: `Global Support (EN/TR)`,
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, Y.jsxs)(`div`, {
                      className: `p-8 bg-slate-50 border-t border-slate-100`,
                      children: [
                        (0, Y.jsx)(`div`, {
                          className: `flex flex-row gap-4`,
                          children: (0, Y.jsxs)(l, {
                            to: `/login`,
                            onClick: () => t(!1),
                            className: `w-full py-5 bg-blue-700 text-white font-black rounded-xl shadow-lg shadow-blue-700/30 flex items-center justify-center gap-3 text-sm uppercase tracking-widest`,
                            children: [
                              (0, Y.jsx)(R, { size: 18 }),
                              `Login Access`,
                            ],
                          }),
                        }),
                        (0, Y.jsx)(`p`, {
                          className: `text-[9px] text-center text-slate-400 font-bold uppercase tracking-widest mt-6`,
                          children: `Regulated by the Financial Authority`,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
        }),
      ],
    });
  },
  nt = () => {
    let e = new Date().getFullYear();
    return (0, Y.jsxs)(`footer`, {
      className: `relative bg-slate-950 text-slate-200 border-t border-slate-800/60 overflow-hidden`,
      children: [
        (0, Y.jsx)(`div`, {
          className: `absolute top-0 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none`,
        }),
        (0, Y.jsx)(`div`, {
          className: `absolute bottom-0 right-1/4 translate-y-1/2 w-96 h-96 bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none`,
        }),
        (0, Y.jsxs)(`div`, {
          className: `max-w-7xl mx-auto px-6 pt-16 pb-8 relative z-10`,
          children: [
            (0, Y.jsxs)(`div`, {
              className: `grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 pb-12 border-b border-slate-800/60`,
              children: [
                (0, Y.jsxs)(`div`, {
                  className: `flex flex-col space-y-6 sm:col-span-2 md:col-span-1`,
                  children: [
                    (0, Y.jsxs)(`span`, {
                      className: `flex flex-row items-center gap-3`,
                      children: [
                        (0, Y.jsx)(`img`, {
                          src: `favicon.png`,
                          alt: `Crown Summit Bank Logo`,
                          className: `w-10 h-10 drop-shadow-xl rounded-full bg-linear-to-tr from-blue-500 to-indigo-500 p-0.5`,
                        }),
                        (0, Y.jsxs)(`h3`, {
                          className: `text-xl font-black tracking-tight italic bg-linear-to-tr from-white via-slate-200 to-slate-400 bg-clip-text text-transparent drop-shadow-sm`,
                          children: [
                            `Doksanlarb-`,
                            (0, Y.jsx)(`span`, {
                              className: `text-blue-500 not-italic font-light block sm:inline`,
                              children: `Finance`,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, Y.jsx)(`p`, {
                      className: `text-slate-400 text-sm leading-relaxed font-normal max-w-sm`,
                      children: `Combining traditional values with cutting-edge financial technology. Governed by Swiss-grade security and global excellence.`,
                    }),
                    (0, Y.jsx)(`div`, {
                      className: `flex items-center gap-3 pt-2`,
                      children: [
                        {
                          icon: (0, Y.jsx)(v, {}),
                          path: `/login`,
                          label: `LinkedIn`,
                          brand: `hover:bg-[#0077B5] hover:border-[#0077B5]`,
                        },
                        {
                          icon: (0, Y.jsx)(s, {}),
                          path: `/signup`,
                          label: `Twitter`,
                          brand: `hover:bg-[#1DA1F2] hover:border-[#1DA1F2]`,
                        },
                        {
                          icon: (0, Y.jsx)(h, {}),
                          path: `/login`,
                          label: `Instagram`,
                          brand: `hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:border-transparent`,
                        },
                        {
                          icon: (0, Y.jsx)(_, {}),
                          path: `/signup`,
                          label: `Facebook`,
                          brand: `hover:bg-[#1877F2] hover:border-[#1877F2]`,
                        },
                      ].map((e, t) =>
                        (0, Y.jsx)(
                          l,
                          {
                            to: e.path,
                            "aria-label": e.label,
                            className: `w-9 h-9 flex items-center justify-center rounded-lg border border-slate-800 bg-slate-900/50 text-slate-400 hover:text-white shadow-sm transition-all duration-300 group ${e.brand}`,
                            children: (0, Y.jsx)(`span`, {
                              className: `text-base group-hover:scale-110 transition-transform duration-300`,
                              children: e.icon,
                            }),
                          },
                          t,
                        ),
                      ),
                    }),
                  ],
                }),
                (0, Y.jsxs)(`div`, {
                  className: `flex flex-col space-y-4`,
                  children: [
                    (0, Y.jsx)(`h4`, {
                      className: `text-sm font-semibold tracking-wider text-slate-100 uppercase`,
                      children: `Quick Links`,
                    }),
                    (0, Y.jsx)(`ul`, {
                      className: `space-y-3`,
                      children: [
                        { to: `/`, icon: (0, Y.jsx)(d, {}), label: `Home` },
                        {
                          to: `/about`,
                          icon: (0, Y.jsx)(i, {}),
                          label: `About Us`,
                        },
                        {
                          to: `/services`,
                          icon: (0, Y.jsx)(f, {}),
                          label: `Services`,
                        },
                        {
                          to: `/contact`,
                          icon: (0, Y.jsx)(o, {}),
                          label: `Contact`,
                        },
                      ].map((e, t) =>
                        (0, Y.jsx)(
                          `li`,
                          {
                            children: (0, Y.jsxs)(r, {
                              to: e.to,
                              className: ({ isActive: e }) =>
                                `group flex items-center gap-2.5 text-sm font-medium transition-colors duration-200 ${e ? `text-blue-400` : `text-slate-400 hover:text-white`}`,
                              children: [
                                (0, Y.jsx)(`span`, {
                                  className: `text-slate-500 group-hover:text-blue-400 transition-colors duration-200`,
                                  children: e.icon,
                                }),
                                (0, Y.jsx)(`span`, { children: e.label }),
                              ],
                            }),
                          },
                          t,
                        ),
                      ),
                    }),
                  ],
                }),
                (0, Y.jsxs)(`div`, {
                  className: `flex flex-col space-y-4`,
                  children: [
                    (0, Y.jsx)(`h4`, {
                      className: `text-sm font-semibold tracking-wider text-slate-100 uppercase`,
                      children: `Services`,
                    }),
                    (0, Y.jsx)(`ul`, {
                      className: `space-y-3`,
                      children: [
                        {
                          to: `/login`,
                          icon: (0, Y.jsx)(c, {}),
                          label: `Personal Banking`,
                        },
                        {
                          to: `/corporate`,
                          icon: (0, Y.jsx)(y, {}),
                          label: `Corporate Banking`,
                        },
                        {
                          to: `/wealth-management`,
                          icon: (0, Y.jsx)(m, {}),
                          label: `Wealth Management`,
                        },
                        {
                          to: `/insurance-services`,
                          icon: (0, Y.jsx)(b, {}),
                          label: `Insurance Services`,
                        },
                      ].map((e, t) =>
                        (0, Y.jsx)(
                          `li`,
                          {
                            children: (0, Y.jsxs)(r, {
                              to: e.to,
                              className: ({ isActive: e }) =>
                                `group flex items-center gap-2.5 text-sm font-medium transition-colors duration-200 ${e ? `text-blue-400` : `text-slate-400 hover:text-white`}`,
                              children: [
                                (0, Y.jsx)(`span`, {
                                  className: `text-slate-500 group-hover:text-blue-400 transition-colors duration-200`,
                                  children: e.icon,
                                }),
                                (0, Y.jsx)(`span`, { children: e.label }),
                              ],
                            }),
                          },
                          t,
                        ),
                      ),
                    }),
                  ],
                }),
                (0, Y.jsxs)(`div`, {
                  className: `flex flex-col space-y-4`,
                  children: [
                    (0, Y.jsx)(`h4`, {
                      className: `text-sm font-semibold tracking-wider text-slate-100 uppercase`,
                      children: `Contact Us`,
                    }),
                    (0, Y.jsxs)(`address`, {
                      className: `not-italic text-sm text-slate-400 space-y-4`,
                      children: [
                        (0, Y.jsxs)(`a`, {
                          href: `https://maps.google.com`,
                          target: `_blank`,
                          rel: `noreferrer`,
                          className: `flex items-start gap-3 group hover:text-slate-200 transition-colors duration-200`,
                          children: [
                            (0, Y.jsx)(T, {
                              className: `w-4 h-4 text-blue-500 shrink-0 mt-0.5 group-hover:scale-110 transition-transform`,
                            }),
                            (0, Y.jsxs)(`span`, {
                              className: `leading-relaxed`,
                              children: [
                                `Ziya Gökalp, Süleyman Demirel Blv No:75B, 34490 Başakşehir`,
                                (0, Y.jsxs)(`span`, {
                                  className: `text-xs text-slate-500 group-hover:text-blue-400 flex items-center gap-1 mt-0.5`,
                                  children: [
                                    `İstanbul, Türkiye `,
                                    (0, Y.jsx)(De, { className: `w-3 h-3` }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, Y.jsxs)(`div`, {
                          className: `flex items-center gap-3`,
                          children: [
                            (0, Y.jsx)(F, {
                              className: `w-4 h-4 text-blue-500 shrink-0`,
                            }),
                            (0, Y.jsx)(`a`, {
                              href: `tel:+905343938840`,
                              className: `hover:text-slate-200 transition-colors duration-200`,
                              children: `+90 534 393 88 40`,
                            }),
                          ],
                        }),
                        (0, Y.jsxs)(`div`, {
                          className: `flex items-center gap-3`,
                          children: [
                            (0, Y.jsx)(H, {
                              className: `w-4 h-4 text-blue-500 shrink-0`,
                            }),
                            (0, Y.jsx)(`a`, {
                              href: `mailto:info@doksanlarb.com`,
                              className: `hover:text-slate-200 transition-colors duration-200 break-all`,
                              children: `info@doksanlarb.com`,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, Y.jsxs)(`div`, {
              className: `flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 text-xs text-slate-500`,
              children: [
                (0, Y.jsxs)(`p`, {
                  children: [
                    `© `,
                    e,
                    ` Crown Summit Bank. All rights reserved.`,
                  ],
                }),
                (0, Y.jsxs)(`div`, {
                  className: `flex items-center gap-6`,
                  children: [
                    (0, Y.jsx)(l, {
                      to: `/privacy-policy`,
                      className: `hover:text-slate-300 transition-colors`,
                      children: `Privacy Policy`,
                    }),
                    (0, Y.jsx)(l, {
                      to: `/terms&service`,
                      className: `hover:text-slate-300 transition-colors`,
                      children: `Terms of Service`,
                    }),
                    (0, Y.jsx)(l, {
                      to: `/cookie-settings`,
                      className: `hover:text-slate-300 transition-colors`,
                      children: `Cookies Settings`,
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  };
function rt() {
  let { pathname: e } = a();
  return (
    (0, J.useEffect)(() => {
      window.scrollTo(0, 0);
    }, [e]),
    null
  );
}
var it = `https://translate.googleapis.com/translate_a/single?client=gtx&dt=t&dj=1&ie=UTF-8&oe=UTF-8`,
  at = (e) => {
    let t = document.createTreeWalker(e, NodeFilter.SHOW_TEXT, {
        acceptNode(e) {
          let t = e.parentElement;
          return !t ||
            t.closest(`[data-no-translate]`) ||
            t.tagName === `SCRIPT` ||
            t.tagName === `STYLE` ||
            t.tagName === `TEXTAREA` ||
            t.tagName === `INPUT` ||
            t.tagName === `OPTION` ||
            !e.nodeValue?.trim()
            ? NodeFilter.FILTER_REJECT
            : NodeFilter.FILTER_ACCEPT;
        },
      }),
      n = [];
    for (; t.nextNode(); ) n.push(t.currentNode);
    return n;
  },
  ot = async (e, t) => {
    if (!e || !t || t === `en`) return e;
    let n = `translate_${t}_${e}`,
      r = sessionStorage.getItem(n);
    if (r) return r;
    try {
      let r = await fetch(
        `${it}&sl=auto&tl=${encodeURIComponent(t)}&q=${encodeURIComponent(e)}`,
      );
      if (!r.ok) throw Error(`Translation fetch failed`);
      let i = (await r.json()).sentences?.map((e) => e.trans).join(``) ?? e;
      return (sessionStorage.setItem(n, i), i);
    } catch (t) {
      return (console.warn(`Translation failed:`, t), e);
    }
  },
  st = (e, t) => {
    let n = [];
    for (let r = 0; r < e.length; r += t) n.push(e.slice(r, r + t));
    return n;
  },
  ct = () => {
    let { locale: e } = $e(),
      t = a(),
      n = (0, J.useRef)(new WeakMap()),
      r = (0, J.useRef)(e);
    return (
      (0, J.useEffect)(() => {
        r.current = e;
      }, [e]),
      (0, J.useEffect)(() => {
        let t = document.body;
        if (!t) return;
        let r = at(t);
        if (!r.length) return;
        for (let e of r)
          n.current.has(e) || n.current.set(e, e.nodeValue ?? ``);
        let i = r.map((e) => n.current.get(e) ?? ``),
          a = Array.from(new Set(i)).filter(Boolean);
        (async () => {
          if (e === `en`) {
            r.forEach((e) => {
              let t = n.current.get(e);
              t !== void 0 && (e.nodeValue = t);
            });
            return;
          }
          let t = st(a, 10),
            i = new Map();
          for (let n of t) {
            let t = (
              await ot(
                n.join(`

`),
                e,
              )
            ).split(`

`);
            t.length === n.length
              ? n.forEach((e, n) => {
                  i.set(e, t[n]);
                })
              : n.forEach((e) => i.set(e, e));
          }
          r.forEach((e) => {
            let t = n.current.get(e) ?? e.nodeValue ?? ``;
            e.nodeValue = i.get(t) ?? t;
          });
        })();
      }, [e, t.pathname]),
      null
    );
  },
  X = [
    {
      image: `https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1600`,
      title: `Institutional Wealth Management.`,
      description: `Multi-generational wealth preservation and bespoke advisory services for the global elite. Est. 1990.`,
      icon: (0, Y.jsx)(M, { className: `w-5 h-5` }),
      path: `/wealth-management`,
    },
    {
      image: `https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1600`,
      title: `Seamless Markets, Real-time Liquidity.`,
      description: `Execute institutional-grade trades and manage multi-currency portfolios through our advanced global network.`,
      icon: (0, Y.jsx)(O, { className: `w-5 h-5` }),
      path: `/markets`,
    },
    {
      image: `https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1600`,
      title: `Fortress Security Protocols.`,
      description: `Triple-layer encryption, real-time fraud prevention, and physical vault access to ensure your capital remains stable.`,
      icon: (0, Y.jsx)(R, { className: `w-5 h-5` }),
      path: `/security`,
    },
  ];
function lt() {
  let [e, t] = (0, J.useState)(0);
  return (
    (0, J.useEffect)(() => {
      let e = setInterval(() => {
        t((e) => (e + 1) % X.length);
      }, 8e3);
      return () => clearInterval(e);
    }, []),
    (0, Y.jsxs)(`section`, {
      className: `relative min-h-screen w-full flex items-center overflow-hidden`,
      children: [
        (0, Y.jsxs)(`div`, {
          className: `absolute inset-0 z-0 overflow-hidden`,
          children: [
            (0, Y.jsx)(V, {
              mode: `wait`,
              children: (0, Y.jsx)(
                W.div,
                {
                  initial: { opacity: 0, scale: 1.1 },
                  animate: { opacity: 1, scale: 1 },
                  exit: { opacity: 0 },
                  transition: { duration: 1.5, ease: `easeOut` },
                  className: `absolute inset-0`,
                  children: (0, Y.jsx)(`img`, {
                    src: `https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000`,
                    className: `w-full h-full object-cover grayscale-[0.2] contrast-[1.1]`,
                    alt: `Doksanlar Global HQ`,
                  }),
                },
                e,
              ),
            }),
            (0, Y.jsx)(`div`, {
              className: `absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/80 to-transparent md:from-slate-950 md:via-slate-950/90 md:to-transparent`,
            }),
            (0, Y.jsx)(`div`, {
              className: `absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent`,
            }),
            (0, Y.jsx)(`div`, {
              className: `absolute inset-0 opacity-[0.015] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]`,
            }),
          ],
        }),
        (0, Y.jsxs)(`div`, {
          className: `relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center py-24`,
          children: [
            (0, Y.jsx)(`div`, {
              className: `relative`,
              children: (0, Y.jsx)(V, {
                mode: `wait`,
                children: (0, Y.jsxs)(
                  W.div,
                  {
                    initial: { opacity: 0, x: -40 },
                    animate: { opacity: 1, x: 0 },
                    exit: { opacity: 0, x: 20 },
                    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
                    children: [
                      (0, Y.jsxs)(`div`, {
                        className: `inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-white shadow-sm border border-slate-100 mb-10`,
                        children: [
                          (0, Y.jsx)(`div`, {
                            className: `text-blue-700`,
                            children: X[e].icon,
                          }),
                          (0, Y.jsx)(`div`, {
                            className: `h-4 w-px bg-slate-200`,
                          }),
                          (0, Y.jsx)(`span`, {
                            className: `text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]`,
                            children: `Est. 1990 • Global Tier 1 Bank`,
                          }),
                        ],
                      }),
                      (0, Y.jsx)(`h1`, {
                        className: `text-5xl md:text-8xl font-black text-white leading-[0.95] mb-8 tracking-tighter italic`,
                        children: X[e].title,
                      }),
                      (0, Y.jsx)(`p`, {
                        className: `text-xl text-slate-300 mb-14 leading-relaxed font-medium max-w-xl`,
                        children: X[e].description,
                      }),
                      (0, Y.jsxs)(`div`, {
                        className: `flex flex-wrap gap-5`,
                        children: [
                          (0, Y.jsxs)(l, {
                            to: `/signup`,
                            className: `px-10 py-5 bg-blue-700 text-white font-bold rounded-xl hover:bg-white hover:text-blue-950 transition-all duration-300 shadow-2xl shadow-blue-900/40 flex items-center gap-3 text-xs uppercase tracking-widest`,
                            children: [
                              `Establish Account`,
                              (0, Y.jsx)(q, { size: 16 }),
                            ],
                          }),
                          (0, Y.jsx)(l, {
                            to: `/contact`,
                            className: `px-10 py-5 bg-transparent border-2 border-white/20 text-white font-bold rounded-xl hover:bg-white/10 backdrop-blur-sm transition-all text-xs uppercase tracking-widest`,
                            children: `Request Consultation`,
                          }),
                        ],
                      }),
                    ],
                  },
                  e,
                ),
              }),
            }),
            (0, Y.jsxs)(`div`, {
              className: `relative h-112.5 md:h-162.5 w-full`,
              children: [
                (0, Y.jsx)(V, {
                  mode: `wait`,
                  children: (0, Y.jsxs)(
                    W.div,
                    {
                      initial: { opacity: 0, scale: 0.95 },
                      animate: { opacity: 1, scale: 1 },
                      exit: { opacity: 0, scale: 1.05 },
                      transition: { duration: 1, ease: `easeOut` },
                      className: `absolute inset-0 rounded-[4rem] overflow-hidden shadow-[0_60px_100px_-30px_rgba(0,0,0,0.25)] border-16 border-white z-10`,
                      children: [
                        (0, Y.jsx)(`img`, {
                          src: X[e].image,
                          alt: `Institutional Banking`,
                          className: `w-full h-full object-cover grayscale-[0.1] contrast-[1.1]`,
                        }),
                        (0, Y.jsx)(`div`, {
                          className: `absolute inset-0 bg-linear-to-t from-slate-950/20 via-transparent to-transparent`,
                        }),
                      ],
                    },
                    e,
                  ),
                }),
                (0, Y.jsx)(W.div, {
                  animate: { y: [0, -10, 0] },
                  transition: { duration: 4, repeat: 1 / 0 },
                  className: `absolute -bottom-8 -right-8 z-20 bg-white p-8 rounded-4xl shadow-2xl border border-slate-100 hidden lg:block`,
                  children: (0, Y.jsxs)(`div`, {
                    className: `flex items-center gap-5`,
                    children: [
                      (0, Y.jsx)(`div`, {
                        className: `w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center`,
                        children: (0, Y.jsx)(_e, { size: 24 }),
                      }),
                      (0, Y.jsxs)(`div`, {
                        children: [
                          (0, Y.jsx)(`p`, {
                            className: `text-[10px] font-black text-slate-400 uppercase tracking-widest`,
                            children: `Institution Rating`,
                          }),
                          (0, Y.jsx)(`p`, {
                            className: `text-xl font-black text-slate-950`,
                            children: `AAA+ Stable`,
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        }),
        (0, Y.jsx)(`div`, {
          className: `absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-4`,
          children: X.map((n, r) =>
            (0, Y.jsx)(
              `button`,
              {
                onClick: () => t(r),
                className: `h-1.5 transition-all duration-500 rounded-full ${r === e ? `w-16 bg-blue-600` : `w-6 bg-white/20 hover:bg-white/40`}`,
              },
              r,
            ),
          ),
        }),
      ],
    })
  );
}
var ut = () =>
    (0, Y.jsx)(`section`, {
      className: `py-20 bg-blue-700`,
      children: (0, Y.jsx)(`div`, {
        className: `max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12 text-white`,
        children: [
          { label: `Founded`, val: `1990` },
          { label: `Assets`, val: `$62B+` },
          { label: `Locations`, val: `450+` },
          { label: `Global Rating`, val: `AAA+` },
        ].map((e, t) =>
          (0, Y.jsxs)(
            `div`,
            {
              className: `text-center`,
              children: [
                (0, Y.jsx)(`p`, {
                  className: `text-4xl font-black mb-2`,
                  children: e.val,
                }),
                (0, Y.jsx)(`p`, {
                  className: `text-blue-200 uppercase tracking-widest text-xs font-bold`,
                  children: e.label,
                }),
              ],
            },
            t,
          ),
        ),
      }),
    }),
  dt = () =>
    (0, Y.jsx)(`section`, {
      className: `py-32 bg-white`,
      children: (0, Y.jsx)(`div`, {
        className: `max-w-7xl mx-auto px-6`,
        children: (0, Y.jsx)(`div`, {
          className: `grid md:grid-cols-2 lg:grid-cols-4 gap-8`,
          children: [
            {
              icon: (0, Y.jsx)(ge, {}),
              title: `Personal Banking`,
              desc: `Tailored checking and savings accounts designed for your daily needs.`,
            },
            {
              icon: (0, Y.jsx)(be, {}),
              title: `Investment Plans`,
              desc: `Strategic asset allocation to ensure long-term capital appreciation.`,
            },
            {
              icon: (0, Y.jsx)(R, {}),
              title: `Insurance Services`,
              desc: `Comprehensive coverage to protect what matters most to you.`,
            },
            {
              icon: (0, Y.jsx)(Se, {}),
              title: `Mobile Banking`,
              desc: `Award-winning app to manage your wealth from anywhere on earth.`,
            },
          ].map((e, t) =>
            (0, Y.jsxs)(
              `div`,
              {
                className: `group p-10 rounded-4xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-2xl transition-all duration-500`,
                children: [
                  (0, Y.jsx)(`div`, {
                    className: `w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`,
                    children: e.icon,
                  }),
                  (0, Y.jsx)(`h3`, {
                    className: `text-xl font-bold text-slate-900 mb-4`,
                    children: e.title,
                  }),
                  (0, Y.jsx)(`p`, {
                    className: `text-slate-500 leading-relaxed text-sm`,
                    children: e.desc,
                  }),
                ],
              },
              t,
            ),
          ),
        }),
      }),
    }),
  ft = () =>
    (0, Y.jsx)(`section`, {
      className: `py-32 bg-slate-950 text-white overflow-hidden relative`,
      children: (0, Y.jsx)(`div`, {
        className: `max-w-7xl mx-auto px-6 relative z-10`,
        children: (0, Y.jsxs)(`div`, {
          className: `lg:grid lg:grid-cols-2 gap-20 items-center`,
          children: [
            (0, Y.jsxs)(`div`, {
              children: [
                (0, Y.jsx)(`p`, {
                  className: `text-slate-400 mb-10 text-lg`,
                  children: `We employ multi-layer biometric authentication and real-time AI fraud monitoring to ensure your assets remain untouchable.`,
                }),
                (0, Y.jsx)(`div`, {
                  className: `space-y-8`,
                  children: [
                    {
                      icon: (0, Y.jsx)(P, {}),
                      title: `AES-256 Encryption`,
                      text: `Global standard for data protection used by governments.`,
                    },
                    {
                      icon: (0, Y.jsx)(He, {}),
                      title: `Fraud Prevention`,
                      text: `Instant alerts and automatic freezing for suspicious activity.`,
                    },
                  ].map((e, t) =>
                    (0, Y.jsxs)(
                      `div`,
                      {
                        className: `flex gap-6`,
                        children: [
                          (0, Y.jsx)(`div`, {
                            className: `text-blue-500`,
                            children: e.icon,
                          }),
                          (0, Y.jsxs)(`div`, {
                            children: [
                              (0, Y.jsx)(`h4`, {
                                className: `font-bold text-xl mb-1`,
                                children: e.title,
                              }),
                              (0, Y.jsx)(`p`, {
                                className: `text-slate-500`,
                                children: e.text,
                              }),
                            ],
                          }),
                        ],
                      },
                      t,
                    ),
                  ),
                }),
              ],
            }),
            (0, Y.jsxs)(`div`, {
              className: `mt-20 lg:mt-0 relative`,
              children: [
                (0, Y.jsx)(`img`, {
                  src: `https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070`,
                  className: `rounded-[3rem] opacity-60 border border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/20 transition-shadow duration-300 relative z-10`,
                  alt: `Data Security`,
                }),
                (0, Y.jsx)(`div`, {
                  className: `absolute inset-0 bg-blue-600/10 rounded-[3rem]`,
                }),
              ],
            }),
          ],
        }),
      }),
    }),
  pt = [
    `London`,
    `Zurich`,
    `Singapore`,
    `New York`,
    `Turkey`,
    `Hong Kong`,
    `Mexico`,
    `Dubai`,
    `Frankfurt`,
  ];
function Z() {
  let e = [...pt, ...pt];
  return (0, Y.jsxs)(`div`, {
    className: `relative w-full py-10 overflow-hidden bg-white border-t border-slate-100`,
    children: [
      (0, Y.jsx)(`div`, {
        className: `absolute inset-y-0 left-0 w-32 bg-linear-to-r from-white to-transparent z-10`,
      }),
      (0, Y.jsx)(`div`, {
        className: `absolute inset-y-0 right-0 w-32 bg-linear-to-l from-white to-transparent z-10`,
      }),
      (0, Y.jsx)(W.div, {
        className: `flex whitespace-nowrap gap-x-16`,
        animate: { x: [`0%`, `-50%`] },
        transition: { duration: 30, ease: `linear`, repeat: 1 / 0 },
        children: e.map((e, t) =>
          (0, Y.jsxs)(
            `div`,
            {
              className: `flex items-center gap-3 group cursor-default`,
              children: [
                (0, Y.jsx)(O, {
                  className: `w-4 h-4 text-blue-600/40 group-hover:text-blue-600 transition-colors`,
                }),
                (0, Y.jsx)(`span`, {
                  className: `text-[10px] font-black text-slate-400 group-hover:text-slate-950 uppercase tracking-[0.4em] transition-colors`,
                  children: e,
                }),
                (0, Y.jsx)(`div`, {
                  className: `ml-16 w-1 h-1 bg-slate-200 rounded-full`,
                }),
              ],
            },
            t,
          ),
        ),
      }),
    ],
  });
}
var mt = ({ subtitle: e, title: t, light: n = !1, centered: r = !1 }) =>
  (0, Y.jsxs)(`div`, {
    className: `mb-16 md:mb-24 ${r ? `text-center mx-auto` : `text-left`}`,
    children: [
      (0, Y.jsxs)(W.div, {
        initial: { opacity: 0, y: 10 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: !0 },
        className: `flex items-center gap-4 mb-6 ${r ? `justify-center` : ``}`,
        children: [
          (0, Y.jsx)(`span`, {
            className: `h-0.5 w-8 rounded-full ${n ? `bg-blue-400` : `bg-blue-600`}`,
          }),
          (0, Y.jsx)(`span`, {
            className: `text-[11px] font-black uppercase tracking-[0.3em] ${n ? `text-blue-300` : `text-blue-600`}`,
            children: e,
          }),
        ],
      }),
      (0, Y.jsx)(W.h2, {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: !0 },
        transition: { delay: 0.1 },
        className: `text-2xl md:text-6xl font-black tracking-tight leading-[1.1] ${n ? `text-white` : `text-slate-900`} max-w-4xl ${r ? `mx-auto` : ``}`,
        children: t,
      }),
      r &&
        (0, Y.jsx)(`div`, {
          className: `mt-8 flex justify-center`,
          children: (0, Y.jsx)(`div`, {
            className: `h-1.5 w-20 bg-blue-600 rounded-full`,
          }),
        }),
    ],
  });
function ht() {
  return (0, Y.jsxs)(`main`, {
    className: `w-full bg-white font-sans selection:bg-blue-600 selection:text-white`,
    children: [
      (0, Y.jsx)(lt, {}),
      (0, Y.jsx)(`div`, { children: (0, Y.jsx)(Z, {}) }),
      (0, Y.jsx)(ut, {}),
      (0, Y.jsx)(`section`, {
        className: `py-32 bg-slate-50 overflow-hidden border-y border-slate-100`,
        children: (0, Y.jsx)(`div`, {
          className: `max-w-7xl mx-auto px-6`,
          children: (0, Y.jsxs)(`div`, {
            className: `grid lg:grid-cols-2 gap-20 items-center`,
            children: [
              (0, Y.jsxs)(W.div, {
                initial: { opacity: 0, x: -30 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: !0 },
                children: [
                  (0, Y.jsx)(mt, {
                    subtitle: `Our Legacy`,
                    title: `Over 30 Years of Institutional Excellence`,
                  }),
                  (0, Y.jsx)(`p`, {
                    className: `text-xl text-slate-600 leading-relaxed mb-10`,
                    children: `Since 1990, Crown Summit Bank has served as a global cornerstone of financial stability. We combine traditional wealth protection with high-velocity digital infrastructure to empower the modern investor.`,
                  }),
                  (0, Y.jsx)(`div`, {
                    className: `space-y-4 mb-10`,
                    children: [
                      `Tier-1 Capital Ratios`,
                      `Global Asset Custody`,
                      `Bespoke Wealth Advisory`,
                    ].map((e, t) =>
                      (0, Y.jsxs)(
                        `div`,
                        {
                          className: `flex items-center gap-3 font-bold text-slate-800`,
                          children: [
                            (0, Y.jsx)(w, {
                              className: `text-blue-600`,
                              size: 20,
                            }),
                            (0, Y.jsx)(`span`, { children: e }),
                          ],
                        },
                        t,
                      ),
                    ),
                  }),
                  (0, Y.jsxs)(l, {
                    to: `/about`,
                    className: `max-w-fit flex items-center gap-3 px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-blue-700 transition-all group`,
                    children: [
                      `LEARN OUR STORY`,
                      (0, Y.jsx)(q, {
                        size: 18,
                        className: `group-hover:translate-x-1 transition-transform`,
                      }),
                    ],
                  }),
                ],
              }),
              (0, Y.jsxs)(W.div, {
                initial: { opacity: 0, scale: 0.95 },
                whileInView: { opacity: 1, scale: 1 },
                viewport: { once: !0 },
                className: `relative`,
                children: [
                  (0, Y.jsx)(`img`, {
                    src: `https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070`,
                    className: `rounded-[3rem] shadow-2xl relative z-10 border-12 border-white`,
                    alt: `Crown Summit Bank Headquarters`,
                    loading: `lazy`,
                  }),
                  (0, Y.jsx)(`div`, {
                    className: `absolute -bottom-10 -right-10 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-10`,
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
      (0, Y.jsx)(dt, {}),
      (0, Y.jsx)(ft, {}),
      (0, Y.jsx)(`section`, {
        className: `py-32 bg-white`,
        children: (0, Y.jsxs)(`div`, {
          className: `max-w-7xl mx-auto px-6 text-center`,
          children: [
            (0, Y.jsx)(mt, {
              subtitle: `Global Impact`,
              title: `Sustainable Banking for a Greener Future`,
              centered: !0,
            }),
            (0, Y.jsx)(`div`, {
              className: `grid md:grid-cols-3 gap-12 mt-12`,
              children: [
                {
                  title: `Eco-Invest`,
                  icon: (0, Y.jsx)(me, {}),
                  text: `We've committed $5B to renewable energy projects and sustainable infrastructure by 2030.`,
                },
                {
                  title: `Community First`,
                  icon: (0, Y.jsx)(_e, {}),
                  text: `Supporting local small businesses through specialized grants and low-interest credit lines.`,
                },
                {
                  title: `Transparent Governance`,
                  icon: (0, Y.jsx)(we, {}),
                  text: `Ranked #1 for ethical banking practices and institutional transparency in 2025.`,
                },
              ].map((e, t) =>
                (0, Y.jsxs)(
                  W.div,
                  {
                    whileHover: { y: -10 },
                    className: `flex flex-col items-center p-12 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-blue-900/5 transition-all`,
                    children: [
                      (0, Y.jsx)(`div`, {
                        className: `w-20 h-20 bg-blue-700 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-200`,
                        children: J.cloneElement(e.icon, { size: 32 }),
                      }),
                      (0, Y.jsx)(`h4`, {
                        className: `text-2xl font-bold mb-4 text-slate-900`,
                        children: e.title,
                      }),
                      (0, Y.jsx)(`p`, {
                        className: `text-slate-500 leading-relaxed text-[15px]`,
                        children: e.text,
                      }),
                    ],
                  },
                  t,
                ),
              ),
            }),
          ],
        }),
      }),
      (0, Y.jsx)(`section`, {
        className: `pb-32 px-6`,
        children: (0, Y.jsxs)(`div`, {
          className: `max-w-7xl mx-auto relative group rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(2,6,23,0.4)]`,
          children: [
            (0, Y.jsxs)(`div`, {
              className: `absolute inset-0 z-0 scale-105 group-hover:scale-110 transition-transform duration-3000 ease-out`,
              children: [
                (0, Y.jsx)(`img`, {
                  src: `https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070`,
                  className: `w-full h-full object-cover grayscale-[0.3] contrast-[1.1]`,
                  alt: `Crown Summit Bank Global HQ`,
                }),
                (0, Y.jsx)(`div`, {
                  className: `absolute inset-0 bg-linear-to-br from-slate-950 via-slate-950/90 to-blue-900/40`,
                }),
                (0, Y.jsx)(`div`, {
                  className: `absolute inset-0 bg-radial-at-tr from-blue-500/10 via-transparent to-transparent`,
                }),
              ],
            }),
            (0, Y.jsxs)(`div`, {
              className: `relative z-10 p-16 md:p-32 flex flex-col items-center text-center`,
              children: [
                (0, Y.jsxs)(W.div, {
                  initial: { opacity: 0, y: 15 },
                  whileInView: { opacity: 1, y: 0 },
                  className: `inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-12 shadow-2xl`,
                  children: [
                    (0, Y.jsx)(R, { className: `w-4 h-4 text-blue-400` }),
                    (0, Y.jsx)(`span`, {
                      className: `text-[10px] font-black text-blue-200 uppercase tracking-[0.5em]`,
                      children: `Global Asset Protection • Tier 1 Capital`,
                    }),
                  ],
                }),
                (0, Y.jsxs)(`h2`, {
                  className: `text-4xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-[0.9] max-w-5xl italic`,
                  children: [
                    `Command Your `,
                    (0, Y.jsx)(`br`, {}),
                    (0, Y.jsx)(`span`, {
                      className: `text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-indigo-200 to-white not-italic font-light tracking-normal`,
                      children: `Financial Destiny.`,
                    }),
                  ],
                }),
                (0, Y.jsx)(`p`, {
                  className: `text-blue-100/60 mb-16 max-w-2xl mx-auto text-lg md:text-2xl font-medium leading-relaxed`,
                  children: `Infrastructure for the global citizen. Secure multi-currency liquidity and institutional-grade wealth management across 140+ jurisdictions.`,
                }),
                (0, Y.jsxs)(`div`, {
                  className: `flex flex-col sm:flex-row items-center justify-center gap-8 w-full`,
                  children: [
                    (0, Y.jsxs)(l, {
                      to: `/signup`,
                      className: `group/btn relative px-14 py-7 bg-white text-slate-950 font-black rounded-2xl hover:bg-blue-600 hover:text-white transition-all duration-500 shadow-2xl active:scale-95 flex items-center gap-4 text-xs uppercase tracking-[0.2em] overflow-hidden`,
                      children: [
                        (0, Y.jsx)(`span`, {
                          className: `relative z-10`,
                          children: `Establish Private Account`,
                        }),
                        (0, Y.jsx)(De, {
                          className: `relative z-10 w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform`,
                        }),
                      ],
                    }),
                    (0, Y.jsxs)(l, {
                      to: `/contact`,
                      className: `px-14 py-7 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/5 backdrop-blur-md transition-all text-xs uppercase tracking-[0.2em] flex items-center gap-3 group/link`,
                      children: [
                        `Consult an International Advisor`,
                        (0, Y.jsx)(G, {
                          size: 16,
                          className: `text-blue-400 group-hover/link:translate-x-1 transition-transform`,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, Y.jsx)(`div`, {
              className: `absolute top-0 right-0 w-150 h-150 bg-blue-500/10 rounded-full blur-[140px] -mr-80 -mt-80 pointer-events-none`,
            }),
            (0, Y.jsx)(`div`, {
              className: `absolute bottom-0 left-0 w-100 h-100 bg-indigo-500/10 rounded-full blur-[100px] -ml-40 -mb-40 pointer-events-none`,
            }),
            (0, Y.jsx)(`div`, {
              className: `absolute inset-0 border border-white/10 rounded-[4rem] pointer-events-none`,
            }),
          ],
        }),
      }),
    ],
  });
}
var gt = ({ subtitle: e, title: t, centered: n = !1 }) =>
  (0, Y.jsxs)(`div`, {
    className: `mb-16 ${n ? `text-center` : ``}`,
    children: [
      (0, Y.jsxs)(`div`, {
        className: `flex items-center gap-3 mb-4 ${n ? `justify-center` : ``}`,
        children: [
          (0, Y.jsx)(`div`, { className: `h-px w-12 bg-blue-600` }),
          (0, Y.jsx)(`span`, {
            className: `font-bold uppercase tracking-[0.2em] text-xs text-blue-600`,
            children: e,
          }),
        ],
      }),
      (0, Y.jsx)(`h2`, {
        className: `text-4xl md:text-5xl font-black leading-tight text-slate-900 tracking-tight max-w-2xl mx-auto lg:mx-0`,
        children: t,
      }),
    ],
  });
function _t() {
  return (0, Y.jsxs)(`main`, {
    className: `w-full bg-white font-sans selection:bg-blue-600 selection:text-white`,
    children: [
      (0, Y.jsxs)(`section`, {
        className: `relative pt-48 pb-32 overflow-hidden bg-slate-950`,
        children: [
          (0, Y.jsxs)(`div`, {
            className: `absolute inset-0 z-0 opacity-40`,
            children: [
              (0, Y.jsx)(`img`, {
                src: `https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=2074`,
                alt: `Crown Summit Bank Headquarters`,
                className: `w-full h-full object-cover scale-105`,
              }),
              (0, Y.jsx)(`div`, {
                className: `absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/80 to-slate-950/20`,
              }),
            ],
          }),
          (0, Y.jsx)(`div`, {
            className: `relative z-10 max-w-7xl mx-auto px-6 text-center text-white w-full`,
            children: (0, Y.jsxs)(W.div, {
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 1 },
              className: `max-w-3xl mx-auto`,
              children: [
                (0, Y.jsxs)(`div`, {
                  className: `flex items-center gap-3 mb-6 justify-center`,
                  children: [
                    (0, Y.jsx)(`div`, { className: `h-px w-12 bg-blue-500` }),
                    (0, Y.jsx)(`span`, {
                      className: `text-blue-400 font-bold uppercase tracking-[0.2em] text-sm`,
                      children: `Founded in 1990`,
                    }),
                  ],
                }),
                (0, Y.jsxs)(`h1`, {
                  className: `text-6xl md:text-8xl font-black text-white leading-none mb-8 tracking-tighter`,
                  children: [
                    `Legacy of `,
                    (0, Y.jsx)(`span`, {
                      className: `text-blue-500 italic`,
                      children: `Trust.`,
                    }),
                  ],
                }),
                (0, Y.jsx)(`p`, {
                  className: `text-xl text-slate-300 max-w-xl mx-auto leading-relaxed mb-12`,
                  children: `Discover the principles, history, and vision that drive Crown Summit Bank to protect your wealth and empower your ambition in a global economy.`,
                }),
              ],
            }),
          }),
        ],
      }),
      (0, Y.jsxs)(`section`, {
        className: `py-32 bg-slate-50 relative overflow-hidden`,
        children: [
          (0, Y.jsxs)(`div`, {
            className: `max-w-7xl mx-auto px-6`,
            children: [
              (0, Y.jsx)(gt, {
                subtitle: `The Dividend-Bank Journey`,
                title: `Thirty Years of Stability and Evolution`,
              }),
              (0, Y.jsxs)(`div`, {
                className: `grid md:grid-cols-2 lg:grid-cols-4 gap-12 mt-20 relative`,
                children: [
                  (0, Y.jsx)(`div`, {
                    className: `absolute top-7 left-10 right-10 h-1 bg-blue-100 rounded-full hidden lg:block`,
                  }),
                  [
                    {
                      year: `1990`,
                      title: `Establishment`,
                      text: `Founded as a specialized commercial lender focused on local market stability.`,
                    },
                    {
                      year: `2005`,
                      title: `Digital Pioneer`,
                      text: `Launched our first online banking portal, anticipating the digital shift.`,
                    },
                    {
                      year: `2015`,
                      title: `Global Expansion`,
                      text: `Opened strategic branches in 15 countries across three continents.`,
                    },
                    {
                      year: `2024+`,
                      title: `Next-Gen Fintech`,
                      text: `Integrating advanced AI and security standards for borderless wealth.`,
                    },
                  ].map((e) =>
                    (0, Y.jsxs)(
                      `div`,
                      {
                        className: `relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left`,
                        children: [
                          (0, Y.jsx)(`div`, {
                            className: `w-16 h-16 rounded-full bg-blue-700 text-white font-black text-xl flex items-center justify-center mb-8 shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform`,
                            children: e.year,
                          }),
                          (0, Y.jsx)(`h3`, {
                            className: `text-2xl font-bold text-slate-900 mb-3 tracking-tight`,
                            children: e.title,
                          }),
                          (0, Y.jsx)(`p`, {
                            className: `text-slate-600 leading-relaxed text-[15px]`,
                            children: e.text,
                          }),
                        ],
                      },
                      e.year,
                    ),
                  ),
                ],
              }),
            ],
          }),
          (0, Y.jsx)(`div`, {
            className: `absolute -bottom-20 -left-20 w-96 h-96 bg-blue-100 rounded-full blur-[150px] opacity-30`,
          }),
        ],
      }),
      (0, Y.jsx)(`section`, {
        className: `py-32 bg-white`,
        children: (0, Y.jsxs)(`div`, {
          className: `max-w-7xl mx-auto px-6`,
          children: [
            (0, Y.jsx)(`div`, {
              className: `text-center max-w-3xl mx-auto mb-20`,
              children: (0, Y.jsx)(gt, {
                subtitle: `Our Core Pillars`,
                title: `Principles that Guide Every Transaction`,
                centered: !0,
              }),
            }),
            (0, Y.jsx)(`div`, {
              className: `grid md:grid-cols-3 gap-10`,
              children: [
                {
                  icon: (0, Y.jsx)(R, {}),
                  title: `Absolute Integrity`,
                  desc: `Our reputation is built on transparency, honesty, and unwavering ethical standards.`,
                },
                {
                  icon: (0, Y.jsx)(be, {}),
                  title: `Client Growth`,
                  desc: `We are committed to empowering your financial ambition through bespoke advisory and solutions.`,
                },
                {
                  icon: (0, Y.jsx)(Re, {}),
                  title: `Global Perspective`,
                  desc: `A world-class outlook combined with deep local insights to unlock opportunities anywhere.`,
                },
              ].map((e, t) =>
                (0, Y.jsxs)(
                  W.div,
                  {
                    whileHover: { y: -10 },
                    className: `p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-[0_20px_60px_rgba(0,0,0,0.04)] hover:shadow-[0_40px_100px_rgba(59,130,246,0.08)] transition-all`,
                    children: [
                      (0, Y.jsx)(`div`, {
                        className: `w-16 h-16 bg-blue-50 text-blue-700 rounded-2xl flex items-center justify-center mb-8 scale-100 hover:scale-105 transition-transform`,
                        children: e.icon,
                      }),
                      (0, Y.jsx)(`h3`, {
                        className: `text-2xl font-bold mb-4 text-slate-900 tracking-tight`,
                        children: e.title,
                      }),
                      (0, Y.jsx)(`p`, {
                        className: `text-slate-500 leading-relaxed mb-6 text-[15px]`,
                        children: e.desc,
                      }),
                    ],
                  },
                  t,
                ),
              ),
            }),
          ],
        }),
      }),
      (0, Y.jsx)(`section`, {
        className: `py-32 bg-slate-950 text-white overflow-hidden relative`,
        children: (0, Y.jsx)(`div`, {
          className: `max-w-7xl mx-auto px-6 relative z-10`,
          children: (0, Y.jsxs)(`div`, {
            className: `lg:grid lg:grid-cols-2 gap-24 items-center`,
            children: [
              (0, Y.jsxs)(`div`, {
                className: `relative mb-16 lg:mb-0`,
                children: [
                  (0, Y.jsx)(`img`, {
                    src: `https://images.unsplash.com/photo-1573166953836-06864dc70a21?q=80&w=2069`,
                    className: `rounded-[3rem] shadow-2xl relative z-10 border-12 border-slate-900`,
                    alt: `Doksanlar Leadership Team`,
                  }),
                  (0, Y.jsx)(`div`, {
                    className: `absolute -bottom-10 -right-10 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-20`,
                  }),
                ],
              }),
              (0, Y.jsxs)(`div`, {
                className: `order-1 lg:order-2 mb-16 lg:mb-0`,
                children: [
                  (0, Y.jsxs)(`div`, {
                    className: `flex items-center gap-3 mb-4`,
                    children: [
                      (0, Y.jsx)(`div`, { className: `h-px w-12 bg-blue-400` }),
                      (0, Y.jsx)(`span`, {
                        className: `font-bold uppercase tracking-[0.2em] text-xs text-blue-300`,
                        children: `Our Management`,
                      }),
                    ],
                  }),
                  (0, Y.jsx)(`h2`, {
                    className: `text-4xl md:text-5xl font-black leading-tight text-white tracking-tight mb-8`,
                    children: `Guided by Global Visionaries`,
                  }),
                  (0, Y.jsx)(`p`, {
                    className: `text-slate-300 mb-8 leading-relaxed text-lg`,
                    children: `The Crown Summit Bank leadership team is comprised of seasoned financial experts, technologists, and risk managers who ensure our institution maintains its AAA+ stability while leading in fintech innovation.`,
                  }),
                  (0, Y.jsx)(`p`, {
                    className: `text-slate-400 mb-12 text-[16px] leading-relaxed`,
                    children: `Under their guidance, the bank remains focused on protecting client capital and identifying strategic investment opportunities in a globalized economy.`,
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
      (0, Y.jsx)(`section`, {
        className: `py-32 px-6 relative bg-white overflow-hidden`,
        children: (0, Y.jsx)(`div`, {
          className: `max-w-7xl mx-auto`,
          children: (0, Y.jsxs)(W.div, {
            initial: { opacity: 0, y: 40 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: !0 },
            transition: { duration: 0.8, ease: `easeOut` },
            className: `relative group rounded-[4rem] p-12 md:p-24 overflow-hidden shadow-[0_50px_100px_-20px_rgba(30,58,138,0.25)]`,
            children: [
              (0, Y.jsx)(`div`, { className: `absolute inset-0 bg-slate-950` }),
              (0, Y.jsx)(W.div, {
                animate: { scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] },
                transition: { duration: 8, repeat: 1 / 0 },
                className: `absolute -top-24 -right-24 w-125 h-125 bg-blue-600 rounded-full blur-[120px]`,
              }),
              (0, Y.jsx)(W.div, {
                animate: { scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] },
                transition: { duration: 10, repeat: 1 / 0 },
                className: `absolute -bottom-24 -left-24 w-100 h-100 bg-indigo-500 rounded-full blur-[100px]`,
              }),
              (0, Y.jsxs)(`div`, {
                className: `relative z-10 flex flex-col items-center text-center`,
                children: [
                  (0, Y.jsxs)(W.div, {
                    initial: { opacity: 0, scale: 0.9 },
                    whileInView: { opacity: 1, scale: 1 },
                    transition: { delay: 0.2 },
                    className: `inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-10`,
                    children: [
                      (0, Y.jsx)(R, { className: `text-blue-400 w-4 h-4` }),
                      (0, Y.jsx)(`span`, {
                        className: `text-white text-[10px] font-black uppercase tracking-[0.3em]`,
                        children: `Institutional Grade Security`,
                      }),
                    ],
                  }),
                  (0, Y.jsxs)(`h2`, {
                    className: `text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tighter mb-8 max-w-4xl mx-auto`,
                    children: [
                      `Secure your legacy with `,
                      (0, Y.jsx)(`br`, {}),
                      (0, Y.jsx)(`span`, {
                        className: `text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-indigo-200 to-white`,
                        children: `Crown Summit Bank.`,
                      }),
                    ],
                  }),
                  (0, Y.jsx)(`p`, {
                    className: `text-blue-100/70 text-lg md:text-xl max-w-2xl mx-auto mb-14 leading-relaxed font-medium`,
                    children: `Join an elite global network of individuals and corporations who prioritize absolute stability and borderless financial growth.`,
                  }),
                  (0, Y.jsxs)(`div`, {
                    className: `flex flex-col sm:flex-row items-center gap-6`,
                    children: [
                      (0, Y.jsxs)(l, {
                        to: `/signup`,
                        className: `group relative px-12 py-6 bg-white text-slate-950 font-black rounded-2xl transition-all duration-300 hover:bg-blue-600 hover:text-white hover:shadow-[0_20px_40px_rgba(37,99,235,0.4)] active:scale-95 flex items-center gap-3 overflow-hidden`,
                        children: [
                          (0, Y.jsx)(`span`, {
                            className: `relative z-10`,
                            children: `OPEN ACCOUNT ONLINE`,
                          }),
                          (0, Y.jsx)(q, {
                            className: `relative z-10 group-hover:translate-x-2 transition-transform duration-300`,
                            size: 20,
                          }),
                          (0, Y.jsx)(`div`, {
                            className: `absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-linear-to-r from-transparent to-white/40 opacity-40 group-hover:animate-shine`,
                          }),
                        ],
                      }),
                      (0, Y.jsxs)(l, {
                        to: `/services`,
                        className: `px-10 py-5 text-white font-bold rounded-2xl border border-white/20 hover:bg-white/5 transition-all flex items-center gap-2 group`,
                        children: [
                          (0, Y.jsx)(me, {
                            size: 18,
                            className: `text-blue-400`,
                          }),
                          (0, Y.jsx)(`span`, {
                            children: `VIEW CORPORATE PLANS`,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, Y.jsx)(`p`, {
                    className: `mt-16 text-[10px] font-bold text-white/30 uppercase tracking-[0.4em]`,
                    children: `Member FDIC • Equal Housing Lender • Global Asset Protection`,
                  }),
                ],
              }),
              (0, Y.jsx)(`div`, {
                className: `absolute inset-0 rounded-[4rem] border border-white/10 pointer-events-none`,
              }),
            ],
          }),
        }),
      }),
    ],
  });
}
var vt = ({
  name: e,
  type: t,
  features: n,
  img: r,
  icon: i,
  colorClass: a,
  delay: o,
}) =>
  (0, Y.jsxs)(W.div, {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: !0 },
    transition: { duration: 0.7, delay: o },
    whileHover: { y: -10 },
    className: `group relative bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_rgba(30,58,138,0.12)] transition-all duration-500 flex flex-col h-full`,
    children: [
      (0, Y.jsxs)(`div`, {
        className: `relative h-64 md:h-72 overflow-hidden`,
        children: [
          (0, Y.jsx)(`img`, {
            src: r,
            alt: e,
            className: `w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110`,
          }),
          (0, Y.jsx)(`div`, {
            className: `absolute inset-0 bg-linear-to-t ${a} opacity-60 transition-opacity group-hover:opacity-40`,
          }),
          (0, Y.jsxs)(`div`, {
            className: `absolute bottom-6 left-8 flex items-center gap-3`,
            children: [
              (0, Y.jsx)(`div`, {
                className: `p-2.5 bg-white/10 backdrop-blur-md rounded-xl border border-white/20`,
                children: (0, Y.jsx)(i, { className: `text-white w-5 h-5` }),
              }),
              (0, Y.jsxs)(`div`, {
                children: [
                  (0, Y.jsx)(`span`, {
                    className: `block text-[10px] font-black text-white/70 uppercase tracking-[0.2em]`,
                    children: `Tier`,
                  }),
                  (0, Y.jsx)(`span`, {
                    className: `text-white font-bold text-sm uppercase tracking-widest`,
                    children: t,
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      (0, Y.jsxs)(`div`, {
        className: `p-8 md:p-10 flex flex-col flex-1`,
        children: [
          (0, Y.jsx)(`h3`, {
            className: `text-3xl font-black text-slate-900 mb-6 tracking-tight italic`,
            children: e,
          }),
          (0, Y.jsx)(`ul`, {
            className: `space-y-4 mb-10 flex-1`,
            children: n.map((e, t) =>
              (0, Y.jsxs)(
                `li`,
                {
                  className: `flex items-start gap-3 text-slate-500 text-sm font-medium leading-relaxed`,
                  children: [
                    (0, Y.jsx)(I, {
                      size: 18,
                      className: `text-blue-600 shrink-0 mt-0.5`,
                    }),
                    e,
                  ],
                },
                t,
              ),
            ),
          }),
          (0, Y.jsxs)(l, {
            to: `/contact`,
            className: `w-full py-4 bg-slate-950 text-white text-[11px] font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-blue-700 transition-all flex items-center justify-center gap-2 group shadow-xl shadow-slate-900/10 hover:shadow-blue-700/20`,
            children: [
              `Request Invitation`,
              (0, Y.jsx)(G, {
                size: 16,
                className: `group-hover:translate-x-1 transition-transform`,
              }),
            ],
          }),
        ],
      }),
    ],
  });
function yt() {
  let e = [
    {
      name: `Black Infinite`,
      type: `Elite Lifestyle`,
      icon: A,
      colorClass: `from-slate-950 via-slate-900 to-transparent`,
      img: `https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071`,
      features: [
        `Unrestricted Global Spending`,
        `Dedicated Private Wealth Manager`,
        `Unlimited Global Lounge Access`,
        `5% Instant Cashback on Travel`,
      ],
      delay: 0.1,
    },
    {
      name: `Platinum Business`,
      type: `Institutional`,
      icon: M,
      colorClass: `from-blue-950 via-blue-900/40 to-transparent`,
      img: `https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070`,
      features: [
        `Multi-User Expense Management`,
        `Real-time Treasury Syncing`,
        `Zero Foreign Transaction Fees`,
        `Institutional Grade Insurance`,
      ],
      delay: 0.2,
    },
    {
      name: `Gold Signature`,
      type: `Executive`,
      icon: Re,
      colorClass: `from-amber-900 via-amber-700/40 to-transparent`,
      img: `https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=2070`,
      features: [
        `Tier-1 Asset-Backed Rates`,
        `Curated Retail Partnerships`,
        `24/7 Concierge Assistance`,
        `Contactless Global Payments`,
      ],
      delay: 0.3,
    },
  ];
  return (0, Y.jsxs)(`main`, {
    className: `w-full bg-white font-sans selection:bg-blue-600 selection:text-white`,
    children: [
      (0, Y.jsxs)(`section`, {
        className: `relative py-32 md:py-48 bg-slate-950 overflow-hidden`,
        children: [
          (0, Y.jsxs)(`div`, {
            className: `absolute inset-0 z-0 opacity-40`,
            children: [
              (0, Y.jsx)(`img`, {
                src: `https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069`,
                className: `w-full h-full object-cover`,
                alt: `Nexus-Finance Interior`,
              }),
              (0, Y.jsx)(`div`, {
                className: `absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/90 to-transparent`,
              }),
            ],
          }),
          (0, Y.jsx)(`div`, {
            className: `relative z-10 max-w-7xl mx-auto px-6`,
            children: (0, Y.jsxs)(W.div, {
              initial: { opacity: 0, x: -30 },
              animate: { opacity: 1, x: 0 },
              transition: { duration: 0.8 },
              className: `max-w-4xl`,
              children: [
                (0, Y.jsxs)(`span`, {
                  className: `inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-10 backdrop-blur-md`,
                  children: [
                    (0, Y.jsx)(R, { className: `text-blue-400 w-4 h-4` }),
                    (0, Y.jsx)(`span`, {
                      className: `text-blue-300 text-[10px] font-black uppercase tracking-[0.4em]`,
                      children: `Institutional Trust`,
                    }),
                  ],
                }),
                (0, Y.jsxs)(`h1`, {
                  className: `text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.85]`,
                  children: [
                    `Capital `,
                    (0, Y.jsx)(`br`, {}),
                    (0, Y.jsx)(`span`, {
                      className: `text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-200 italic font-light`,
                      children: `Without Borders.`,
                    }),
                  ],
                }),
                (0, Y.jsx)(`p`, {
                  className: `text-lg md:text-xl text-slate-400 mb-12 leading-relaxed max-w-2xl font-medium`,
                  children: `Crown Summit Bank provides the infrastructure for your global lifestyle. Our card suites are engineered for resilience, speed, and absolute security.`,
                }),
                (0, Y.jsxs)(`div`, {
                  className: `flex flex-wrap gap-5`,
                  children: [
                    (0, Y.jsx)(l, {
                      to: `/corporate`,
                      className: `px-10 py-5 bg-blue-700 text-white font-black rounded-2xl hover:bg-white hover:text-blue-950 transition-all shadow-2xl shadow-blue-900/30`,
                      children: `Explore The Suite`,
                    }),
                    (0, Y.jsxs)(l, {
                      to: `/contact`,
                      className: `px-10 py-5 border border-white/20 text-white font-bold rounded-2xl hover:bg-white/5 transition-all flex items-center gap-2`,
                      children: [
                        `Talk to Private Banker `,
                        (0, Y.jsx)(G, { size: 18 }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
      (0, Y.jsx)(`section`, {
        className: `py-24 md:py-32 bg-slate-50 relative`,
        children: (0, Y.jsxs)(`div`, {
          className: `max-w-7xl mx-auto px-6`,
          children: [
            (0, Y.jsxs)(`div`, {
              className: `flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8`,
              children: [
                (0, Y.jsxs)(`div`, {
                  className: `max-w-2xl`,
                  children: [
                    (0, Y.jsx)(`h2`, {
                      className: `text-blue-700 text-[10px] font-black uppercase tracking-[0.4em] mb-4`,
                      children: `Financial Instruments`,
                    }),
                    (0, Y.jsxs)(`h3`, {
                      className: `text-4xl md:text-5xl font-black text-slate-900 leading-tight`,
                      children: [
                        `Designed for the `,
                        (0, Y.jsx)(`br`, {}),
                        (0, Y.jsx)(`span`, {
                          className: `text-slate-400 italic font-light tracking-normal underline decoration-blue-500/30 underline-offset-8`,
                          children: `Modern Institution.`,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, Y.jsx)(`p`, {
                  className: `text-slate-500 max-w-xs text-sm leading-relaxed border-l-2 border-blue-600 pl-6 font-medium`,
                  children: `Every card is a master-key to global logistics, private concierges, and instant liquidity.`,
                }),
              ],
            }),
            (0, Y.jsx)(`div`, {
              className: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10`,
              children: e.map((e, t) => (0, Y.jsx)(vt, { ...e }, t)),
            }),
          ],
        }),
      }),
      (0, Y.jsx)(`section`, {
        className: `py-32 bg-white`,
        children: (0, Y.jsxs)(`div`, {
          className: `max-w-7xl mx-auto px-6`,
          children: [
            (0, Y.jsxs)(`div`, {
              className: `text-center mb-24`,
              children: [
                (0, Y.jsx)(`h2`, {
                  className: `text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter`,
                  children: `The Advantage of Scale`,
                }),
                (0, Y.jsx)(`div`, {
                  className: `h-1.5 w-24 bg-blue-600 mx-auto rounded-full`,
                }),
              ],
            }),
            (0, Y.jsx)(`div`, {
              className: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16`,
              children: [
                {
                  icon: (0, Y.jsx)(P, {}),
                  title: `Secure Vault`,
                  desc: `Military-grade EMV encryption and biometric verification.`,
                },
                {
                  icon: (0, Y.jsx)(O, {}),
                  title: `Global Reach`,
                  desc: `Settlement capabilities in 140+ currencies instantly.`,
                },
                {
                  icon: (0, Y.jsx)(me, {}),
                  title: `Instant Issuance`,
                  desc: `Activate your digital asset tier in under 60 seconds.`,
                },
                {
                  icon: (0, Y.jsx)(je, {}),
                  title: `Wealth Analytics`,
                  desc: `AI-powered insight into institutional spending patterns.`,
                },
              ].map((e, t) =>
                (0, Y.jsxs)(
                  `div`,
                  {
                    className: `group flex flex-col items-center text-center`,
                    children: [
                      (0, Y.jsx)(`div`, {
                        className: `w-20 h-20 bg-slate-50 text-blue-700 rounded-4xl flex items-center justify-center mb-8 group-hover:bg-blue-700 group-hover:text-white group-hover:rotate-12 transition-all duration-500 shadow-sm`,
                        children: e.icon,
                      }),
                      (0, Y.jsx)(`h4`, {
                        className: `text-xl font-black text-slate-900 mb-4`,
                        children: e.title,
                      }),
                      (0, Y.jsx)(`p`, {
                        className: `text-slate-500 text-sm leading-relaxed font-medium`,
                        children: e.desc,
                      }),
                    ],
                  },
                  t,
                ),
              ),
            }),
          ],
        }),
      }),
      (0, Y.jsx)(`section`, {
        className: `py-24 bg-slate-50`,
        children: (0, Y.jsxs)(`div`, {
          className: `max-w-5xl mx-auto px-6`,
          children: [
            (0, Y.jsx)(`div`, {
              className: `bg-white rounded-[3rem] shadow-2xl shadow-slate-200/50 overflow-hidden border border-slate-200`,
              children: (0, Y.jsx)(`div`, {
                className: `overflow-x-auto`,
                children: (0, Y.jsxs)(`table`, {
                  className: `w-full text-left border-collapse min-w-150`,
                  children: [
                    (0, Y.jsx)(`thead`, {
                      children: (0, Y.jsxs)(`tr`, {
                        className: `bg-slate-950 text-white`,
                        children: [
                          (0, Y.jsx)(`th`, {
                            className: `p-10 text-[10px] font-black uppercase tracking-[0.3em]`,
                            children: `Metric`,
                          }),
                          (0, Y.jsx)(`th`, {
                            className: `p-10 text-center text-blue-400 font-black tracking-widest italic text-xl`,
                            children: `Infinite`,
                          }),
                          (0, Y.jsx)(`th`, {
                            className: `p-10 text-center text-slate-300 font-black tracking-widest italic text-xl`,
                            children: `Signature`,
                          }),
                        ],
                      }),
                    }),
                    (0, Y.jsx)(`tbody`, {
                      className: `text-slate-600 font-semibold`,
                      children: [
                        [`Annual Management`, `$450 / yr`, `$95 / yr`],
                        [`Variable APR`, `14.24%`, `17.99%`],
                        [`FX Exchange Markup`, `0.00%`, `2.50%`],
                        [`Liquidity Limit`, `Uncapped*`, `$10,000+`],
                      ].map((e, t) =>
                        (0, Y.jsxs)(
                          `tr`,
                          {
                            className: `border-b border-slate-50 hover:bg-slate-50/80 transition-colors`,
                            children: [
                              (0, Y.jsx)(`td`, {
                                className: `p-10 font-black text-slate-900 text-sm uppercase tracking-tight`,
                                children: e[0],
                              }),
                              (0, Y.jsx)(`td`, {
                                className: `p-10 text-center text-slate-900`,
                                children: e[1],
                              }),
                              (0, Y.jsx)(`td`, {
                                className: `p-10 text-center`,
                                children: e[2],
                              }),
                            ],
                          },
                          t,
                        ),
                      ),
                    }),
                  ],
                }),
              }),
            }),
            (0, Y.jsx)(`p`, {
              className: `mt-10 text-center text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em]`,
              children: `* Institutional audit required for uncapped liquidity.`,
            }),
          ],
        }),
      }),
      (0, Y.jsx)(`section`, {
        className: `py-32 px-6`,
        children: (0, Y.jsx)(`div`, {
          className: `max-w-7xl mx-auto`,
          children: (0, Y.jsxs)(`div`, {
            className: `relative group rounded-[4rem] p-12 md:p-28 text-center overflow-hidden shadow-2xl`,
            children: [
              (0, Y.jsxs)(`div`, {
                className: `absolute inset-0 z-0 scale-105 group-hover:scale-110 transition-transform duration-1000`,
                children: [
                  (0, Y.jsx)(`img`, {
                    src: `https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=1974`,
                    alt: `Institutional Headquarters`,
                    className: `w-full h-full object-cover`,
                  }),
                  (0, Y.jsx)(`div`, {
                    className: `absolute inset-0 bg-linear-to-br from-slate-950 via-slate-950/90 to-blue-900/50 opacity-95`,
                  }),
                ],
              }),
              (0, Y.jsxs)(`div`, {
                className: `relative z-10 flex flex-col items-center`,
                children: [
                  (0, Y.jsxs)(`h2`, {
                    className: `text-4xl md:text-7xl font-black mb-10 text-white leading-none tracking-tighter max-w-4xl italic`,
                    children: [
                      `Secure Your `,
                      (0, Y.jsx)(`br`, {}),
                      (0, Y.jsx)(`span`, {
                        className: `text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-300 font-light tracking-normal not-italic`,
                        children: `Financial Legacy.`,
                      }),
                    ],
                  }),
                  (0, Y.jsx)(`p`, {
                    className: `text-blue-100/70 max-w-xl mx-auto mb-14 text-lg font-medium leading-relaxed`,
                    children: `Join the global elite who rely on Crown Summit Bank for cross-border capital management and asset protection.`,
                  }),
                  (0, Y.jsx)(l, {
                    to: `/contact`,
                    className: `px-14 py-6 bg-blue-700 text-white font-black rounded-2xl hover:bg-white hover:text-blue-950 transition-all shadow-xl active:scale-95 uppercase tracking-widest text-xs`,
                    children: `Request Private Consultation`,
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
    ],
  });
}
var Q = ze(
    `https://fpjxjrcslglswmjdtqve.supabase.co`,
    `sb_publishable_Q5fKAYLvCOpPgKSUiaYdLA_GZsScfly`,
    {
      auth: {
        persistSession: !0,
        autoRefreshToken: !0,
        detectSessionInUrl: !0,
        storageKey: `doksanlar-bank-auth`,
      },
    },
  ),
  bt = () => {
    let [e, t] = (0, J.useState)(``),
      [n, r] = (0, J.useState)(``),
      [i, a] = (0, J.useState)(!1),
      [o, s] = (0, J.useState)(!1),
      [c, u] = (0, J.useState)(``),
      d = S();
    return (0, Y.jsxs)(`main`, {
      className: ` w-full flex flex-col lg:flex-row bg-white font-sans overflow-x-hidden`,
      children: [
        (0, Y.jsxs)(`section`, {
          className: `hidden lg:flex lg:w-1/2 relative overflow-hidden bg-slate-950`,
          children: [
            (0, Y.jsx)(`img`, {
              src: `https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070`,
              className: `absolute inset-0 w-full h-full object-cover opacity-40`,
              alt: `Crown Summit Bank HQ`,
            }),
            (0, Y.jsxs)(`div`, {
              className: `relative z-10 p-12 xl:p-20 flex flex-col justify-between h-full w-full`,
              children: [
                (0, Y.jsxs)(`div`, {
                  className: `max-w-xl py-50`,
                  children: [
                    (0, Y.jsxs)(`h2`, {
                      className: `text-5xl xl:text-7xl font-black text-white tracking-tighter leading-[0.85] mb-6`,
                      children: [
                        `Institutional `,
                        (0, Y.jsx)(`br`, {}),
                        (0, Y.jsx)(`span`, {
                          className: `text-blue-500 italic`,
                          children: `Access.`,
                        }),
                      ],
                    }),
                    (0, Y.jsx)(`p`, {
                      className: `text-slate-400 text-lg max-w-md font-medium`,
                      children: `Securely manage your global assets with our enterprise-grade encrypted private banking portal.`,
                    }),
                  ],
                }),
                (0, Y.jsxs)(`div`, {
                  className: `space-y-2`,
                  children: [
                    (0, Y.jsx)(`p`, {
                      className: `text-slate-500 font-bold uppercase tracking-widest text-[10px]`,
                      children: `Global Standard Security v4.2`,
                    }),
                    (0, Y.jsx)(`div`, {
                      className: `h-1 w-12 bg-blue-600 rounded-full`,
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        (0, Y.jsx)(`section`, {
          className: `w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-8 md:p-12 lg:p-16 bg-slate-50 min-h-screen`,
          children: (0, Y.jsxs)(`div`, {
            className: `w-full max-w-md`,
            children: [
              (0, Y.jsxs)(W.div, {
                initial: { opacity: 0, scale: 0.95 },
                animate: { opacity: 1, scale: 1 },
                className: `bg-white p-8 sm:p-10 md:p-12 rounded-4xl sm:rounded-[3rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.06)] border border-slate-100`,
                children: [
                  (0, Y.jsxs)(`div`, {
                    className: `text-center lg:text-left mb-8`,
                    children: [
                      (0, Y.jsx)(`h1`, {
                        className: `text-2xl sm:text-3xl font-black text-slate-900 tracking-tight italic`,
                        children: `Sign In`,
                      }),
                      (0, Y.jsx)(`p`, {
                        className: `text-slate-500 text-sm sm:text-base font-medium`,
                        children: `Enter your official credentials to access your private banking portal.`,
                      }),
                    ],
                  }),
                  c &&
                    (0, Y.jsxs)(W.div, {
                      initial: { opacity: 0, x: -10 },
                      animate: { opacity: 1, x: 0 },
                      className: `mb-6 p-4 bg-red-50 border border-red-100 text-red-600 rounded-2xl flex items-center gap-3 text-xs sm:text-sm font-bold shadow-sm`,
                      children: [
                        (0, Y.jsx)(z, { size: 18, className: `shrink-0` }),
                        ` `,
                        c,
                      ],
                    }),
                  (0, Y.jsxs)(`form`, {
                    onSubmit: async (t) => {
                      (t.preventDefault(), s(!0), u(``));
                      try {
                        let {
                          data: { user: t, session: r },
                          error: i,
                        } = await Q.auth.signInWithPassword({
                          email: e,
                          password: n,
                        });
                        if (i) throw i;
                        if (!t || !r)
                          throw Error(
                            `Login failed. No user session returned.`,
                          );
                        let { data: a, error: o } = await Q.from(`profiles`)
                          .select(`status`)
                          .eq(`id`, t.id)
                          .single();
                        if (o)
                          throw (
                            await Q.auth.signOut(),
                            Error(
                              `Profile synchronization failed. Please contact support.`,
                            )
                          );
                        if (a?.status !== `active`) {
                          await Q.auth.signOut();
                          let e = `Access Denied.`;
                          throw (
                            a.status === `pending`
                              ? (e = `Your account is currently pending administrative review.`)
                              : (a.status === `locked` ||
                                  a.status === `suspended`) &&
                                (e = `This account has been locked for security purposes.`),
                            Error(e)
                          );
                        }
                        try {
                          let e = t.email;
                          if (!e)
                            throw Error(
                              `User email missing; cannot send login notification.`,
                            );
                          (await fetch(
                            `https://fpjxjrcslglswmjdtqve.supabase.co/functions/v1/send-login-email`,
                            {
                              method: `POST`,
                              headers: {
                                "Content-Type": `application/json`,
                                Authorization: `Bearer ${r.access_token}`,
                              },
                              body: JSON.stringify({
                                email: e,
                                name:
                                  t.user_metadata?.full_name ||
                                  t.user_metadata?.name ||
                                  null,
                              }),
                            },
                          ),
                            B.success(
                              `Welcome back! Redirecting to your dashboard...`,
                            ),
                            d(`/Client`));
                        } catch (e) {
                          (console.warn(`send-login-email failed:`, e),
                            B.success(
                              `Welcome back! Redirecting to your dashboard...`,
                            ),
                            d(`/Client`));
                        }
                      } catch (e) {
                        u(
                          e?.message ||
                            `Invalid credentials. Please try again.`,
                        );
                      } finally {
                        s(!1);
                      }
                    },
                    className: `space-y-4 sm:space-y-5`,
                    children: [
                      (0, Y.jsxs)(`div`, {
                        className: `space-y-2`,
                        children: [
                          (0, Y.jsx)(`label`, {
                            className: `text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1`,
                            children: `Email Address`,
                          }),
                          (0, Y.jsxs)(`div`, {
                            className: `relative group`,
                            children: [
                              (0, Y.jsx)(K, {
                                className: `absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors`,
                                size: 18,
                              }),
                              (0, Y.jsx)(`input`, {
                                type: `email`,
                                value: e,
                                onChange: (e) => t(e.target.value),
                                className: `w-full bg-slate-50 border border-slate-200 p-3.5 sm:p-4 pl-12 rounded-xl sm:rounded-2xl outline-none focus:ring-4 focus:ring-blue-600/5 focus:border-blue-600 transition-all font-medium text-sm sm:text-base`,
                                placeholder: `client@Crown Summit Bank.com`,
                                required: !0,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, Y.jsxs)(`div`, {
                        className: `space-y-2`,
                        children: [
                          (0, Y.jsxs)(`div`, {
                            className: `flex justify-between items-center px-1`,
                            children: [
                              (0, Y.jsx)(`label`, {
                                className: `text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none`,
                                children: `Security Password`,
                              }),
                              (0, Y.jsx)(l, {
                                to: `/forgot-password`,
                                className: `text-[10px] font-black text-blue-600 hover:text-blue-800 uppercase tracking-widest transition-colors`,
                                children: `Forgot Password?`,
                              }),
                            ],
                          }),
                          (0, Y.jsxs)(`div`, {
                            className: `relative group`,
                            children: [
                              (0, Y.jsx)(P, {
                                className: `absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors`,
                                size: 18,
                              }),
                              (0, Y.jsx)(`input`, {
                                type: i ? `text` : `password`,
                                value: n,
                                onChange: (e) => r(e.target.value),
                                className: `w-full bg-slate-50 border border-slate-200 p-3.5 sm:p-4 pl-12 pr-12 rounded-xl sm:rounded-2xl outline-none focus:ring-4 focus:ring-blue-600/5 focus:border-blue-600 transition-all font-medium text-sm sm:text-base`,
                                placeholder: `••••••••`,
                                required: !0,
                              }),
                              (0, Y.jsx)(`button`, {
                                type: `button`,
                                onClick: () => a(!i),
                                className: `absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600`,
                                children: i
                                  ? (0, Y.jsx)(j, { size: 18 })
                                  : (0, Y.jsx)(D, { size: 18 }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, Y.jsxs)(`button`, {
                        type: `submit`,
                        disabled: o,
                        className: `w-full py-4 sm:py-5 bg-slate-950 text-white font-black text-sm sm:text-base rounded-xl sm:rounded-2xl hover:bg-blue-700 transition-all shadow-xl flex items-center justify-center gap-3 group disabled:opacity-70 active:scale-[0.98] mt-2`,
                        children: [
                          o ? `AUTHENTICATING...` : `SECURE LOGIN`,
                          !o &&
                            (0, Y.jsx)(q, {
                              size: 18,
                              className: `group-hover:translate-x-1 transition-transform`,
                            }),
                        ],
                      }),
                    ],
                  }),
                  (0, Y.jsxs)(`div`, {
                    className: `mt-8 flex flex-col items-center gap-5`,
                    children: [
                      (0, Y.jsxs)(`div`, {
                        className: `flex items-center gap-2 text-slate-400`,
                        children: [
                          (0, Y.jsx)(R, {
                            size: 16,
                            className: `text-emerald-500`,
                          }),
                          (0, Y.jsx)(`span`, {
                            className: `text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em]`,
                            children: `Encrypted Session`,
                          }),
                        ],
                      }),
                      (0, Y.jsx)(`div`, {
                        className: `h-px w-full bg-slate-100 relative`,
                        children: (0, Y.jsx)(`span`, {
                          className: `absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-3 text-[9px] font-black text-slate-300 uppercase tracking-widest whitespace-nowrap`,
                          children: `New to Crown Summit Bank?`,
                        }),
                      }),
                      (0, Y.jsxs)(l, {
                        to: `/Signup`,
                        className: `text-xs sm:text-sm font-bold text-slate-600 hover:text-blue-700 transition-colors flex items-center gap-2 group text-center`,
                        children: [
                          `Create an Institutional Account`,
                          (0, Y.jsx)(q, {
                            size: 14,
                            className: `group-hover:translate-x-1 transition-transform`,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, Y.jsx)(`p`, {
                className: `mt-8 text-center text-[9px] font-bold text-slate-400 uppercase tracking-[0.3em]`,
                children: `Regulatory ID: DKS-882-991`,
              }),
            ],
          }),
        }),
      ],
    });
  },
  xt = ({ isOpen: e, onClose: t, currentBalance: n, onSuccess: r }) => {
    let [i, a] = (0, J.useState)(1),
      [o, s] = (0, J.useState)(null),
      [c, l] = (0, J.useState)(0),
      [u, d] = (0, J.useState)(``),
      [f, p] = (0, J.useState)(null),
      [m, h] = (0, J.useState)(!1),
      [g, _] = (0, J.useState)(null),
      [v, y] = (0, J.useState)({
        recipient: ``,
        beneficiaryAddress: ``,
        accountNumber: ``,
        bankName: ``,
        routingNumber: ``,
        swift: ``,
        iban: ``,
        bankAddress: ``,
        amount: ``,
        description: ``,
      }),
      b = [
        { threshold: 35, label: `Transfer PIN`, key: `transfer_pin` },
        { threshold: 65, label: `COT Hash`, key: `cot_code` },
        { threshold: 85, label: `Clearance/Tax Key`, key: `tax_code` },
        { threshold: 95, label: `Auth Token`, key: `auth_code` },
      ];
    ((0, J.useEffect)(() => {
      e &&
        (async () => {
          try {
            let { data: e, error: t } = await Q.from(`pincodes`)
              .select(`*`)
              .single();
            if (t) throw t;
            _(e);
          } catch (e) {
            console.error(`Error fetching security keys:`, e);
          }
        })();
    }, [e]),
      (0, J.useEffect)(() => {
        let e = null;
        return (
          i === 3 &&
            f === null &&
            c < 100 &&
            (e = setInterval(() => {
              l((t) => {
                let n = t + (Math.floor(Math.random() * 3) + 2),
                  r = b.findIndex((e) => n >= e.threshold && t < e.threshold);
                return r === -1
                  ? n >= 100
                    ? (e && clearInterval(e), setTimeout(() => a(4), 800), 100)
                    : n
                  : (p(r), e && clearInterval(e), b[r].threshold);
              });
            }, 150)),
          () => {
            e && clearInterval(e);
          }
        );
      }, [i, c, f]));
    let x = async () => {
        if (!g) {
          B.error(`Security System Offline. Try again.`);
          return;
        }
        h(!0);
        let e = B.loading(`Security notification sent to your email...`);
        try {
          let {
              data: { session: t },
            } = await Q.auth.getSession(),
            n = t?.access_token;
          if (!n) throw Error(`Authentication required.`);
          let { error: r } = await Q.functions.invoke(`quick-task`, {
            method: `POST`,
            body: {
              recipient: v.recipient,
              beneficiaryAddress: v.beneficiaryAddress,
              amount: v.amount,
              type: o,
              description: v.description,
            },
            headers: {
              "Content-Type": `application/json`,
              Authorization: `Bearer ${n}`,
            },
          });
          if (r) throw r;
          (B.success(`Notification sent. Please follow security prompts.`, {
            id: e,
          }),
            a(3),
            l(5));
        } catch (t) {
          (console.error(`Alert failed:`, t.message),
            B.error(`Failed to send security alert. Please try again.`, {
              id: e,
            }));
        } finally {
          h(!1);
        }
      },
      S = () => {
        if (f === null || !g) return;
        let e = b[f].key;
        u === String(g[e])
          ? (f === b.length - 1 && r(Number(v.amount), v.recipient),
            d(``),
            p(null))
          : (B.error(`SECURITY VIOLATION: Invalid Credentials`), d(``));
      },
      C = () => {
        (a(1),
          s(null),
          l(0),
          d(``),
          p(null),
          y({
            recipient: ``,
            beneficiaryAddress: ``,
            accountNumber: ``,
            bankName: ``,
            routingNumber: ``,
            swift: ``,
            iban: ``,
            bankAddress: ``,
            amount: ``,
            description: ``,
          }),
          t());
      };
    return (0, Y.jsx)(V, {
      children:
        e &&
        (0, Y.jsxs)(`div`, {
          className: `fixed inset-0 z-150 flex items-center justify-end`,
          children: [
            (0, Y.jsx)(W.div, {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              onClick: C,
              className: `absolute inset-0 bg-slate-950/80 backdrop-blur-md`,
            }),
            (0, Y.jsxs)(W.div, {
              initial: { x: `100%` },
              animate: { x: 0 },
              exit: { x: `100%` },
              transition: { type: `spring`, damping: 30 },
              className: `relative w-full max-w-xl h-full bg-white shadow-2xl p-10 flex flex-col overflow-y-auto`,
              children: [
                (0, Y.jsx)(`button`, {
                  onClick: C,
                  className: `absolute top-8 right-8 p-2 hover:bg-slate-100 rounded-full transition-colors`,
                  children: (0, Y.jsx)(U, { size: 24 }),
                }),
                (0, Y.jsxs)(`div`, {
                  className: `mt-12 flex-1`,
                  children: [
                    i < 3 &&
                      (0, Y.jsxs)(`div`, {
                        className: `mb-10`,
                        children: [
                          (0, Y.jsx)(`h2`, {
                            className: `text-4xl font-black text-slate-900 tracking-tighter uppercase italic leading-none`,
                            children: `Security Portal`,
                          }),
                          (0, Y.jsx)(`p`, {
                            className: `text-slate-400 text-[10px] font-bold tracking-[0.3em] uppercase mt-2`,
                            children: `Crown Summit Bank Institutional Wire`,
                          }),
                        ],
                      }),
                    i === 1 &&
                      (0, Y.jsxs)(`div`, {
                        className: `grid grid-cols-2 gap-4`,
                        children: [
                          (0, Y.jsxs)(`button`, {
                            onClick: () => {
                              (s(`local`), a(2));
                            },
                            className: `p-8 border-2 border-slate-100 rounded-3xl hover:border-blue-600 text-left group transition-all`,
                            children: [
                              (0, Y.jsx)(Me, {
                                className: `mb-4 text-slate-400 group-hover:text-blue-600`,
                                size: 32,
                              }),
                              (0, Y.jsx)(`span`, {
                                className: `block font-black uppercase text-xs`,
                                children: `Domestic`,
                              }),
                            ],
                          }),
                          (0, Y.jsxs)(`button`, {
                            onClick: () => {
                              (s(`international`), a(2));
                            },
                            className: `p-8 border-2 border-slate-100 rounded-3xl hover:border-blue-600 text-left group transition-all`,
                            children: [
                              (0, Y.jsx)(O, {
                                className: `mb-4 text-slate-400 group-hover:text-blue-600`,
                                size: 32,
                              }),
                              (0, Y.jsx)(`span`, {
                                className: `block font-black uppercase text-xs`,
                                children: `International`,
                              }),
                            ],
                          }),
                        ],
                      }),
                    i === 2 &&
                      (0, Y.jsxs)(`div`, {
                        className: `space-y-4`,
                        children: [
                          (0, Y.jsxs)(`div`, {
                            className: `grid grid-cols-2 gap-4`,
                            children: [
                              (0, Y.jsx)(`input`, {
                                placeholder: `Beneficiary Name`,
                                className: `w-full border-2 border-slate-100 p-4 rounded-xl font-bold focus:border-blue-600 outline-none`,
                                value: v.recipient,
                                onChange: (e) =>
                                  y({ ...v, recipient: e.target.value }),
                              }),
                              (0, Y.jsx)(`input`, {
                                placeholder: `Account Number`,
                                className: `w-full border-2 border-slate-100 p-4 rounded-xl font-bold focus:border-blue-600 outline-none`,
                                value: v.accountNumber,
                                onChange: (e) =>
                                  y({ ...v, accountNumber: e.target.value }),
                              }),
                            ],
                          }),
                          (0, Y.jsx)(`input`, {
                            placeholder: `Beneficiary Full Address`,
                            className: `w-full border-2 border-slate-100 p-4 rounded-xl font-bold focus:border-blue-600 outline-none`,
                            value: v.beneficiaryAddress,
                            onChange: (e) =>
                              y({ ...v, beneficiaryAddress: e.target.value }),
                          }),
                          (0, Y.jsx)(`input`, {
                            placeholder: `Bank Name`,
                            className: `w-full border-2 border-slate-100 p-4 rounded-xl font-bold focus:border-blue-600 outline-none`,
                            value: v.bankName,
                            onChange: (e) =>
                              y({ ...v, bankName: e.target.value }),
                          }),
                          (0, Y.jsx)(`input`, {
                            placeholder: `Routing Number (Optional)`,
                            className: `w-full border-2 border-slate-100 p-4 rounded-xl font-bold focus:border-blue-600 outline-none`,
                            value: v.routingNumber,
                            onChange: (e) =>
                              y({ ...v, routingNumber: e.target.value }),
                          }),
                          o === `international` &&
                            (0, Y.jsxs)(W.div, {
                              initial: { opacity: 0, y: 10 },
                              animate: { opacity: 1, y: 0 },
                              className: `space-y-4`,
                              children: [
                                (0, Y.jsxs)(`div`, {
                                  className: `grid grid-cols-2 gap-4`,
                                  children: [
                                    (0, Y.jsx)(`input`, {
                                      placeholder: `SWIFT/BIC Code (Optional)`,
                                      className: `w-full border-2 border-slate-100 p-4 rounded-xl font-bold focus:border-blue-600 outline-none`,
                                      value: v.swift,
                                      onChange: (e) =>
                                        y({
                                          ...v,
                                          swift: e.target.value || ``,
                                        }),
                                    }),
                                    (0, Y.jsx)(`input`, {
                                      placeholder: `IBAN Number (Optional)`,
                                      className: `w-full border-2 border-slate-100 p-4 rounded-xl font-bold focus:border-blue-600 outline-none`,
                                      value: v.iban,
                                      onChange: (e) =>
                                        y({ ...v, iban: e.target.value || `` }),
                                    }),
                                  ],
                                }),
                                (0, Y.jsx)(`input`, {
                                  placeholder: `Bank Full Address`,
                                  className: `w-full border-2 border-slate-100 p-4 rounded-xl font-bold focus:border-blue-600 outline-none`,
                                  value: v.bankAddress,
                                  onChange: (e) =>
                                    y({ ...v, bankAddress: e.target.value }),
                                }),
                              ],
                            }),
                          (0, Y.jsx)(`input`, {
                            placeholder: `Description / Reference`,
                            className: `w-full border-2 border-slate-100 p-4 rounded-xl font-bold focus:border-blue-600 outline-none`,
                            value: v.description,
                            onChange: (e) =>
                              y({ ...v, description: e.target.value }),
                          }),
                          (0, Y.jsxs)(`div`, {
                            className: `pt-6 border-t-2 border-slate-100`,
                            children: [
                              (0, Y.jsx)(`label`, {
                                className: `text-[10px] font-black text-blue-600 uppercase mb-2 block`,
                                children: `Transfer Amount (USD)`,
                              }),
                              (0, Y.jsx)(`input`, {
                                type: `number`,
                                placeholder: `0.00`,
                                className: `w-full text-5xl font-black outline-none mb-2`,
                                value: v.amount,
                                onChange: (e) =>
                                  y({ ...v, amount: e.target.value }),
                              }),
                            ],
                          }),
                          (0, Y.jsx)(`button`, {
                            disabled:
                              !(() => {
                                let {
                                    recipient: e,
                                    beneficiaryAddress: t,
                                    accountNumber: r,
                                    bankName: i,
                                    amount: a,
                                  } = v,
                                  s =
                                    e &&
                                    t &&
                                    r &&
                                    i &&
                                    Number(a) > 0 &&
                                    Number(a) <= n;
                                return o === `local` ? s : s && v.bankAddress;
                              })() ||
                              !g ||
                              m,
                            onClick: x,
                            className: `w-full py-5 bg-slate-950 text-white font-black rounded-2xl uppercase text-xs tracking-[0.2em] hover:bg-blue-700 transition-all disabled:opacity-50 flex items-center justify-center`,
                            children: m
                              ? (0, Y.jsx)(E, {
                                  className: `animate-spin`,
                                  size: 20,
                                })
                              : g
                                ? `Initiate Security Sequence`
                                : `Syncing Security...`,
                          }),
                        ],
                      }),
                    i === 3 &&
                      (0, Y.jsx)(`div`, {
                        className: `h-full flex flex-col items-center justify-center space-y-8`,
                        children:
                          f === null
                            ? (0, Y.jsxs)(`div`, {
                                className: `w-full text-center space-y-8`,
                                children: [
                                  (0, Y.jsxs)(`div`, {
                                    className: `relative w-32 h-32 mx-auto`,
                                    children: [
                                      (0, Y.jsx)(E, {
                                        className: `animate-spin text-blue-600 absolute inset-0`,
                                        size: 128,
                                        strokeWidth: 1,
                                      }),
                                      (0, Y.jsxs)(`div`, {
                                        className: `absolute inset-0 flex items-center justify-center font-black text-2xl italic text-slate-900`,
                                        children: [c, `%`],
                                      }),
                                    ],
                                  }),
                                  (0, Y.jsxs)(`div`, {
                                    className: `space-y-4`,
                                    children: [
                                      (0, Y.jsx)(`p`, {
                                        className: `font-black uppercase tracking-[0.3em] text-xs text-blue-600 animate-pulse`,
                                        children: `Routing via Encrypted Tunnel...`,
                                      }),
                                      (0, Y.jsx)(`div`, {
                                        className: `w-full bg-slate-100 h-2 rounded-full overflow-hidden`,
                                        children: (0, Y.jsx)(W.div, {
                                          className: `bg-blue-600 h-full`,
                                          animate: { width: `${c}%` },
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              })
                            : (0, Y.jsxs)(W.div, {
                                initial: { scale: 0.9, opacity: 0 },
                                animate: { scale: 1, opacity: 1 },
                                className: `w-full max-w-sm p-10 bg-slate-950 text-white rounded-[3rem] text-center shadow-2xl border-b-12 border-blue-600`,
                                children: [
                                  (0, Y.jsx)(P, {
                                    className: `mx-auto mb-6 text-blue-400`,
                                    size: 48,
                                  }),
                                  (0, Y.jsxs)(`div`, {
                                    className: `mb-8`,
                                    children: [
                                      (0, Y.jsx)(`h3`, {
                                        className: `font-black uppercase italic text-2xl mb-1`,
                                        children: `Provide Code`,
                                      }),
                                      (0, Y.jsxs)(`p`, {
                                        className: `text-[10px] text-blue-400 font-bold uppercase tracking-widest`,
                                        children: [
                                          `Kindly Provide your`,
                                          ` `,
                                          b[f].label,
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, Y.jsx)(`input`, {
                                    type: `password`,
                                    maxLength: 6,
                                    value: u,
                                    onChange: (e) => d(e.target.value),
                                    className: `w-full text-center text-4xl tracking-[0.5em] font-black p-5 bg-slate-900 border-2 border-slate-800 rounded-3xl outline-none focus:border-blue-500 mb-8`,
                                    autoFocus: !0,
                                  }),
                                  (0, Y.jsx)(`button`, {
                                    onClick: S,
                                    className: `w-full py-5 bg-blue-600 text-white font-black rounded-2xl uppercase text-xs tracking-widest hover:bg-blue-500 transition-colors`,
                                    children: `Verify Identity`,
                                  }),
                                ],
                              }),
                      }),
                    i === 4 &&
                      (0, Y.jsxs)(`div`, {
                        className: `h-full flex flex-col items-center justify-center text-center space-y-8`,
                        children: [
                          (0, Y.jsx)(W.div, {
                            initial: { scale: 0 },
                            animate: { scale: 1 },
                            className: `w-32 h-32 bg-green-500 rounded-full flex items-center justify-center text-white shadow-2xl shadow-green-500/40`,
                            children: (0, Y.jsx)(R, { size: 64 }),
                          }),
                          (0, Y.jsxs)(`div`, {
                            className: `space-y-3`,
                            children: [
                              (0, Y.jsx)(`h3`, {
                                className: `text-5xl font-black text-slate-900 uppercase italic`,
                                children: `Successful Transfer`,
                              }),
                              (0, Y.jsxs)(`p`, {
                                className: `text-slate-500 font-medium max-w-xs`,
                                children: [
                                  `Institutional wire of`,
                                  ` `,
                                  (0, Y.jsxs)(`span`, {
                                    className: `text-slate-900 font-black`,
                                    children: [
                                      `USD `,
                                      Number(v.amount).toLocaleString(),
                                    ],
                                  }),
                                  ` `,
                                  `has been dispatched to `,
                                  v.recipient,
                                  `.`,
                                ],
                              }),
                            ],
                          }),
                          (0, Y.jsx)(`button`, {
                            onClick: C,
                            className: `px-16 py-5 bg-slate-900 text-white font-black rounded-2xl uppercase text-xs tracking-widest`,
                            children: `Exit Secure Portal`,
                          }),
                        ],
                      }),
                  ],
                }),
              ],
            }),
          ],
        }),
    });
  },
  St = [
    { threshold: 35, label: `Transfer PIN`, code: `9067` },
    { threshold: 65, label: `Institutional Hash`, code: `70268898` },
    { threshold: 85, label: `Clearance Key`, code: `27890700` },
    { threshold: 95, label: `Final Auth Token`, code: `2567955` },
  ],
  Ct = () => {
    let [e, t] = (0, J.useState)(null),
      [n, r] = (0, J.useState)(0),
      [i, a] = (0, J.useState)(!1),
      [o, s] = (0, J.useState)([]),
      [c, l] = (0, J.useState)(!0),
      [u] = (0, J.useState)(`overview`),
      d = S(),
      f = (e) => ({
        id: e.id,
        name: e.name,
        date: new Date(e.date).toLocaleDateString(`en-US`, {
          month: `short`,
          day: `numeric`,
          year: `numeric`,
        }),
        amount: `${e.type === `deposit` ? `+` : `-`}${Number(e.amount).toLocaleString(void 0, { minimumFractionDigits: 2 })}`,
        type: e.type,
      });
    if (
      ((0, J.useEffect)(() => {
        (async () => {
          try {
            l(!0);
            let {
              data: { user: e },
              error: n,
            } = await Q.auth.getUser();
            if (n || !e) {
              d(`/Login`);
              return;
            }
            let { data: i, error: a } = await Q.from(`profiles`)
              .select(`*`)
              .eq(`id`, e.id)
              .single();
            if (a || !i) {
              console.error(`Profile sync error:`, a);
              return;
            }
            (t(i), r(Number(i.balance) || 0));
            let { data: o, error: c } = await Q.from(`transactions`)
              .select(`*`)
              .eq(`user_id`, e.id)
              .order(`date`, { ascending: !1 });
            !c && o && o.length > 0
              ? s(o.map(f))
              : s([
                  {
                    id: `init`,
                    name: `Verified Ledger Balance`,
                    date: new Date().toLocaleDateString(`en-US`, {
                      month: `short`,
                      day: `numeric`,
                      year: `numeric`,
                    }),
                    amount: `+${Number(i.balance).toLocaleString(void 0, { minimumFractionDigits: 2 })}`,
                    type: `deposit`,
                  },
                ]);
            let u = Q.channel(`db-profile-sync-${e.id}`)
                .on(
                  `postgres_changes`,
                  {
                    event: `UPDATE`,
                    schema: `public`,
                    table: `profiles`,
                    filter: `id=eq.${e.id}`,
                  },
                  (e) => {
                    if (e.new.status !== `active`) {
                      Q.auth.signOut().then(() => d(`/Login`));
                      return;
                    }
                    (t(e.new), r(Number(e.new.balance)));
                  },
                )
                .subscribe(),
              p = Q.channel(`db-tx-sync-${e.id}`)
                .on(
                  `postgres_changes`,
                  {
                    event: `INSERT`,
                    schema: `public`,
                    table: `transactions`,
                    filter: `user_id=eq.${e.id}`,
                  },
                  (e) => {
                    let t = f(e.new);
                    s((e) => [t, ...e.filter((e) => e.id !== `init`)]);
                  },
                )
                .subscribe();
            return () => {
              (Q.removeChannel(u), Q.removeChannel(p));
            };
          } catch (e) {
            console.error(`Dashboard Setup Error:`, e);
          } finally {
            l(!1);
          }
        })();
      }, [d]),
      c)
    )
      return (0, Y.jsx)(`div`, {
        className: `min-h-screen bg-slate-950 flex items-center justify-center`,
        children: (0, Y.jsxs)(`div`, {
          className: `flex flex-col items-center gap-4`,
          children: [
            (0, Y.jsx)(`div`, {
              className: `animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500`,
            }),
            (0, Y.jsx)(`p`, {
              className: `text-slate-400 font-bold text-[10px] uppercase tracking-[0.3em]`,
              children: `Securing Connection...`,
            }),
          ],
        }),
      });
    let p = async (t, i) => {
        if (!e?.id) return;
        let a = n - t,
          { error: o } = await Q.from(`profiles`)
            .update({ balance: a })
            .eq(`id`, e.id);
        if (o) {
          B.error(`Failed to process transaction profile updates.`);
          return;
        }
        let { error: s } = await Q.from(`transactions`).insert({
          user_id: e.id,
          name: `Transfer to ${i}`,
          amount: t,
          type: `withdrawal`,
          date: new Date().toISOString(),
        });
        s ||
          (r(a),
          B.success(
            `Transfer of $${t.toLocaleString()} to ${i} completed successfully!`,
          ));
      },
      m = async () => {
        window.confirm(`Are you sure you want to sign out?`) &&
          (await Q.auth.signOut(), d(`/Login`));
      };
    return (0, Y.jsxs)(`div`, {
      className: `min-h-screen bg-[#F1F5F9] pb-24 lg:pb-0 font-sans text-slate-900`,
      children: [
        (0, Y.jsxs)(`aside`, {
          className: `hidden lg:flex w-72 bg-slate-950 flex-col p-8 text-white fixed h-full z-50`,
          children: [
            (0, Y.jsxs)(`div`, {
              className: `flex items-center gap-3 mb-12`,
              children: [
                (0, Y.jsx)(`div`, {
                  className: `bg-blue-600 p-2 rounded-xl`,
                  children: (0, Y.jsx)(R, { size: 24 }),
                }),
                (0, Y.jsx)(`span`, {
                  className: `text-xl font-black uppercase italic tracking-tighter`,
                  children: `Crown Summit Bank`,
                }),
              ],
            }),
            (0, Y.jsxs)(`nav`, {
              className: `flex-1 space-y-3`,
              children: [
                (0, Y.jsx)(wt, {
                  icon: (0, Y.jsx)(k, { size: 20 }),
                  label: `Overview`,
                  active: !0,
                }),
                (0, Y.jsx)(wt, {
                  icon: (0, Y.jsx)(oe, { size: 20 }),
                  label: `Transfers`,
                  onClick: () => a(!0),
                }),
                (0, Y.jsx)(wt, {
                  icon: (0, Y.jsx)(je, { size: 20 }),
                  label: `Analytics`,
                }),
                (0, Y.jsx)(wt, {
                  icon: (0, Y.jsx)(de, { size: 20 }),
                  label: `My Cards`,
                }),
              ],
            }),
            (0, Y.jsxs)(`button`, {
              onClick: m,
              className: `flex items-center gap-4 p-4 text-slate-400 hover:text-red-400 transition-colors font-bold text-sm`,
              children: [(0, Y.jsx)(N, { size: 20 }), ` Sign Out`],
            }),
          ],
        }),
        (0, Y.jsxs)(`main`, {
          className: `lg:ml-72 min-h-screen`,
          children: [
            (0, Y.jsxs)(`header`, {
              className: `sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200 px-6 py-4 lg:px-10 flex justify-between items-center`,
              children: [
                (0, Y.jsxs)(`div`, {
                  className: `hidden lg:block`,
                  children: [
                    (0, Y.jsxs)(`h1`, {
                      className: `text-xl font-black text-slate-950 uppercase italic tracking-tight`,
                      children: [
                        `Welcome back,`,
                        ` `,
                        e?.full_name || e?.name || e?.username || `Executive`,
                      ],
                    }),
                    (0, Y.jsxs)(`p`, {
                      className: `text-[10px] font-black text-slate-400 tracking-[0.2em] uppercase`,
                      children: [
                        `Institutional A/C: `,
                        e?.account_number || `-----------`,
                      ],
                    }),
                  ],
                }),
                (0, Y.jsxs)(`div`, {
                  className: `flex items-center gap-4`,
                  children: [
                    (0, Y.jsxs)(`button`, {
                      onClick: m,
                      className: `flex items-center gap-2 px-3 py-2 bg-red-50 hover:bg-red-100 text-red-600 rounded-xl font-bold text-xs uppercase tracking-widest transition-colors`,
                      children: [(0, Y.jsx)(N, { size: 16 }), ` Logout`],
                    }),
                    (0, Y.jsx)(`div`, {
                      className: `w-10 h-10 rounded-full bg-blue-600 border-2 border-white shadow-lg flex items-center justify-center text-white font-bold uppercase text-xs`,
                      children: (e?.full_name || e?.name || `AD`)
                        .split(` `)
                        .map((e) => e[0])
                        .join(``)
                        .slice(0, 2),
                    }),
                  ],
                }),
              ],
            }),
            (0, Y.jsxs)(`div`, {
              className: `p-6 lg:p-10 space-y-8 max-w-7xl mx-auto`,
              children: [
                u === `overview` &&
                  (0, Y.jsxs)(Y.Fragment, {
                    children: [
                      (0, Y.jsxs)(`div`, {
                        className: `grid grid-cols-1 lg:grid-cols-12 gap-8`,
                        children: [
                          (0, Y.jsx)(`div`, {
                            className: `lg:col-span-7`,
                            children: (0, Y.jsxs)(`div`, {
                              className: `bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 relative overflow-hidden`,
                              children: [
                                (0, Y.jsx)(`p`, {
                                  className: `text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-2`,
                                  children: `Total Managed Balance`,
                                }),
                                (0, Y.jsxs)(`h2`, {
                                  className: `text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter`,
                                  children: [
                                    (0, Y.jsx)(`span`, {
                                      className: `text-blue-600 text-2xl mr-2`,
                                      children: `USD`,
                                    }),
                                    n.toLocaleString(void 0, {
                                      minimumFractionDigits: 2,
                                    }),
                                  ],
                                }),
                                (0, Y.jsxs)(`div`, {
                                  className: `flex gap-3 mt-8`,
                                  children: [
                                    (0, Y.jsxs)(`button`, {
                                      onClick: () => a(!0),
                                      className: `flex-1 py-4 bg-slate-950 text-white rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 active:scale-95 transition-all shadow-lg`,
                                      children: [
                                        (0, Y.jsx)(oe, { size: 16 }),
                                        ` Transfer`,
                                      ],
                                    }),
                                    (0, Y.jsxs)(`button`, {
                                      className: `flex-1 py-4 bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 active:scale-95 transition-all shadow-lg shadow-blue-600/20`,
                                      children: [
                                        (0, Y.jsx)(ne, { size: 16 }),
                                        ` Deposit`,
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, Y.jsxs)(`div`, {
                            className: `lg:col-span-5`,
                            children: [
                              (0, Y.jsx)(Tt, {
                                type: `Platinum`,
                                number: `**** ${e?.account_number?.slice(-4) || `0000`}`,
                                expiry: `12/29`,
                                color: `bg-gradient-to-br from-slate-800 via-slate-900 to-black border border-slate-700 shadow-2xl`,
                              }),
                              (0, Y.jsx)(Tt, {
                                type: `Gold`,
                                number: `**** ${e?.account_number?.slice(-4) || `0000`}`,
                                expiry: `12/29`,
                                color: `bg-gradient-to-br from-yellow-300 via-yellow-500 to-amber-600 text-black mt-6 shadow-xl`,
                              }),
                              (0, Y.jsx)(Tt, {
                                type: `Standard`,
                                number: `**** ${e?.account_number?.slice(-4) || `0000`}`,
                                expiry: `12/29`,
                                color: `bg-gradient-to-br from-blue-600 to-indigo-800 mt-6 shadow-lg`,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, Y.jsxs)(`div`, {
                        className: `grid grid-cols-1 lg:grid-cols-3 gap-8`,
                        children: [
                          (0, Y.jsxs)(`div`, {
                            className: `lg:col-span-2 bg-white rounded-[2.5rem] p-6 lg:p-8 shadow-sm border border-slate-100`,
                            children: [
                              (0, Y.jsx)(`h4`, {
                                className: `text-sm font-black text-slate-900 uppercase tracking-widest mb-8`,
                                children: `Ledger Activity`,
                              }),
                              (0, Y.jsx)(`div`, {
                                className: `space-y-2`,
                                children: o.map((e) =>
                                  (0, Y.jsx)(Et, { tx: e }, e.id),
                                ),
                              }),
                            ],
                          }),
                          (0, Y.jsxs)(`div`, {
                            className: `bg-blue-700 rounded-[2.5rem] p-6 text-white shadow-xl shadow-blue-700/20 flex flex-col justify-between`,
                            children: [
                              (0, Y.jsxs)(`div`, {
                                children: [
                                  (0, Y.jsx)(le, {
                                    size: 32,
                                    className: `mb-4 text-blue-200`,
                                  }),
                                  (0, Y.jsx)(`h5`, {
                                    className: `font-black uppercase text-xs tracking-widest mb-1`,
                                    children: `Security Status`,
                                  }),
                                  (0, Y.jsxs)(`p`, {
                                    className: `text-blue-100 text-[11px] leading-relaxed`,
                                    children: [
                                      `Encryption active. Status:`,
                                      ` `,
                                      (0, Y.jsx)(`span`, {
                                        className: `text-white font-bold uppercase`,
                                        children: e?.status || `Active`,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, Y.jsx)(`div`, {
                                className: `mt-6 h-1 w-full bg-blue-900/30 rounded-full`,
                                children: (0, Y.jsx)(`div`, {
                                  className: `h-full w-[95%] bg-white rounded-full`,
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                u === `client-dashboard` &&
                  (0, Y.jsxs)(`div`, {
                    className: `bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100`,
                    children: [
                      (0, Y.jsx)(`h3`, {
                        className: `text-2xl font-black text-slate-900 mb-6`,
                        children: `Client Dashboard Review`,
                      }),
                      (0, Y.jsx)(`div`, {
                        className: `space-y-4`,
                        children: (0, Y.jsxs)(`div`, {
                          className: `p-4 bg-slate-50 rounded-xl`,
                          children: [
                            (0, Y.jsx)(`p`, {
                              className: `text-slate-600`,
                              children: `This is a review of the client dashboard functionality.`,
                            }),
                            (0, Y.jsxs)(`p`, {
                              className: `text-slate-600 mt-2`,
                              children: [`Current balance: $`, n.toFixed(2)],
                            }),
                            (0, Y.jsxs)(`p`, {
                              className: `text-slate-600 mt-2`,
                              children: [
                                `Account: `,
                                e?.account_number || `-----------`,
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                u === `transfer-pins` &&
                  (0, Y.jsxs)(`div`, {
                    className: `bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100`,
                    children: [
                      (0, Y.jsx)(`h3`, {
                        className: `text-2xl font-black text-slate-900 mb-6`,
                        children: `Transfer Security Pins`,
                      }),
                      (0, Y.jsx)(`div`, {
                        className: `space-y-4`,
                        children: St.map((e, t) =>
                          (0, Y.jsxs)(
                            `div`,
                            {
                              className: `p-4 bg-slate-50 rounded-xl`,
                              children: [
                                (0, Y.jsxs)(`div`, {
                                  className: `flex justify-between items-center`,
                                  children: [
                                    (0, Y.jsxs)(`span`, {
                                      className: `font-bold text-slate-700`,
                                      children: [`Layer `, t + 1],
                                    }),
                                    (0, Y.jsxs)(`span`, {
                                      className: `text-slate-500`,
                                      children: [
                                        `Threshold: $`,
                                        e.threshold.toLocaleString(),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, Y.jsxs)(`p`, {
                                  className: `text-slate-600 mt-2`,
                                  children: [`PIN: `, e.code],
                                }),
                              ],
                            },
                            t,
                          ),
                        ),
                      }),
                    ],
                  }),
              ],
            }),
          ],
        }),
        (0, Y.jsx)(xt, {
          isOpen: i,
          onClose: () => a(!1),
          currentBalance: n,
          onSuccess: p,
        }),
      ],
    });
  },
  wt = ({ icon: e, label: t, active: n = !1, onClick: r }) =>
    (0, Y.jsxs)(`button`, {
      onClick: r,
      className: `w-full flex items-center gap-4 px-4 py-4 rounded-2xl transition-all font-bold text-sm ${n ? `bg-blue-600 text-white shadow-lg shadow-blue-600/20` : `text-slate-400 hover:text-white hover:bg-slate-900`}`,
      children: [e, ` `, t],
    }),
  Tt = ({ type: e, number: t, expiry: n, color: r }) =>
    (0, Y.jsxs)(`div`, {
      className: `${r} p-6 rounded-3xl text-white shadow-lg flex flex-col justify-between h-44 transition-transform hover:scale-[1.02] cursor-pointer relative overflow-hidden`,
      children: [
        (0, Y.jsxs)(`div`, {
          className: `flex justify-between items-start relative z-10`,
          children: [
            (0, Y.jsxs)(`div`, {
              className: `flex flex-col`,
              children: [
                (0, Y.jsx)(`span`, {
                  className: `text-[10px] font-black opacity-60 uppercase tracking-widest`,
                  children: e,
                }),
                (0, Y.jsx)(`span`, {
                  className: `text-lg font-bold italic tracking-tighter`,
                  children: `Crown Summit Bank`,
                }),
              ],
            }),
            (0, Y.jsx)(`div`, {
              className: `w-10 h-8 bg-amber-400/20 rounded-md border border-amber-400/30`,
            }),
          ],
        }),
        (0, Y.jsxs)(`div`, {
          className: `space-y-1 relative z-10`,
          children: [
            (0, Y.jsx)(`p`, {
              className: `text-lg font-black tracking-[0.2em]`,
              children: t,
            }),
            (0, Y.jsxs)(`div`, {
              className: `flex justify-between items-center opacity-60 text-[10px] font-bold`,
              children: [
                (0, Y.jsxs)(`span`, { children: [`EXPIRES: `, n] }),
                (0, Y.jsx)(`span`, {
                  className: `uppercase italic`,
                  children: `Visa Platinum`,
                }),
              ],
            }),
          ],
        }),
        (0, Y.jsx)(`div`, {
          className: `absolute -bottom-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl`,
        }),
      ],
    }),
  Et = ({ tx: e }) =>
    (0, Y.jsxs)(`div`, {
      className: `flex items-center justify-between p-4 hover:bg-slate-50 rounded-2xl transition-all border border-transparent hover:border-slate-100`,
      children: [
        (0, Y.jsxs)(`div`, {
          className: `flex items-center gap-4`,
          children: [
            (0, Y.jsx)(`div`, {
              className: `w-10 h-10 rounded-full flex items-center justify-center ${e.type === `deposit` ? `bg-green-100 text-green-600` : `bg-red-100 text-red-600`}`,
              children:
                e.type === `deposit`
                  ? (0, Y.jsx)(xe, { size: 18 })
                  : (0, Y.jsx)(De, { size: 18 }),
            }),
            (0, Y.jsxs)(`div`, {
              className: `flex flex-col`,
              children: [
                (0, Y.jsx)(`h5`, {
                  className: `text-xs font-black text-slate-900`,
                  children: e.name,
                }),
                (0, Y.jsx)(`p`, {
                  className: `text-[9px] font-black text-slate-400 uppercase`,
                  children: e.date,
                }),
              ],
            }),
          ],
        }),
        (0, Y.jsx)(`span`, {
          className: `text-sm font-black tracking-tight ${e.type === `deposit` ? `text-green-600` : `text-red-600`}`,
          children: e.amount,
        }),
      ],
    }),
  Dt = () => {
    let [e, t] = (0, J.useState)([]),
      [n, r] = (0, J.useState)(!0),
      [i, a] = (0, J.useState)(``),
      [o, s] = (0, J.useState)(!1),
      [c, l] = (0, J.useState)(null),
      [u, d] = (0, J.useState)(!1),
      [f, p] = (0, J.useState)(``),
      [m, h] = (0, J.useState)({
        full_name: ``,
        email: ``,
        password: ``,
        confirmPassword: ``,
        country: ``,
        address: ``,
        mobile: ``,
        balance: ``,
      }),
      [g, _] = (0, J.useState)(null),
      [v, y] = (0, J.useState)(null),
      b = (0, J.useRef)(null),
      [x, S] = (0, J.useState)(!1),
      [C, w] = (0, J.useState)(``),
      [re, D] = (0, J.useState)(null),
      [k, A] = (0, J.useState)({
        full_name: ``,
        mobile: ``,
        country: ``,
        address: ``,
      });
    (0, J.useEffect)(() => {
      j();
    }, []);
    let j = async () => {
        r(!0);
        try {
          let { data: e, error: n } = await Q.from(`profiles`)
            .select(`*`)
            .order(`full_name`, { ascending: !0 });
          if (n) throw n;
          t(e || []);
        } catch (e) {
          console.error(`Fetch error:`, e);
        } finally {
          r(!1);
        }
      },
      M = async (e, t) => {
        let n = t === `active` ? `locked` : `active`;
        try {
          let { error: t } = await Q.from(`profiles`)
            .update({ status: n })
            .eq(`id`, e);
          if (t) throw t;
          await j();
        } catch (e) {
          alert(`Update Failed: ${e.message}`);
        }
      },
      N = async (e, n) => {
        if (window.confirm(`Permanently delete ${n}?`))
          try {
            let { error: n } = await Q.from(`profiles`).delete().eq(`id`, e);
            if (n) throw n;
            t((t) => t.filter((t) => t.id !== e));
          } catch (e) {
            alert(`Delete failed: ` + e.message);
          }
      },
      ae = (e) => {
        (D(e.id),
          A({
            full_name: e.full_name || ``,
            mobile: e.mobile || ``,
            country: e.country || ``,
            address: e.address || ``,
          }),
          w(``),
          S(!0));
      },
      oe = async (e) => {
        if ((e.preventDefault(), !re)) return;
        (s(!0), w(``));
        let t = {};
        (k.full_name.trim() && (t.full_name = k.full_name),
          k.mobile.trim() && (t.mobile = k.mobile),
          k.country.trim() && (t.country = k.country),
          k.address.trim() && (t.address = k.address));
        try {
          if (Object.keys(t).length > 0) {
            let { error: e } = await Q.from(`profiles`).update(t).eq(`id`, re);
            if (e) throw e;
          }
          (S(!1), D(null), await j());
        } catch (e) {
          w(e.message || `Failed to update profile details.`);
        } finally {
          s(!1);
        }
      },
      se = async (e) => {
        if ((e.preventDefault(), c)) {
          s(!0);
          try {
            let e = Number(c.history_amount || 0),
              t = c.history_status === `credit`,
              n = t ? Number(c.balance) + e : Number(c.balance) - e,
              { error: r } = await Q.from(`profiles`)
                .update({ balance: n })
                .eq(`id`, c.id);
            if (r) throw r;
            let i = t ? `deposit` : `withdrawal`,
              { data: a, error: o } = await Q.from(`transactions`)
                .insert({
                  user_id: c.id,
                  name: t
                    ? `Wire Deposit from ${c.history_from || `External Source`}`
                    : `Wire Withdrawal to ${c.history_to || `External Source`}`,
                  amount: e,
                  type: i,
                  date: c.history_date
                    ? new Date(c.history_date).toISOString()
                    : new Date().toISOString(),
                  source_bank: c.history_from || null,
                  destination_bank: c.history_to || null,
                  origin_country: c.transfer_origin_country || null,
                })
                .select()
                .single();
            if (o) throw o;
            try {
              await Q.functions.invoke(`send-transaction-alert`, {
                body: {
                  email: c.email,
                  fullName: c.full_name,
                  type: i,
                  amount: e,
                  balance: n,
                  transactionId: a?.id || `N/A`,
                },
              });
            } catch (e) {
              console.error(
                `Asynchronous transactional notification pipeline failed:`,
                e,
              );
            }
            (l(null), await j());
          } catch (e) {
            alert(`Update failed: ` + e.message);
          } finally {
            s(!1);
          }
        }
      },
      ce = async (e) => {
        if (
          (e.preventDefault(), s(!0), p(``), m.password !== m.confirmPassword)
        ) {
          (p(`Passwords do not match.`), s(!1));
          return;
        }
        let t = Math.floor(1e9 + Math.random() * 9e9).toString();
        try {
          let { data: e, error: n } = await Q.auth.signUp({
            email: m.email,
            password: m.password,
            options: {
              data: {
                full_name: m.full_name,
                country: m.country,
                address: m.address,
                mobile: m.mobile,
                balance: parseFloat(m.balance) || 0,
                account_number: t,
                account_status: `pending`,
              },
            },
          });
          if (n) throw n;
          if (
            (console.log(
              `NOTIFICATION: New account request from ${m.email}. Status: PENDING CONFIRMATION.`,
            ),
            g && e.user)
          ) {
            let t = g.name.split(`.`).pop(),
              n = `${e.user.id}-${Date.now()}.${t}`;
            (await Q.storage.from(`avatars`).upload(n, g),
              await Q.auth.updateUser({ data: { avatar_url: n } }));
          }
          (h({
            full_name: ``,
            email: ``,
            password: ``,
            confirmPassword: ``,
            country: ``,
            address: ``,
            mobile: ``,
            balance: ``,
          }),
            _(null),
            y(null),
            d(!1),
            await j());
        } catch (e) {
          p(e.message || `Registration failed.`);
        } finally {
          s(!1);
        }
      },
      L = e.filter(
        (e) =>
          e.full_name?.toLowerCase().includes(i.toLowerCase()) ||
          e.email?.toLowerCase().includes(i.toLowerCase()) ||
          e.mobile?.toLowerCase().includes(i.toLowerCase()),
      );
    return (0, Y.jsxs)(`div`, {
      className: `min-h-screen bg-slate-50 text-slate-900 font-sans antialiased rounded-2xl`,
      children: [
        (0, Y.jsx)(`nav`, {
          className: `bg-white border-b border-slate-200 px-4 sm:px-8 py-4 sticky top-0 z-30 shadow-sm`,
          children: (0, Y.jsxs)(`div`, {
            className: `max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4`,
            children: [
              (0, Y.jsxs)(`div`, {
                className: `flex items-center gap-3 w-full md:w-auto`,
                children: [
                  (0, Y.jsx)(`div`, {
                    className: `bg-blue-600 p-2 rounded-lg text-white`,
                    children: (0, Y.jsx)(de, { size: 24 }),
                  }),
                  (0, Y.jsxs)(`div`, {
                    children: [
                      (0, Y.jsx)(`h1`, {
                        className: `text-xl font-bold text-slate-800 leading-tight`,
                        children: `Admin Portal`,
                      }),
                      (0, Y.jsx)(`p`, {
                        className: `text-[10px] text-blue-600 font-bold uppercase tracking-wider`,
                        children: `Financial Operations`,
                      }),
                    ],
                  }),
                ],
              }),
              (0, Y.jsxs)(`div`, {
                className: `relative w-full md:w-80`,
                children: [
                  (0, Y.jsx)(te, {
                    className: `absolute left-3 top-1/2 -translate-y-1/2 text-slate-400`,
                    size: 18,
                  }),
                  (0, Y.jsx)(`input`, {
                    type: `text`,
                    placeholder: `Search by name or email...`,
                    className: `w-full pl-10 pr-4 py-2.5 bg-slate-100 border-transparent border focus:border-blue-500 focus:bg-white rounded-xl text-sm transition-all outline-none`,
                    value: i,
                    onChange: (e) => a(e.target.value),
                  }),
                ],
              }),
            ],
          }),
        }),
        (0, Y.jsxs)(`main`, {
          className: `max-w-7xl mx-auto p-4 sm:p-6 lg:p-8`,
          children: [
            (0, Y.jsxs)(`div`, {
              className: `grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8`,
              children: [
                (0, Y.jsxs)(`div`, {
                  className: `bg-white p-6 rounded-2xl border border-slate-200 shadow-sm`,
                  children: [
                    (0, Y.jsx)(`p`, {
                      className: `text-sm text-slate-500 font-medium`,
                      children: `Total Clients`,
                    }),
                    (0, Y.jsx)(`p`, {
                      className: `text-2xl font-bold text-slate-800`,
                      children: e.length,
                    }),
                  ],
                }),
                (0, Y.jsxs)(`div`, {
                  className: `bg-white p-6 rounded-2xl border border-slate-200 shadow-sm`,
                  children: [
                    (0, Y.jsx)(`p`, {
                      className: `text-sm text-slate-500 font-medium`,
                      children: `Active Accounts`,
                    }),
                    (0, Y.jsx)(`p`, {
                      className: `text-2xl font-bold text-emerald-600`,
                      children: e.filter((e) => e.status === `active`).length,
                    }),
                  ],
                }),
                (0, Y.jsx)(`div`, {
                  className: `bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-right flex justify-end items-center `,
                  children: (0, Y.jsxs)(`button`, {
                    onClick: () => d(!0),
                    className: ` hover:cursor-pointer  bg-slate-900 text-white px-4 py-2 rounded-xl text-sm font-semibold flex items-center gap-2 hover:bg-slate-800 transition-colors`,
                    children: [(0, Y.jsx)(ne, { size: 18 }), ` New Profile`],
                  }),
                }),
              ],
            }),
            (0, Y.jsxs)(`div`, {
              className: `bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden`,
              children: [
                (0, Y.jsx)(`div`, {
                  className: `hidden md:block overflow-x-auto`,
                  children: (0, Y.jsxs)(`table`, {
                    className: `w-full text-left`,
                    children: [
                      (0, Y.jsx)(`thead`, {
                        children: (0, Y.jsxs)(`tr`, {
                          className: `bg-slate-50/50 border-b border-slate-200`,
                          children: [
                            (0, Y.jsx)(`th`, {
                              className: `px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider`,
                              children: `Client Details`,
                            }),
                            (0, Y.jsx)(`th`, {
                              className: `px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider`,
                              children: `Account No.`,
                            }),
                            (0, Y.jsx)(`th`, {
                              className: `px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider`,
                              children: `Balance`,
                            }),
                            (0, Y.jsx)(`th`, {
                              className: `px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider text-center`,
                              children: `Status`,
                            }),
                            (0, Y.jsx)(`th`, {
                              className: `px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider text-right`,
                              children: `Actions`,
                            }),
                          ],
                        }),
                      }),
                      (0, Y.jsx)(`tbody`, {
                        className: `divide-y divide-slate-100`,
                        children: n
                          ? [, , ,]
                              .fill(0)
                              .map((e, t) =>
                                (0, Y.jsx)(
                                  `tr`,
                                  {
                                    className: `animate-pulse`,
                                    children: (0, Y.jsx)(`td`, {
                                      colSpan: 5,
                                      className: `px-6 py-8`,
                                      children: (0, Y.jsx)(`div`, {
                                        className: `h-4 bg-slate-100 rounded w-full`,
                                      }),
                                    }),
                                  },
                                  t,
                                ),
                              )
                          : L.length > 0
                            ? L.map((e) =>
                                (0, Y.jsxs)(
                                  `tr`,
                                  {
                                    className: `hover:bg-blue-50/30 transition-colors group`,
                                    children: [
                                      (0, Y.jsx)(`td`, {
                                        className: `px-6 py-4`,
                                        children: (0, Y.jsxs)(`div`, {
                                          className: `flex items-center gap-3`,
                                          children: [
                                            (0, Y.jsx)(`div`, {
                                              className: `h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors`,
                                              children: (0, Y.jsx)(K, {
                                                size: 20,
                                              }),
                                            }),
                                            (0, Y.jsxs)(`div`, {
                                              children: [
                                                (0, Y.jsx)(`div`, {
                                                  className: `font-bold text-slate-700`,
                                                  children: e.full_name,
                                                }),
                                                (0, Y.jsx)(`div`, {
                                                  className: `text-xs text-slate-400`,
                                                  children: e.email,
                                                }),
                                                (0, Y.jsx)(`div`, {
                                                  className: `text-xs text-slate-400`,
                                                  children:
                                                    e.mobile ||
                                                    `No phone number provided`,
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      }),
                                      (0, Y.jsx)(`td`, {
                                        className: `px-6 py-4 font-mono text-sm text-slate-500 italic`,
                                        children: e.account_number || `---`,
                                      }),
                                      (0, Y.jsxs)(`td`, {
                                        className: `px-6 py-4 font-bold text-slate-900`,
                                        children: [
                                          `$`,
                                          Number(e.balance).toLocaleString(),
                                        ],
                                      }),
                                      (0, Y.jsx)(`td`, {
                                        className: `px-6 py-4 text-center`,
                                        children: (0, Y.jsx)(`span`, {
                                          className: `inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase border ${e.status === `active` ? `bg-emerald-50 text-emerald-600 border-emerald-100` : e.status === `locked` ? `bg-rose-50 text-rose-600 border-rose-100` : `bg-amber-50 text-amber-600 border-amber-100`}`,
                                          children: e.status,
                                        }),
                                      }),
                                      (0, Y.jsx)(`td`, {
                                        className: `px-6 py-4`,
                                        children: (0, Y.jsxs)(`div`, {
                                          className: `flex justify-end gap-1`,
                                          children: [
                                            (0, Y.jsx)(Ot, {
                                              onClick: () => ae(e),
                                              icon: (0, Y.jsx)(Ce, {
                                                size: 16,
                                              }),
                                              label: `Edit Profile`,
                                              color: `hover:text-purple-600 hover:bg-purple-50`,
                                            }),
                                            (0, Y.jsx)(Ot, {
                                              onClick: () =>
                                                l({
                                                  ...e,
                                                  history_status: `credit`,
                                                }),
                                              icon: (0, Y.jsx)(ee, {
                                                size: 16,
                                              }),
                                              label: `History`,
                                              color: `hover:text-blue-600 hover:bg-blue-50`,
                                            }),
                                            (0, Y.jsx)(Ot, {
                                              onClick: () => M(e.id, e.status),
                                              icon:
                                                e.status === `active`
                                                  ? (0, Y.jsx)(P, { size: 16 })
                                                  : (0, Y.jsx)(ie, {
                                                      size: 16,
                                                    }),
                                              label: `Toggle`,
                                              color: `hover:text-amber-600 hover:bg-amber-50`,
                                            }),
                                            (0, Y.jsx)(Ot, {
                                              onClick: () =>
                                                N(e.id, e.full_name),
                                              icon: (0, Y.jsx)(Ne, {
                                                size: 16,
                                              }),
                                              label: `Delete`,
                                              color: `hover:text-rose-600 hover:bg-rose-50`,
                                            }),
                                          ],
                                        }),
                                      }),
                                    ],
                                  },
                                  e.id,
                                ),
                              )
                            : (0, Y.jsx)(`tr`, {
                                children: (0, Y.jsx)(`td`, {
                                  colSpan: 5,
                                  className: `text-center py-20 text-slate-400`,
                                  children: `No matching clients found.`,
                                }),
                              }),
                      }),
                    ],
                  }),
                }),
                (0, Y.jsx)(`div`, {
                  className: `md:hidden divide-y divide-slate-100`,
                  children: L.map((e) =>
                    (0, Y.jsxs)(
                      `div`,
                      {
                        className: `p-4 space-y-4`,
                        children: [
                          (0, Y.jsxs)(`div`, {
                            className: `flex justify-between items-start`,
                            children: [
                              (0, Y.jsxs)(`div`, {
                                className: `flex items-center gap-3`,
                                children: [
                                  (0, Y.jsx)(`div`, {
                                    className: `h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500`,
                                    children: (0, Y.jsx)(K, { size: 20 }),
                                  }),
                                  (0, Y.jsxs)(`div`, {
                                    children: [
                                      (0, Y.jsx)(`div`, {
                                        className: `font-bold text-slate-800`,
                                        children: e.full_name,
                                      }),
                                      (0, Y.jsx)(`div`, {
                                        className: `text-xs text-slate-400 italic`,
                                        children: e.account_number,
                                      }),
                                      (0, Y.jsx)(`div`, {
                                        className: `text-xs text-slate-400 italic`,
                                        children: e.email,
                                      }),
                                      (0, Y.jsx)(`div`, {
                                        className: `text-xs text-slate-400 italic`,
                                        children:
                                          e.mobile ||
                                          `No phone number provided`,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, Y.jsx)(`span`, {
                                className: `px-2 py-0.5 rounded-full text-[9px] font-black uppercase border ${e.status === `active` ? `bg-emerald-50 text-emerald-600 border-emerald-100` : `bg-rose-50 text-rose-600 border-rose-100`}`,
                                children: e.status,
                              }),
                            ],
                          }),
                          (0, Y.jsxs)(`div`, {
                            className: `bg-slate-50 rounded-xl p-3 flex justify-between items-center`,
                            children: [
                              (0, Y.jsx)(`span`, {
                                className: `text-xs font-semibold text-slate-500 uppercase`,
                                children: `Balance`,
                              }),
                              (0, Y.jsxs)(`span`, {
                                className: `font-bold text-slate-900`,
                                children: [
                                  `$`,
                                  Number(e.balance).toLocaleString(),
                                ],
                              }),
                            ],
                          }),
                          (0, Y.jsxs)(`div`, {
                            className: `flex flex-wrap gap-2`,
                            children: [
                              (0, Y.jsxs)(`button`, {
                                onClick: () => ae(e),
                                className: `flex-1 flex justify-center items-center gap-2 py-2 bg-purple-50 text-purple-600 rounded-lg text-xs font-bold`,
                                children: [
                                  (0, Y.jsx)(Ce, { size: 14 }),
                                  ` Edit`,
                                ],
                              }),
                              (0, Y.jsxs)(`button`, {
                                onClick: () =>
                                  l({ ...e, history_status: `credit` }),
                                className: `flex-1 flex justify-center items-center gap-2 py-2 bg-blue-50 text-blue-600 rounded-lg text-xs font-bold`,
                                children: [
                                  (0, Y.jsx)(ee, { size: 14 }),
                                  ` History`,
                                ],
                              }),
                              (0, Y.jsxs)(`button`, {
                                onClick: () => M(e.id, e.status),
                                className: `flex-1 flex justify-center items-center gap-2 py-2 bg-slate-100 text-slate-600 rounded-lg text-xs font-bold`,
                                children: [
                                  e.status === `active`
                                    ? (0, Y.jsx)(P, { size: 14 })
                                    : (0, Y.jsx)(ie, { size: 14 }),
                                  ` `,
                                  `Status`,
                                ],
                              }),
                              (0, Y.jsx)(`button`, {
                                onClick: () => N(e.id, e.full_name),
                                className: `p-2 bg-rose-50 text-rose-600 rounded-lg`,
                                children: (0, Y.jsx)(Ne, { size: 16 }),
                              }),
                            ],
                          }),
                        ],
                      },
                      e.id,
                    ),
                  ),
                }),
              ],
            }),
          ],
        }),
        c &&
          (0, Y.jsxs)(`div`, {
            className: `fixed inset-0 z-50 flex justify-end`,
            children: [
              (0, Y.jsx)(`div`, {
                className: `absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity`,
                onClick: () => !o && l(null),
              }),
              (0, Y.jsxs)(`div`, {
                className: `relative w-full max-w-lg bg-white shadow-2xl h-full flex flex-col`,
                children: [
                  (0, Y.jsxs)(`div`, {
                    className: `p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50`,
                    children: [
                      (0, Y.jsxs)(`div`, {
                        className: `flex items-center gap-3`,
                        children: [
                          (0, Y.jsx)(`div`, {
                            className: `p-2 bg-blue-100 text-blue-600 rounded-lg`,
                            children: (0, Y.jsx)(ee, { size: 20 }),
                          }),
                          (0, Y.jsxs)(`div`, {
                            children: [
                              (0, Y.jsx)(`h2`, {
                                className: `text-lg font-bold text-slate-800 leading-none`,
                                children: `Record Transaction`,
                              }),
                              (0, Y.jsx)(`p`, {
                                className: `text-xs text-slate-400 mt-1`,
                                children: c.full_name,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, Y.jsx)(`button`, {
                        onClick: () => l(null),
                        className: `p-2 hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-200 rounded-xl transition-all`,
                        children: (0, Y.jsx)(U, { size: 20 }),
                      }),
                    ],
                  }),
                  (0, Y.jsxs)(`form`, {
                    onSubmit: se,
                    className: `p-6 space-y-6 flex-1 overflow-y-auto`,
                    children: [
                      (0, Y.jsxs)(`div`, {
                        className: `bg-linear-to-br from-slate-800 to-slate-900 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden`,
                        children: [
                          (0, Y.jsxs)(`div`, {
                            className: `relative z-10`,
                            children: [
                              (0, Y.jsx)(`p`, {
                                className: `text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1`,
                                children: `Current Account Balance`,
                              }),
                              (0, Y.jsxs)(`p`, {
                                className: `text-4xl font-mono font-bold`,
                                children: [
                                  `$`,
                                  Number(c.balance).toLocaleString(),
                                ],
                              }),
                            ],
                          }),
                          (0, Y.jsx)(`div`, {
                            className: `absolute top-0 right-0 p-4 opacity-10`,
                            children: (0, Y.jsx)(de, { size: 80 }),
                          }),
                        ],
                      }),
                      (0, Y.jsxs)(`div`, {
                        className: `grid grid-cols-1 sm:grid-cols-2 gap-4`,
                        children: [
                          (0, Y.jsx)($, {
                            label: `Transaction Amount`,
                            children: (0, Y.jsx)(`input`, {
                              type: `number`,
                              step: `any`,
                              required: !0,
                              className: `w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 font-bold outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all`,
                              value: c.history_amount || ``,
                              onChange: (e) =>
                                l({
                                  ...c,
                                  history_amount: Number(e.target.value),
                                }),
                            }),
                          }),
                          (0, Y.jsx)($, {
                            label: `Transaction Type`,
                            children: (0, Y.jsxs)(`select`, {
                              className: `w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 font-bold outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all`,
                              value: c.history_status || `credit`,
                              onChange: (e) =>
                                l({ ...c, history_status: e.target.value }),
                              children: [
                                (0, Y.jsx)(`option`, {
                                  value: `credit`,
                                  children: `Credit (+)`,
                                }),
                                (0, Y.jsx)(`option`, {
                                  value: `debit`,
                                  children: `Debit (-)`,
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      (0, Y.jsxs)(`div`, {
                        className: `grid grid-cols-1 sm:grid-cols-2 gap-4`,
                        children: [
                          (0, Y.jsx)($, {
                            label: `Source Bank`,
                            children: (0, Y.jsx)(`input`, {
                              type: `text`,
                              className: `w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500/20 outline-none`,
                              value: c.history_from || ``,
                              onChange: (e) =>
                                l({ ...c, history_from: e.target.value }),
                              placeholder: `e.g. JPMorgan Chase`,
                            }),
                          }),
                          (0, Y.jsx)($, {
                            label: `Destination Bank`,
                            children: (0, Y.jsx)(`input`, {
                              type: `text`,
                              className: `w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500/20 outline-none`,
                              value: c.history_to || ``,
                              onChange: (e) =>
                                l({ ...c, history_to: e.target.value }),
                              placeholder: `e.g. Local Wallet`,
                            }),
                          }),
                        ],
                      }),
                      (0, Y.jsx)($, {
                        label: `Transaction Timestamp`,
                        children: (0, Y.jsx)(`input`, {
                          type: `datetime-local`,
                          className: `w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500/20 outline-none`,
                          value: c.history_date || ``,
                          onChange: (e) =>
                            l({ ...c, history_date: e.target.value }),
                        }),
                      }),
                      (0, Y.jsx)($, {
                        label: `Origin Country`,
                        children: (0, Y.jsxs)(`div`, {
                          className: `relative`,
                          children: [
                            (0, Y.jsx)(O, {
                              className: `absolute left-3 top-1/2 -translate-y-1/2 text-slate-400`,
                              size: 16,
                            }),
                            (0, Y.jsx)(`input`, {
                              className: `w-full border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500/20`,
                              value: c.transfer_origin_country || ``,
                              onChange: (e) =>
                                l({
                                  ...c,
                                  transfer_origin_country: e.target.value,
                                }),
                              placeholder: `e.g. United States`,
                            }),
                          ],
                        }),
                      }),
                      (0, Y.jsx)(`div`, {
                        className: `pt-4 sticky bottom-0 bg-white`,
                        children: (0, Y.jsxs)(`button`, {
                          type: `submit`,
                          disabled: o,
                          className: `w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all shadow-lg shadow-blue-200 disabled:opacity-50 active:scale-[0.98]`,
                          children: [
                            o
                              ? (0, Y.jsx)(E, { className: `animate-spin` })
                              : (0, Y.jsx)(I, { size: 20 }),
                            `Confirm & Update Ledger`,
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        x &&
          (0, Y.jsxs)(`div`, {
            className: `fixed inset-0 z-50 flex justify-end`,
            children: [
              (0, Y.jsx)(`div`, {
                className: `absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity`,
                onClick: () => !o && S(!1),
              }),
              (0, Y.jsxs)(`div`, {
                className: `relative w-full max-w-lg bg-white shadow-2xl h-full flex flex-col`,
                children: [
                  (0, Y.jsxs)(`div`, {
                    className: `p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50`,
                    children: [
                      (0, Y.jsxs)(`div`, {
                        className: `flex items-center gap-3`,
                        children: [
                          (0, Y.jsx)(`div`, {
                            className: `p-2 bg-purple-600 text-white rounded-lg`,
                            children: (0, Y.jsx)(Ce, { size: 20 }),
                          }),
                          (0, Y.jsxs)(`div`, {
                            children: [
                              (0, Y.jsx)(`h2`, {
                                className: `text-lg font-bold text-slate-800 leading-none`,
                                children: `Modify Profile`,
                              }),
                              (0, Y.jsx)(`p`, {
                                className: `text-xs text-slate-400 mt-1`,
                                children: `Update optional account metadata safely`,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, Y.jsx)(`button`, {
                        type: `button`,
                        onClick: () => !o && S(!1),
                        className: `p-2 hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-200 rounded-xl transition-all`,
                        children: (0, Y.jsx)(U, { size: 20 }),
                      }),
                    ],
                  }),
                  (0, Y.jsxs)(`form`, {
                    onSubmit: oe,
                    className: `p-6 space-y-5 flex-1 overflow-y-auto`,
                    children: [
                      C &&
                        (0, Y.jsxs)(`div`, {
                          className: `p-4 bg-red-50 text-red-600 rounded-2xl flex items-center gap-3 text-sm font-bold border border-red-100`,
                          children: [(0, Y.jsx)(z, { size: 20 }), ` `, C],
                        }),
                      (0, Y.jsx)($, {
                        label: `Full Name (Optional)`,
                        children: (0, Y.jsxs)(`div`, {
                          className: `relative`,
                          children: [
                            (0, Y.jsx)(K, {
                              className: `absolute left-3 top-1/2 -translate-y-1/2 text-slate-400`,
                              size: 16,
                            }),
                            (0, Y.jsx)(`input`, {
                              type: `text`,
                              className: `w-full border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500/20`,
                              placeholder: `Leave unchanged or enter new name`,
                              value: k.full_name,
                              onChange: (e) =>
                                A({ ...k, full_name: e.target.value }),
                            }),
                          ],
                        }),
                      }),
                      (0, Y.jsx)($, {
                        label: `Mobile Number (Optional)`,
                        children: (0, Y.jsxs)(`div`, {
                          className: `relative`,
                          children: [
                            (0, Y.jsx)(F, {
                              className: `absolute left-3 top-1/2 -translate-y-1/2 text-slate-400`,
                              size: 16,
                            }),
                            (0, Y.jsx)(`input`, {
                              type: `text`,
                              className: `w-full border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500/20`,
                              placeholder: `Leave unchanged or enter new phone number`,
                              value: k.mobile,
                              onChange: (e) =>
                                A({ ...k, mobile: e.target.value }),
                            }),
                          ],
                        }),
                      }),
                      (0, Y.jsx)($, {
                        label: `Country (Optional)`,
                        children: (0, Y.jsxs)(`div`, {
                          className: `relative`,
                          children: [
                            (0, Y.jsx)(O, {
                              className: `absolute left-3 top-1/2 -translate-y-1/2 text-slate-400`,
                              size: 16,
                            }),
                            (0, Y.jsx)(`input`, {
                              type: `text`,
                              className: `w-full border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500/20`,
                              placeholder: `Leave unchanged or enter new country`,
                              value: k.country,
                              onChange: (e) =>
                                A({ ...k, country: e.target.value }),
                            }),
                          ],
                        }),
                      }),
                      (0, Y.jsx)($, {
                        label: `Residential Address (Optional)`,
                        children: (0, Y.jsxs)(`div`, {
                          className: `relative`,
                          children: [
                            (0, Y.jsx)(T, {
                              className: `absolute left-3 top-1/2 -translate-y-1/2 text-slate-400`,
                              size: 16,
                            }),
                            (0, Y.jsx)(`input`, {
                              type: `text`,
                              className: `w-full border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500/20`,
                              placeholder: `Leave unchanged or enter new address`,
                              value: k.address,
                              onChange: (e) =>
                                A({ ...k, address: e.target.value }),
                            }),
                          ],
                        }),
                      }),
                      (0, Y.jsxs)(`div`, {
                        className: `pt-4 sticky bottom-0 bg-white flex items-center gap-3`,
                        children: [
                          (0, Y.jsx)(`button`, {
                            type: `button`,
                            disabled: o,
                            onClick: () => S(!1),
                            className: `hover:cursor-pointer w-1/3 border border-slate-200 hover:bg-slate-50 text-slate-700 py-4 rounded-2xl font-bold flex items-center justify-center transition-all disabled:opacity-50`,
                            children: `Cancel`,
                          }),
                          (0, Y.jsxs)(`button`, {
                            type: `submit`,
                            disabled: o,
                            className: `hover:cursor-pointer flex-1 bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all shadow-lg disabled:opacity-50 active:scale-[0.98]`,
                            children: [
                              o
                                ? (0, Y.jsx)(E, { className: `animate-spin` })
                                : (0, Y.jsx)(I, { size: 20 }),
                              `Save Changes`,
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        u &&
          (0, Y.jsxs)(`div`, {
            className: `fixed inset-0 z-50 flex justify-end`,
            children: [
              (0, Y.jsx)(`div`, {
                className: `absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity`,
                onClick: () => !o && d(!1),
              }),
              (0, Y.jsxs)(`div`, {
                className: `relative w-full max-w-lg bg-white shadow-2xl h-full flex flex-col`,
                children: [
                  (0, Y.jsxs)(`div`, {
                    className: `p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50`,
                    children: [
                      (0, Y.jsxs)(`div`, {
                        className: `flex items-center gap-3`,
                        children: [
                          (0, Y.jsx)(`div`, {
                            className: `p-2 bg-blue-600 text-white rounded-lg`,
                            children: (0, Y.jsx)(ne, { size: 20 }),
                          }),
                          (0, Y.jsxs)(`div`, {
                            children: [
                              (0, Y.jsx)(`h2`, {
                                className: `text-lg font-bold text-slate-800 leading-none`,
                                children: `Create New Profile`,
                              }),
                              (0, Y.jsx)(`p`, {
                                className: `text-xs text-slate-400 mt-1`,
                                children: `Setup high-security private banking profile`,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, Y.jsx)(`button`, {
                        type: `button`,
                        onClick: () => !o && d(!1),
                        className: `p-2 hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-200 rounded-xl transition-all`,
                        children: (0, Y.jsx)(U, { size: 20 }),
                      }),
                    ],
                  }),
                  (0, Y.jsxs)(`form`, {
                    onSubmit: ce,
                    className: `p-6 space-y-5 flex-1 overflow-y-auto`,
                    children: [
                      f &&
                        (0, Y.jsxs)(`div`, {
                          className: `p-4 bg-red-50 text-red-600 rounded-2xl flex items-center gap-3 text-sm font-bold border border-red-100`,
                          children: [(0, Y.jsx)(z, { size: 20 }), ` `, f],
                        }),
                      (0, Y.jsxs)(`div`, {
                        className: `flex flex-col items-center mb-2`,
                        children: [
                          (0, Y.jsx)(`div`, {
                            onClick: () => b.current?.click(),
                            className: `relative group cursor-pointer w-24 h-24 rounded-full border-4 border-slate-100 shadow-xl overflow-hidden bg-slate-50 flex items-center justify-center transition-all hover:border-blue-500`,
                            children: v
                              ? (0, Y.jsx)(`img`, {
                                  src: v,
                                  className: `w-full h-full object-cover`,
                                  alt: `Preview`,
                                })
                              : (0, Y.jsxs)(`div`, {
                                  className: `flex flex-col items-center text-slate-400 group-hover:text-blue-500 transition-colors`,
                                  children: [
                                    (0, Y.jsx)(he, { size: 24 }),
                                    (0, Y.jsx)(`span`, {
                                      className: `text-[10px] font-bold uppercase mt-1`,
                                      children: `Upload`,
                                    }),
                                  ],
                                }),
                          }),
                          (0, Y.jsx)(`input`, {
                            type: `file`,
                            ref: b,
                            className: `hidden`,
                            accept: `image/*`,
                            onChange: (e) => {
                              let t = e.target.files?.[0];
                              t && (_(t), y(URL.createObjectURL(t)));
                            },
                          }),
                        ],
                      }),
                      (0, Y.jsx)($, {
                        label: `Full Name`,
                        children: (0, Y.jsxs)(`div`, {
                          className: `relative`,
                          children: [
                            (0, Y.jsx)(K, {
                              className: `absolute left-3 top-1/2 -translate-y-1/2 text-slate-400`,
                              size: 16,
                            }),
                            (0, Y.jsx)(`input`, {
                              type: `text`,
                              required: !0,
                              className: `w-full border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500/20`,
                              placeholder: `John Doe`,
                              value: m.full_name,
                              onChange: (e) =>
                                h({ ...m, full_name: e.target.value }),
                            }),
                          ],
                        }),
                      }),
                      (0, Y.jsx)($, {
                        label: `Email Address`,
                        children: (0, Y.jsxs)(`div`, {
                          className: `relative`,
                          children: [
                            (0, Y.jsx)(H, {
                              className: `absolute left-3 top-1/2 -translate-y-1/2 text-slate-400`,
                              size: 16,
                            }),
                            (0, Y.jsx)(`input`, {
                              type: `email`,
                              required: !0,
                              className: `w-full border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500/20`,
                              placeholder: `name@example.com`,
                              value: m.email,
                              onChange: (e) =>
                                h({ ...m, email: e.target.value }),
                            }),
                          ],
                        }),
                      }),
                      (0, Y.jsxs)(`div`, {
                        className: `grid grid-cols-1 sm:grid-cols-2 gap-4`,
                        children: [
                          (0, Y.jsx)($, {
                            label: `Password`,
                            children: (0, Y.jsxs)(`div`, {
                              className: `relative`,
                              children: [
                                (0, Y.jsx)(P, {
                                  className: `absolute left-3 top-1/2 -translate-y-1/2 text-slate-400`,
                                  size: 16,
                                }),
                                (0, Y.jsx)(`input`, {
                                  type: `password`,
                                  required: !0,
                                  className: `w-full border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500/20`,
                                  placeholder: `••••••••`,
                                  value: m.password,
                                  onChange: (e) =>
                                    h({ ...m, password: e.target.value }),
                                }),
                              ],
                            }),
                          }),
                          (0, Y.jsx)($, {
                            label: `Confirm Password`,
                            children: (0, Y.jsxs)(`div`, {
                              className: `relative`,
                              children: [
                                (0, Y.jsx)(P, {
                                  className: `absolute left-3 top-1/2 -translate-y-1/2 text-slate-400`,
                                  size: 16,
                                }),
                                (0, Y.jsx)(`input`, {
                                  type: `password`,
                                  required: !0,
                                  className: `w-full border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500/20`,
                                  placeholder: `••••••••`,
                                  value: m.confirmPassword,
                                  onChange: (e) =>
                                    h({
                                      ...m,
                                      confirmPassword: e.target.value,
                                    }),
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      (0, Y.jsxs)(`div`, {
                        className: `grid grid-cols-1 sm:grid-cols-2 gap-4`,
                        children: [
                          (0, Y.jsx)($, {
                            label: `Country`,
                            children: (0, Y.jsxs)(`div`, {
                              className: `relative`,
                              children: [
                                (0, Y.jsx)(O, {
                                  className: `absolute left-3 top-1/2 -translate-y-1/2 text-slate-400`,
                                  size: 16,
                                }),
                                (0, Y.jsx)(`input`, {
                                  type: `text`,
                                  required: !0,
                                  className: `w-full border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500/20`,
                                  placeholder: `United States`,
                                  value: m.country,
                                  onChange: (e) =>
                                    h({ ...m, country: e.target.value }),
                                }),
                              ],
                            }),
                          }),
                          (0, Y.jsx)($, {
                            label: `Mobile Number`,
                            children: (0, Y.jsxs)(`div`, {
                              className: `relative`,
                              children: [
                                (0, Y.jsx)(F, {
                                  className: `absolute left-3 top-1/2 -translate-y-1/2 text-slate-400`,
                                  size: 16,
                                }),
                                (0, Y.jsx)(`input`, {
                                  type: `text`,
                                  required: !0,
                                  className: `w-full border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500/20`,
                                  placeholder: `+1 (555) 000-0000`,
                                  value: m.mobile,
                                  onChange: (e) =>
                                    h({ ...m, mobile: e.target.value }),
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      (0, Y.jsx)($, {
                        label: `Residential Address`,
                        children: (0, Y.jsxs)(`div`, {
                          className: `relative`,
                          children: [
                            (0, Y.jsx)(T, {
                              className: `absolute left-3 top-1/2 -translate-y-1/2 text-slate-400`,
                              size: 16,
                            }),
                            (0, Y.jsx)(`input`, {
                              type: `text`,
                              required: !0,
                              className: `w-full border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500/20`,
                              placeholder: `123 Financial Way, NY`,
                              value: m.address,
                              onChange: (e) =>
                                h({ ...m, address: e.target.value }),
                            }),
                          ],
                        }),
                      }),
                      (0, Y.jsxs)(`div`, {
                        className: `pt-4 sticky bottom-0 bg-white flex items-center gap-3`,
                        children: [
                          (0, Y.jsx)(`button`, {
                            type: `button`,
                            disabled: o,
                            onClick: () => d(!1),
                            className: ` hover:cursor-pointer  w-1/3 border border-slate-200 hover:bg-slate-50 text-slate-700 py-4 rounded-2xl font-bold flex items-center justify-center transition-all disabled:opacity-50`,
                            children: `Cancel`,
                          }),
                          (0, Y.jsxs)(`button`, {
                            type: `submit`,
                            disabled: o,
                            className: ` hover:cursor-pointer  flex-1 bg-slate-900 hover:bg-slate-800 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all shadow-lg disabled:opacity-50 active:scale-[0.98]`,
                            children: [
                              o
                                ? (0, Y.jsx)(E, { className: `animate-spin` })
                                : (0, Y.jsx)(I, { size: 20 }),
                              `Create Profile`,
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
      ],
    });
  },
  Ot = ({ onClick: e, icon: t, label: n, color: r }) =>
    (0, Y.jsx)(`button`, {
      onClick: e,
      title: n,
      className: `p-2 transition-all rounded-lg flex items-center gap-2 ${r} text-slate-400`,
      children: t,
    }),
  $ = ({ label: e, children: t }) =>
    (0, Y.jsxs)(`div`, {
      children: [
        (0, Y.jsx)(`label`, {
          className: `block text-[11px] font-bold text-slate-500 uppercase tracking-wide mb-1.5 ml-1`,
          children: e,
        }),
        t,
      ],
    }),
  kt = (e) => {
    let [t, n] = (0, J.useState)(!0),
      [r, i] = (0, J.useState)(!1),
      [a, o] = (0, J.useState)({
        transfer_pin: 0,
        cot_code: 0,
        tax_code: 0,
        auth_code: 0,
      }),
      s = () => Math.floor(1e3 + Math.random() * 9e3),
      c = (e) => {
        o((t) => ({ ...t, [e]: s() }));
      },
      l = async () => {
        n(!0);
        try {
          let { data: e, error: t } = await Q.from(`pincodes`)
            .select(`*`)
            .single();
          if (t && t.code !== `PGRST116`) throw t;
          e &&
            o({
              transfer_pin: e.transfer_pin,
              cot_code: e.cot_code,
              tax_code: e.tax_code,
              auth_code: e.auth_code,
            });
        } catch (e) {
          console.error(`Error fetching pincodes:`, e);
        } finally {
          n(!1);
        }
      };
    return (
      (0, J.useEffect)(() => {
        l();
      }, []),
      (0, Y.jsxs)(`div`, {
        className: `text-slate-900 px-4 sm:px-0`,
        children: [
          ` `,
          (0, Y.jsxs)(`div`, {
            className: `flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8`,
            children: [
              (0, Y.jsxs)(`h1`, {
                className: `text-2xl md:text-3xl font-black italic tracking-tighter flex items-center gap-3 uppercase`,
                children: [
                  (0, Y.jsx)(ae, { className: `text-red-600 shrink-0` }),
                  ` Security Configuration`,
                ],
              }),
              (0, Y.jsxs)(`div`, {
                className: `flex gap-2 w-full md:w-auto`,
                children: [
                  (0, Y.jsx)(`button`, {
                    onClick: l,
                    className: `p-3 md:p-2 bg-slate-100 md:bg-transparent hover:bg-slate-200 rounded-xl transition-colors text-slate-600`,
                    title: `Reload from database`,
                    children: (0, Y.jsx)(re, {
                      size: 20,
                      className: t ? `animate-spin` : ``,
                    }),
                  }),
                  (0, Y.jsxs)(`button`, {
                    onClick: async () => {
                      i(!0);
                      try {
                        let { error: e } = await Q.from(`pincodes`).upsert([
                          { id: 1, ...a },
                        ]);
                        if (e) throw e;
                        alert(`Security pins updated successfully!`);
                      } catch (e) {
                        (console.error(`Error saving pincodes:`, e),
                          alert(`Failed to save pins.`));
                      } finally {
                        i(!1);
                      }
                    },
                    disabled: r || t,
                    className: `flex-1 md:flex-none flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 md:py-2 rounded-xl font-bold transition-all disabled:opacity-50`,
                    children: [
                      (0, Y.jsx)(Ve, { size: 18 }),
                      r ? `Saving...` : `Save Changes`,
                    ],
                  }),
                ],
              }),
            ],
          }),
          (0, Y.jsxs)(`div`, {
            className: `bg-white rounded-4xl md:rounded-4xl p-5 md:p-8 shadow-xl border border-slate-100`,
            children: [
              (0, Y.jsxs)(`div`, {
                className: `mb-6`,
                children: [
                  (0, Y.jsx)(`h2`, {
                    className: `text-lg font-bold text-slate-800 mb-2`,
                    children: `Multi-Layer Authentication Pins`,
                  }),
                  (0, Y.jsxs)(`p`, {
                    className: `text-slate-600 text-sm`,
                    children: [
                      `Generate individual pins below and click`,
                      ` `,
                      (0, Y.jsx)(`strong`, {
                        className: `whitespace-nowrap`,
                        children: `Save Changes`,
                      }),
                      ` to update the database.`,
                    ],
                  }),
                ],
              }),
              (0, Y.jsx)(`div`, {
                className: `space-y-4`,
                children: t
                  ? (0, Y.jsx)(`div`, {
                      className: `py-10 text-center text-slate-400 font-medium animate-pulse`,
                      children: `Loading security vault...`,
                    })
                  : [
                      {
                        id: `transfer_pin`,
                        threshold: 35,
                        label: `Transfer PIN`,
                      },
                      { id: `cot_code`, threshold: 65, label: `COT Code` },
                      {
                        id: `tax_code`,
                        threshold: 85,
                        label: `Clearance/Tax Key`,
                      },
                      { id: `auth_code`, threshold: 95, label: `Auth Token` },
                    ].map((e) =>
                      (0, Y.jsxs)(
                        `div`,
                        {
                          className: `flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-200 gap-4`,
                          children: [
                            (0, Y.jsxs)(`div`, {
                              className: `flex items-center gap-4 w-full`,
                              children: [
                                (0, Y.jsx)(`div`, {
                                  className: `w-10 h-10 md:w-12 md:h-12 bg-red-100 rounded-xl flex items-center justify-center shrink-0`,
                                  children: (0, Y.jsx)(ae, {
                                    size: 20,
                                    className: `text-red-600`,
                                  }),
                                }),
                                (0, Y.jsxs)(`div`, {
                                  children: [
                                    (0, Y.jsx)(`h3`, {
                                      className: `font-bold text-slate-800 text-sm md:text-base`,
                                      children: e.label,
                                    }),
                                    (0, Y.jsxs)(`p`, {
                                      className: `text-[10px] md:text-xs text-slate-500`,
                                      children: [
                                        `Required at `,
                                        e.threshold,
                                        `% progress`,
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, Y.jsxs)(`div`, {
                              className: `flex items-center justify-between sm:justify-end gap-4 md:gap-6 w-full sm:w-auto border-t sm:border-0 pt-3 sm:pt-0`,
                              children: [
                                (0, Y.jsx)(`div`, {
                                  className: `text-left sm:text-right`,
                                  children: (0, Y.jsx)(`div`, {
                                    className: `font-mono font-bold text-xl md:text-2xl text-blue-600 tracking-wider`,
                                    children: a[e.id] || `----`,
                                  }),
                                }),
                                (0, Y.jsx)(`button`, {
                                  onClick: () => c(e.id),
                                  className: `p-3 bg-white hover:bg-red-50 text-red-600 border border-slate-200 rounded-xl transition-all hover:border-red-200 group`,
                                  title: `Generate New Pin`,
                                  children: (0, Y.jsx)(Le, {
                                    size: 18,
                                    className: `group-hover:rotate-12 transition-transform`,
                                  }),
                                }),
                              ],
                            }),
                          ],
                        },
                        e.id,
                      ),
                    ),
              }),
              (0, Y.jsx)(`div`, {
                className: `mt-8 p-4 bg-amber-50 border border-amber-200 rounded-2xl`,
                children: (0, Y.jsxs)(`div`, {
                  className: `flex items-start gap-3`,
                  children: [
                    (0, Y.jsx)(He, {
                      size: 20,
                      className: `text-amber-600 mt-0.5 shrink-0`,
                    }),
                    (0, Y.jsxs)(`div`, {
                      children: [
                        (0, Y.jsx)(`h3`, {
                          className: `font-bold text-amber-800 text-sm md:text-base`,
                          children: `Admin Authority`,
                        }),
                        (0, Y.jsxs)(`p`, {
                          className: `text-xs md:text-sm text-amber-700 mt-1 leading-relaxed`,
                          children: [
                            `New pins will not take effect until the`,
                            ` `,
                            (0, Y.jsx)(`strong`, { children: `Save Changes` }),
                            ` button is pressed. Keep these codes secure.`,
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        ],
      })
    );
  },
  At = () => {
    let e = S(),
      [t, n] = (0, J.useState)(`dashboard`),
      [r, i] = (0, J.useState)(!0),
      a = [
        {
          id: `dashboard`,
          label: `Overview`,
          icon: (0, Y.jsx)(k, { size: 20 }),
          component: (0, Y.jsx)(Dt, {}),
        },
        {
          id: `transfer`,
          label: `Transfers Pins`,
          icon: (0, Y.jsx)(oe, { size: 20 }),
          component: (0, Y.jsx)(kt, {
            isOpen: !1,
            onClose: () => {
              console.log(`Closed`);
            },
            currentBalance: 0,
            onSuccess: (e, t) => {
              console.log(e, t);
            },
          }),
        },
      ];
    return (0, Y.jsxs)(`div`, {
      className: `flex min-h-screen bg-slate-900 relative text-slate-100`,
      children: [
        r &&
          (0, Y.jsx)(`div`, {
            className: `fixed inset-0 bg-black/50 z-30 lg:hidden`,
            onClick: () => i(!1),
          }),
        (0, Y.jsxs)(`aside`, {
          className: `
          fixed top-0 bottom-0 left-0 z-40 bg-slate-800 border-r border-slate-700 transition-all duration-300 flex flex-col justify-between h-screen
          ${r ? `w-64 translate-x-0` : `-translate-x-full lg:translate-x-0 lg:w-20`}
        `,
          children: [
            (0, Y.jsxs)(`div`, {
              className: `flex flex-col flex-1 overflow-y-auto`,
              children: [
                (0, Y.jsxs)(`div`, {
                  className: `p-6 flex items-center justify-between`,
                  children: [
                    (0, Y.jsx)(`span`, {
                      className: `font-bold text-xl text-blue-500 transition-opacity duration-200 ${r ? `opacity-100` : `lg:opacity-0 lg:w-0 overflow-hidden`}`,
                      children: `AdminPanel`,
                    }),
                    (0, Y.jsx)(`button`, {
                      onClick: () => i(!r),
                      className: `p-2 hover:bg-slate-700 rounded-lg text-slate-400 lg:block hidden`,
                      children: r
                        ? (0, Y.jsx)(U, { size: 20 })
                        : (0, Y.jsx)(Te, { size: 20 }),
                    }),
                    (0, Y.jsx)(`button`, {
                      onClick: () => i(!1),
                      className: `p-2 hover:bg-slate-700 rounded-lg text-slate-400 lg:hidden block`,
                      children: (0, Y.jsx)(U, { size: 20 }),
                    }),
                  ],
                }),
                (0, Y.jsx)(`nav`, {
                  className: `flex-1 px-4 space-y-2 mt-4`,
                  children: a.map((e) =>
                    (0, Y.jsxs)(
                      `button`,
                      {
                        onClick: () => {
                          (n(e.id), window.innerWidth < 1024 && i(!1));
                        },
                        className: `w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all mt-10 ${t === e.id ? `bg-blue-600 text-white shadow-lg shadow-blue-900/50 ` : `text-slate-400 hover:bg-slate-700/50 hover:text-slate-200`}`,
                        children: [
                          (0, Y.jsx)(`span`, {
                            className: `shrink-0`,
                            children: e.icon,
                          }),
                          (0, Y.jsx)(`span`, {
                            className: `font-medium transition-opacity duration-200 ${r ? `opacity-100` : `lg:opacity-0 lg:w-0 overflow-hidden`}`,
                            children: e.label,
                          }),
                        ],
                      },
                      e.id,
                    ),
                  ),
                }),
              ],
            }),
            (0, Y.jsx)(`div`, {
              className: `p-4 border-t border-slate-700 bg-slate-800`,
              children: (0, Y.jsxs)(`button`, {
                onClick: () => {
                  window.confirm(`Are you sure you want to log out?`) &&
                    e(`/admin-login`);
                },
                className: `w-full flex items-center gap-4 px-4 py-3 text-rose-400 hover:bg-rose-950/30 hover:text-rose-300 rounded-xl transition-all`,
                children: [
                  (0, Y.jsx)(`span`, {
                    className: `shrink-0`,
                    children: (0, Y.jsx)(N, { size: 20 }),
                  }),
                  (0, Y.jsx)(`span`, {
                    className: `font-medium transition-opacity duration-200 ${r ? `opacity-100` : `lg:opacity-0 lg:w-0 overflow-hidden`}`,
                    children: `Logout`,
                  }),
                ],
              }),
            }),
          ],
        }),
        (0, Y.jsxs)(`main`, {
          className: `flex-1 transition-all duration-300 p-4 md:p-8 min-h-screen
          ${r ? `lg:ml-64` : `lg:ml-20`}
        `,
          children: [
            (0, Y.jsxs)(`header`, {
              className: `mb-8 flex justify-between items-center`,
              children: [
                (0, Y.jsxs)(`div`, {
                  className: `flex items-center gap-4`,
                  children: [
                    (0, Y.jsx)(`button`, {
                      onClick: () => i(!0),
                      className: `lg:hidden p-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-300 ${r ? `hidden` : `block`}`,
                      children: (0, Y.jsx)(Te, { size: 20 }),
                    }),
                    (0, Y.jsxs)(`div`, {
                      children: [
                        (0, Y.jsx)(`h1`, {
                          className: `text-xl md:text-2xl font-bold text-slate-100 capitalize`,
                          children: t,
                        }),
                        (0, Y.jsx)(`p`, {
                          className: `text-slate-400 text-xs md:text-sm hidden sm:block`,
                          children: `Welcome back, Administrator`,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, Y.jsx)(`div`, {
                  className: `flex items-center gap-4`,
                  children: (0, Y.jsx)(`div`, {
                    className: `h-10 w-10 rounded-full bg-blue-900/50 border border-blue-700 flex items-center justify-center text-blue-400 font-bold`,
                    children: `AD`,
                  }),
                }),
              ],
            }),
            (0, Y.jsx)(`div`, {
              className: `animate-in fade-in slide-in-from-bottom-4 duration-500 overflow-x-hidden text-slate-300`,
              children: (() => {
                let e = a.find((e) => e.id === t);
                return e ? e.component : (0, Y.jsx)(Dt, {});
              })(),
            }),
          ],
        }),
      ],
    });
  },
  jt = () =>
    (0, Y.jsxs)(`main`, {
      className: `w-full bg-white font-sans selection:bg-blue-600 selection:text-white`,
      children: [
        (0, Y.jsxs)(`section`, {
          className: `relative h-[90vh] flex items-center overflow-hidden`,
          children: [
            (0, Y.jsxs)(`div`, {
              className: `absolute inset-0 z-0`,
              children: [
                (0, Y.jsx)(`img`, {
                  src: `https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2074&auto=format&fit=crop`,
                  className: `w-full h-full object-cover grayscale-[0.2] brightness-[0.7]`,
                  alt: `Corporate Advisory Meeting`,
                }),
                (0, Y.jsx)(`div`, {
                  className: `absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/60 to-transparent`,
                }),
              ],
            }),
            (0, Y.jsx)(`div`, {
              className: `relative z-10 max-w-7xl mx-auto px-6 w-full`,
              children: (0, Y.jsxs)(W.div, {
                initial: { opacity: 0, x: -50 },
                animate: { opacity: 1, x: 0 },
                transition: { duration: 1, ease: `easeOut` },
                className: `max-w-2xl`,
                children: [
                  (0, Y.jsxs)(`div`, {
                    className: `flex items-center gap-3 mb-6`,
                    children: [
                      (0, Y.jsx)(`div`, { className: `h-px w-12 bg-blue-500` }),
                      (0, Y.jsx)(`span`, {
                        className: `text-blue-400 font-black uppercase tracking-[0.4em] text-xs`,
                        children: `Institutional Division`,
                      }),
                    ],
                  }),
                  (0, Y.jsxs)(`h1`, {
                    className: `text-6xl md:text-8xl font-black text-white leading-[0.9] mb-8 tracking-tighter`,
                    children: [
                      `Powering `,
                      (0, Y.jsx)(`br`, {}),
                      ` Global`,
                      ` `,
                      (0, Y.jsx)(`span`, {
                        className: `text-blue-500`,
                        children: `Enterprise.`,
                      }),
                    ],
                  }),
                  (0, Y.jsx)(`p`, {
                    className: `text-xl text-slate-300 mb-12 leading-relaxed font-medium`,
                    children: `Customized liquidity solutions, risk management, and strategic advisory for the world's most ambitious corporations.`,
                  }),
                  (0, Y.jsx)(`div`, {
                    className: `flex gap-6`,
                    children: (0, Y.jsx)(l, {
                      to: `/Signup`,
                      className: `px-10 py-5 bg-blue-700 text-white font-black rounded-xl hover:bg-white hover:text-slate-950 transition-all shadow-2xl`,
                      children: `Open Corporate Account`,
                    }),
                  }),
                ],
              }),
            }),
          ],
        }),
        (0, Y.jsx)(`section`, {
          className: `py-32 bg-white`,
          children: (0, Y.jsxs)(`div`, {
            className: `max-w-7xl mx-auto px-6`,
            children: [
              (0, Y.jsxs)(`div`, {
                className: `grid lg:grid-cols-2 gap-24 items-end mb-20`,
                children: [
                  (0, Y.jsxs)(`div`, {
                    children: [
                      (0, Y.jsx)(`span`, {
                        className: `text-blue-600 font-black uppercase tracking-widest text-xs mb-4 block`,
                        children: `Our Expertise`,
                      }),
                      (0, Y.jsxs)(`h2`, {
                        className: `text-4xl md:text-6xl font-black text-slate-900 tracking-tighter`,
                        children: [
                          `Enterprise-Grade `,
                          (0, Y.jsx)(`br`, {}),
                          ` Financial Ecosystems`,
                        ],
                      }),
                    ],
                  }),
                  (0, Y.jsx)(`p`, {
                    className: `text-slate-500 text-lg leading-relaxed`,
                    children: `We provide the infrastructure required for multinational operations, from automated treasury sweeps to complex cross-border trade finance.`,
                  }),
                ],
              }),
              (0, Y.jsx)(`div`, {
                className: `grid md:grid-cols-3 gap-8`,
                children: [
                  {
                    icon: (0, Y.jsx)(Me, {}),
                    title: `Treasury Management`,
                    desc: `Optimize your working capital with AI-driven cash flow forecasting and automated liquidity sweeps.`,
                  },
                  {
                    icon: (0, Y.jsx)(Fe, {}),
                    title: `Trade Finance`,
                    desc: `Mitigate international risk with letters of credit, guarantees, and specialized supply chain financing.`,
                  },
                  {
                    icon: (0, Y.jsx)(Ie, {}),
                    title: `Capital Markets`,
                    desc: `Access debt and equity markets through our premier investment banking and advisory wing.`,
                  },
                ].map((e, t) =>
                  (0, Y.jsxs)(
                    W.div,
                    {
                      whileHover: { y: -10 },
                      className: `p-12 rounded-[3rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all`,
                      children: [
                        (0, Y.jsx)(`div`, {
                          className: `w-16 h-16 bg-blue-50 text-blue-700 rounded-2xl flex items-center justify-center mb-8`,
                          children: e.icon,
                        }),
                        (0, Y.jsx)(`h3`, {
                          className: `text-2xl font-black text-slate-900 mb-4`,
                          children: e.title,
                        }),
                        (0, Y.jsx)(`p`, {
                          className: `text-slate-500 leading-relaxed text-sm`,
                          children: e.desc,
                        }),
                      ],
                    },
                    t,
                  ),
                ),
              }),
            ],
          }),
        }),
        (0, Y.jsx)(`section`, {
          className: `py-32 px-6`,
          children: (0, Y.jsxs)(`div`, {
            className: `max-w-7xl mx-auto grid lg:grid-cols-2 gap-0 rounded-[4rem] overflow-hidden shadow-2xl`,
            children: [
              (0, Y.jsxs)(`div`, {
                className: `relative bg-slate-950 p-16 md:p-24 flex flex-col justify-center`,
                children: [
                  (0, Y.jsxs)(`div`, {
                    className: `relative z-10`,
                    children: [
                      (0, Y.jsx)(Ee, {
                        className: `text-blue-500 mb-8`,
                        size: 48,
                      }),
                      (0, Y.jsxs)(`h2`, {
                        className: `text-4xl md:text-5xl font-black text-white leading-tight mb-6 tracking-tighter`,
                        children: [
                          `Dedicated `,
                          (0, Y.jsx)(`br`, {}),
                          ` Relationship `,
                          (0, Y.jsx)(`br`, {}),
                          ` Management.`,
                        ],
                      }),
                      (0, Y.jsx)(`p`, {
                        className: `text-slate-400 text-lg mb-8`,
                        children: `Every Crown Summit Bank Corporate client is paired with a senior advisor specializing in their specific industry vertical.`,
                      }),
                      (0, Y.jsx)(`div`, {
                        className: `flex items-center gap-4 group cursor-pointer`,
                        children: (0, Y.jsxs)(l, {
                          to: `/contact`,
                          className: `relative overflow-hidden px-10 py-5 bg-linear-to-r from-blue-700 via-blue-600 to-blue-800 rounded-2xl transition-all duration-500 shadow-[0_20px_40px_-15px_rgba(37,99,235,0.4)] hover:shadow-[0_25px_50px_-12px_rgba(37,99,235,0.6)] hover:-translate-y-1 active:scale-95 border border-white/10`,
                          children: [
                            (0, Y.jsx)(`div`, {
                              className: `absolute inset-0 bg-linear-to-tr from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`,
                            }),
                            (0, Y.jsxs)(`span`, {
                              className: `relative z-10 flex items-center gap-4 text-xs font-black text-white uppercase tracking-[0.2em]`,
                              children: [
                                `Meet the Advisory Team`,
                                (0, Y.jsx)(`div`, {
                                  className: `flex items-center justify-center w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 group-hover:bg-white group-hover:text-blue-700 transition-all duration-500`,
                                  children: (0, Y.jsx)(q, {
                                    size: 16,
                                    className: `group-hover:translate-x-1 transition-transform duration-500`,
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, Y.jsx)(`div`, {
                    className: `absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[100px]`,
                  }),
                ],
              }),
              (0, Y.jsxs)(`div`, {
                className: `relative min-h-125`,
                children: [
                  (0, Y.jsx)(`img`, {
                    src: `https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop`,
                    className: `absolute inset-0 w-full h-full object-cover`,
                    alt: `Office space`,
                  }),
                  (0, Y.jsxs)(`div`, {
                    className: `absolute inset-0 bg-blue-700/80 backdrop-blur-sm flex flex-col items-center justify-center p-12 text-center`,
                    children: [
                      (0, Y.jsx)(R, { className: `text-white mb-6`, size: 64 }),
                      (0, Y.jsx)(`h3`, {
                        className: `text-3xl font-black text-white mb-6 uppercase tracking-tighter`,
                        children: `Ready to Scale?`,
                      }),
                      (0, Y.jsx)(l, {
                        to: `/contact`,
                        className: `px-12 py-5 bg-white text-blue-900 font-black rounded-2xl hover:bg-slate-900 hover:text-white transition-all shadow-xl`,
                        children: `Request a Consultation`,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
        (0, Y.jsx)(`div`, { children: (0, Y.jsx)(Z, {}) }),
        (0, Y.jsx)(`section`, {
          className: `py-20 bg-slate-50 border-t border-slate-200`,
          children: (0, Y.jsxs)(`div`, {
            className: `max-w-7xl mx-auto px-6 flex flex-wrap justify-between items-center gap-10`,
            children: [
              (0, Y.jsxs)(`div`, {
                className: `flex gap-16`,
                children: [
                  (0, Y.jsxs)(`div`, {
                    children: [
                      (0, Y.jsx)(`p`, {
                        className: `text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-2`,
                        children: `Global Rating`,
                      }),
                      (0, Y.jsx)(`p`, {
                        className: `text-2xl font-black text-slate-900 tracking-tight`,
                        children: `AAA Standard`,
                      }),
                    ],
                  }),
                  (0, Y.jsxs)(`div`, {
                    children: [
                      (0, Y.jsx)(`p`, {
                        className: `text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-2`,
                        children: `Assets Managed`,
                      }),
                      (0, Y.jsx)(`p`, {
                        className: `text-2xl font-black text-slate-900 tracking-tight`,
                        children: `$82.4B+`,
                      }),
                    ],
                  }),
                ],
              }),
              (0, Y.jsx)(`p`, {
                className: `text-[10px] font-bold text-slate-400 max-w-md text-right uppercase tracking-widest leading-loose`,
                children: `Crown Summit Bank PLC is regulated by the Prudential Regulation Authority and the Financial Conduct Authority.`,
              }),
            ],
          }),
        }),
      ],
    }),
  Mt = () => {
    let [e, t] = (0, J.useState)({
        full_name: ``,
        email: ``,
        password: ``,
        confirmPassword: ``,
        country: ``,
        address: ``,
        mobile: ``,
        balance: ``,
      }),
      [n, r] = (0, J.useState)(null),
      [i, a] = (0, J.useState)(null),
      [o, s] = (0, J.useState)(!1),
      [c, u] = (0, J.useState)(``),
      [d, f] = (0, J.useState)(!1),
      [p, m] = (0, J.useState)(!1),
      [h, g] = (0, J.useState)(!1),
      _ = (0, J.useRef)(null),
      v = S();
    return (0, Y.jsxs)(`main`, {
      className: `min-h-screen w-full flex flex-col lg:flex-row bg-white font-sans overflow-x-hidden`,
      children: [
        (0, Y.jsxs)(`section`, {
          className: `hidden lg:flex lg:w-1/2 relative overflow-hidden bg-slate-950`,
          children: [
            (0, Y.jsx)(W.img, {
              initial: { scale: 1.2, opacity: 0 },
              animate: { scale: 1, opacity: 0.3 },
              transition: { duration: 1.2 },
              src: `https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=1974`,
              className: `absolute inset-0 w-full h-full object-cover`,
              alt: `Doksanlar Interior`,
            }),
            (0, Y.jsxs)(`div`, {
              className: `relative z-10 p-16  justify-between h-full w-full`,
              children: [
                (0, Y.jsxs)(W.div, {
                  initial: { opacity: 0, x: -50 },
                  animate: { opacity: 1, x: 0 },
                  transition: { delay: 0.3 },
                  className: `py-50`,
                  children: [
                    (0, Y.jsxs)(`h2`, {
                      className: `text-7xl font-black text-white tracking-tighter leading-none mb-6`,
                      children: [
                        `JOIN THE `,
                        (0, Y.jsx)(`br`, {}),
                        (0, Y.jsx)(`span`, {
                          className: `text-blue-500 italic`,
                          children: `ELITE.`,
                        }),
                      ],
                    }),
                    (0, Y.jsxs)(`p`, {
                      className: `text-slate-400 text-xl max-w-md leading-relaxed`,
                      children: [
                        `Experience the pinnacle of institutional private banking. Secure your legacy with Doksanlarb-`,
                        (0, Y.jsx)(`span`, {
                          className: `text-blue-300 italic`,
                          children: `Finance`,
                        }),
                        ` global assets.`,
                      ],
                    }),
                  ],
                }),
                (0, Y.jsx)(`div`, {
                  className: `h-1.5 w-24 bg-blue-600 rounded-full`,
                }),
              ],
            }),
          ],
        }),
        (0, Y.jsxs)(`section`, {
          className: `w-full lg:w-1/2 flex flex-col items-center justify-center p-6 sm:p-12 lg:p-20 bg-slate-50 min-h-screen`,
          children: [
            (0, Y.jsx)(`div`, {
              className: `w-full max-w-4xl mb-6 flex justify-between items-center px-4`,
              children: (0, Y.jsxs)(l, {
                to: `/Login`,
                className: `flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors group`,
                children: [
                  (0, Y.jsx)(ye, {
                    size: 20,
                    className: `group-hover:-translate-x-1 transition-transform`,
                  }),
                  (0, Y.jsx)(`span`, {
                    className: `text-xs font-bold uppercase tracking-widest text-slate-400`,
                    children: `Back to Login`,
                  }),
                ],
              }),
            }),
            (0, Y.jsx)(W.div, {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              className: `w-full max-w-4xl bg-white p-8 sm:p-12 lg:p-16 rounded-[3rem] shadow-2xl border border-slate-100`,
              children: d
                ? (0, Y.jsxs)(`div`, {
                    className: `text-center py-10`,
                    children: [
                      (0, Y.jsx)(I, {
                        className: `mx-auto text-emerald-500 w-24 h-24 mb-6`,
                      }),
                      (0, Y.jsx)(`h1`, {
                        className: `text-4xl font-black text-slate-900 mb-4 uppercase italic`,
                        children: `Awaiting Approval`,
                      }),
                      (0, Y.jsxs)(`p`, {
                        className: `text-slate-600 text-lg font-medium`,
                        children: [
                          `Registration received. Your high-security profile is currently`,
                          ` `,
                          (0, Y.jsx)(`strong`, {
                            children: `Pending Confirmation`,
                          }),
                          ` by our board.`,
                        ],
                      }),
                      (0, Y.jsx)(l, {
                        to: `/Login`,
                        className: `inline-block mt-10 text-blue-600 font-black border-b-2 border-blue-600 hover:text-blue-700 text-lg`,
                        children: `Return to Sign In`,
                      }),
                    ],
                  })
                : (0, Y.jsxs)(Y.Fragment, {
                    children: [
                      (0, Y.jsxs)(`div`, {
                        className: `text-center mb-10`,
                        children: [
                          (0, Y.jsx)(`h1`, {
                            className: `text-3xl sm:text-4xl font-black text-slate-900 italic uppercase tracking-tighter`,
                            children: `Account Setup`,
                          }),
                          (0, Y.jsx)(`p`, {
                            className: `text-slate-500 text-base font-medium mt-2`,
                            children: `Create your high-security private banking profile.`,
                          }),
                        ],
                      }),
                      (0, Y.jsx)(V, {
                        mode: `wait`,
                        children:
                          c &&
                          (0, Y.jsxs)(W.div, {
                            initial: { opacity: 0, height: 0 },
                            animate: { opacity: 1, height: `auto` },
                            exit: { opacity: 0 },
                            className: `mb-8 p-5 bg-red-50 text-red-600 rounded-2xl flex items-center gap-3 text-sm font-bold border border-red-100`,
                            children: [(0, Y.jsx)(z, { size: 20 }), ` `, c],
                          }),
                      }),
                      (0, Y.jsxs)(`form`, {
                        onSubmit: async (t) => {
                          if (
                            (t.preventDefault(),
                            s(!0),
                            u(``),
                            e.password !== e.confirmPassword)
                          ) {
                            (u(`Passwords do not match.`), s(!1));
                            return;
                          }
                          let r = Math.floor(
                            1e9 + Math.random() * 9e9,
                          ).toString();
                          try {
                            let { data: t, error: i } = await Q.auth.signUp({
                              email: e.email,
                              password: e.password,
                              options: {
                                data: {
                                  full_name: e.full_name,
                                  country: e.country,
                                  address: e.address,
                                  mobile: e.mobile,
                                  balance: parseFloat(e.balance) || 0,
                                  account_number: r,
                                  account_status: `pending`,
                                },
                              },
                            });
                            if (i) throw i;
                            if (
                              (console.log(
                                `NOTIFICATION: New account request from ${e.email}. Status: PENDING CONFIRMATION.`,
                              ),
                              n && t.user)
                            ) {
                              let e = n.name.split(`.`).pop(),
                                r = `${t.user.id}-${Date.now()}.${e}`;
                              (await Q.storage.from(`avatars`).upload(r, n),
                                await Q.auth.updateUser({
                                  data: { avatar_url: r },
                                }));
                            }
                            (f(!0),
                              B.success(
                                `Account created successfully! Please check your email for verification. Redirecting to login...`,
                              ),
                              setTimeout(() => v(`/Login`), 5e3));
                          } catch (e) {
                            u(e.message || `Registration failed.`);
                          } finally {
                            s(!1);
                          }
                        },
                        className: `space-y-8`,
                        children: [
                          (0, Y.jsxs)(`div`, {
                            className: `flex flex-col items-center mb-4`,
                            children: [
                              (0, Y.jsx)(`div`, {
                                onClick: () => _.current?.click(),
                                className: `w-24 h-24 rounded-full bg-slate-100 border-2 border-dashed border-slate-300 flex items-center justify-center cursor-pointer overflow-hidden relative group hover:border-blue-500 transition-colors shadow-inner`,
                                children: i
                                  ? (0, Y.jsx)(`img`, {
                                      src: i,
                                      className: `w-full h-full object-cover`,
                                      alt: `Preview`,
                                    })
                                  : (0, Y.jsx)(he, {
                                      className: `text-slate-400`,
                                      size: 32,
                                    }),
                              }),
                              (0, Y.jsx)(`input`, {
                                type: `file`,
                                ref: _,
                                onChange: (e) => {
                                  let t = e.target.files?.[0];
                                  t && (r(t), a(URL.createObjectURL(t)));
                                },
                                className: `hidden`,
                                accept: `image/*`,
                              }),
                              (0, Y.jsx)(`p`, {
                                className: `text-[10px] font-bold text-slate-400 uppercase mt-2 tracking-widest`,
                                children: `Upload Profile Photo`,
                              }),
                            ],
                          }),
                          (0, Y.jsxs)(`div`, {
                            className: `grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6`,
                            children: [
                              (0, Y.jsxs)(`div`, {
                                className: `space-y-1`,
                                children: [
                                  (0, Y.jsx)(`label`, {
                                    className: `text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1`,
                                    children: `Full Name`,
                                  }),
                                  (0, Y.jsxs)(`div`, {
                                    className: `relative`,
                                    children: [
                                      (0, Y.jsx)(K, {
                                        className: `absolute left-4 top-1/2 -translate-y-1/2 text-slate-300`,
                                        size: 18,
                                      }),
                                      (0, Y.jsx)(`input`, {
                                        type: `text`,
                                        required: !0,
                                        value: e.full_name,
                                        onChange: (n) =>
                                          t({
                                            ...e,
                                            full_name: n.target.value,
                                          }),
                                        className: `w-full bg-slate-50 border border-slate-200 p-4 pl-12 rounded-xl text-sm focus:border-blue-600 outline-none transition-all`,
                                        placeholder: `John Doe`,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, Y.jsxs)(`div`, {
                                className: `space-y-1`,
                                children: [
                                  (0, Y.jsx)(`label`, {
                                    className: `text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1`,
                                    children: `Email Address`,
                                  }),
                                  (0, Y.jsxs)(`div`, {
                                    className: `relative`,
                                    children: [
                                      (0, Y.jsx)(H, {
                                        className: `absolute left-4 top-1/2 -translate-y-1/2 text-slate-300`,
                                        size: 18,
                                      }),
                                      (0, Y.jsx)(`input`, {
                                        type: `email`,
                                        required: !0,
                                        value: e.email,
                                        onChange: (n) =>
                                          t({ ...e, email: n.target.value }),
                                        className: `w-full bg-slate-50 border border-slate-200 p-4 pl-12 rounded-xl text-sm focus:border-blue-600 outline-none transition-all`,
                                        placeholder: `name@company.com`,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, Y.jsxs)(`div`, {
                                className: `space-y-1`,
                                children: [
                                  (0, Y.jsx)(`label`, {
                                    className: `text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1`,
                                    children: `Mobile Contact`,
                                  }),
                                  (0, Y.jsxs)(`div`, {
                                    className: `relative`,
                                    children: [
                                      (0, Y.jsx)(F, {
                                        className: `absolute left-4 top-1/2 -translate-y-1/2 text-slate-300`,
                                        size: 18,
                                      }),
                                      (0, Y.jsx)(`input`, {
                                        type: `tel`,
                                        required: !0,
                                        value: e.mobile,
                                        onChange: (n) =>
                                          t({ ...e, mobile: n.target.value }),
                                        className: `w-full bg-slate-50 border border-slate-200 p-4 pl-12 rounded-xl text-sm focus:border-blue-600 outline-none transition-all`,
                                        placeholder: `+44...`,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, Y.jsxs)(`div`, {
                                className: `space-y-1`,
                                children: [
                                  (0, Y.jsx)(`label`, {
                                    className: `text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1`,
                                    children: `Country`,
                                  }),
                                  (0, Y.jsxs)(`div`, {
                                    className: `relative`,
                                    children: [
                                      (0, Y.jsx)(O, {
                                        className: `absolute left-4 top-1/2 -translate-y-1/2 text-slate-300`,
                                        size: 18,
                                      }),
                                      (0, Y.jsx)(`input`, {
                                        type: `text`,
                                        required: !0,
                                        value: e.country,
                                        onChange: (n) =>
                                          t({ ...e, country: n.target.value }),
                                        className: `w-full bg-slate-50 border border-slate-200 p-4 pl-12 rounded-xl text-sm focus:border-blue-600 outline-none transition-all`,
                                        placeholder: `UK`,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, Y.jsxs)(`div`, {
                                className: `md:col-span-2 space-y-1`,
                                children: [
                                  (0, Y.jsx)(`label`, {
                                    className: `text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1`,
                                    children: `Residential Address`,
                                  }),
                                  (0, Y.jsxs)(`div`, {
                                    className: `relative`,
                                    children: [
                                      (0, Y.jsx)(T, {
                                        className: `absolute left-4 top-1/2 -translate-y-1/2 text-slate-300`,
                                        size: 18,
                                      }),
                                      (0, Y.jsx)(`input`, {
                                        type: `text`,
                                        required: !0,
                                        value: e.address,
                                        onChange: (n) =>
                                          t({ ...e, address: n.target.value }),
                                        className: `w-full bg-slate-50 border border-slate-200 p-4 pl-12 rounded-xl text-sm focus:border-blue-600 outline-none transition-all`,
                                        placeholder: `123 Luxury Lane, City`,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, Y.jsxs)(`div`, {
                                className: `space-y-1`,
                                children: [
                                  (0, Y.jsx)(`label`, {
                                    className: `text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1`,
                                    children: `Password`,
                                  }),
                                  (0, Y.jsxs)(`div`, {
                                    className: `relative`,
                                    children: [
                                      (0, Y.jsx)(P, {
                                        className: `absolute left-4 top-1/2 -translate-y-1/2 text-slate-300`,
                                        size: 18,
                                      }),
                                      (0, Y.jsx)(`input`, {
                                        type: p ? `text` : `password`,
                                        required: !0,
                                        value: e.password,
                                        onChange: (n) =>
                                          t({ ...e, password: n.target.value }),
                                        className: `w-full bg-slate-50 border border-slate-200 p-4 pl-12 pr-12 rounded-xl text-sm focus:border-blue-600 outline-none transition-all`,
                                        placeholder: `••••••••`,
                                      }),
                                      (0, Y.jsx)(`button`, {
                                        type: `button`,
                                        onClick: () => m(!p),
                                        className: `absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600`,
                                        children: p
                                          ? (0, Y.jsx)(j, { size: 18 })
                                          : (0, Y.jsx)(D, { size: 18 }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, Y.jsxs)(`div`, {
                                className: `space-y-1`,
                                children: [
                                  (0, Y.jsx)(`label`, {
                                    className: `text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1`,
                                    children: `Confirm Password`,
                                  }),
                                  (0, Y.jsxs)(`div`, {
                                    className: `relative`,
                                    children: [
                                      (0, Y.jsx)(P, {
                                        className: `absolute left-4 top-1/2 -translate-y-1/2 text-slate-300`,
                                        size: 18,
                                      }),
                                      (0, Y.jsx)(`input`, {
                                        type: h ? `text` : `password`,
                                        required: !0,
                                        value: e.confirmPassword,
                                        onChange: (n) =>
                                          t({
                                            ...e,
                                            confirmPassword: n.target.value,
                                          }),
                                        className: `w-full bg-slate-50 border border-slate-200 p-4 pl-12 pr-12 rounded-xl text-sm focus:border-blue-600 outline-none transition-all`,
                                        placeholder: `••••••••`,
                                      }),
                                      (0, Y.jsx)(`button`, {
                                        type: `button`,
                                        onClick: () => g(!h),
                                        className: `absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600`,
                                        children: h
                                          ? (0, Y.jsx)(j, { size: 18 })
                                          : (0, Y.jsx)(D, { size: 18 }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, Y.jsxs)(W.button, {
                            whileHover: { scale: 1.01 },
                            whileTap: { scale: 0.99 },
                            type: `submit`,
                            disabled: o,
                            className: `w-full py-6 bg-slate-950 text-white font-black rounded-2xl hover:bg-blue-700 transition-all flex items-center justify-center gap-4 disabled:opacity-50 mt-6 shadow-2xl text-lg tracking-widest`,
                            children: [
                              o
                                ? (0, Y.jsx)(E, {
                                    className: `animate-spin`,
                                    size: 24,
                                  })
                                : `FINALIZE REGISTRATION`,
                              !o && (0, Y.jsx)(q, { size: 24 }),
                            ],
                          }),
                        ],
                      }),
                      (0, Y.jsx)(`div`, {
                        className: `mt-10 pt-8 border-t border-slate-100 text-center`,
                        children: (0, Y.jsxs)(`p`, {
                          className: `text-base font-medium text-slate-500`,
                          children: [
                            `Already a member?`,
                            ` `,
                            (0, Y.jsx)(l, {
                              to: `/Login`,
                              className: `text-blue-600 font-black hover:underline underline-offset-8`,
                              children: `Sign In`,
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
            }),
            (0, Y.jsx)(`p`, {
              className: `mt-12 text-[10px] font-bold text-slate-300 uppercase tracking-[0.5em]`,
              children: `Crown Summit Bank Institutional Portal v4.2`,
            }),
          ],
        }),
      ],
    });
  },
  Nt = () => {
    let [e, t] = (0, J.useState)(!1),
      [n, r] = (0, J.useState)({
        fullName: ``,
        email: ``,
        inquiryType: `Private Wealth Management`,
        message: ``,
      }),
      i = (e) => {
        let { name: t, value: n } = e.target;
        r((e) => ({ ...e, [t]: n }));
      };
    return (0, Y.jsxs)(`div`, {
      className: `min-h-screen bg-white font-sans`,
      children: [
        (0, Y.jsxs)(`section`, {
          className: `relative h-[60vh] flex items-center overflow-hidden bg-slate-900`,
          children: [
            (0, Y.jsxs)(`div`, {
              className: `absolute inset-0`,
              children: [
                (0, Y.jsx)(`img`, {
                  src: `https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974`,
                  className: `w-full h-full object-cover opacity-60`,
                  alt: `Private Banker`,
                }),
                (0, Y.jsx)(`div`, {
                  className: `absolute inset-0 bg-linear-to-r from-slate-950 via-slate-900/40 to-transparent`,
                }),
              ],
            }),
            (0, Y.jsx)(`div`, {
              className: `relative z-10 container mx-auto px-6 lg:px-12`,
              children: (0, Y.jsxs)(W.div, {
                initial: { opacity: 0, x: -30 },
                animate: { opacity: 1, x: 0 },
                className: `max-w-2xl`,
                children: [
                  (0, Y.jsx)(`span`, {
                    className: `text-blue-500 font-black tracking-[0.3em] uppercase text-sm mb-4 block`,
                    children: `Institutional Support`,
                  }),
                  (0, Y.jsxs)(`h1`, {
                    className: `text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-6`,
                    children: [
                      `PERSONALIZED `,
                      (0, Y.jsx)(`br`, {}),
                      (0, Y.jsx)(`span`, {
                        className: `italic text-slate-300 underline decoration-blue-600 underline-offset-8`,
                        children: `PARTNERSHIP.`,
                      }),
                    ],
                  }),
                  (0, Y.jsx)(`p`, {
                    className: `text-slate-300 text-lg md:text-xl font-medium leading-relaxed max-w-lg`,
                    children: `Our dedicated asset managers are available globally to ensure your institutional needs are met with precision and absolute discretion.`,
                  }),
                ],
              }),
            }),
          ],
        }),
        (0, Y.jsx)(`section`, {
          className: `py-20 lg:py-32 container mx-auto px-6 lg:px-12`,
          children: (0, Y.jsxs)(`div`, {
            className: `grid grid-cols-1 lg:grid-cols-2 gap-20`,
            children: [
              (0, Y.jsxs)(`div`, {
                className: `space-y-12`,
                children: [
                  (0, Y.jsxs)(`div`, {
                    children: [
                      (0, Y.jsx)(`h2`, {
                        className: `text-4xl font-black text-slate-900 tracking-tighter uppercase italic mb-4`,
                        children: `Connect with us`,
                      }),
                      (0, Y.jsx)(`div`, {
                        className: `h-1.5 w-16 bg-blue-600 rounded-full mb-8`,
                      }),
                      (0, Y.jsx)(`p`, {
                        className: `text-slate-500 font-medium max-w-md`,
                        children: `Whether you are looking for private equity advice or daily account management, our team is ready to assist.`,
                      }),
                    ],
                  }),
                  (0, Y.jsxs)(`div`, {
                    className: `grid grid-cols-1 md:grid-cols-2 gap-8`,
                    children: [
                      (0, Y.jsxs)(`div`, {
                        className: `flex gap-4 p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all group`,
                        children: [
                          (0, Y.jsx)(`div`, {
                            className: `w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors`,
                            children: (0, Y.jsx)(F, { size: 24 }),
                          }),
                          (0, Y.jsxs)(`div`, {
                            children: [
                              (0, Y.jsx)(`h4`, {
                                className: `font-black text-slate-900 text-sm uppercase`,
                                children: `24/7 Priority Line`,
                              }),
                              (0, Y.jsx)(`a`, {
                                href: `tel:+90 534 393 8840`,
                                className: `text-slate-500 text-sm mt-1 hover:text-blue-600 transition-colors block`,
                                children: `+90 534 393 8840`,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, Y.jsxs)(`div`, {
                        className: `flex gap-4 p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all group`,
                        children: [
                          (0, Y.jsx)(`div`, {
                            className: `w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors`,
                            children: (0, Y.jsx)(H, { size: 24 }),
                          }),
                          (0, Y.jsxs)(`div`, {
                            children: [
                              (0, Y.jsx)(`h4`, {
                                className: `font-black text-slate-900 text-sm uppercase`,
                                children: `Secure Email`,
                              }),
                              (0, Y.jsx)(`a`, {
                                href: `mailto:info@dividendbks.com`,
                                className: `text-slate-500 text-sm mt-1 hover:text-blue-600 transition-colors block`,
                                children: `info@doksanlarb.com`,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, Y.jsxs)(`div`, {
                        className: `flex gap-4 p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all group`,
                        children: [
                          (0, Y.jsx)(`div`, {
                            className: `w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors`,
                            children: (0, Y.jsx)(O, { size: 24 }),
                          }),
                          (0, Y.jsxs)(`div`, {
                            children: [
                              (0, Y.jsx)(`h4`, {
                                className: `font-black text-slate-900 text-sm uppercase`,
                                children: `Global HQ`,
                              }),
                              (0, Y.jsx)(`p`, {
                                className: `text-slate-500 text-sm mt-1`,
                                children: `İstanbul, Türkiye`,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, Y.jsxs)(`div`, {
                        className: `flex gap-4 p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all group`,
                        children: [
                          (0, Y.jsx)(`div`, {
                            className: `w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors`,
                            children: (0, Y.jsx)(R, { size: 24 }),
                          }),
                          (0, Y.jsxs)(`div`, {
                            children: [
                              (0, Y.jsx)(`h4`, {
                                className: `font-black text-slate-900 text-sm uppercase`,
                                children: `Encrypted Email Chat`,
                              }),
                              (0, Y.jsx)(`p`, {
                                className: `text-slate-500 text-sm mt-1`,
                                children: `Available via Portal`,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, Y.jsxs)(`div`, {
                    className: `pt-10`,
                    children: [
                      (0, Y.jsx)(`h3`, {
                        className: `text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-6`,
                        children: `Our Global Presence`,
                      }),
                      (0, Y.jsx)(`div`, {
                        className: `flex flex-wrap gap-x-8 gap-y-4 font-bold text-slate-900`,
                        children: (0, Y.jsx)(Z, {}),
                      }),
                    ],
                  }),
                ],
              }),
              (0, Y.jsxs)(W.div, {
                initial: { opacity: 0, y: 30 },
                animate: { opacity: 1, y: 0 },
                className: `bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border border-slate-100`,
                children: [
                  (0, Y.jsxs)(`div`, {
                    className: `mb-8`,
                    children: [
                      (0, Y.jsx)(`h3`, {
                        className: `text-2xl font-black text-slate-900 uppercase italic`,
                        children: `Inquiry Form`,
                      }),
                      (0, Y.jsx)(`p`, {
                        className: `text-slate-500 text-sm font-medium mt-1`,
                        children: `Typical response time: Under 15 minutes.`,
                      }),
                    ],
                  }),
                  (0, Y.jsxs)(`form`, {
                    onSubmit: async (e) => {
                      (e.preventDefault(), t(!0));
                      try {
                        let e = {
                            fullName: n.fullName,
                            email: n.email,
                            inquiryType: n.inquiryType,
                            message: n.message,
                          },
                          { error: t } = await Q.functions.invoke(
                            `smooth-endpoint`,
                            { body: e },
                          );
                        if (t) throw t;
                        (B.success(
                          `Inquiry transmitted successfully!, Our team will be in touch shortly.`,
                        ),
                          r({
                            fullName: ``,
                            email: ``,
                            inquiryType: `Private Wealth Management`,
                            message: ``,
                          }));
                      } catch {
                        B.error(
                          `Failed to send inquiry. Please try again later.`,
                        );
                      } finally {
                        t(!1);
                      }
                    },
                    className: `space-y-6`,
                    children: [
                      (0, Y.jsxs)(`div`, {
                        className: `grid grid-cols-1 md:grid-cols-2 gap-6`,
                        children: [
                          (0, Y.jsxs)(`div`, {
                            className: `space-y-1`,
                            children: [
                              (0, Y.jsx)(`label`, {
                                className: `text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1`,
                                children: `Full Name`,
                              }),
                              (0, Y.jsx)(`input`, {
                                type: `text`,
                                name: `fullName`,
                                value: n.fullName,
                                onChange: i,
                                required: !0,
                                className: `w-full bg-slate-50 border border-slate-200 p-4 rounded-xl text-sm focus:border-blue-600 outline-none transition-all`,
                                placeholder: `John Doe`,
                              }),
                            ],
                          }),
                          (0, Y.jsxs)(`div`, {
                            className: `space-y-1`,
                            children: [
                              (0, Y.jsx)(`label`, {
                                className: `text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1`,
                                children: `Corporate Email`,
                              }),
                              (0, Y.jsx)(`input`, {
                                type: `email`,
                                name: `email`,
                                value: n.email,
                                onChange: i,
                                required: !0,
                                className: `w-full bg-slate-50 border border-slate-200 p-4 rounded-xl text-sm focus:border-blue-600 outline-none transition-all`,
                                placeholder: `john@company.com`,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, Y.jsxs)(`div`, {
                        className: `space-y-1`,
                        children: [
                          (0, Y.jsx)(`label`, {
                            className: `text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1`,
                            children: `Inquiry Type`,
                          }),
                          (0, Y.jsxs)(`select`, {
                            name: `inquiryType`,
                            value: n.inquiryType,
                            onChange: i,
                            className: `w-full bg-slate-50 border border-slate-200 p-4 rounded-xl text-sm focus:border-blue-600 outline-none transition-all`,
                            children: [
                              (0, Y.jsx)(`option`, {
                                children: `Private Wealth Management`,
                              }),
                              (0, Y.jsx)(`option`, {
                                children: `Corporate Liquidity`,
                              }),
                              (0, Y.jsx)(`option`, {
                                children: `Digital Assets & Escrow`,
                              }),
                              (0, Y.jsx)(`option`, {
                                children: `Institutional Lending`,
                              }),
                              (0, Y.jsx)(`option`, {
                                children: `Login Issues`,
                              }),
                              (0, Y.jsx)(`option`, {
                                children: `Privacy Concerns`,
                              }),
                              (0, Y.jsx)(`option`, { children: `Others` }),
                            ],
                          }),
                        ],
                      }),
                      (0, Y.jsxs)(`div`, {
                        className: `space-y-1`,
                        children: [
                          (0, Y.jsx)(`label`, {
                            className: `text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1`,
                            children: `Message`,
                          }),
                          (0, Y.jsx)(`textarea`, {
                            name: `message`,
                            value: n.message,
                            onChange: i,
                            rows: 4,
                            required: !0,
                            className: `w-full bg-slate-50 border border-slate-200 p-4 rounded-xl text-sm focus:border-blue-600 outline-none transition-all`,
                            placeholder: `How can our management team assist you?`,
                          }),
                        ],
                      }),
                      (0, Y.jsxs)(`button`, {
                        disabled: e,
                        className: `w-full py-5 bg-slate-950 text-white font-black rounded-2xl hover:bg-blue-700 transition-all flex items-center justify-center gap-3 shadow-xl group`,
                        children: [
                          e ? `TRANSMITTING...` : `SEND INQUIRY`,
                          (0, Y.jsx)(q, {
                            size: 20,
                            className: `group-hover:translate-x-1 transition-transform`,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
        (0, Y.jsx)(`section`, {
          className: `bg-slate-50 py-20 border-t border-slate-100`,
          children: (0, Y.jsxs)(`div`, {
            className: `container mx-auto px-6 text-center`,
            children: [
              (0, Y.jsx)(`img`, {
                src: `/favicon.png`,
                alt: `Company Logo`,
                className: `mx-auto text-blue-600 mb-6 w-12 h-12 sm:w-15 sm:h-15 md:w-20 md:h-20 lg:w-25 lg:h-25`,
              }),
              (0, Y.jsx)(`h2`, {
                className: `text-3xl font-black text-slate-900 tracking-tighter uppercase mb-4`,
                children: `Secure your assets today.`,
              }),
              (0, Y.jsxs)(l, {
                to: `/Signup`,
                className: `inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-slate-950 font-black rounded-xl hover:bg-slate-950 hover:text-white transition-all uppercase tracking-widest text-sm`,
                children: [`Become a Member `, (0, Y.jsx)(q, { size: 18 })],
              }),
            ],
          }),
        }),
      ],
    });
  };
function Pt() {
  let [e, t] = (0, J.useState)(``),
    [n, r] = (0, J.useState)(!1),
    [i, a] = (0, J.useState)(!1),
    [o, s] = (0, J.useState)(null);
  return (0, Y.jsxs)(`div`, {
    className: `min-h-screen w-full bg-white flex flex-col lg:flex-row overflow-hidden`,
    children: [
      (0, Y.jsxs)(`div`, {
        className: `relative hidden lg:flex lg:w-1/2 bg-slate-950 items-center justify-center p-12`,
        children: [
          (0, Y.jsxs)(`div`, {
            className: `absolute inset-0 z-0`,
            children: [
              (0, Y.jsx)(`img`, {
                src: `https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070`,
                className: `w-full h-full object-cover opacity-30 grayscale`,
                alt: `Crown Summit Bank HQ`,
              }),
              (0, Y.jsx)(`div`, {
                className: `absolute inset-0 bg-linear-to-br from-blue-900/40 via-slate-950 to-slate-950`,
              }),
            ],
          }),
          (0, Y.jsxs)(`div`, {
            className: `relative z-10 max-w-md text-center`,
            children: [
              (0, Y.jsx)(W.div, {
                initial: { opacity: 0, scale: 0.9 },
                animate: { opacity: 1, scale: 1 },
                className: `mb-8 inline-flex p-4 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl`,
                children: (0, Y.jsx)(We, {
                  className: `w-12 h-12 text-blue-400`,
                }),
              }),
              (0, Y.jsx)(`h2`, {
                className: `text-4xl font-black text-white mb-6 tracking-tighter`,
                children: `Access Recovery`,
              }),
              (0, Y.jsx)(`p`, {
                className: `text-slate-400 leading-relaxed`,
                children: `Protecting your financial legacy starts with secure access. Enter your institutional email to verify your identity.`,
              }),
            ],
          }),
        ],
      }),
      (0, Y.jsx)(`div`, {
        className: `flex-1 flex items-center justify-center p-8 md:p-16`,
        children: (0, Y.jsxs)(`div`, {
          className: `w-full max-w-md`,
          children: [
            (0, Y.jsxs)(l, {
              to: `/login`,
              className: `inline-flex items-center gap-2 text-slate-500 hover:text-slate-950 transition-colors mb-12 group`,
              children: [
                (0, Y.jsx)(ye, {
                  size: 16,
                  className: `group-hover:-translate-x-1 transition-transform`,
                }),
                (0, Y.jsx)(`span`, {
                  className: `text-xs font-bold uppercase tracking-widest`,
                  children: `Back to Login`,
                }),
              ],
            }),
            (0, Y.jsx)(V, {
              mode: `wait`,
              children: i
                ? (0, Y.jsxs)(
                    W.div,
                    {
                      initial: { opacity: 0, scale: 0.95 },
                      animate: { opacity: 1, scale: 1 },
                      className: `text-center`,
                      children: [
                        (0, Y.jsx)(`div`, {
                          className: `mb-8 inline-flex p-6 rounded-full bg-emerald-50 text-emerald-600`,
                          children: (0, Y.jsx)(I, { size: 48 }),
                        }),
                        (0, Y.jsx)(`h2`, {
                          className: `text-3xl font-black text-slate-950 mb-4 tracking-tighter`,
                          children: `Check Your Inbox`,
                        }),
                        (0, Y.jsxs)(`p`, {
                          className: `text-slate-500 mb-10 leading-relaxed font-medium`,
                          children: [
                            `We have sent a secure password reset link to `,
                            (0, Y.jsx)(`br`, {}),
                            (0, Y.jsx)(`span`, {
                              className: `text-slate-950 font-bold`,
                              children: e,
                            }),
                          ],
                        }),
                        (0, Y.jsx)(`button`, {
                          onClick: () => a(!1),
                          className: `text-xs font-black text-blue-600 uppercase tracking-widest hover:text-blue-800 transition-colors`,
                          children: `Didn't receive an email? Try again`,
                        }),
                      ],
                    },
                    `success`,
                  )
                : (0, Y.jsxs)(
                    W.div,
                    {
                      initial: { opacity: 0, y: 20 },
                      animate: { opacity: 1, y: 0 },
                      exit: { opacity: 0, y: -20 },
                      children: [
                        (0, Y.jsxs)(`div`, {
                          className: `mb-10`,
                          children: [
                            (0, Y.jsx)(`h1`, {
                              className: `text-4xl font-black text-slate-950 mb-3 tracking-tighter`,
                              children: `Forgot Password?`,
                            }),
                            (0, Y.jsx)(`p`, {
                              className: `text-slate-500 font-medium`,
                              children: `Please enter the email associated with your Crown Summit Bank account.`,
                            }),
                          ],
                        }),
                        (0, Y.jsxs)(`form`, {
                          onSubmit: async (t) => {
                            (t.preventDefault(), r(!0), s(null));
                            let { error: n } =
                              await Q.auth.resetPasswordForEmail(e, {
                                redirectTo: `${window.location.origin}/update-password`,
                              });
                            (n
                              ? s(n.message)
                              : (a(!0),
                                B.success(
                                  `Password reset email sent! Please check your inbox.`,
                                )),
                              r(!1));
                          },
                          className: `space-y-6`,
                          children: [
                            (0, Y.jsxs)(`div`, {
                              children: [
                                (0, Y.jsx)(`label`, {
                                  className: `block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3`,
                                  children: `Institutional Email Address`,
                                }),
                                (0, Y.jsxs)(`div`, {
                                  className: `relative group`,
                                  children: [
                                    (0, Y.jsx)(`div`, {
                                      className: `absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-600 transition-colors`,
                                      children: (0, Y.jsx)(H, { size: 18 }),
                                    }),
                                    (0, Y.jsx)(`input`, {
                                      required: !0,
                                      type: `email`,
                                      value: e,
                                      onChange: (e) => t(e.target.value),
                                      className: `w-full pl-12 pr-4 py-5 bg-slate-50 border border-slate-200 rounded-2xl text-slate-950 font-medium focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 focus:bg-white outline-none transition-all`,
                                      placeholder: `e.g. name@Crown Summit Bank.com`,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            o &&
                              (0, Y.jsx)(W.div, {
                                initial: { opacity: 0 },
                                animate: { opacity: 1 },
                                className: `p-4 bg-red-50 border border-red-100 rounded-xl text-red-600 text-sm font-medium`,
                                children: o,
                              }),
                            (0, Y.jsx)(`button`, {
                              disabled: n,
                              className: `w-full py-5 bg-slate-950 text-white font-black rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-slate-950/10 disabled:opacity-50 flex items-center justify-center gap-3 text-xs uppercase tracking-widest`,
                              children: n
                                ? (0, Y.jsx)(E, {
                                    className: `w-5 h-5 animate-spin`,
                                  })
                                : `Send Reset Link`,
                            }),
                          ],
                        }),
                        (0, Y.jsxs)(`div`, {
                          className: `mt-12 p-6 bg-slate-50 rounded-2xl border border-slate-100 flex items-start gap-4`,
                          children: [
                            (0, Y.jsx)(R, {
                              className: `text-blue-600 shrink-0`,
                              size: 20,
                            }),
                            (0, Y.jsxs)(`p`, {
                              className: `text-[11px] text-slate-500 leading-relaxed font-medium`,
                              children: [
                                (0, Y.jsx)(`span`, {
                                  className: `text-slate-950 font-bold`,
                                  children: `Security Note:`,
                                }),
                                ` `,
                                `If an account exists for this email, you will receive instructions shortly. For immediate assistance, contact our 24/7 Global Security Desk.`,
                              ],
                            }),
                          ],
                        }),
                      ],
                    },
                    `form`,
                  ),
            }),
          ],
        }),
      }),
    ],
  });
}
function Ft() {
  let [e, t] = (0, J.useState)(``),
    [n, r] = (0, J.useState)(``),
    [i, a] = (0, J.useState)(!1),
    [o, s] = (0, J.useState)(!1),
    [c, l] = (0, J.useState)(!1),
    [u, d] = (0, J.useState)(null),
    f = S(),
    p = [
      { label: `At least 8 characters`, met: e.length >= 8 },
      { label: `Contains a number`, met: /[0-9]/.test(e) },
      {
        label: `Special character (@$!%*?)`,
        met: /[!@#$%^&*(),.?":{}|<>]/.test(e),
      },
    ];
  return (0, Y.jsxs)(`div`, {
    className: `min-h-screen w-full bg-white flex flex-col lg:flex-row overflow-hidden`,
    children: [
      (0, Y.jsxs)(`div`, {
        className: `relative hidden lg:flex lg:w-1/2 bg-slate-950 items-center justify-center p-12`,
        children: [
          (0, Y.jsxs)(`div`, {
            className: `absolute inset-0 z-0`,
            children: [
              (0, Y.jsx)(`img`, {
                src: `https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=2000`,
                className: `w-full h-full object-cover opacity-20 grayscale`,
                alt: `Secure Vault`,
              }),
              (0, Y.jsx)(`div`, {
                className: `absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/80 to-transparent`,
              }),
            ],
          }),
          (0, Y.jsxs)(`div`, {
            className: `relative z-10 max-w-md`,
            children: [
              (0, Y.jsx)(W.div, {
                initial: { opacity: 0, scale: 0.9 },
                animate: { opacity: 1, scale: 1 },
                className: `mb-8 inline-flex p-4 rounded-3xl bg-blue-600/20 border border-blue-500/30 backdrop-blur-xl`,
                children: (0, Y.jsx)(R, {
                  className: `w-12 h-12 text-blue-400`,
                }),
              }),
              (0, Y.jsx)(`h2`, {
                className: `text-4xl font-black text-white mb-6 tracking-tighter italic`,
                children: `Secure Your Legacy.`,
              }),
              (0, Y.jsx)(`p`, {
                className: `text-slate-400 leading-relaxed font-medium`,
                children: `Your new password must be unique and robust. Crown Summit Bank utilizes military-grade encryption to ensure your credentials remain private.`,
              }),
            ],
          }),
        ],
      }),
      (0, Y.jsx)(`div`, {
        className: `flex-1 flex items-center justify-center p-8 md:p-16 bg-slate-50/30`,
        children: (0, Y.jsx)(`div`, {
          className: `w-full max-w-md`,
          children: (0, Y.jsx)(V, {
            mode: `wait`,
            children: c
              ? (0, Y.jsxs)(
                  W.div,
                  {
                    initial: { opacity: 0, scale: 0.9 },
                    animate: { opacity: 1, scale: 1 },
                    className: `text-center`,
                    children: [
                      (0, Y.jsx)(`div`, {
                        className: `mb-8 inline-flex p-6 rounded-full bg-emerald-50 text-emerald-600 shadow-inner`,
                        children: (0, Y.jsx)(I, { size: 64 }),
                      }),
                      (0, Y.jsx)(`h2`, {
                        className: `text-4xl font-black text-slate-950 mb-4 tracking-tighter`,
                        children: `Security Updated`,
                      }),
                      (0, Y.jsxs)(`p`, {
                        className: `text-slate-500 mb-10 leading-relaxed font-medium`,
                        children: [
                          `Your password has been successfully reset. `,
                          (0, Y.jsx)(`br`, {}),
                          `Redirecting you to the secure login portal...`,
                        ],
                      }),
                      (0, Y.jsx)(`div`, {
                        className: `w-12 h-1 bg-slate-100 mx-auto rounded-full overflow-hidden`,
                        children: (0, Y.jsx)(W.div, {
                          initial: { x: `-100%` },
                          animate: { x: `0%` },
                          transition: { duration: 3 },
                          className: `w-full h-full bg-emerald-500`,
                        }),
                      }),
                    ],
                  },
                  `success-message`,
                )
              : (0, Y.jsxs)(
                  W.div,
                  {
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    exit: { opacity: 0, scale: 0.95 },
                    children: [
                      (0, Y.jsxs)(`div`, {
                        className: `mb-10`,
                        children: [
                          (0, Y.jsx)(`h1`, {
                            className: `text-4xl font-black text-slate-950 mb-3 tracking-tighter`,
                            children: `Set New Password`,
                          }),
                          (0, Y.jsx)(`p`, {
                            className: `text-slate-500 font-medium`,
                            children: `Create a strong password to protect your institutional assets.`,
                          }),
                        ],
                      }),
                      (0, Y.jsxs)(`form`, {
                        onSubmit: async (t) => {
                          if ((t.preventDefault(), e !== n)) {
                            d(`Passwords do not match.`);
                            return;
                          }
                          (s(!0), d(null));
                          let { error: r } = await Q.auth.updateUser({
                            password: e,
                          });
                          r
                            ? (d(r.message), s(!1))
                            : (l(!0),
                              B.success(
                                `Password updated successfully! Redirecting to login...`,
                              ),
                              setTimeout(() => f(`/login`), 3e3));
                        },
                        className: `space-y-6`,
                        children: [
                          (0, Y.jsxs)(`div`, {
                            className: `space-y-2`,
                            children: [
                              (0, Y.jsx)(`label`, {
                                className: `block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]`,
                                children: `New Password`,
                              }),
                              (0, Y.jsxs)(`div`, {
                                className: `relative group`,
                                children: [
                                  (0, Y.jsx)(`input`, {
                                    required: !0,
                                    type: i ? `text` : `password`,
                                    value: e,
                                    onChange: (e) => t(e.target.value),
                                    className: `w-full pl-5 pr-12 py-5 bg-white border border-slate-200 rounded-2xl text-slate-950 font-medium focus:ring-4 focus:ring-blue-600/5 focus:border-blue-600 outline-none transition-all shadow-sm`,
                                    placeholder: `••••••••`,
                                  }),
                                  (0, Y.jsx)(`button`, {
                                    type: `button`,
                                    onClick: () => a(!i),
                                    className: `absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-blue-600 transition-colors`,
                                    children: i
                                      ? (0, Y.jsx)(j, { size: 20 })
                                      : (0, Y.jsx)(D, { size: 20 }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, Y.jsx)(`div`, {
                            className: `grid grid-cols-1 gap-2 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm`,
                            children: p.map((e, t) =>
                              (0, Y.jsxs)(
                                `div`,
                                {
                                  className: `flex items-center gap-2`,
                                  children: [
                                    e.met
                                      ? (0, Y.jsx)(I, {
                                          size: 14,
                                          className: `text-emerald-500`,
                                        })
                                      : (0, Y.jsx)(`div`, {
                                          className: `w-3.5 h-3.5 rounded-full border-2 border-slate-200`,
                                        }),
                                    (0, Y.jsx)(`span`, {
                                      className: `text-[11px] font-bold uppercase tracking-tight ${e.met ? `text-slate-950` : `text-slate-400`}`,
                                      children: e.label,
                                    }),
                                  ],
                                },
                                t,
                              ),
                            ),
                          }),
                          (0, Y.jsxs)(`div`, {
                            className: `space-y-2`,
                            children: [
                              (0, Y.jsx)(`label`, {
                                className: `block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]`,
                                children: `Confirm Password`,
                              }),
                              (0, Y.jsx)(`input`, {
                                required: !0,
                                type: `password`,
                                value: n,
                                onChange: (e) => r(e.target.value),
                                className: `w-full px-5 py-5 bg-white border border-slate-200 rounded-2xl text-slate-950 font-medium focus:ring-4 focus:ring-blue-600/5 focus:border-blue-600 outline-none transition-all shadow-sm`,
                                placeholder: `••••••••`,
                              }),
                            ],
                          }),
                          u &&
                            (0, Y.jsxs)(`div`, {
                              className: `p-4 bg-red-50 border border-red-100 rounded-xl text-red-600 text-xs font-bold flex items-center gap-2`,
                              children: [(0, Y.jsx)(fe, { size: 16 }), ` `, u],
                            }),
                          (0, Y.jsx)(`button`, {
                            disabled: o || p.some((e) => !e.met),
                            className: `w-full py-5 bg-slate-950 text-white font-black rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-slate-950/10 disabled:opacity-30 flex items-center justify-center gap-3 text-xs uppercase tracking-widest active:scale-[0.98]`,
                            children: o
                              ? (0, Y.jsx)(E, {
                                  className: `w-5 h-5 animate-spin`,
                                })
                              : `Update Credentials`,
                          }),
                        ],
                      }),
                    ],
                  },
                  `update-form`,
                ),
          }),
        }),
      }),
    ],
  });
}
var It = [
  {
    title: `Portfolio Optimization`,
    desc: `Bespoke asset allocation using institutional-grade quantitative models and global market insights.`,
    icon: (0, Y.jsx)(je, { className: `w-6 h-6` }),
    stats: `Top 1% Alpha Generation`,
  },
  {
    title: `Legacy & Trust Planning`,
    desc: `Sophisticated estate structures and multi-generational wealth transfer strategies across 140+ jurisdictions.`,
    icon: (0, Y.jsx)(M, { className: `w-6 h-6` }),
    stats: `Tax-Efficient Structuring`,
  },
  {
    title: `Global Alternative Assets`,
    desc: `Exclusive access to private equity, venture capital, and rare commodity markets globally.`,
    icon: (0, Y.jsx)(ce, { className: `w-6 h-6` }),
    stats: `Private Market Access`,
  },
];
function Lt() {
  return (0, Y.jsxs)(`div`, {
    className: `min-h-screen bg-white`,
    children: [
      (0, Y.jsxs)(`section`, {
        className: `relative h-[70vh] flex items-center overflow-hidden bg-slate-950`,
        children: [
          (0, Y.jsxs)(`div`, {
            className: `absolute inset-0 z-0`,
            children: [
              (0, Y.jsx)(`img`, {
                src: `https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2070`,
                className: `w-full h-full object-cover opacity-40 grayscale`,
                alt: `Doksanlar Wealth Management`,
              }),
              (0, Y.jsx)(`div`, {
                className: `absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/80 to-transparent`,
              }),
            ],
          }),
          (0, Y.jsx)(`div`, {
            className: `relative z-10 max-w-7xl mx-auto px-6 w-full`,
            children: (0, Y.jsxs)(W.div, {
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.8 },
              className: `max-w-3xl`,
              children: [
                (0, Y.jsxs)(`div`, {
                  className: `inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-500/20 backdrop-blur-xl mb-8`,
                  children: [
                    (0, Y.jsx)(R, { className: `w-4 h-4 text-blue-400` }),
                    (0, Y.jsx)(`span`, {
                      className: `text-[10px] font-black text-blue-200 uppercase tracking-[0.4em]`,
                      children: `Fiduciary Excellence`,
                    }),
                  ],
                }),
                (0, Y.jsxs)(`h1`, {
                  className: `text-6xl md:text-9xl font-black text-white leading-[0.9] mb-8 tracking-tighter italic`,
                  children: [
                    `Wealth `,
                    (0, Y.jsx)(`br`, {}),
                    (0, Y.jsx)(`span`, {
                      className: `text-blue-500 not-italic font-light tracking-normal`,
                      children: `Redefined.`,
                    }),
                  ],
                }),
                (0, Y.jsx)(`p`, {
                  className: `text-xl text-slate-400 max-w-xl leading-relaxed font-medium`,
                  children: `We provide the sophisticated financial engineering required to protect, grow, and transition institutional-scale capital.`,
                }),
              ],
            }),
          }),
        ],
      }),
      (0, Y.jsx)(`section`, {
        className: `py-32 px-6 max-w-7xl mx-auto`,
        children: (0, Y.jsx)(`div`, {
          className: `grid grid-cols-1 lg:grid-cols-3 gap-8`,
          children: It.map((e, t) =>
            (0, Y.jsxs)(
              W.div,
              {
                whileHover: { y: -10 },
                className: `group p-10 bg-slate-50 rounded-[3rem] border border-slate-100 transition-all hover:bg-white hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)]`,
                children: [
                  (0, Y.jsx)(`div`, {
                    className: `w-14 h-14 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-blue-600 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors`,
                    children: e.icon,
                  }),
                  (0, Y.jsx)(`h3`, {
                    className: `text-2xl font-black text-slate-950 mb-4 tracking-tight`,
                    children: e.title,
                  }),
                  (0, Y.jsx)(`p`, {
                    className: `text-slate-500 font-medium leading-relaxed mb-8`,
                    children: e.desc,
                  }),
                  (0, Y.jsxs)(`div`, {
                    className: `pt-6 border-t border-slate-200 flex items-center justify-between`,
                    children: [
                      (0, Y.jsx)(`span`, {
                        className: `text-[10px] font-black text-blue-600 uppercase tracking-widest`,
                        children: e.stats,
                      }),
                      (0, Y.jsx)(q, {
                        className: `w-5 h-5 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all`,
                      }),
                    ],
                  }),
                ],
              },
              t,
            ),
          ),
        }),
      }),
      (0, Y.jsx)(`section`, {
        className: `pb-32 px-6`,
        children: (0, Y.jsxs)(`div`, {
          className: `max-w-7xl mx-auto relative rounded-[4rem] overflow-hidden bg-slate-950 p-16 md:p-32 text-center`,
          children: [
            (0, Y.jsx)(`div`, {
              className: `absolute inset-0 opacity-20`,
              children: (0, Y.jsx)(`img`, {
                src: `https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070`,
                className: `w-full h-full object-cover`,
                alt: `Advisor`,
              }),
            }),
            (0, Y.jsxs)(`div`, {
              className: `relative z-10`,
              children: [
                (0, Y.jsxs)(`h2`, {
                  className: `text-4xl md:text-6xl font-black text-white mb-10 tracking-tighter`,
                  children: [
                    `Consult with a `,
                    (0, Y.jsx)(`br`, {}),
                    ` Principal Advisor.`,
                  ],
                }),
                (0, Y.jsxs)(`div`, {
                  className: `flex flex-col md:flex-row items-center justify-center gap-6`,
                  children: [
                    (0, Y.jsx)(l, {
                      to: `/contact`,
                      className: `px-12 py-6 bg-white text-slate-950 font-black rounded-2xl hover:bg-blue-600 hover:text-white transition-all text-xs uppercase tracking-widest`,
                      children: `Request Private Meeting`,
                    }),
                    (0, Y.jsx)(l, {
                      to: `/login`,
                      className: `px-12 py-6 border border-white/20 text-white font-bold rounded-2xl hover:bg-white/10 transition-all text-xs uppercase tracking-widest`,
                      children: `View Digital Portal`,
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
var Rt = [
  {
    title: `High-Value Asset Protection`,
    desc: `Bespoke coverage for private collections, high-end real estate, and luxury equity. Engineered for the 1%.`,
    icon: (0, Y.jsx)(R, { className: `w-6 h-6` }),
    tag: `Global Coverage`,
  },
  {
    title: `Corporate Liability Shield`,
    desc: `Comprehensive D&O and professional indemnity structures to protect institutional leadership and operations.`,
    icon: (0, Y.jsx)(Re, { className: `w-6 h-6` }),
    tag: `Institutional Grade`,
  },
  {
    title: `Family Legacy Continuity`,
    desc: `Sophisticated life and health structures designed to ensure seamless wealth transfer and medical sovereignty.`,
    icon: (0, Y.jsx)(L, { className: `w-6 h-6` }),
    tag: `Multi-Generational`,
  },
  {
    title: `Maritime & Aviation Security`,
    desc: `Specialized risk management for private fleets and international transit logistics in all jurisdictions.`,
    icon: (0, Y.jsx)(Be, { className: `w-6 h-6` }),
    tag: `Transit Security`,
  },
];
function zt() {
  return (0, Y.jsxs)(`div`, {
    className: `min-h-screen bg-white`,
    children: [
      (0, Y.jsxs)(`section`, {
        className: `relative min-h-[85vh] w-full flex items-center overflow-hidden bg-slate-950`,
        children: [
          (0, Y.jsxs)(`div`, {
            className: `absolute inset-0 z-0`,
            children: [
              (0, Y.jsx)(`img`, {
                src: `https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000`,
                className: `w-full h-full object-cover grayscale-[0.3] contrast-[1.1]`,
                alt: `Doksanlar Institutional Infrastructure`,
              }),
              (0, Y.jsx)(`div`, {
                className: `absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/90 to-blue-900/20`,
              }),
              (0, Y.jsx)(`div`, {
                className: `absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent`,
              }),
            ],
          }),
          (0, Y.jsxs)(`div`, {
            className: `relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center`,
            children: [
              (0, Y.jsxs)(W.div, {
                initial: { opacity: 0, x: -50 },
                animate: { opacity: 1, x: 0 },
                transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
                children: [
                  (0, Y.jsxs)(`div`, {
                    className: `inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-blue-600/10 border border-blue-500/20 backdrop-blur-md mb-8`,
                    children: [
                      (0, Y.jsx)(P, { className: `w-4 h-4 text-blue-400` }),
                      (0, Y.jsx)(`span`, {
                        className: `text-[10px] font-black text-blue-300 uppercase tracking-[0.4em]`,
                        children: `Risk Mitigation Division`,
                      }),
                    ],
                  }),
                  (0, Y.jsxs)(`h1`, {
                    className: `text-6xl md:text-9xl font-black text-white leading-[0.9] mb-10 tracking-tighter italic`,
                    children: [
                      `Insuring `,
                      (0, Y.jsx)(`br`, {}),
                      (0, Y.jsx)(`span`, {
                        className: `text-blue-500 not-italic font-light`,
                        children: `Global Assets.`,
                      }),
                    ],
                  }),
                  (0, Y.jsx)(`p`, {
                    className: `text-xl text-slate-400 max-w-lg mb-12 leading-relaxed font-medium`,
                    children: `From maritime logistics to corporate liability, we provide the underwriting precision required by the world's most significant institutions.`,
                  }),
                  (0, Y.jsx)(`div`, {
                    className: `flex flex-wrap gap-6`,
                    children: (0, Y.jsxs)(l, {
                      to: `/contact`,
                      className: `group px-12 py-6 bg-blue-700 text-white font-black rounded-2xl hover:bg-white hover:text-blue-950 transition-all duration-500 shadow-2xl shadow-blue-900/40 flex items-center gap-3 text-xs uppercase tracking-widest`,
                      children: [
                        `Consult an Underwriter`,
                        (0, Y.jsx)(q, {
                          size: 16,
                          className: `group-hover:translate-x-1 transition-transform`,
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, Y.jsx)(W.div, {
                initial: { opacity: 0, scale: 0.9, y: 20 },
                animate: { opacity: 1, scale: 1, y: 0 },
                transition: { duration: 1, delay: 0.2 },
                className: `relative hidden lg:block`,
                children: (0, Y.jsxs)(`div`, {
                  className: `relative rounded-[3rem] overflow-hidden border-12 border-white/5 shadow-2xl aspect-square max-w-md ml-auto`,
                  children: [
                    (0, Y.jsx)(`img`, {
                      src: `https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1200`,
                      className: `w-full h-full object-cover grayscale-[0.2]`,
                      alt: `Crown Summit Bank Expert Advisor`,
                    }),
                    (0, Y.jsx)(`div`, {
                      className: `absolute inset-0 bg-linear-to-t from-blue-900/60 via-transparent to-transparent`,
                    }),
                    (0, Y.jsxs)(`div`, {
                      className: `absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20`,
                      children: [
                        (0, Y.jsxs)(`div`, {
                          className: `flex items-center gap-3 mb-2`,
                          children: [
                            (0, Y.jsx)(R, {
                              className: `text-blue-400`,
                              size: 20,
                            }),
                            (0, Y.jsx)(`span`, {
                              className: `text-white font-black text-xs uppercase tracking-widest`,
                              children: `Verified Fiduciary`,
                            }),
                          ],
                        }),
                        (0, Y.jsx)(`p`, {
                          className: `text-[10px] text-slate-300 font-medium leading-relaxed`,
                          children: `All Crown Summit Bank policies are backed by Tier-1 reinsurance capital and Basel III compliance.`,
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
      (0, Y.jsxs)(`section`, {
        className: `py-32 px-6 max-w-7xl mx-auto`,
        children: [
          (0, Y.jsxs)(`div`, {
            className: `mb-20`,
            children: [
              (0, Y.jsxs)(`h2`, {
                className: `text-4xl font-black text-slate-950 tracking-tighter uppercase italic`,
                children: [
                  `Institutional`,
                  ` `,
                  (0, Y.jsx)(`span`, {
                    className: `text-blue-600 not-italic`,
                    children: `Underwriting Units`,
                  }),
                ],
              }),
              (0, Y.jsx)(`div`, {
                className: `h-1.5 w-24 bg-blue-600 mt-4 rounded-full`,
              }),
            ],
          }),
          (0, Y.jsx)(`div`, {
            className: `grid grid-cols-1 md:grid-cols-2 gap-8`,
            children: Rt.map((e, t) =>
              (0, Y.jsxs)(
                W.div,
                {
                  whileHover: { y: -5 },
                  className: `flex flex-col md:flex-row gap-8 p-10 bg-slate-50 rounded-[3rem] border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 group`,
                  children: [
                    (0, Y.jsx)(`div`, {
                      className: `w-16 h-16 shrink-0 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500`,
                      children: e.icon,
                    }),
                    (0, Y.jsxs)(`div`, {
                      className: `flex flex-col justify-between py-1`,
                      children: [
                        (0, Y.jsxs)(`div`, {
                          children: [
                            (0, Y.jsxs)(`div`, {
                              className: `flex items-center gap-3 mb-4`,
                              children: [
                                (0, Y.jsx)(`h3`, {
                                  className: `text-2xl font-black text-slate-950 tracking-tight`,
                                  children: e.title,
                                }),
                                (0, Y.jsx)(`span`, {
                                  className: `px-3 py-1 bg-slate-200 text-[9px] font-black text-slate-500 rounded-full uppercase tracking-widest`,
                                  children: e.tag,
                                }),
                              ],
                            }),
                            (0, Y.jsx)(`p`, {
                              className: `text-slate-500 font-medium leading-relaxed mb-8`,
                              children: e.desc,
                            }),
                          ],
                        }),
                        (0, Y.jsxs)(l, {
                          to: `/contact`,
                          className: `inline-flex items-center gap-2 text-xs font-black text-blue-600 uppercase tracking-widest group-hover:gap-4 transition-all`,
                          children: [
                            `Underwrite Asset `,
                            (0, Y.jsx)(G, { size: 14 }),
                          ],
                        }),
                      ],
                    }),
                  ],
                },
                t,
              ),
            ),
          }),
        ],
      }),
      (0, Y.jsxs)(`section`, {
        className: `bg-slate-950 py-32 px-6 overflow-hidden relative`,
        children: [
          (0, Y.jsx)(`div`, {
            className: `absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]`,
          }),
          (0, Y.jsxs)(`div`, {
            className: `max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-20 items-center relative z-10`,
            children: [
              (0, Y.jsxs)(`div`, {
                className: `lg:col-span-1`,
                children: [
                  (0, Y.jsx)(He, { size: 56, className: `text-blue-500 mb-8` }),
                  (0, Y.jsxs)(`h2`, {
                    className: `text-5xl font-black text-white tracking-tighter mb-6 italic`,
                    children: [
                      `The Crown Summit Bank `,
                      (0, Y.jsx)(`br`, {}),
                      ` Guarantee.`,
                    ],
                  }),
                  (0, Y.jsx)(`p`, {
                    className: `text-slate-400 font-medium text-lg leading-relaxed`,
                    children: `When crisis strikes, our Rapid Response claims desk activates within 60 minutes, providing immediate liquidity to stabilize global operations.`,
                  }),
                ],
              }),
              (0, Y.jsxs)(`div`, {
                className: `lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6`,
                children: [
                  (0, Y.jsxs)(`div`, {
                    className: `p-10 bg-white/5 border border-white/10 rounded-[2.5rem] backdrop-blur-md`,
                    children: [
                      (0, Y.jsx)(`p`, {
                        className: `text-4xl font-black text-white mb-2`,
                        children: `$4.2B+`,
                      }),
                      (0, Y.jsx)(`p`, {
                        className: `text-[10px] font-bold text-blue-400 uppercase tracking-[0.3em]`,
                        children: `Capital Reserved`,
                      }),
                    ],
                  }),
                  (0, Y.jsxs)(`div`, {
                    className: `p-10 bg-white/5 border border-white/10 rounded-[2.5rem] backdrop-blur-md`,
                    children: [
                      (0, Y.jsx)(`p`, {
                        className: `text-4xl font-black text-white mb-2`,
                        children: `99.8%`,
                      }),
                      (0, Y.jsx)(`p`, {
                        className: `text-[10px] font-bold text-blue-400 uppercase tracking-[0.3em]`,
                        children: `Claims Fulfillment`,
                      }),
                    ],
                  }),
                  (0, Y.jsxs)(`div`, {
                    className: `p-10 bg-blue-600 rounded-[2.5rem] shadow-xl shadow-blue-900/20`,
                    children: [
                      (0, Y.jsx)(`p`, {
                        className: `text-4xl font-black text-white mb-2`,
                        children: `24/7`,
                      }),
                      (0, Y.jsx)(`p`, {
                        className: `text-[10px] font-bold text-white/70 uppercase tracking-[0.3em]`,
                        children: `Active Monitoring`,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      (0, Y.jsx)(`div`, { children: (0, Y.jsx)(Z, {}) }),
    ],
  });
}
var Bt = () => {
  let [e, t] = (0, J.useState)({ username: ``, password: `` }),
    [n, r] = (0, J.useState)(!1),
    [i, a] = (0, J.useState)(!1),
    o = S(),
    s = { username: `admin_root`, password: `castro123` };
  return (0, Y.jsx)(`div`, {
    className: `min-h-screen bg-slate-900 flex items-center justify-center p-4 font-sans`,
    children: (0, Y.jsxs)(`div`, {
      className: `w-full max-w-md`,
      children: [
        (0, Y.jsxs)(`div`, {
          className: `text-center mb-8`,
          children: [
            (0, Y.jsx)(`div`, {
              className: `inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600/10 mb-4`,
              children: (0, Y.jsx)(R, { className: `w-10 h-10 text-blue-500` }),
            }),
            (0, Y.jsx)(`h1`, {
              className: `text-2xl font-extrabold text-white tracking-tight`,
              children: `Admin Portal`,
            }),
            (0, Y.jsx)(`p`, {
              className: `text-slate-400 text-sm mt-1`,
              children: `Crown Summit Bank Internal System`,
            }),
          ],
        }),
        (0, Y.jsx)(`div`, {
          className: `bg-slate-800 border border-slate-700 rounded-2xl shadow-2xl p-6 sm:p-8`,
          children: (0, Y.jsxs)(`form`, {
            onSubmit: (t) => {
              (t.preventDefault(),
                a(!0),
                setTimeout(() => {
                  e.username === s.username && e.password === s.password
                    ? (B.success(`Access Granted`, {
                        description: `Welcome back, Admin. Redirecting...`,
                      }),
                      setTimeout(() => {
                        o(`/admin`);
                      }, 1500))
                    : (a(!1),
                      B.error(`Authentication Failed`, {
                        description: `Invalid credentials. Access attempt logged.`,
                      }));
                }, 800));
            },
            className: `space-y-5`,
            children: [
              (0, Y.jsxs)(`div`, {
                children: [
                  (0, Y.jsx)(`label`, {
                    className: `block text-sm font-medium text-slate-300 mb-1.5 ml-1`,
                    children: `Username`,
                  }),
                  (0, Y.jsxs)(`div`, {
                    className: `relative group`,
                    children: [
                      (0, Y.jsx)(`div`, {
                        className: `absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none`,
                        children: (0, Y.jsx)(K, {
                          className: `h-5 w-5 text-slate-500 group-focus-within:text-blue-500 transition-colors`,
                        }),
                      }),
                      (0, Y.jsx)(`input`, {
                        type: `text`,
                        required: !0,
                        autoComplete: `username`,
                        className: `block w-full pl-11 pr-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-slate-200 focus:ring-2 focus:ring-blue-500/50 outline-none transition-all placeholder:text-slate-600`,
                        placeholder: `Enter admin username`,
                        value: e.username,
                        onChange: (n) => t({ ...e, username: n.target.value }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, Y.jsxs)(`div`, {
                children: [
                  (0, Y.jsx)(`label`, {
                    className: `block text-sm font-medium text-slate-300 mb-1.5 ml-1`,
                    children: `Password`,
                  }),
                  (0, Y.jsxs)(`div`, {
                    className: `relative group`,
                    children: [
                      (0, Y.jsx)(`div`, {
                        className: `absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none`,
                        children: (0, Y.jsx)(P, {
                          className: `h-5 w-5 text-slate-500 group-focus-within:text-blue-500 transition-colors`,
                        }),
                      }),
                      (0, Y.jsx)(`input`, {
                        type: n ? `text` : `password`,
                        required: !0,
                        autoComplete: `current-password`,
                        className: `block w-full pl-11 pr-12 py-3 bg-slate-900 border border-slate-700 rounded-xl text-slate-200 focus:ring-2 focus:ring-blue-500/50 outline-none transition-all placeholder:text-slate-600`,
                        placeholder: `••••••••`,
                        value: e.password,
                        onChange: (n) => t({ ...e, password: n.target.value }),
                      }),
                      (0, Y.jsx)(`button`, {
                        type: `button`,
                        onClick: () => r(!n),
                        className: `absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-500 hover:text-slate-300 transition-colors`,
                        children: n
                          ? (0, Y.jsx)(j, { size: 18 })
                          : (0, Y.jsx)(D, { size: 18 }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, Y.jsx)(`button`, {
                type: `submit`,
                disabled: i,
                className: `w-full py-3.5 px-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-lg shadow-blue-900/20 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed`,
                children: i ? `Verifying...` : `Sign In`,
              }),
            ],
          }),
        }),
        (0, Y.jsx)(`p`, {
          className: `mt-8 text-center text-xs text-slate-500 uppercase tracking-widest`,
          children: `Authorized Personnel Only`,
        }),
      ],
    }),
  });
};
function Vt() {
  let e = [
    {
      id: `collection`,
      title: `1. Information We Collect`,
      icon: (0, Y.jsx)(D, { className: `text-blue-600`, size: 22 }),
      content: `We collect information that quantifies your institutional interaction with our services. This includes personal identifiers (name, corporate structure, fiscal residency), financial background benchmarks, cryptographic public keys, and real-time network telemetry required to maintain Tier-1 security compliance.`,
    },
    {
      id: `utilization`,
      title: `2. How We Utilize Data`,
      icon: (0, Y.jsx)(Ue, { className: `text-blue-600`, size: 22 }),
      content: `Your data orchestrates secure global asset management. We map infrastructure behaviors to optimize multi-currency liquidity pathways, mitigate cross-border asset threats, execute requested bespoke wealth protocols, and completely satisfy strict institutional regulatory frameworks across all 140+ operating jurisdictions.`,
    },
    {
      id: `protection`,
      title: `3. Cryptographic Asset & Data Protection`,
      icon: (0, Y.jsx)(P, { className: `text-blue-600`, size: 22 }),
      content: `Data persistence utilizes zero-knowledge architectures wherever feasible. Rest data undergoes mandatory AES-256-GCM encryption, while network transit pipelines are bound to customized TLS 1.3 cryptographic tunnels. Operational logs undergo immutable auditing to prevent compromised tracking loops.`,
    },
  ];
  return (0, Y.jsxs)(`main`, {
    className: `w-full bg-white font-sans selection:bg-blue-600 selection:text-white`,
    children: [
      (0, Y.jsx)(`section`, {
        className: `pt-40 pb-20 bg-slate-50 border-b border-slate-100`,
        children: (0, Y.jsxs)(`div`, {
          className: `max-w-4xl mx-auto px-6`,
          children: [
            (0, Y.jsxs)(W.div, {
              initial: { opacity: 0, y: 15 },
              animate: { opacity: 1, y: 0 },
              className: `flex items-center gap-4 mb-6`,
              children: [
                (0, Y.jsx)(`span`, {
                  className: `h-0.5 w-8 bg-blue-600 rounded-full`,
                }),
                (0, Y.jsx)(`span`, {
                  className: `text-[11px] font-black uppercase tracking-[0.3em] text-blue-600`,
                  children: `Institutional Safeguards`,
                }),
              ],
            }),
            (0, Y.jsxs)(W.h1, {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.1 },
              className: `text-4xl md:text-7xl font-black tracking-tight text-slate-900 leading-[1.05] mb-8`,
              children: [
                `Privacy & Asset `,
                (0, Y.jsx)(`br`, {}),
                (0, Y.jsx)(`span`, {
                  className: `text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600 italic font-light`,
                  children: `Data Policy.`,
                }),
              ],
            }),
            (0, Y.jsxs)(`p`, {
              className: `text-slate-500 font-medium text-sm tracking-wider uppercase`,
              children: [`Last Reviewed/Updated: `, `June 16, 2026`],
            }),
          ],
        }),
      }),
      (0, Y.jsx)(`section`, {
        className: `py-24`,
        children: (0, Y.jsxs)(`div`, {
          className: `max-w-4xl mx-auto px-6`,
          children: [
            (0, Y.jsxs)(`div`, {
              className: `prose prose-slate max-w-none space-y-16`,
              children: [
                (0, Y.jsx)(`p`, {
                  className: `text-xl text-slate-600 leading-relaxed font-light`,
                  children: `At Crown Summit Bank, physical wealth protection and digital data integrity are treated as a unified operational layer. This policy defines how our global data architecture aggregates, shields, and audits structural information.`,
                }),
                (0, Y.jsx)(`hr`, { className: `border-slate-100` }),
                e.map((e, t) =>
                  (0, Y.jsxs)(
                    W.div,
                    {
                      initial: { opacity: 0, y: 30 },
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: !0 },
                      transition: { delay: t * 0.05 },
                      className: `group`,
                      children: [
                        (0, Y.jsxs)(`div`, {
                          className: `flex items-center gap-4 mb-6`,
                          children: [
                            (0, Y.jsx)(`div`, {
                              className: `w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300`,
                              children: e.icon,
                            }),
                            (0, Y.jsx)(`h3`, {
                              className: `text-2xl font-black text-slate-900 tracking-tight m-0`,
                              children: e.title,
                            }),
                          ],
                        }),
                        (0, Y.jsx)(`p`, {
                          className: `text-slate-600 leading-relaxed text-[16px] pl-16`,
                          children: e.content,
                        }),
                      ],
                    },
                    e.id,
                  ),
                ),
              ],
            }),
            (0, Y.jsxs)(`div`, {
              className: `mt-24 p-12 bg-slate-950 rounded-[2.5rem] relative overflow-hidden text-white shadow-xl`,
              children: [
                (0, Y.jsxs)(`div`, {
                  className: `relative z-10`,
                  children: [
                    (0, Y.jsx)(`h4`, {
                      className: `text-xl font-bold mb-3`,
                      children: `Regulatory Clarifications`,
                    }),
                    (0, Y.jsx)(`p`, {
                      className: `text-slate-400 text-sm leading-relaxed max-w-2xl`,
                      children: `Questions surrounding cross-border asset telemetry, compliance frameworks, or explicit data erasure mechanisms within local nodes can be directed straight to our International Advisory Board.`,
                    }),
                  ],
                }),
                (0, Y.jsx)(`div`, {
                  className: `absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-20 pointer-events-none`,
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function Ht() {
  let e = [
    {
      title: `Account Establishment & Verification`,
      icon: (0, Y.jsx)(Oe, { size: 20 }),
      desc: `Private institutional accounts require absolute validation of cross-border identities under regulatory Tier-1 capital compliance checks. Crown Summit Bank reserves the autonomous right to reject architecture provisioning to unverified or multi-jurisdictional anonymous entities.`,
    },
    {
      title: `Liquidity Protocols & Execution`,
      icon: (0, Y.jsx)(O, { size: 20 }),
      desc: `High-velocity financial pipelines and multi-currency exchange platforms operate under fixed algorithmic latency baselines. Users recognize that market volatility can structurally impact trade velocities across localized clearings.`,
    },
    {
      title: `Institutional Asset Boundaries`,
      icon: (0, Y.jsx)(ve, { size: 20 }),
      desc: `All financial advisory, bespoke custody configurations, and structural asset systems are bounded strictly by international treaty laws. Any exploit of digital workflows triggers instant containment protocols and jurisdictional reporting.`,
    },
  ];
  return (0, Y.jsxs)(`main`, {
    className: `w-full bg-white font-sans selection:bg-blue-600 selection:text-white`,
    children: [
      (0, Y.jsxs)(`section`, {
        className: `pt-40 pb-20 relative overflow-hidden bg-slate-950 text-white min-h-[50vh] flex items-center`,
        children: [
          (0, Y.jsxs)(`div`, {
            className: `absolute inset-0 z-0`,
            children: [
              (0, Y.jsx)(`img`, {
                src: `https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071`,
                className: `w-full h-full object-cover object-center grayscale-[0.2] contrast-[1.15] scale-105`,
                alt: `Crown Summit Bank Global Clearing Node`,
              }),
              (0, Y.jsx)(`div`, {
                className: `absolute inset-0 bg-linear-to-b from-slate-950 via-slate-950/85 to-slate-950`,
              }),
              (0, Y.jsx)(`div`, {
                className: `absolute inset-0 bg-radial-at-tr from-blue-600/15 via-transparent to-transparent`,
              }),
            ],
          }),
          (0, Y.jsxs)(`div`, {
            className: `max-w-4xl mx-auto px-6 relative z-10 w-full`,
            children: [
              (0, Y.jsxs)(W.div, {
                initial: { opacity: 0, y: 10 },
                animate: { opacity: 1, y: 0 },
                className: `flex items-center gap-4 mb-6`,
                children: [
                  (0, Y.jsx)(`span`, {
                    className: `h-0.5 w-8 bg-blue-400 rounded-full`,
                  }),
                  (0, Y.jsx)(`span`, {
                    className: `text-[11px] font-black uppercase tracking-[0.3em] text-blue-400`,
                    children: `Governance Standard`,
                  }),
                ],
              }),
              (0, Y.jsxs)(W.h1, {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.1 },
                className: `text-4xl md:text-7xl font-black tracking-tight leading-[1.05] mb-8`,
                children: [
                  `Terms of `,
                  (0, Y.jsx)(`br`, {}),
                  (0, Y.jsx)(`span`, {
                    className: `text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-indigo-200 to-white font-light italic`,
                    children: `Global Service.`,
                  }),
                ],
              }),
              (0, Y.jsx)(`p`, {
                className: `text-slate-400 font-medium text-sm tracking-wider uppercase`,
                children: `Effective Version: FY2026.1`,
              }),
            ],
          }),
          (0, Y.jsx)(`div`, {
            className: `absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-white to-transparent pointer-events-none opacity-5`,
          }),
        ],
      }),
      (0, Y.jsx)(`section`, {
        className: `py-24 bg-white`,
        children: (0, Y.jsxs)(`div`, {
          className: `max-w-4xl mx-auto px-6`,
          children: [
            (0, Y.jsx)(`p`, {
              className: `text-xl text-slate-600 leading-relaxed mb-16 font-light`,
              children: `By initializing our systems or interacting with Crown Summit Bank nodes, you accept structural compliance protocols governing institutional actions, asset management boundaries, and security measures.`,
            }),
            (0, Y.jsx)(`div`, {
              className: `space-y-12`,
              children: e.map((e, t) =>
                (0, Y.jsxs)(
                  W.div,
                  {
                    initial: { opacity: 0, x: -20 },
                    whileInView: { opacity: 1, x: 0 },
                    viewport: { once: !0 },
                    transition: { delay: t * 0.1 },
                    className: `p-10 bg-slate-50 border border-slate-100 rounded-4xl hover:bg-slate-50/50 hover:shadow-xl hover:shadow-blue-900/5 transition-all flex flex-col md:flex-row gap-6 items-start`,
                    children: [
                      (0, Y.jsx)(`div`, {
                        className: `w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-200`,
                        children: e.icon,
                      }),
                      (0, Y.jsxs)(`div`, {
                        children: [
                          (0, Y.jsx)(`h4`, {
                            className: `text-2xl font-bold mb-3 text-slate-900 tracking-tight`,
                            children: e.title,
                          }),
                          (0, Y.jsx)(`p`, {
                            className: `text-slate-500 leading-relaxed text-[15px]`,
                            children: e.desc,
                          }),
                        ],
                      }),
                    ],
                  },
                  t,
                ),
              ),
            }),
            (0, Y.jsx)(`div`, {
              className: `mt-20 border-t border-slate-100 pt-10 text-center`,
              children: (0, Y.jsx)(`p`, {
                className: `text-slate-400 text-xs tracking-wide uppercase`,
                children: `Litigation and arbitrary dispute processes follow strict guidelines outlined inside international maritime & sovereign banking codes.`,
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
function Ut() {
  let [e, t] = (0, J.useState)({
      essential: !0,
      analytics: !1,
      functional: !1,
    }),
    [n, r] = (0, J.useState)(!1),
    [i, a] = (0, J.useState)(null);
  (0, J.useEffect)(() => {
    let e = localStorage.getItem(`doksanlarb_telemetry_prefs`);
    if (e)
      try {
        let n = JSON.parse(e);
        t({
          essential: !0,
          analytics: !!n.analytics,
          functional: !!n.functional,
        });
      } catch {
        console.error(`Failed to decode tracking architecture tokens.`);
      }
  }, []);
  let o = (e) => {
      (r(!1),
        t((t) => ({ ...t, [e]: !t[e] })),
        u(`Staged change for ${e.toUpperCase()} layer.`));
    },
    s = (n = e) => {
      (localStorage.setItem(`doksanlarb_telemetry_prefs`, JSON.stringify(n)),
        t(n),
        r(!0),
        u(`Institutional telemetry preferences securely synced.`));
    },
    c = () => {
      s({ essential: !0, analytics: !0, functional: !0 });
    },
    l = () => {
      (r(!1), s({ essential: !0, analytics: !1, functional: !1 }));
    },
    u = (e) => {
      (a(e),
        setTimeout(() => {
          a((t) => (t === e ? null : t));
        }, 4e3));
    };
  return (0, Y.jsxs)(`main`, {
    className: `w-full bg-white font-sans selection:bg-blue-600 selection:text-white relative`,
    children: [
      (0, Y.jsx)(`div`, {
        className: `fixed bottom-8 left-8 z-50 pointer-events-none max-w-sm`,
        children: (0, Y.jsx)(V, {
          children:
            i &&
            (0, Y.jsxs)(W.div, {
              initial: { opacity: 0, y: 20, scale: 0.95 },
              animate: { opacity: 1, y: 0, scale: 1 },
              exit: { opacity: 0, y: -10, scale: 0.95 },
              className: `p-4 bg-slate-900 border border-white/10 shadow-2xl rounded-2xl flex items-center gap-3 pointer-events-auto`,
              children: [
                (0, Y.jsx)(R, {
                  className: `text-blue-400 shrink-0`,
                  size: 18,
                }),
                (0, Y.jsx)(`p`, {
                  className: `text-white text-xs font-medium tracking-wide`,
                  children: i,
                }),
              ],
            }),
        }),
      }),
      (0, Y.jsxs)(`section`, {
        className: `pt-40 pb-24 relative overflow-hidden bg-slate-950 text-white min-h-[45vh] flex items-center`,
        children: [
          (0, Y.jsxs)(`div`, {
            className: `absolute inset-0 z-0`,
            children: [
              (0, Y.jsx)(`img`, {
                src: `https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070`,
                className: `w-full h-full object-cover object-center grayscale-[0.3] contrast-[1.1] scale-102`,
                alt: `Crown Summit Bank Telemetry Center`,
              }),
              (0, Y.jsx)(`div`, {
                className: `absolute inset-0 bg-linear-to-b from-slate-950 via-slate-950/85 to-white`,
              }),
              (0, Y.jsx)(`div`, {
                className: `absolute inset-0 bg-radial-at-tr from-blue-600/20 via-transparent to-transparent`,
              }),
            ],
          }),
          (0, Y.jsxs)(`div`, {
            className: `max-w-4xl mx-auto px-6 relative z-10 w-full`,
            children: [
              (0, Y.jsxs)(W.div, {
                initial: { opacity: 0, y: 10 },
                animate: { opacity: 1, y: 0 },
                className: `flex items-center gap-4 mb-6`,
                children: [
                  (0, Y.jsx)(`span`, {
                    className: `h-0.5 w-8 bg-blue-400 rounded-full`,
                  }),
                  (0, Y.jsx)(`span`, {
                    className: `text-[11px] font-black uppercase tracking-[0.3em] text-blue-400`,
                    children: `Telemetry Configurator`,
                  }),
                ],
              }),
              (0, Y.jsxs)(W.h1, {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.1 },
                className: `text-4xl md:text-7xl font-black tracking-tight leading-[1.05] mb-8 text-white`,
                children: [
                  `Cookie & Telemetry `,
                  (0, Y.jsx)(`br`, {}),
                  (0, Y.jsx)(`span`, {
                    className: `text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-indigo-200 to-white font-light not-italic`,
                    children: `Preferences.`,
                  }),
                ],
              }),
              (0, Y.jsx)(`p`, {
                className: `text-slate-300 leading-relaxed text-lg max-w-2xl font-light`,
                children: `We use micro-telemetry tokens to verify localized access nodes, secure multi-currency transitions, and evaluate portal performance metrics. Adjust your baseline configuration tracking layers below.`,
              }),
            ],
          }),
        ],
      }),
      (0, Y.jsx)(`section`, {
        className: `py-24 bg-white`,
        children: (0, Y.jsxs)(`div`, {
          className: `max-w-4xl mx-auto px-6`,
          children: [
            (0, Y.jsxs)(`div`, {
              className: `space-y-8`,
              children: [
                (0, Y.jsxs)(`div`, {
                  className: `p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6`,
                  children: [
                    (0, Y.jsxs)(`div`, {
                      className: `flex gap-5 items-start`,
                      children: [
                        (0, Y.jsx)(`div`, {
                          className: `w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center shrink-0`,
                          children: (0, Y.jsx)(ue, { size: 20 }),
                        }),
                        (0, Y.jsxs)(`div`, {
                          children: [
                            (0, Y.jsxs)(`div`, {
                              className: `flex items-center gap-3`,
                              children: [
                                (0, Y.jsx)(`h4`, {
                                  className: `text-xl font-bold text-slate-900 tracking-tight`,
                                  children: `Essential Infrastructure Logs`,
                                }),
                                (0, Y.jsx)(`span`, {
                                  className: `px-2.5 py-0.5 text-[9px] font-black tracking-widest bg-blue-50 text-blue-600 rounded-md uppercase`,
                                  children: `Mandatory`,
                                }),
                              ],
                            }),
                            (0, Y.jsx)(`p`, {
                              className: `text-slate-500 text-sm mt-1 max-w-xl`,
                              children: `Required to manage security handshakes, anti-fraud telemetry, and multi-factor session validation. Cannot be paused or isolated.`,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, Y.jsx)(`div`, {
                      className: `w-12 h-6 bg-blue-600 rounded-full flex items-center justify-end px-1 opacity-40 cursor-not-allowed`,
                      children: (0, Y.jsx)(`div`, {
                        className: `w-4 h-4 bg-white rounded-full`,
                      }),
                    }),
                  ],
                }),
                (0, Y.jsxs)(`div`, {
                  className: `p-8 border rounded-[2.5rem] transition-all duration-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 cursor-pointer ${e.analytics ? `bg-white border-blue-200 shadow-md shadow-blue-900/5` : `bg-white border-slate-100 shadow-xs`}`,
                  onClick: () => o(`analytics`),
                  children: [
                    (0, Y.jsxs)(`div`, {
                      className: `flex gap-5 items-start`,
                      children: [
                        (0, Y.jsx)(`div`, {
                          className: `w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 transition-colors ${e.analytics ? `bg-blue-50 border-blue-100 text-blue-600` : `bg-slate-50 border-slate-100 text-slate-900`}`,
                          children: (0, Y.jsx)(Pe, { size: 20 }),
                        }),
                        (0, Y.jsxs)(`div`, {
                          children: [
                            (0, Y.jsx)(`h4`, {
                              className: `text-xl font-bold text-slate-900 tracking-tight`,
                              children: `Analytical Telemetry`,
                            }),
                            (0, Y.jsx)(`p`, {
                              className: `text-slate-500 text-sm mt-1 max-w-xl`,
                              children: `Allows us to evaluate performance vectors and user behavior to refine UI layouts and reduce computational page loads.`,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, Y.jsx)(`button`, {
                      type: `button`,
                      "aria-label": `Toggle Analytics Tracking`,
                      className: `w-12 h-6 rounded-full transition-colors duration-300 flex items-center px-1 shrink-0 pointer-events-none ${e.analytics ? `bg-blue-600 justify-end` : `bg-slate-200 justify-start`}`,
                      children: (0, Y.jsx)(W.div, {
                        layout: !0,
                        transition: {
                          type: `spring`,
                          stiffness: 500,
                          damping: 30,
                        },
                        className: `w-4 h-4 bg-white rounded-full shadow-sm`,
                      }),
                    }),
                  ],
                }),
                (0, Y.jsxs)(`div`, {
                  className: `p-8 border rounded-[2.5rem] transition-all duration-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 cursor-pointer ${e.functional ? `bg-white border-blue-200 shadow-md shadow-blue-900/5` : `bg-white border-slate-100 shadow-xs`}`,
                  onClick: () => o(`functional`),
                  children: [
                    (0, Y.jsxs)(`div`, {
                      className: `flex gap-5 items-start`,
                      children: [
                        (0, Y.jsx)(`div`, {
                          className: `w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 transition-colors ${e.functional ? `bg-blue-50 border-blue-100 text-blue-600` : `bg-slate-50 border-slate-100 text-slate-900`}`,
                          children: (0, Y.jsx)(pe, { size: 20 }),
                        }),
                        (0, Y.jsxs)(`div`, {
                          children: [
                            (0, Y.jsx)(`h4`, {
                              className: `text-xl font-bold text-slate-900 tracking-tight`,
                              children: `Functional Personalization`,
                            }),
                            (0, Y.jsx)(`p`, {
                              className: `text-slate-500 text-sm mt-1 max-w-xl`,
                              children: `Remembers your operational workspace selections, localized tracking nodes, and specific currency view default settings.`,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, Y.jsx)(`button`, {
                      type: `button`,
                      "aria-label": `Toggle Functional Personalization`,
                      className: `w-12 h-6 rounded-full transition-colors duration-300 flex items-center px-1 shrink-0 pointer-events-none ${e.functional ? `bg-blue-600 justify-end` : `bg-slate-200 justify-start`}`,
                      children: (0, Y.jsx)(W.div, {
                        layout: !0,
                        transition: {
                          type: `spring`,
                          stiffness: 500,
                          damping: 30,
                        },
                        className: `w-4 h-4 bg-white rounded-full shadow-sm`,
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, Y.jsxs)(`div`, {
              className: `mt-16 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6`,
              children: [
                (0, Y.jsx)(`div`, {
                  className: `flex items-center gap-3`,
                  children: n
                    ? (0, Y.jsxs)(W.div, {
                        initial: { scale: 0.8, opacity: 0 },
                        animate: { scale: 1, opacity: 1 },
                        className: `flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase tracking-wider`,
                        children: [
                          (0, Y.jsx)(w, { size: 16 }),
                          ` Encryption node synchronized`,
                        ],
                      })
                    : (0, Y.jsx)(`span`, {
                        className: `text-slate-400 text-xs font-medium tracking-wide`,
                        children: `* Unsaved configuration modifications staging.`,
                      }),
                }),
                (0, Y.jsxs)(`div`, {
                  className: `flex flex-col sm:flex-row gap-4 w-full sm:w-auto`,
                  children: [
                    (0, Y.jsxs)(`button`, {
                      onClick: l,
                      className: `flex items-center justify-center gap-2 px-6 py-4 border border-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-slate-50 transition-all active:scale-98`,
                      children: [
                        (0, Y.jsx)(se, { size: 14 }),
                        ` Revert To Minimum`,
                      ],
                    }),
                    (0, Y.jsx)(`button`, {
                      onClick: () => s(),
                      className: `px-8 py-4 bg-slate-900 text-white font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-slate-800 transition-all active:scale-98`,
                      children: `Save Selected`,
                    }),
                    (0, Y.jsx)(`button`, {
                      onClick: c,
                      className: `px-8 py-4 bg-blue-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-blue-700 transition-all active:scale-98 shadow-lg shadow-blue-200`,
                      children: `Accept All Parameters`,
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function Wt() {
  return (0, Y.jsx)(Qe, {
    children: (0, Y.jsxs)(u, {
      children: [
        (0, Y.jsxs)(Gt, {
          children: [
            (0, Y.jsx)(ke, { position: `top-right`, richColors: !0 }),
            (0, Y.jsx)(tt, {}),
            (0, Y.jsx)(ct, {}),
            (0, Y.jsx)(`main`, {
              className: `min-h-screen pt-24 md:pt-32`,
              children: (0, Y.jsxs)(C, {
                children: [
                  (0, Y.jsx)(x, { path: `/`, element: (0, Y.jsx)(ht, {}) }),
                  (0, Y.jsx)(x, {
                    path: `/about`,
                    element: (0, Y.jsx)(_t, {}),
                  }),
                  (0, Y.jsx)(x, {
                    path: `/services`,
                    element: (0, Y.jsx)(yt, {}),
                  }),
                  (0, Y.jsx)(x, {
                    path: `/login`,
                    element: (0, Y.jsx)(bt, {}),
                  }),
                  (0, Y.jsx)(x, {
                    path: `/client`,
                    element: (0, Y.jsx)(Ct, {}),
                  }),
                  (0, Y.jsx)(x, {
                    path: `/admin`,
                    element: (0, Y.jsx)(At, {}),
                  }),
                  (0, Y.jsx)(x, {
                    path: `/corporate`,
                    element: (0, Y.jsx)(jt, {}),
                  }),
                  (0, Y.jsx)(x, {
                    path: `/signup`,
                    element: (0, Y.jsx)(Mt, {}),
                  }),
                  (0, Y.jsx)(x, {
                    path: `/contact`,
                    element: (0, Y.jsx)(Nt, {}),
                  }),
                  (0, Y.jsx)(x, {
                    path: `/forgot-password`,
                    element: (0, Y.jsx)(Pt, {}),
                  }),
                  (0, Y.jsx)(x, {
                    path: `/update-password`,
                    element: (0, Y.jsx)(Ft, {}),
                  }),
                  (0, Y.jsx)(x, {
                    path: `/wealth-management`,
                    element: (0, Y.jsx)(Lt, {}),
                  }),
                  (0, Y.jsx)(x, {
                    path: `/insurance-services`,
                    element: (0, Y.jsx)(zt, {}),
                  }),
                  (0, Y.jsx)(x, {
                    path: `/admin-login`,
                    element: (0, Y.jsx)(Bt, {}),
                  }),
                  (0, Y.jsx)(x, {
                    path: `/privacy-policy`,
                    element: (0, Y.jsx)(Vt, {}),
                  }),
                  (0, Y.jsx)(x, {
                    path: `/cookie-settings`,
                    element: (0, Y.jsx)(Ut, {}),
                  }),
                  (0, Y.jsx)(x, {
                    path: `/terms&service`,
                    element: (0, Y.jsx)(Ht, {}),
                  }),
                  (0, Y.jsx)(x, {
                    path: `*`,
                    element: (0, Y.jsxs)(`div`, {
                      className: `flex flex-col items-center justify-center min-h-[60vh] sm:min-h-[80vh] px-4 text-center select-none`,
                      children: [
                        (0, Y.jsx)(`h1`, {
                          className: `text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-800 dark:text-slate-200`,
                          children: `404 - Page Not Found`,
                        }),
                        (0, Y.jsx)(`p`, {
                          className: `mt-2 text-sm sm:text-base text-slate-500 max-w-xs sm:max-w-sm`,
                          children: `The page you are looking for doesn't exist or has been moved.`,
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
            (0, Y.jsx)(nt, {}),
          ],
        }),
        (0, Y.jsx)(Ae, {}),
      ],
    }),
  });
}
function Gt({ children: e }) {
  return (rt(), (0, Y.jsx)(Y.Fragment, { children: e }));
}
(0, Ge.createRoot)(document.getElementById(`root`)).render(
  (0, Y.jsx)(J.StrictMode, { children: (0, Y.jsx)(Wt, {}) }),
);
