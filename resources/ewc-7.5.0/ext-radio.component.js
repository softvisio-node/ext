import ElementParser from "./common/ElementParser.js";
import Ext_form_Radio from "./Ext/form/Radio.js";

export default class EWCRadio extends Ext_form_Radio {
    constructor () {
        super( [], [] );
        this.xtype = "radio";
    }
}
try {
    if ( globalThis.customElements.get( "ext-radio" ) == undefined ) {
        globalThis.customElements.define( "ext-radio", ElementParser.withParsedCallback( EWCRadio ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-radio" ) == undefined ) {
        globalThis.customElements.define( "ext-radio", EWCRadio );
    }
}
