/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

import cucumber from "cypress-cucumber-preprocessor"
const resolve = require("resolve")
const browserify = require("@cypress/browserify-preprocessor")

module.exports = (on, config) => {
  on(
    "file:preprocessor",
    cucumber({
      ...browserify.defaultOptions,
      typescript: resolve.sync("typescript", { baseDir: config.projectRoot }),
    })
  )
}
