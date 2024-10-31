'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */

function transformStateWithClones(state, actions) {
  // write code here
  const result = [];
  let copy = { ...state };

  for (const object of actions) {
    switch (object.type) {
      case 'addProperties':
        copy = Object.assign({}, copy, object.extraData);
        break;

      case 'removeProperties':
        copy = removeProperties(copy, object.keysToRemove);
        break;

      case 'clear':
        copy = {};
        break;
    }
    result.push(copy);
  }

  function removeProperties(input, keysToRemove) {
    const newInput = { ...input };

    for (const key of keysToRemove) {
      delete newInput[key];
    }

    return newInput;
  }

  return result;
}

module.exports = transformStateWithClones;
