import ElementParser from "./common/ElementParser.js";
import Ext_grid_column_Selection from "./Ext/grid/column/Selection.js";

export default class EWCSelectioncolumn extends Ext_grid_column_Selection {
    constructor () {
        super( [], [] );
        this.xtype = "selectioncolumn";
    }
}
try {
    if ( globalThis.customElements.get( "ext-selectioncolumn" ) == undefined ) {
        globalThis.customElements.define( "ext-selectioncolumn", ElementParser.withParsedCallback( EWCSelectioncolumn ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-selectioncolumn" ) == undefined ) {
        globalThis.customElements.define( "ext-selectioncolumn", EWCSelectioncolumn );
    }
}
