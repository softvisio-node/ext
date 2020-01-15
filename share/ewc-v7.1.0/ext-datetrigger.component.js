//import Ext_field_trigger_Date from '@sencha/ext-runtime-base/dist/./Ext/field/trigger/Date.js';
import Ext_field_trigger_Date from './Ext/field/trigger/Date.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCDatetrigger extends Ext_field_trigger_Date {
    constructor() {
        super ([], []);
        this.xtype = 'datetrigger';
    }

}
window.customElements.define('ext-datetrigger', HTMLParsedElement.withParsedCallback(EWCDatetrigger));

