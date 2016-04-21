var AppDispatcher = require("../dispatcher/Dispatcher.js"),
    Store = require("flux/utils").Store;
var _keys=[];

var KeyStore = new Store(AppDispatcher);

KeyStore.addKey = function(key){
    _keys.push(key);
    console.log("KeyStore Add:" + _keys);

    KeyStore.__emitChange();
  };

KeyStore.removeKey = function(key){
    _keys.splice(_keys.indexOf(key) ,1);
    console.log("KeyStote Remove: " + _keys);
    KeyStore.__emitChange();
  };

KeyStore.all = function(){
    return _keys;
  };

KeyStore.__onDispatch = function(payload){
  switch(payload.actionType){
    case 'keyPressed':
      KeyStore.addKey(payload.noteName);
      break;
    case 'keyUnpressed':
      KeyStore.removeKey(payload.noteName);
      break;
    }
};

module.exports = KeyStore;
