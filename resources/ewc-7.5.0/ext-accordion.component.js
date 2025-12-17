import ElementParser from "./common/ElementParser.js";
import Ext_panel_Accordion from "./Ext/panel/Accordion.js";

export default class EWCAccordion extends Ext_panel_Accordion {
    constructor () {
        super( [], [] );
        this.xtype = "accordion";
    }
}
try {
    if ( globalThis.customElements.get( "ext-accordion" ) == undefined ) {
        globalThis.customElements.define( "ext-accordion", ElementParser.withParsedCallback( EWCAccordion ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-accordion" ) == undefined ) {
        globalThis.customElements.define( "ext-accordion", EWCAccordion );
    }
}
