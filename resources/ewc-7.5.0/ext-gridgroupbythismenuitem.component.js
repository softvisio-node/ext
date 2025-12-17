import ElementParser from "./common/ElementParser.js";
import Ext_grid_menu_GroupByThis from "./Ext/grid/menu/GroupByThis.js";

export default class EWCGridgroupbythismenuitem extends Ext_grid_menu_GroupByThis {
    constructor () {
        super( [], [] );
        this.xtype = "gridgroupbythismenuitem";
    }
}
try {
    if ( globalThis.customElements.get( "ext-gridgroupbythismenuitem" ) == undefined ) {
        globalThis.customElements.define( "ext-gridgroupbythismenuitem", ElementParser.withParsedCallback( EWCGridgroupbythismenuitem ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-gridgroupbythismenuitem" ) == undefined ) {
        globalThis.customElements.define( "ext-gridgroupbythismenuitem", EWCGridgroupbythismenuitem );
    }
}
