import ElementParser from "./common/ElementParser.js";
import Ext_grid_menu_Columns from "./Ext/grid/menu/Columns.js";

export default class EWCGridcolumnsmenu extends Ext_grid_menu_Columns {
    constructor () {
        super( [], [] );
        this.xtype = "gridcolumnsmenu";
    }
}
try {
    if ( globalThis.customElements.get( "ext-gridcolumnsmenu" ) == undefined ) {
        globalThis.customElements.define( "ext-gridcolumnsmenu", ElementParser.withParsedCallback( EWCGridcolumnsmenu ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-gridcolumnsmenu" ) == undefined ) {
        globalThis.customElements.define( "ext-gridcolumnsmenu", EWCGridcolumnsmenu );
    }
}
