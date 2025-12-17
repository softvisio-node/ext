import ElementParser from "./common/ElementParser.js";
import Ext_grid_menu_ShowInGroups from "./Ext/grid/menu/ShowInGroups.js";

export default class EWCGridshowingroupsmenuitem extends Ext_grid_menu_ShowInGroups {
    constructor () {
        super( [], [] );
        this.xtype = "gridshowingroupsmenuitem";
    }
}
try {
    if ( globalThis.customElements.get( "ext-gridshowingroupsmenuitem" ) == undefined ) {
        globalThis.customElements.define( "ext-gridshowingroupsmenuitem", ElementParser.withParsedCallback( EWCGridshowingroupsmenuitem ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-gridshowingroupsmenuitem" ) == undefined ) {
        globalThis.customElements.define( "ext-gridshowingroupsmenuitem", EWCGridshowingroupsmenuitem );
    }
}
