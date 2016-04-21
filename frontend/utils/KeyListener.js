
var KeyActions = require('../actions/KeyActions');
var letters =["A","B","C","D","E","F","G"];
var nums = [1,2];

var _keys = [];

var Mapping = {
};
var i = 0;
nums.forEach(function(num,idx2){
  letters.forEach(function(letter,idx1){
    Mapping[i+65]  = letter+num;
    i++;
  });
});

$(document).on("keydown", function(e) {
  if(_keys.indexOf(Mapping[e.keyCode])===-1 ){
    KeyActions.keyPressed(Mapping[e.keyCode]);
    _keys.push(Mapping[e.keyCode]);
  }
  console.log("listener keydown:" + _keys);

});

$(document).on("keyup", function(e) {

  if(_keys.indexOf(Mapping[e.keyCode])>-1 ){
    KeyActions.keyUnpressed(Mapping[e.keyCode]);
    _keys.splice(_keys.indexOf(Mapping[e.keyCode]),1);
  }
    console.log("listener keyup:" + _keys);
});
