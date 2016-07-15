import _ from "lodash";

import {
  default as React,
  PropTypes,
} from "react";

import {
  MAP,
} from "./withGoogleMap";

import {
  addDefaultPrefixToPropTypes,
  collectUncontrolledAndControlledProps,
  default as enhanceElement,
} from "./enhanceElement";

export const INFO_WINDOW = `__SECRET_INFO_WINDOW_DO_NOT_USE_OR_YOU_WILL_BE_FIRED`;

const controlledPropTypes = {
  // NOTICE!!!!!!
  //
  // Only expose those with getters & setters in the table as controlled props.
  //
  // [].map.call($0.querySelectorAll("tr>td>code", function(it){ return it.textContent; })
  //    .filter(function(it){ return it.match(/^set/) && !it.match(/^setMap/); })
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#InfoWindow
  content: PropTypes.any,
  options: PropTypes.object,
  position: PropTypes.any,
  zIndex: PropTypes.number,
};

const defaultUncontrolledPropTypes = addDefaultPrefixToPropTypes(controlledPropTypes);

const eventMap = {
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#InfoWindow
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
  onCloseClick: `closeclick`,
  // `content_changed`,
  // `domready`,
  // `position_changed`,
  // `zindex_changed`,
};

const publicMethodMap = {
  // Public APIs
  //
  // https://developers.google.com/maps/documentation/javascript/3.exp/reference#InfoWindow
  //
  // [].map.call($0.querySelectorAll("tr>td>code"), function(it){ return it.textContent; })
  //    .filter(function(it){ return it.match(/^get/) && !it.match(/Map$/); })
  getContent() { /* TODO: children */ },

  getPosition(infoWindow) { return infoWindow.getPosition(); },

  getZIndex(infoWindow) { return infoWindow.getZIndex(); },
  // END - Public APIs
};

const controlledPropUpdaterMap = {
  // children(children, component) {
  //   TODO:
  //   setContentForOptionalReactElement(children, component.getInfoWindow());
  // },
  content(infoWindow, content) { infoWindow.setContent(content); },
  options(infoWindow, options) { infoWindow.setOptions(options); },
  position(infoWindow, position) { infoWindow.setPosition(position); },
  zIndex(infoWindow, zIndex) { infoWindow.setZIndex(zIndex); },
};

function getInstanceFromComponent(component) {
  return component.state[INFO_WINDOW];
}

export default _.flowRight(
  React.createClass,
  enhanceElement(getInstanceFromComponent, publicMethodMap, eventMap, controlledPropUpdaterMap),
)({
  displayName: `InfoWindow`,

  propTypes: {
    ...controlledPropTypes,
    ...defaultUncontrolledPropTypes,
  },

  contextTypes: {
    [MAP]: PropTypes.object,
  },

  getInitialState() {
    // https://developers.google.com/maps/documentation/javascript/3.exp/reference#InfoWindow
    const infoWindow = new google.maps.InfoWindow({
      map: this.context[MAP],
      ...collectUncontrolledAndControlledProps(
        defaultUncontrolledPropTypes,
        controlledPropTypes,
        this.props
      ),
    });
    return {
      [INFO_WINDOW]: infoWindow,
    };
  },

  componentWillUnmount() {
    const infoWindow = this.state[INFO_WINDOW];
    if (infoWindow) {
      infoWindow.setMap(null);
    }
  },

  render() {
    return false;
  },
});
