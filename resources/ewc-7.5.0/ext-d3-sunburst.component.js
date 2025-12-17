import ElementParser from "./common/ElementParser.js";
import Ext_d3_hierarchy_partition_Sunburst from "./Ext/d3/hierarchy/partition/Sunburst.js";

export default class EWCD3_sunburst extends Ext_d3_hierarchy_partition_Sunburst {
    constructor () {
        super( [], [] );
        this.xtype = "d3-sunburst";
    }
}
try {
    if ( globalThis.customElements.get( "ext-d3-sunburst" ) == undefined ) {
        globalThis.customElements.define( "ext-d3-sunburst", ElementParser.withParsedCallback( EWCD3_sunburst ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-d3-sunburst" ) == undefined ) {
        globalThis.customElements.define( "ext-d3-sunburst", EWCD3_sunburst );
    }
}
