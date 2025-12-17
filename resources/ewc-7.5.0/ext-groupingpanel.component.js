import ElementParser from "./common/ElementParser.js";
import Ext_grid_plugin_grouping_Panel from "./Ext/grid/plugin/grouping/Panel.js";

export default class EWCGroupingpanel extends Ext_grid_plugin_grouping_Panel {
    constructor () {
        super( [], [] );
        this.xtype = "groupingpanel";
    }
}
try {
    if ( globalThis.customElements.get( "ext-groupingpanel" ) == undefined ) {
        globalThis.customElements.define( "ext-groupingpanel", ElementParser.withParsedCallback( EWCGroupingpanel ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-groupingpanel" ) == undefined ) {
        globalThis.customElements.define( "ext-groupingpanel", EWCGroupingpanel );
    }
}
