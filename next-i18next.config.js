const path = require("path");
/**
 * @type {import('next-i18next').UserConfig}
 */
module.exports = {
  i18n: {
    // defaultLocale: 'th',
    // locales: ['en', 'th'],
    // defaultNS: "common",
    // ns: ["common"],
    defaultLocale: "en",
    locales: ["en", "th"],
    localeDetection: false,
  },
  localePath: path.resolve("./public/locales"),
};
