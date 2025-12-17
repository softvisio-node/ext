import ElementParser from "./common/ElementParser.js";
import Ext_pivot_cell_Group from "./Ext/pivot/cell/Group.js";

export default class EWCPivotgridgroupcell extends Ext_pivot_cell_Group {
    constructor () {
        super( [], [] );
        this.xtype = "pivotgridgroupcell";
    }
}
try {
    if ( globalThis.customElements.get( "ext-pivotgridgroupcell" ) == undefined ) {
        globalThis.customElements.define( "ext-pivotgridgroupcell", ElementParser.withParsedCallback( EWCPivotgridgroupcell ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-pivotgridgroupcell" ) == undefined ) {
        globalThis.customElements.define( "ext-pivotgridgroupcell", EWCPivotgridgroupcell );
    }
}
