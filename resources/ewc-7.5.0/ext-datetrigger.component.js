import ElementParser from "./common/ElementParser.js";
import Ext_field_trigger_Date from "./Ext/field/trigger/Date.js";

export default class EWCDatetrigger extends Ext_field_trigger_Date {
    constructor () {
        super( [], [] );
        this.xtype = "datetrigger";
    }
}
try {
    if ( globalThis.customElements.get( "ext-datetrigger" ) == undefined ) {
        globalThis.customElements.define( "ext-datetrigger", ElementParser.withParsedCallback( EWCDatetrigger ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-datetrigger" ) == undefined ) {
        globalThis.customElements.define( "ext-datetrigger", EWCDatetrigger );
    }
}
