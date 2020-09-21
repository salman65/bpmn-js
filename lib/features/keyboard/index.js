import KeyboardModule from '@salman65/diagram-js/lib/features/keyboard';

import BpmnKeyboardBindings from './BpmnKeyboardBindings';

export default {
  __depends__: [
    KeyboardModule
  ],
  __init__: [ 'keyboardBindings' ],
  keyboardBindings: [ 'type', BpmnKeyboardBindings ]
};
