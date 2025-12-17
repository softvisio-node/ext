import ElementParser from "./common/ElementParser.js";
import Ext_field_trigger_Trigger from "./Ext/field/trigger/Trigger.js";

export default class EWCTrigger extends Ext_field_trigger_Trigger {
    constructor () {
        super( [], [] );
        this.xtype = "trigger";
    }
}
try {
    if ( globalThis.customElements.get( "ext-trigger" ) == undefined ) {
        globalThis.customElements.define( "ext-trigger", ElementParser.withParsedCallback( EWCTrigger ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-trigger" ) == undefined ) {
        globalThis.customElements.define( "ext-trigger", EWCTrigger );
    }
}
