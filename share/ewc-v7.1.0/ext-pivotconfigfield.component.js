//import Ext_pivot_plugin_configurator_Column from '@sencha/ext-runtime-base/dist/./Ext/pivot/plugin/configurator/Column.js';
import Ext_pivot_plugin_configurator_Column from './Ext/pivot/plugin/configurator/Column.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCPivotconfigfield extends Ext_pivot_plugin_configurator_Column {
    constructor() {
        super ([], []);
        this.xtype = 'pivotconfigfield';
    }

}
window.customElements.define('ext-pivotconfigfield', HTMLParsedElement.withParsedCallback(EWCPivotconfigfield));

