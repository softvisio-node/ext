import ElementParser from "./common/ElementParser.js";
import Ext_grid_CellEditor from "./Ext/grid/CellEditor.js";

export default class EWCCelleditor extends Ext_grid_CellEditor {
    constructor () {
        super( [], [] );
        this.xtype = "celleditor";
    }
}
try {
    if ( globalThis.customElements.get( "ext-celleditor" ) == undefined ) {
        globalThis.customElements.define( "ext-celleditor", ElementParser.withParsedCallback( EWCCelleditor ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-celleditor" ) == undefined ) {
        globalThis.customElements.define( "ext-celleditor", EWCCelleditor );
    }
}
