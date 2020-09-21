import { getOrientation } from '@salman65/diagram-js/lib/layout/LayoutUtil';

export function getBoundaryAttachment(position, targetBounds) {

  var orientation = getOrientation(position, targetBounds, -15);

  if (orientation !== 'intersect') {
    return orientation;
  } else {
    return null;
  }
}