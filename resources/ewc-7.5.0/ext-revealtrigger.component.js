import ElementParser from "./common/ElementParser.js";
import Ext_field_trigger_Reveal from "./Ext/field/trigger/Reveal.js";

export default class EWCRevealtrigger extends Ext_field_trigger_Reveal {
    constructor () {
        super( [], [] );
        this.xtype = "revealtrigger";
    }
}
try {
    if ( globalThis.customElements.get( "ext-revealtrigger" ) == undefined ) {
        globalThis.customElements.define( "ext-revealtrigger", ElementParser.withParsedCallback( EWCRevealtrigger ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-revealtrigger" ) == undefined ) {
        globalThis.customElements.define( "ext-revealtrigger", EWCRevealtrigger );
    }
}
