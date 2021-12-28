const HelpIntentHandler = {
  canHandle (handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent'
  },
  handle (handlerInput) {
    return handlerInput.responseBuilder.
      speak('You can say: \'alexa, hello\'').
      reprompt('What\'s your request? ').
      getResponse()
  }
}

module.exports = HelpIntentHandler
