const RequestInterceptor = {
  process(handlerInput) {
    console.log('INCOMING REQUEST', handlerInput.requestEnvelope);
  }
};

module.exports = RequestInterceptor
