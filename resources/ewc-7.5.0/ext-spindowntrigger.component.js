import ElementParser from "./common/ElementParser.js";
import Ext_field_trigger_SpinDown from "./Ext/field/trigger/SpinDown.js";

export default class EWCSpindowntrigger extends Ext_field_trigger_SpinDown {
    constructor () {
        super( [], [] );
        this.xtype = "spindowntrigger";
    }
}
try {
    if ( globalThis.customElements.get( "ext-spindowntrigger" ) == undefined ) {
        globalThis.customElements.define( "ext-spindowntrigger", ElementParser.withParsedCallback( EWCSpindowntrigger ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-spindowntrigger" ) == undefined ) {
        globalThis.customElements.define( "ext-spindowntrigger", EWCSpindowntrigger );
    }
}
