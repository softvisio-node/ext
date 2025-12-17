import ElementParser from "./common/ElementParser.js";
import Ext_grid_column_Template from "./Ext/grid/column/Template.js";

export default class EWCColumn extends Ext_grid_column_Template {
    constructor () {
        super( [], [] );
        this.xtype = "column";
    }
}
try {
    if ( globalThis.customElements.get( "ext-column" ) == undefined ) {
        globalThis.customElements.define( "ext-column", ElementParser.withParsedCallback( EWCColumn ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-column" ) == undefined ) {
        globalThis.customElements.define( "ext-column", EWCColumn );
    }
}
