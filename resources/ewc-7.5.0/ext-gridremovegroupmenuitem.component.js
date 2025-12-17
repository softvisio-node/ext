import ElementParser from "./common/ElementParser.js";
import Ext_grid_menu_RemoveGroup from "./Ext/grid/menu/RemoveGroup.js";

export default class EWCGridremovegroupmenuitem extends Ext_grid_menu_RemoveGroup {
    constructor () {
        super( [], [] );
        this.xtype = "gridremovegroupmenuitem";
    }
}
try {
    if ( globalThis.customElements.get( "ext-gridremovegroupmenuitem" ) == undefined ) {
        globalThis.customElements.define( "ext-gridremovegroupmenuitem", ElementParser.withParsedCallback( EWCGridremovegroupmenuitem ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-gridremovegroupmenuitem" ) == undefined ) {
        globalThis.customElements.define( "ext-gridremovegroupmenuitem", EWCGridremovegroupmenuitem );
    }
}
