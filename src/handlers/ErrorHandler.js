const ErrorHandler = {
  canHandle () {
    return true
  },
  handle (handlerInput, error) {
    console.log('ERROR HANDLED', error)
    
    return handlerInput.responseBuilder.
      speak('Sorry, I had trouble doing what you asked. Please try again. ').
      reprompt( 'What\'s your request? ').
      getResponse()
  }
}

module.exports = ErrorHandler
