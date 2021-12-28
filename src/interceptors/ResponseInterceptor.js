const ResponseInterceptor = {
  process (handlerInput, response) {
    console.log('OUTGOING REQUEST', response)
  }
}

module.exports = ResponseInterceptor
