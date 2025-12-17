import ElementParser from "./common/ElementParser.js";
import Ext_grid_SummaryRow from "./Ext/grid/SummaryRow.js";

export default class EWCGridsummaryrow extends Ext_grid_SummaryRow {
    constructor () {
        super( [], [] );
        this.xtype = "gridsummaryrow";
    }
}
try {
    if ( globalThis.customElements.get( "ext-gridsummaryrow" ) == undefined ) {
        globalThis.customElements.define( "ext-gridsummaryrow", ElementParser.withParsedCallback( EWCGridsummaryrow ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-gridsummaryrow" ) == undefined ) {
        globalThis.customElements.define( "ext-gridsummaryrow", EWCGridsummaryrow );
    }
}
