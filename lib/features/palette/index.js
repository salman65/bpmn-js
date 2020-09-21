import PaletteModule from '@salman65/diagram-js/lib/features/palette';
import CreateModule from '@salman65/diagram-js/lib/features/create';
import SpaceToolModule from '@salman65/diagram-js/lib/features/space-tool';
import LassoToolModule from '@salman65/diagram-js/lib/features/lasso-tool';
import HandToolModule from '@salman65/diagram-js/lib/features/hand-tool';
import GlobalConnectModule from '@salman65/diagram-js/lib/features/global-connect';
import translate from '@salman65/diagram-js/lib/i18n/translate';

import PaletteProvider from './PaletteProvider';

export default {
  __depends__: [
    PaletteModule,
    CreateModule,
    SpaceToolModule,
    LassoToolModule,
    HandToolModule,
    GlobalConnectModule,
    translate
  ],
  __init__: [ 'paletteProvider' ],
  paletteProvider: [ 'type', PaletteProvider ]
};
