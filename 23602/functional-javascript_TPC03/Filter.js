function getShortMessages(messages) {
    return messages.filter(msg=> msg['message'].length < 50 );
  }

  module.exports = getShortMessages


  //const result = words.filter(word => word.length > 6);