import createRuleBlock from './createRuleBlock';
import createReactDOMStyle from './createReactDOMStyle';
import i18nStyle from './i18nStyle';

const createPseudoClassRules = value => {
  const domStyle = createReactDOMStyle(i18nStyle(value));
  return createRuleBlock(domStyle);
};

export default createPseudoClassRules;
