import ElementParser from "./common/ElementParser.js";
import Ext_Chip from "./Ext/Chip.js";

export default class EWCChip extends Ext_Chip {
    constructor () {
        super( [], [] );
        this.xtype = "chip";
    }
}
try {
    if ( globalThis.customElements.get( "ext-chip" ) == undefined ) {
        globalThis.customElements.define( "ext-chip", ElementParser.withParsedCallback( EWCChip ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-chip" ) == undefined ) {
        globalThis.customElements.define( "ext-chip", EWCChip );
    }
}
