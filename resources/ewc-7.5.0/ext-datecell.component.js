import ElementParser from "./common/ElementParser.js";
import Ext_grid_cell_Date from "./Ext/grid/cell/Date.js";

export default class EWCDatecell extends Ext_grid_cell_Date {
    constructor () {
        super( [], [] );
        this.xtype = "datecell";
    }
}
try {
    if ( globalThis.customElements.get( "ext-datecell" ) == undefined ) {
        globalThis.customElements.define( "ext-datecell", ElementParser.withParsedCallback( EWCDatecell ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-datecell" ) == undefined ) {
        globalThis.customElements.define( "ext-datecell", EWCDatecell );
    }
}
