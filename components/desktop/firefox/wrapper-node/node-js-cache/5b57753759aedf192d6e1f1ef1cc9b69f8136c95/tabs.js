"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateTab = updateTab;
exports.addTab = addTab;
exports.moveTab = moveTab;
exports.closeTab = closeTab;
exports.closeTabs = closeTabs;

var _devtoolsSourceMap = require("devtools/client/shared/source-map/index.js");

var _editor = require("../utils/editor/index");

var _sources = require("./sources/index");

var _selectors = require("../selectors/index");

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at <http://mozilla.org/MPL/2.0/>. */

/**
 * Redux actions for the editor tabs
 * @module actions/tabs
 */

function updateTab(source, framework) {
  const { url, id: sourceId } = source;
  const isOriginal = (0, _devtoolsSourceMap.isOriginalId)(source.id);

  return {
    type: "UPDATE_TAB",
    url,
    framework,
    isOriginal,
    sourceId
  };
}

function addTab(source) {
  const { url, id: sourceId } = source;
  const isOriginal = (0, _devtoolsSourceMap.isOriginalId)(source.id);

  return {
    type: "ADD_TAB",
    url,
    isOriginal,
    sourceId
  };
}

function moveTab(url, tabIndex) {
  return {
    type: "MOVE_TAB",
    url,
    tabIndex
  };
}

/**
 * @memberof actions/tabs
 * @static
 */
function closeTab(cx, source) {
  return ({ dispatch, getState, client }) => {
    const { id, url } = source;

    (0, _editor.removeDocument)(id);

    const tabs = (0, _selectors.removeSourceFromTabList)((0, _selectors.getSourceTabs)(getState()), source);
    const sourceId = (0, _selectors.getNewSelectedSourceId)(getState(), tabs);
    dispatch({ type: "CLOSE_TAB", url, tabs });
    dispatch((0, _sources.selectSource)(cx, sourceId));
  };
}

/**
 * @memberof actions/tabs
 * @static
 */
function closeTabs(cx, urls) {
  return ({ dispatch, getState, client }) => {
    const sources = urls.map(url => (0, _selectors.getSourceByURL)(getState(), url)).filter(Boolean);
    sources.map(source => (0, _editor.removeDocument)(source.id));

    const tabs = (0, _selectors.removeSourcesFromTabList)((0, _selectors.getSourceTabs)(getState()), sources);
    dispatch({ type: "CLOSE_TABS", sources, tabs });

    const sourceId = (0, _selectors.getNewSelectedSourceId)(getState(), tabs);
    dispatch((0, _sources.selectSource)(cx, sourceId));
  };
}