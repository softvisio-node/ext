import ElementParser from "./common/ElementParser.js";
import Ext_field_trigger_Clear from "./Ext/field/trigger/Clear.js";

export default class EWCCleartrigger extends Ext_field_trigger_Clear {
    constructor () {
        super( [], [] );
        this.xtype = "cleartrigger";
    }
}
try {
    if ( globalThis.customElements.get( "ext-cleartrigger" ) == undefined ) {
        globalThis.customElements.define( "ext-cleartrigger", ElementParser.withParsedCallback( EWCCleartrigger ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-cleartrigger" ) == undefined ) {
        globalThis.customElements.define( "ext-cleartrigger", EWCCleartrigger );
    }
}
