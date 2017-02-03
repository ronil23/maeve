import React from 'react';
import MaeveDropdown from 'maeve-dropdown';
import throttle from 'lodash/throttle';
import debounce from 'lodash/debounce';

class MaeveInput extends React.Component {

  constructor(props) {
    super(props);
    let defaultVal = props.value || '';
    this.state = {
      value: defaultVal,
      isFocus: false,
    };
    this.valueChangeCallback = debounce(this.valueChangeCallback, props.debounceTime || 500);
  }

  componentWillReceiveProps(newProps) {
    if (
          typeof newProps.value !== 'undefined' &&
          newProps.value !== this.state.value
       ) {
      this.setState({
        value: newProps.value,
      });
    }
  }

  handleChange = (event) => {
    this.updateValue({
      value: event.target.value,
    });
  }

  updateValue = (newState) => {
    this.valueChangeCallback(newState);
    this.setState(newState);
  }

  valueChangeCallback = (newState) => {
    const valueId = this.props.multi === true ? this.props.valueId : this.props.id;
    this.props.onValueUpdate(newState.value, valueId);
  }

  onItemSelect = (value) => {
    this.updateValue({
      value,
    });
    this.setFocus(false);
  }

  onAddNewItem = () => {
    const valueId = this.props.multi === true ? this.props.valueId : this.props.id;
    this.props.autocomplete.addNewItem(this.state.value, valueId);
    this.setFocus(false);
  }

  setFocus = (isFocus) => {
    this.setState({
      isFocus: isFocus,
    });
  }

  getDropdown() {
    let dropdown = '';
    const autocomplete = this.props.autocomplete;
    if (
      typeof autocomplete !== 'undefined' &&
      this.state.isFocus === true &&
      (
        typeof autocomplete.trigger === 'undefined' ||
        autocomplete.trigger <= this.state.value.length
      )
    ) {
      let source;
      if ( typeof autocomplete.source === 'object' ) {
        source = autocomplete.source;
      } else if ( typeof autocomplete.source === 'function' ) {
        source = autocomplete.source(this.state.value);
      }
      let dropdownProps = {
        items: source,
        onSelect: this.onItemSelect,
      }
      if( typeof autocomplete.addNewItem !== 'undefined' ) {
        dropdownProps.addNewItem = this.onAddNewItem;
      }
      dropdown = <MaeveDropdown {...dropdownProps}/>
    }
    return dropdown;
  }

  render() {
    let inputProps = {
      id: this.props.id,
      type: 'text',
      value: this.state.value,
      placeholder: this.props.placeholder,
      onChange: throttle(this.handleChange, 10000),
      onFocus: this.setFocus.bind(null, true),
    };
    let dropdown = '';
    const autocomplete = this.props.autocomplete;
    if ( typeof autocomplete !== 'undefined' && this.state.isFocus === true ) {
      const trigger = autocomplete.trigger;
      if (trigger === 0) {
        inputProps.onFocus = this.handleChange;
      }
      dropdown = this.getDropdown();
    }

    return (
      <div className="maeve-input">
        { typeof this.props.label !== undefined ?
          <label htmlFor={this.props.id}>{this.props.label}</label>
          :
          ''
        }
        <input
          {...inputProps}
        />
        {dropdown}
      </div>
    );
  }
};

MaeveInput.propTypes = {
  id: React.PropTypes.string,
  onValueUpdate: React.PropTypes.func,
  valueId: React.PropTypes.string,
  multi: React.PropTypes.bool,
  placeholder: React.PropTypes.string,
  autocomplete: React.PropTypes.object,
  label: React.PropTypes.string,
};

export default MaeveInput;