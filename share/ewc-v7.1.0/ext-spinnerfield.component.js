//import Ext_form_Spinner from '@sencha/ext-runtime-base/dist/./Ext/form/Spinner.js';
import Ext_form_Spinner from './Ext/form/Spinner.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCSpinnerfield extends Ext_form_Spinner {
    constructor() {
        super ([], []);
        this.xtype = 'spinnerfield';
    }

}
window.customElements.define('ext-spinnerfield', HTMLParsedElement.withParsedCallback(EWCSpinnerfield));

