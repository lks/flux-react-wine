var React = require('react');

var WineActionCreators = require('../actions/wine-action-creators');

var WineForm = React.createClass({

  onSubmit: function(e) {
    var textNode = this.refs.text.getDOMNode();
    var domainNode = this.refs.domain.getDOMNode();
    var yearNode = this.refs.year.getDOMNode();
    var numberNode = this.refs.number.getDOMNode();

    var domain = domainNode.value;
    var year = yearNode.value;
    var number = numberNode.value;
    var text = textNode.value;

    domainNode.value = '';
    yearNode.value = '';
    numberNode.value = '';
    textNode.value = '';

    WineActionCreators.createWine({
      domain: domain,
      year: year,
      number: number,
      type: 'red',
      text: text
    });
  },

  render: function() {
    return (
      <div className='wine-form'>
        <label for="domain">Domain</label>
        <input type="text" id="domain" ref='domain' /><br />
        <label for="year">Year</label>
        <input type="text" id="year" ref='year' /><br />
        <label for="number">Number</label>
        <input type="text" id="number" ref='number' /><br />
        <textarea ref='text' />
        <button onClick={this.onSubmit}>Submit</button>
      </div>
    );
  }
});

module.exports = WineForm;