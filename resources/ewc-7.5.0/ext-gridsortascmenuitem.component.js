import ElementParser from "./common/ElementParser.js";
import Ext_grid_menu_SortAsc from "./Ext/grid/menu/SortAsc.js";

export default class EWCGridsortascmenuitem extends Ext_grid_menu_SortAsc {
    constructor () {
        super( [], [] );
        this.xtype = "gridsortascmenuitem";
    }
}
try {
    if ( globalThis.customElements.get( "ext-gridsortascmenuitem" ) == undefined ) {
        globalThis.customElements.define( "ext-gridsortascmenuitem", ElementParser.withParsedCallback( EWCGridsortascmenuitem ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-gridsortascmenuitem" ) == undefined ) {
        globalThis.customElements.define( "ext-gridsortascmenuitem", EWCGridsortascmenuitem );
    }
}
