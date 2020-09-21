import CopyPasteModule from '../copy-paste';
import ReplaceModule from '@salman65/diagram-js/lib/features/replace';
import SelectionModule from '@salman65/diagram-js/lib/features/selection';

import BpmnReplace from './BpmnReplace';

export default {
  __depends__: [
    CopyPasteModule,
    ReplaceModule,
    SelectionModule
  ],
  bpmnReplace: [ 'type', BpmnReplace ]
};
