!function(global,factory){if("function"==typeof define&&define.amd)define(["exports","react","maeve-dropdown","lodash/throttle"],factory);else if("undefined"!=typeof exports)factory(exports,require("react"),require("maeve-dropdown"),require("lodash/throttle"));else{var mod={exports:{}};factory(mod.exports,global.react,global.maeveDropdown,global.throttle),global.maeveInput=mod.exports}}(this,function(exports,_react,_maeveDropdown,_throttle){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _react2=_interopRequireDefault(_react),_maeveDropdown2=_interopRequireDefault(_maeveDropdown),_throttle2=_interopRequireDefault(_throttle),_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),MaeveInput=function(_React$Component){function MaeveInput(props){_classCallCheck(this,MaeveInput);var _this=_possibleConstructorReturn(this,(MaeveInput.__proto__||Object.getPrototypeOf(MaeveInput)).call(this,props));_this.handleChange=function(event){_this.updateValue({value:event.target.value})},_this.updateValue=function(newState){var valueId=_this.props.multi===!0?_this.props.valueId:_this.props.id;_this.props.onValueUpdate(newState.value,valueId),_this.setState(newState)},_this.onItemSelect=function(value){_this.updateValue({value:value}),_this.setFocus(!1)},_this.onAddNewItem=function(){var valueId=_this.props.multi===!0?_this.props.valueId:_this.props.id;_this.props.autocomplete.addNewItem(_this.state.value,valueId),_this.setFocus(!1)},_this.setFocus=function(isFocus){_this.setState({isFocus:isFocus})};var defaultVal=props.value||"";return _this.state={value:defaultVal,isFocus:!1},_this}return _inherits(MaeveInput,_React$Component),_createClass(MaeveInput,[{key:"componentWillReceiveProps",value:function(newProps){"undefined"!=typeof newProps.value&&newProps.value!==this.state.value&&this.setState({value:newProps.value})}},{key:"getDropdown",value:function(){var dropdown="",autocomplete=this.props.autocomplete;if("undefined"!=typeof autocomplete&&this.state.isFocus===!0&&("undefined"==typeof autocomplete.trigger||autocomplete.trigger<=this.state.value.length)){var source=void 0;"object"===_typeof(autocomplete.source)?source=autocomplete.source:"function"==typeof autocomplete.source&&(source=autocomplete.source(this.state.value));var dropdownProps={items:source,onSelect:this.onItemSelect};"undefined"!=typeof autocomplete.addNewItem&&(dropdownProps.addNewItem=this.onAddNewItem),dropdown=_react2.default.createElement(_maeveDropdown2.default,dropdownProps)}return dropdown}},{key:"render",value:function(){var inputProps={id:this.props.id,type:"text",value:this.state.value,placeholder:this.props.placeholder,onChange:(0,_throttle2.default)(this.handleChange,1e4),onFocus:this.setFocus.bind(null,!0)},dropdown="",autocomplete=this.props.autocomplete;if("undefined"!=typeof autocomplete&&this.state.isFocus===!0){var trigger=autocomplete.trigger;0===trigger&&(inputProps.onFocus=this.handleChange),dropdown=this.getDropdown()}return _react2.default.createElement("div",{className:"maeve-input"},void 0!==_typeof(this.props.label)?_react2.default.createElement("label",{htmlFor:this.props.id},this.props.label):"",_react2.default.createElement("input",inputProps),dropdown)}}]),MaeveInput}(_react2.default.Component);MaeveInput.propTypes={id:_react2.default.PropTypes.string,onValueUpdate:_react2.default.PropTypes.func,valueId:_react2.default.PropTypes.string,multi:_react2.default.PropTypes.bool,placeholder:_react2.default.PropTypes.string,autocomplete:_react2.default.PropTypes.object,label:_react2.default.PropTypes.string},exports.default=MaeveInput});