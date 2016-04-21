var React = require('react'),
    ReactDOM = require('react-dom'),
    KeyListener = require('./utils/KeyListener'),
    Organ = require('./components/Organ');


var OrganGrinder = React.createClass({


  render: function () {
    //   debugger
    // KeyStore.all().map(function(note){
    // create <organkey> if key exists in keystore._keys
    //
    // });
    return (
      <div>
        <Organ/>
      </div>
  );
  }
});


    document.addEventListener('DOMContentLoaded', function () {
      ReactDOM.render(<OrganGrinder />, document.getElementById('root'));
    });
