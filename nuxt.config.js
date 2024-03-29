import { SSL_OP_TLS_ROLLBACK_BUG } from "constants";

export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: "Projekte fürs Leben | Architekturbüro Wagner" || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      {
        src: "js/popper.min.js"
      },
      {
        src: "js/jquery-3.4.1.slim.min.js"
      },
      {
        src: "js/bootstrap.min.js"
      },
      {
        src: "js/smooth-scroll.js"
      },
      {
        src: "js/cookieconsent.min.js"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["@/static/css/bootstrap.min.css", "@/static/css/_global.scss"],

  styleResources: {
    scss: ["@/assets/*.scss"]
  },
  modules: ["@nuxtjs/style-resources", "nuxt-responsive-loader"],

  responsiveLoader: {
    min: 860,
    max: 1080
  },


  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: "~/plugins/main", ssr: false }],
  /*
   ** Nuxt.js dev-modules
   */
  devModules: [],
  /*
   ** Nuxt.js modules
   */

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
