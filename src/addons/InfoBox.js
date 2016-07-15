import _ from "lodash";

import {
  default as React,
  PropTypes,
} from "react";

import {
  default as GoogleMapsInfobox,
} from "google-maps-infobox";

import {
  MAP,
} from "../withGoogleMap";

import {
  addDefaultPrefixToPropTypes,
  collectUncontrolledAndControlledProps,
  default as enhanceElement,
} from "../enhanceElement";

export const INFO_BOX = `__SECRET_INFO_BOX_DO_NOT_USE_OR_YOU_WILL_BE_FIRED`;

const controlledPropTypes = {
  // NOTICE!!!!!!
  //
  // Only expose those with getters & setters in the table as controlled props.
  //
  // http://google-maps-utility-library-v3.googlecode.com/svn/trunk/infobox/docs/reference.html
  content: PropTypes.any,
  options: PropTypes.object,
  position: PropTypes.any,
  visible: PropTypes.bool,
  zIndex: PropTypes.number,
};

const defaultUncontrolledPropTypes = addDefaultPrefixToPropTypes(controlledPropTypes);

const eventMap = {
  // http://google-maps-utility-library-v3.googlecode.com/svn/trunk/infobox/docs/reference.html
  onCloseClick: `closeclick`,
  // `content_changed`,
  // `domready`,
  // `position_changed`,
  // `zindex_changed`,
};

const publicMethodMap = {
  // Public APIs
  //
  // http://google-maps-utility-library-v3.googlecode.com/svn/trunk/infobox/docs/reference.html
  getContent() { /* TODO: children */ },

  getPosition(infoBox) { return infoBox.getPosition(); },

  getVisible(infoBox) { return infoBox.getVisible(); },

  getZIndex(infoBox) { return infoBox.getZIndex(); },
  // END - Public APIs
};

const controlledPropUpdaterMap = {
  // children(children, component) {
  // TODO
  //   setContentForOptionalReactElement(children, component.getInfoBox());
  // },
  content(infoBox, content) { infoBox.setContent(content); },
  options(infoBox, options) { infoBox.setOptions(options); },
  position(infoBox, position) { infoBox.setPosition(position); },
  visible(infoBox, visible) { infoBox.setVisible(visible); },
  zIndex(infoBox, zIndex) { infoBox.setZIndex(zIndex); },
};

function getInstanceFromComponent(component) {
  return component.state[INFO_BOX];
}

export default _.flowRight(
  React.createClass,
  enhanceElement(getInstanceFromComponent, publicMethodMap, eventMap, controlledPropUpdaterMap),
)({
  displayName: `InfoBox`,

  propTypes: {
    ...controlledPropTypes,
    ...defaultUncontrolledPropTypes,
  },

  contextTypes: {
    [MAP]: PropTypes.object,
  },

  getInitialState() {
    // http://google-maps-utility-library-v3.googlecode.com/svn/trunk/infobox/docs/reference.html
    const infoBox = new GoogleMapsInfobox({
      map: this.context[MAP],
      ...collectUncontrolledAndControlledProps(
        defaultUncontrolledPropTypes,
        controlledPropTypes,
        this.props
      ),
    });
    return {
      [INFO_BOX]: infoBox,
    };
  },

  componentWillUnmount() {
    const infoBox = this.state[INFO_BOX];
    if (infoBox) {
      infoBox.setMap(null);
    }
  },

  render() {
    return false;
  },
});
