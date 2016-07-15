"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.POLYGON = undefined;

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

var POLYGON = exports.POLYGON = "__SECRET_POLYGON_DO_NOT_USE_OR_YOU_WILL_BE_FIRED";

var controlledPropTypes = {
  // NOTICE!!!!!!
  //
  // Only expose those with getters & setters in the table as controlled props.
  //
  // [].map.call($0.querySelectorAll("tr>td>code", function(it){ return it.textContent; })
  //    .filter(function(it){ return it.match(/^set/) && !it.match(/^setMap/); })
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Polygon
  draggable: _react.PropTypes.bool,
  editable: _react.PropTypes.bool,
  options: _react.PropTypes.object,
  path: _react.PropTypes.any,
  paths: _react.PropTypes.any,
  visible: _react.PropTypes.bool
};

var defaultUncontrolledPropTypes = (0, _enhanceElement.addDefaultPrefixToPropTypes)(controlledPropTypes);

var eventMap = {
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Polygon
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
  onClick: "click"
};

var publicMethodMap = {
  // Public APIs
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Polygon
  //
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
  //    .filter(function(it){ return it.match(/^get/) && !it.match(/Map$/); })

  getDraggable: function getDraggable(polygon) {
    return polygon.getDraggable();
  },
  getEditable: function getEditable(polygon) {
    return polygon.getEditable();
  },
  getPath: function getPath(polygon) {
    return polygon.getPath();
  },
  getPaths: function getPaths(polygon) {
    return polygon.getPaths();
  },
  getVisible: function getVisible(polygon) {
    return polygon.getVisible();
  }
};

var controlledPropUpdaterMap = {
  draggable: function draggable(polygon, _draggable) {
    polygon.setDraggable(_draggable);
  },
  editable: function editable(polygon, _editable) {
    polygon.setEditable(_editable);
  },
  options: function options(polygon, _options) {
    polygon.setOptions(_options);
  },
  path: function path(polygon, _path) {
    polygon.setPath(_path);
  },
  paths: function paths(polygon, _paths) {
    polygon.setPaths(_paths);
  },
  visible: function visible(polygon, _visible) {
    polygon.setVisible(_visible);
  }
};

function getInstanceFromComponent(component) {
  return component.state[POLYGON];
}

exports.default = (0, _flowRight3.default)(_react2.default.createClass, (0, _enhanceElement2.default)(getInstanceFromComponent, publicMethodMap, eventMap, controlledPropUpdaterMap))({
  displayName: "Polygon",

  propTypes: (0, _extends3.default)({}, controlledPropTypes, defaultUncontrolledPropTypes),

  contextTypes: (0, _defineProperty3.default)({}, _withGoogleMap.MAP, _react.PropTypes.object),

  getInitialState: function getInitialState() {
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Polygon
    var polygon = new google.maps.Polygon((0, _extends3.default)({
      map: this.context[_withGoogleMap.MAP]
    }, (0, _enhanceElement.collectUncontrolledAndControlledProps)(defaultUncontrolledPropTypes, controlledPropTypes, this.props)));
    return (0, _defineProperty3.default)({}, POLYGON, polygon);
  },
  componentWillUnmount: function componentWillUnmount() {
    var polygon = this.state[POLYGON];
    if (polygon) {
      polygon.setMap(null);
    }
  },
  render: function render() {
    return false;
  }
});