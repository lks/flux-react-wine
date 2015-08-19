var React = require('react');

var Wines = require('./views/wines');
var WineForm = require('./views/wine-form');

var App = React.createClass({

  render: function() {
    return (
      <div>
        <Wines />
        <WineForm />
      </div>
    );
  }
});

React.render(<App />, document.getElementById('app'));
