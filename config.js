const env = process.env.NODE_ENV || 'development'
const credentials = require(`./credentials.${env}`) // i'm getting the error: cannot find ./credentials.development

module.exports = { credentials }