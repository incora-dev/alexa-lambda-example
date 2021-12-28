const LaunchRequestHandler = {
  canHandle (handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'LaunchRequest'
  },
  handle (handlerInput) {
    return handlerInput.responseBuilder.
      speak('Welcome to Incora assistant. You can ask about technology stack, projects, and a lot more').
      reprompt('What\'s your request? ').
      getResponse()
  }
}

module.exports = LaunchRequestHandler
