import 'babel-polyfill';

import { Colek } from './colek';
import { HtmlTagWrapper } from './html-wrapper';

const WrappedColek = HtmlTagWrapper(Colek);

export default { Colek: WrappedColek };