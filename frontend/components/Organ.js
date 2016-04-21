var React = require('react'),
    OrganKey = require('./OrganKey'),
    KeyStore = require('../stores/KeyStore');

  var letters =["A","B","C","D","E","F","G"];
  var nums = [1,2];

  var KEYS =[];
  nums.forEach(function(num,idx2){
    letters.forEach(function(letter,idx1){
      KEYS.push(letter+num);
    });
  });

  function getkeys(){
    return KEYS.map(function(key,idx){
      return <OrganKey key = {idx} noteName = {key}/>;
    });
  }


var Organ = React.createClass({

  render: function() {
    return (
      <div>
      {getkeys()}
      </div>
    );
  }

});

module.exports = Organ;
