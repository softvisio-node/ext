import ElementParser from "./common/ElementParser.js";
import Ext_grid_menu_AddGroup from "./Ext/grid/menu/AddGroup.js";

export default class EWCGridaddgroupmenuitem extends Ext_grid_menu_AddGroup {
    constructor () {
        super( [], [] );
        this.xtype = "gridaddgroupmenuitem";
    }
}
try {
    if ( globalThis.customElements.get( "ext-gridaddgroupmenuitem" ) == undefined ) {
        globalThis.customElements.define( "ext-gridaddgroupmenuitem", ElementParser.withParsedCallback( EWCGridaddgroupmenuitem ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-gridaddgroupmenuitem" ) == undefined ) {
        globalThis.customElements.define( "ext-gridaddgroupmenuitem", EWCGridaddgroupmenuitem );
    }
}
