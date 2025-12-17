import ElementParser from "./common/ElementParser.js";
import Ext_d3_hierarchy_partition_Partition from "./Ext/d3/hierarchy/partition/Partition.js";

export default class EWCD3_partition extends Ext_d3_hierarchy_partition_Partition {
    constructor () {
        super( [], [] );
        this.xtype = "d3-partition";
    }
}
try {
    if ( globalThis.customElements.get( "ext-d3-partition" ) == undefined ) {
        globalThis.customElements.define( "ext-d3-partition", ElementParser.withParsedCallback( EWCD3_partition ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-d3-partition" ) == undefined ) {
        globalThis.customElements.define( "ext-d3-partition", EWCD3_partition );
    }
}
