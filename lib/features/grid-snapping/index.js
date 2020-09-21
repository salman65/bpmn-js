import BpmnGridSnapping from './BpmnGridSnapping';
import GridSnappingModule from '@salman65/diagram-js/lib/features/grid-snapping';

import GridSnappingBehaviorModule from './behavior';

export default {
  __depends__: [
    GridSnappingModule,
    GridSnappingBehaviorModule
  ],
  __init__: [ 'bpmnGridSnapping' ],
  bpmnGridSnapping: [ 'type', BpmnGridSnapping ]
};