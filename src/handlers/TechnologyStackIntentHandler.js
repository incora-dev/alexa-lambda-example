const TechnologyStackIntentHandler = {
  canHandle (handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'HelloWorldIntent'
  },
  handle (handlerInput) {
    // add your own logic 
    // get data from some API, database, etc.
    return handlerInput.responseBuilder.
      speak('Our technology stack comprises JavaScript (Node, Angular, React, Ember, Vue), Python (Django), Mobile apps (React Native, Ionic).').
      reprompt( 'What\'s your request? ').
      getResponse()
  }
}

module.exports = TechnologyStackIntentHandler
