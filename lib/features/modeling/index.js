import BehaviorModule from './behavior';
import RulesModule from '../rules';
import DiOrderingModule from '../di-ordering';
import OrderingModule from '../ordering';
import ReplaceModule from '../replace';

import CommandModule from '@salman65/diagram-js/lib/command';
import TooltipsModule from '@salman65/diagram-js/lib/features/tooltips';
import LabelSupportModule from '@salman65/diagram-js/lib/features/label-support';
import AttachSupportModule from '@salman65/diagram-js/lib/features/attach-support';
import SelectionModule from '@salman65/diagram-js/lib/features/selection';
import ChangeSupportModule from '@salman65/diagram-js/lib/features/change-support';
import SpaceToolModule from '@salman65/diagram-js/lib/features/space-tool';

import BpmnFactory from './BpmnFactory';
import BpmnUpdater from './BpmnUpdater';
import ElementFactory from './ElementFactory';
import Modeling from './Modeling';
import BpmnLayouter from './BpmnLayouter';
import CroppingConnectionDocking from '@salman65/diagram-js/lib/layout/CroppingConnectionDocking';


export default {
  __init__: [
    'modeling',
    'bpmnUpdater'
  ],
  __depends__: [
    BehaviorModule,
    RulesModule,
    DiOrderingModule,
    OrderingModule,
    ReplaceModule,
    CommandModule,
    TooltipsModule,
    LabelSupportModule,
    AttachSupportModule,
    SelectionModule,
    ChangeSupportModule,
    SpaceToolModule
  ],
  bpmnFactory: [ 'type', BpmnFactory ],
  bpmnUpdater: [ 'type', BpmnUpdater ],
  elementFactory: [ 'type', ElementFactory ],
  modeling: [ 'type', Modeling ],
  layouter: [ 'type', BpmnLayouter ],
  connectionDocking: [ 'type', CroppingConnectionDocking ]
};