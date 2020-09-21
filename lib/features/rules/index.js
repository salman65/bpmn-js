import RulesModule from '@salman65/diagram-js/lib/features/rules';

import BpmnRules from './BpmnRules';

export default {
  __depends__: [
    RulesModule
  ],
  __init__: [ 'bpmnRules' ],
  bpmnRules: [ 'type', BpmnRules ]
};
