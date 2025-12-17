import ElementParser from "./common/ElementParser.js";
import Ext_field_trigger_SpinUp from "./Ext/field/trigger/SpinUp.js";

export default class EWCSpinuptrigger extends Ext_field_trigger_SpinUp {
    constructor () {
        super( [], [] );
        this.xtype = "spinuptrigger";
    }
}
try {
    if ( globalThis.customElements.get( "ext-spinuptrigger" ) == undefined ) {
        globalThis.customElements.define( "ext-spinuptrigger", ElementParser.withParsedCallback( EWCSpinuptrigger ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-spinuptrigger" ) == undefined ) {
        globalThis.customElements.define( "ext-spinuptrigger", EWCSpinuptrigger );
    }
}
