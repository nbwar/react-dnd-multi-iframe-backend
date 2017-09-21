import MultiIframeBackend from './MultiIframeBackend';
import getEmptyImage from './getEmptyImage';
import * as NativeTypes from './NativeTypes';

export { NativeTypes, getEmptyImage };

export default function createMultiIframeBackend(manager) {
  return new MultiIframeBackend(manager);
}
