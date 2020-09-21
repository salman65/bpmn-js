import CroppingConnectionDocking from '@salman65/diagram-js/lib/layout/CroppingConnectionDocking';

import {
  getOrientation
} from '@salman65/diagram-js/lib/layout/LayoutUtil';

import inherits from 'inherits';


export default function LoggingCroppingConnectionDocking(injector) {
  injector.invoke(CroppingConnectionDocking, this);
}

LoggingCroppingConnectionDocking.$inject = [
  'injector'
];

inherits(LoggingCroppingConnectionDocking, CroppingConnectionDocking);

window.noIntersectCount = 0;

window.noIntersect = [];

LoggingCroppingConnectionDocking.prototype._getIntersection = function(shape, connection, takeFirst) {

  var intersection = CroppingConnectionDocking.prototype._getIntersection.call(this, shape, connection, takeFirst);

  if (!intersection) {

    if (getOrientation(connection.source, connection.target) !== 'intersect') {
      window.noIntersectCount++;

      window.noIntersect.push([
        connection,
        this._getShapePath(shape),
        this._getConnectionPath(connection)
      ]);
    }
  }

  return intersection;
};