import ElementParser from "./common/ElementParser.js";
import Ext_grid_menu_SortDesc from "./Ext/grid/menu/SortDesc.js";

export default class EWCGridsortdescmenuitem extends Ext_grid_menu_SortDesc {
    constructor () {
        super( [], [] );
        this.xtype = "gridsortdescmenuitem";
    }
}
try {
    if ( globalThis.customElements.get( "ext-gridsortdescmenuitem" ) == undefined ) {
        globalThis.customElements.define( "ext-gridsortdescmenuitem", ElementParser.withParsedCallback( EWCGridsortdescmenuitem ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-gridsortdescmenuitem" ) == undefined ) {
        globalThis.customElements.define( "ext-gridsortdescmenuitem", EWCGridsortdescmenuitem );
    }
}
