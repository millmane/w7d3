var AppDispatcher = require("../dispatcher/Dispatcher.js");

var KeyActions = {
  keyPressed: function(key){
    AppDispatcher.dispatch({
      actionType: 'keyPressed',
       noteName: key
     });
  },

  keyUnpressed: function(key){
    AppDispatcher.dispatch({
      actionType: 'keyUnpressed',
       noteName: key
     });
  }
};

module.exports = KeyActions;
