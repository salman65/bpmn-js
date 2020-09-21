import DirectEditingModule from '@salman65/diagram-js-direct-editing';
import ContextPadModule from '@salman65/diagram-js/lib/features/context-pad';
import SelectionModule from '@salman65/diagram-js/lib/features/selection';
import ConnectModule from '@salman65/diagram-js/lib/features/connect';
import CreateModule from '@salman65/diagram-js/lib/features/create';
import PopupMenuModule from '../popup-menu';

import ContextPadProvider from './ContextPadProvider';

export default {
  __depends__: [
    DirectEditingModule,
    ContextPadModule,
    SelectionModule,
    ConnectModule,
    CreateModule,
    PopupMenuModule
  ],
  __init__: [ 'contextPadProvider' ],
  contextPadProvider: [ 'type', ContextPadProvider ]
};