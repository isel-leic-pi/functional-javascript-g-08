function repeat(operation, num) {
    // modify this so it can be interrupted
    if (num <= 0) return
    operation()

    setTimeout(function() {
        repeat(operation, --num)
      }
   // return repeat(operation, --num)
  }
  module.exports = repeat
  /*Modify the recursive repeat function provided in the boilerplate, such that it does not block the event loop (i.e. Timers and IO handlers can fire).  This necessarily requires repeat to be asynchronous.
A timeout is queued to fire after 100 milliseconds, which will print the results of the test and exit the process. repeat should release control of the event loop to allow the timeout to interrupt before all of the operations complete.
Try to perform as many operations as you can before the timeout fires! */