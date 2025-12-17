import ElementParser from "./common/ElementParser.js";
import Ext_Sheet from "./Ext/Sheet.js";

export default class EWCSheet extends Ext_Sheet {
    constructor () {
        super( [], [] );
        this.xtype = "sheet";
    }
}
try {
    if ( globalThis.customElements.get( "ext-sheet" ) == undefined ) {
        globalThis.customElements.define( "ext-sheet", ElementParser.withParsedCallback( EWCSheet ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-sheet" ) == undefined ) {
        globalThis.customElements.define( "ext-sheet", EWCSheet );
    }
}
