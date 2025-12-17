import ElementParser from "./common/ElementParser.js";
import Ext_pivot_Grid from "./Ext/pivot/Grid.js";

export default class EWCPivotgrid extends Ext_pivot_Grid {
    constructor () {
        super( [], [] );
        this.xtype = "pivotgrid";
    }
}
try {
    if ( globalThis.customElements.get( "ext-pivotgrid" ) == undefined ) {
        globalThis.customElements.define( "ext-pivotgrid", ElementParser.withParsedCallback( EWCPivotgrid ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-pivotgrid" ) == undefined ) {
        globalThis.customElements.define( "ext-pivotgrid", EWCPivotgrid );
    }
}
