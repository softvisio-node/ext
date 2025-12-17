import ElementParser from "./common/ElementParser.js";
import Ext_grid_column_Drag from "./Ext/grid/column/Drag.js";

export default class EWCDragcolumn extends Ext_grid_column_Drag {
    constructor () {
        super( [], [] );
        this.xtype = "dragcolumn";
    }
}
try {
    if ( globalThis.customElements.get( "ext-dragcolumn" ) == undefined ) {
        globalThis.customElements.define( "ext-dragcolumn", ElementParser.withParsedCallback( EWCDragcolumn ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-dragcolumn" ) == undefined ) {
        globalThis.customElements.define( "ext-dragcolumn", EWCDragcolumn );
    }
}
