/**
 * 🍪 settings for klaro consent manager
 */

import * as klaro from "klaro/dist/klaro-no-css.js";
// import * as klaro from "klaro/dist/klaro";

const klaroConfig = {
  // With the 0.7.0 release we introduce a 'version' paramter that will make
  // it easier for us to keep configuration files backwards-compatible in the future.
  version: 1,

  // When 'testing' is set to 'true', the consentlayer can be set visible by
  // adding '#klaro-testing' to the url.
  testing: false,

  // You can customize the ID of the DIV element that Klaro will create
  // when starting up. If undefined, Klaro will use 'klaro'.
  elementID: "klaro",

  // You can override CSS style variables here. For IE11, Klaro will
  // dynamically inject the variables into the CSS. If you still consider
  // supporting IE9-10 (which you probably shouldn't) you need to use Klaro
  // with an external stylesheet as the dynamic replacement won't work there.
  styling: {
    theme: ["light", "bottom", "wide"],
  },

  // Setting this to true will keep Klaro from automatically loading itself
  // when the page is being loaded.
  noAutoLoad: false,

  // Setting this to true will render the descriptions of the consent
  // modal and consent notice are HTML. Use with care.
  htmlTexts: true,

  // Setting 'embedded' to true will render the Klaro modal and notice without
  // the modal background, allowing you to e.g. embed them into a specific element
  // of your website, such as your privacy notice.
  embedded: false,

  // You can group services by their purpose in the modal. This is advisable
  // if you have a large number of services. Users can then enable or disable
  // entire groups of services instead of having to enable or disable every service.
  groupByPurpose: true,

  // How Klaro should store the user's preferences. It can be either 'cookie'
  // (the default) or 'localStorage'.
  storageMethod: "cookie",

  // You can customize the name of the cookie that Klaro uses for storing
  // user consent decisions. If undefined, Klaro will use 'klaro'.
  cookieName: "klaro",

  // You can also set a custom expiration time for the Klaro cookie.
  // By default, it will expire after 120 days.
  cookieExpiresAfterDays: 365,

  // You can change to cookie domain for the consent manager itself.
  // Use this if you want to get consent once for multiple matching domains.
  // If undefined, Klaro will use the current domain.
  //cookieDomain: '.github.com',

  // You can change to cookie path for the consent manager itself.
  // Use this to restrict the cookie visibility to a specific path.
  // If undefined, Klaro will use '/' as cookie path.
  //cookiePath: '/',

  // Defines the default state for services (true=enabled by default).
  default: false,

  // If "mustConsent" is set to true, Klaro will directly display the consent
  // manager modal and not allow the user to close it before having actively
  // consented or declines the use of third-party services.
  mustConsent: false,

  // Show "accept all" to accept all services instead of "ok" that only accepts
  // required and "default: true" services
  acceptAll: true,

  // replace "decline" with cookie manager modal
  hideDeclineAll: false,

  // hide "learnMore" link
  hideLearnMore: false,

  // show cookie notice as modal
  noticeAsModal: false,
  disablePoweredBy: true,

  // additionalClass: "my-klaro",

  lang: "de",
  translations: {
    // translationsed defined under the 'zz' language code act as default
    // translations.
    zz: {
      privacyPolicyUrl: "/datenschutz",
    },
    // If you erase the "consentModal" translations, Klaro will use the
    // bundled translations.
    de: {
      privacyPolicyUrl: "/datenschutz",
      consentNotice: {
        description:
          "Wir benötigen Ihre Zustimmung, bevor Sie unsere Website weiter besuchen können. Wir verwenden Cookies und andere Technologien auf unserer Website. Einige von ihnen sind essenziell („Funktional”). Andere helfen uns dabei, ihre Nutzung zu analysieren, auszuwerten, und dadurch unsere Website zu optimieren („Statistiken”). Wir benötigen Ihre Einwilligung, um zusätzliche Inhalte und Medien externer Anbieter einzubinden, bei denen die Daten auch für Personalisierung verwendet werden können („Externe Medien”). Sie können Ihre Auswahl jederzeit unter Einstellungen widerrufen oder anpassen.",
      },
      consentModal: {
        title: "Dienste, die wir nutzen möchten",
        description:
          "Hier können Sie einsehen und anpassen, welche Information wir über Sie sammeln.",
      },
      googleAnalytics: {
        title: "Google Analytics",
        description: "Sammeln von Besucherstatistiken",
      },
      youtube: {
        title: "YouTube",
        description: "Diese Website verwendet Youtube um Videos anzuzeigen.",
      },
      googleMaps: {
        title: "Google Maps",
        description:
          "Die Webseite verwendet Google Maps API, um geographische Informationen visuell darzustellen, Ihnen also eine Karte bzw. Stadtplanausschnitt anzuzeigen.",
      },
      purposes: {
        analytics: {
          title: "Besucher-Statistiken",
        },
        security: {
          title: "Sicherheit",
        },
      },
    },
  },

  services: [
    {
      name: "googleAnalytics",
      default: false,
      purposes: ["marketing"],
      cookies: [/^_ga(_.*)?/],
      required: false,
      optOut: false,
      onlyOnce: true,
    },
    {
      name: "youtube",
      default: false,
      purposes: ["analytics"],
      required: false,
      optOut: false,
      onlyOnce: true,
    },
    {
      name: "googleMaps",
      default: false,
      purposes: ["analytics"],
      required: false,
      optOut: false,
      onlyOnce: true,
    },
    {
      name: "openStreetMap",
      title: "OpenStreetMap",
      description: "Nutzt die API um Karten und Orte darzustellen",
      default: false,
      purposes: ["analytics"],
      required: false,
      optOut: false,
      onlyOnce: true,
    },
  ],
};

klaro.setup(klaroConfig);
