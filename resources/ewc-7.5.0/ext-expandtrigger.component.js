import ElementParser from "./common/ElementParser.js";
import Ext_field_trigger_Expand from "./Ext/field/trigger/Expand.js";

export default class EWCExpandtrigger extends Ext_field_trigger_Expand {
    constructor () {
        super( [], [] );
        this.xtype = "expandtrigger";
    }
}
try {
    if ( globalThis.customElements.get( "ext-expandtrigger" ) == undefined ) {
        globalThis.customElements.define( "ext-expandtrigger", ElementParser.withParsedCallback( EWCExpandtrigger ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-expandtrigger" ) == undefined ) {
        globalThis.customElements.define( "ext-expandtrigger", EWCExpandtrigger );
    }
}
