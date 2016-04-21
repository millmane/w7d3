var KeyStore = require('../stores/KeyStore'),
    KeyActions = require('../actions/KeyActions'),
    Note = require('../utils/Note.js'),
    React = require('react');


var letters =["A","B","C","D","E","F","G"];
var nums = [1,2];
var token;


var TONES  = {};
var i = 500;
nums.forEach(function(num,idx2){
  letters.forEach(function(letter,idx1){
    TONES[letter+num] = i;
    i += 50;
  });
});


var OrganKey = React.createClass({
  getInitialState: function(){
    return {note: null,css: "unpressed"};
  },
  startNote: function(){
    this.state.note.start();
  },

  stopNote: function (){
    this.state.note.stop();

  },

  componentDidMount: function () {
    // this.startNote();
    var self = this;
    token = KeyStore.addListener(function (){
      // console.log(KeyStore.all());
    if (KeyStore.all().indexOf(self.props.noteName) > -1) {
      self.startNote();
      self.setState({css: "pressed"});
    } else {
      self.stopNote();
      self.setState({css: "unpressed"});
    }
  });
    // token = KeyStore.addListener(this.startNote);
  },
  componentWillUnmount: function() {
    // this.state.note.stop();
    token.remove();
    // KeyStore.addListener(this.stopNote);
  },

  componentWillMount: function() {

    this.setState({note: new Note(TONES[this.props.noteName])});
  },
  render: function(){
    return (
      <div className = {this.state.css} >{this.props.noteName}</div>
    );
  }
});

module.exports = OrganKey;
