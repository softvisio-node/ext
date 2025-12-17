import ElementParser from "./common/ElementParser.js";
import Ext_grid_menu_Groups from "./Ext/grid/menu/Groups.js";

export default class EWCGridgroupsmenuitem extends Ext_grid_menu_Groups {
    constructor () {
        super( [], [] );
        this.xtype = "gridgroupsmenuitem";
    }
}
try {
    if ( globalThis.customElements.get( "ext-gridgroupsmenuitem" ) == undefined ) {
        globalThis.customElements.define( "ext-gridgroupsmenuitem", ElementParser.withParsedCallback( EWCGridgroupsmenuitem ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-gridgroupsmenuitem" ) == undefined ) {
        globalThis.customElements.define( "ext-gridgroupsmenuitem", EWCGridgroupsmenuitem );
    }
}
