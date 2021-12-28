const FallbackHandler = {
  canHandle (handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
  },
  handle (handlerInput) {
    return handlerInput.responseBuilder.
      speak('Can you repeat it, please? ').
      reprompt('What\'s your request? ').
      getResponse()
  }
}

module.exports = FallbackHandler
