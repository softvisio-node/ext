//import Ext_form_Field from '@sencha/ext-runtime-base/dist/./Ext/form/Field.js';
import Ext_form_Field from './Ext/form/Field.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCField extends Ext_form_Field {
    constructor() {
        super ([], []);
        this.xtype = 'field';
    }

}
window.customElements.define('ext-field', HTMLParsedElement.withParsedCallback(EWCField));

