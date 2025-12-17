import ElementParser from "./common/ElementParser.js";
import Ext_field_trigger_Operator from "./Ext/field/trigger/Operator.js";

export default class EWCOperatortrigger extends Ext_field_trigger_Operator {
    constructor () {
        super( [], [] );
        this.xtype = "operatortrigger";
    }
}
try {
    if ( globalThis.customElements.get( "ext-operatortrigger" ) == undefined ) {
        globalThis.customElements.define( "ext-operatortrigger", ElementParser.withParsedCallback( EWCOperatortrigger ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-operatortrigger" ) == undefined ) {
        globalThis.customElements.define( "ext-operatortrigger", EWCOperatortrigger );
    }
}
