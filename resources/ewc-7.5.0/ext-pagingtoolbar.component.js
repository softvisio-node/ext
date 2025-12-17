import ElementParser from "./common/ElementParser.js";
import Ext_grid_PagingToolbar from "./Ext/grid/PagingToolbar.js";

export default class EWCPagingtoolbar extends Ext_grid_PagingToolbar {
    constructor () {
        super( [], [] );
        this.xtype = "pagingtoolbar";
    }
}
try {
    if ( globalThis.customElements.get( "ext-pagingtoolbar" ) == undefined ) {
        globalThis.customElements.define( "ext-pagingtoolbar", ElementParser.withParsedCallback( EWCPagingtoolbar ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-pagingtoolbar" ) == undefined ) {
        globalThis.customElements.define( "ext-pagingtoolbar", EWCPagingtoolbar );
    }
}
