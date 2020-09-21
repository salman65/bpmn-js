import DistributeElementsModule from '@salman65/diagram-js/lib/features/distribute-elements';

import BpmnDistributeElements from './BpmnDistributeElements';


export default {
  __depends__: [
    DistributeElementsModule
  ],
  __init__: [ 'bpmnDistributeElements' ],
  bpmnDistributeElements: [ 'type', BpmnDistributeElements ]
};
