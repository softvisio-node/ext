import ElementParser from "./common/ElementParser.js";
import Ext_grid_plugin_grouping_Column from "./Ext/grid/plugin/grouping/Column.js";

export default class EWCGroupingpanelcolumn extends Ext_grid_plugin_grouping_Column {
    constructor () {
        super( [], [] );
        this.xtype = "groupingpanelcolumn";
    }
}
try {
    if ( globalThis.customElements.get( "ext-groupingpanelcolumn" ) == undefined ) {
        globalThis.customElements.define( "ext-groupingpanelcolumn", ElementParser.withParsedCallback( EWCGroupingpanelcolumn ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-groupingpanelcolumn" ) == undefined ) {
        globalThis.customElements.define( "ext-groupingpanelcolumn", EWCGroupingpanelcolumn );
    }
}
