const Alexa = require('ask-sdk')

const RequestInterceptor = require('./interceptors/RequestInterceptor')
const ResponseInterceptor = require('./interceptors/ResponseInterceptor')

const LaunchRequestHandler = require('./handlers/LaunchRequestHandler')
const TechnologyStackIntentHandler = require('./handlers/TechnologyStackIntentHandler')
const HelpIntentHandler = require('./handlers/HelpIntentHandler')
const CancelAndStopIntentHandler = require('./handlers/CancelAndStopIntentHandler')
const SessionEndedRequestHandler = require('./handlers/SessionEndedRequestHandler')
const FallbackHandler = require('./handlers/FallbackHandler')
const ErrorHandler = require('./handlers/ErrorHandler')

let skill

module.exports.handler = async (event, context) => {
  if (!skill) {
    skill = Alexa.SkillBuilders.custom().
      addRequestInterceptors(
        RequestInterceptor,
        ResponseInterceptor,
      ).
      addRequestHandlers(
        LaunchRequestHandler,
        TechnologyStackIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        SessionEndedRequestHandler,
        FallbackHandler).
      addErrorHandlers(
        ErrorHandler).
      create()
  }

  return await skill.invoke(event, context)
}
