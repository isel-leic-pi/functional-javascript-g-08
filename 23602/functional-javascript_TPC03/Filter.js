function getShortMessages(messages) {
    const mapmsg = (messages.filter(msg=> msg['message'].length < 50 )).map(msg=> msg['message']);
    return mapmsg;
  }

  module.exports = getShortMessages


  /*Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
    module.exports = function getShortMessages(messages) {
      return messages.filter(function(item) {
        return item.message.length < 50
      }).map(function(item) {
        return item.message
      })
    }


──────────────────────────────────────────────────────────────────────────────── */