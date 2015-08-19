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
    var years = [];
    var currentYear = 2000;
    for (var i = 0; i < 30; i++) {
      var year = currentYear+i;
      years.push(<option value={year}>{year}</option>);
    }
    return (
      <div className='wine-form, panel'>
        <h1>Add new bottle(s)</h1>
        <input type="text" ref='domain' placeholder="Domain" />
        <div class="row">
          <div class="large-12 columns">
            <label>Year of the Bottle
              <select ref="year">
                {years}
              </select>
            </label>
          </div>
        </div>
        <div class="row">
          <div class="large-12 columns">
            <label>Bottle's number
              <select ref="number">
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
                <option value='12'>12</option>
              </select>
            </label>
          </div>
        </div>
        <textarea ref='text' placeholder='Description' />
        <button onClick={this.onSubmit}>Submit</button>
      </div>
    );
  }
});

module.exports = WineForm;