const AccountLinkingHandler = {
  canHandle(handlerInput) {
    return !(
      handlerInput.requestEnvelope.session.user &&
      handlerInput.requestEnvelope.session.user.accessToken
    );
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak('Please link your account to the Incora assitance skill using the card that I have sent to the Alexa app. ')
      .withLinkAccountCard()
      .getResponse();
  },
};

module.exports = AccountLinkingHandler;
