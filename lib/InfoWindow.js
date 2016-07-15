"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.INFO_WINDOW = undefined;

var _defineProperty2 = require("babel-runtime/helpers/defineProperty");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _flowRight2 = require("lodash/flowRight");

var _flowRight3 = _interopRequireDefault(_flowRight2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _withGoogleMap = require("./withGoogleMap");

var _enhanceElement = require("./enhanceElement");

var _enhanceElement2 = _interopRequireDefault(_enhanceElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INFO_WINDOW = exports.INFO_WINDOW = "__SECRET_INFO_WINDOW_DO_NOT_USE_OR_YOU_WILL_BE_FIRED";

var controlledPropTypes = {
  // NOTICE!!!!!!
  //
  // Only expose those with getters & setters in the table as controlled props.
  //
  // [].map.call($0.querySelectorAll("tr>td>code", function(it){ return it.textContent; })
  //    .filter(function(it){ return it.match(/^set/) && !it.match(/^setMap/); })
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#InfoWindow
  content: _react.PropTypes.any,
  options: _react.PropTypes.object,
  position: _react.PropTypes.any,
  zIndex: _react.PropTypes.number
};

var defaultUncontrolledPropTypes = (0, _enhanceElement.addDefaultPrefixToPropTypes)(controlledPropTypes);

var eventMap = {
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#InfoWindow
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
  onCloseClick: "closeclick"
};

var publicMethodMap = {
  // Public APIs
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#InfoWindow
  //
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
  //    .filter(function(it){ return it.match(/^get/) && !it.match(/Map$/); })

  getContent: function getContent() {/* TODO: children */},
  getPosition: function getPosition(infoWindow) {
    return infoWindow.getPosition();
  },
  getZIndex: function getZIndex(infoWindow) {
    return infoWindow.getZIndex();
  }
};

var controlledPropUpdaterMap = {
  // children(children, component) {
  //   TODO:
  //   setContentForOptionalReactElement(children, component.getInfoWindow());
  // },

  content: function content(infoWindow, _content) {
    infoWindow.setContent(_content);
  },
  options: function options(infoWindow, _options) {
    infoWindow.setOptions(_options);
  },
  position: function position(infoWindow, _position) {
    infoWindow.setPosition(_position);
  },
  zIndex: function zIndex(infoWindow, _zIndex) {
    infoWindow.setZIndex(_zIndex);
  }
};

function getInstanceFromComponent(component) {
  return component.state[INFO_WINDOW];
}

exports.default = (0, _flowRight3.default)(_react2.default.createClass, (0, _enhanceElement2.default)(getInstanceFromComponent, publicMethodMap, eventMap, controlledPropUpdaterMap))({
  displayName: "InfoWindow",

  propTypes: (0, _extends3.default)({}, controlledPropTypes, defaultUncontrolledPropTypes),

  contextTypes: (0, _defineProperty3.default)({}, _withGoogleMap.MAP, _react.PropTypes.object),

  getInitialState: function getInitialState() {
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#InfoWindow
    var infoWindow = new google.maps.InfoWindow((0, _extends3.default)({
      map: this.context[_withGoogleMap.MAP]
    }, (0, _enhanceElement.collectUncontrolledAndControlledProps)(defaultUncontrolledPropTypes, controlledPropTypes, this.props)));
    return (0, _defineProperty3.default)({}, INFO_WINDOW, infoWindow);
  },
  componentWillUnmount: function componentWillUnmount() {
    var infoWindow = this.state[INFO_WINDOW];
    if (infoWindow) {
      infoWindow.setMap(null);
    }
  },
  render: function render() {
    return false;
  }
});