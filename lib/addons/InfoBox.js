"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.INFO_BOX = undefined;

var _defineProperty2 = require("babel-runtime/helpers/defineProperty");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _flowRight2 = require("lodash/flowRight");

var _flowRight3 = _interopRequireDefault(_flowRight2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _googleMapsInfobox = require("google-maps-infobox");

var _googleMapsInfobox2 = _interopRequireDefault(_googleMapsInfobox);

var _withGoogleMap = require("../withGoogleMap");

var _enhanceElement = require("../enhanceElement");

var _enhanceElement2 = _interopRequireDefault(_enhanceElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INFO_BOX = exports.INFO_BOX = "__SECRET_INFO_BOX_DO_NOT_USE_OR_YOU_WILL_BE_FIRED";

var controlledPropTypes = {
  // NOTICE!!!!!!
  //
  // Only expose those with getters & setters in the table as controlled props.
  //
  // http://google-maps-utility-library-v3.googlecode.com/svn/trunk/infobox/docs/reference.html
  content: _react.PropTypes.any,
  options: _react.PropTypes.object,
  position: _react.PropTypes.any,
  visible: _react.PropTypes.bool,
  zIndex: _react.PropTypes.number
};

var defaultUncontrolledPropTypes = (0, _enhanceElement.addDefaultPrefixToPropTypes)(controlledPropTypes);

var eventMap = {
  // http://google-maps-utility-library-v3.googlecode.com/svn/trunk/infobox/docs/reference.html
  onCloseClick: "closeclick"
};

var publicMethodMap = {
  // Public APIs
  //
  // http://google-maps-utility-library-v3.googlecode.com/svn/trunk/infobox/docs/reference.html

  getContent: function getContent() {/* TODO: children */},
  getPosition: function getPosition(infoBox) {
    return infoBox.getPosition();
  },
  getVisible: function getVisible(infoBox) {
    return infoBox.getVisible();
  },
  getZIndex: function getZIndex(infoBox) {
    return infoBox.getZIndex();
  }
};

var controlledPropUpdaterMap = {
  // children(children, component) {
  // TODO
  //   setContentForOptionalReactElement(children, component.getInfoBox());
  // },

  content: function content(infoBox, _content) {
    infoBox.setContent(_content);
  },
  options: function options(infoBox, _options) {
    infoBox.setOptions(_options);
  },
  position: function position(infoBox, _position) {
    infoBox.setPosition(_position);
  },
  visible: function visible(infoBox, _visible) {
    infoBox.setVisible(_visible);
  },
  zIndex: function zIndex(infoBox, _zIndex) {
    infoBox.setZIndex(_zIndex);
  }
};

function getInstanceFromComponent(component) {
  return component.state[INFO_BOX];
}

exports.default = (0, _flowRight3.default)(_react2.default.createClass, (0, _enhanceElement2.default)(getInstanceFromComponent, publicMethodMap, eventMap, controlledPropUpdaterMap))({
  displayName: "InfoBox",

  propTypes: (0, _extends3.default)({}, controlledPropTypes, defaultUncontrolledPropTypes),

  contextTypes: (0, _defineProperty3.default)({}, _withGoogleMap.MAP, _react.PropTypes.object),

  getInitialState: function getInitialState() {
    // http://google-maps-utility-library-v3.googlecode.com/svn/trunk/infobox/docs/reference.html
    var infoBox = new _googleMapsInfobox2.default((0, _extends3.default)({
      map: this.context[_withGoogleMap.MAP]
    }, (0, _enhanceElement.collectUncontrolledAndControlledProps)(defaultUncontrolledPropTypes, controlledPropTypes, this.props)));
    return (0, _defineProperty3.default)({}, INFO_BOX, infoBox);
  },
  componentWillUnmount: function componentWillUnmount() {
    var infoBox = this.state[INFO_BOX];
    if (infoBox) {
      infoBox.setMap(null);
    }
  },
  render: function render() {
    return false;
  }
});