import inherits from 'inherits';

import RuleProvider from '@salman65/diagram-js/lib/features/rules/RuleProvider';


export default function CustomRules(eventBus) {
  RuleProvider.call(this, eventBus);
}

CustomRules.$inject = [ 'eventBus' ];

inherits(CustomRules, RuleProvider);

CustomRules.prototype.init = function() {

  // placeholder
};