//import Ext_d3_svg_Svg from '@sencha/ext-runtime-base/dist/./Ext/d3/svg/Svg.js';
import Ext_d3_svg_Svg from './Ext/d3/svg/Svg.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCD3_svg extends Ext_d3_svg_Svg {
    constructor() {
        super ([], []);
        this.xtype = 'd3-svg';
    }

}
window.customElements.define('ext-d3-svg', HTMLParsedElement.withParsedCallback(EWCD3_svg));

