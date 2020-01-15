//import Ext_panel_Header from '@sencha/ext-runtime-base/dist/./Ext/panel/Header.js';
import Ext_panel_Header from './Ext/panel/Header.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCPanelheader extends Ext_panel_Header {
    constructor() {
        super ([], []);
        this.xtype = 'panelheader';
    }

}
window.customElements.define('ext-panelheader', HTMLParsedElement.withParsedCallback(EWCPanelheader));

