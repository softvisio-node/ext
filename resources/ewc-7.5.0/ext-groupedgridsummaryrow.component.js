import ElementParser from "./common/ElementParser.js";
import Ext_grid_row_Summary from "./Ext/grid/row/Summary.js";

export default class EWCGroupedgridsummaryrow extends Ext_grid_row_Summary {
    constructor () {
        super( [], [] );
        this.xtype = "groupedgridsummaryrow";
    }
}
try {
    if ( globalThis.customElements.get( "ext-groupedgridsummaryrow" ) == undefined ) {
        globalThis.customElements.define( "ext-groupedgridsummaryrow", ElementParser.withParsedCallback( EWCGroupedgridsummaryrow ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-groupedgridsummaryrow" ) == undefined ) {
        globalThis.customElements.define( "ext-groupedgridsummaryrow", EWCGroupedgridsummaryrow );
    }
}
