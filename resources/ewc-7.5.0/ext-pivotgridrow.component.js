import ElementParser from "./common/ElementParser.js";
import Ext_pivot_Row from "./Ext/pivot/Row.js";

export default class EWCPivotgridrow extends Ext_pivot_Row {
    constructor () {
        super( [], [] );
        this.xtype = "pivotgridrow";
    }
}
try {
    if ( globalThis.customElements.get( "ext-pivotgridrow" ) == undefined ) {
        globalThis.customElements.define( "ext-pivotgridrow", ElementParser.withParsedCallback( EWCPivotgridrow ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-pivotgridrow" ) == undefined ) {
        globalThis.customElements.define( "ext-pivotgridrow", EWCPivotgridrow );
    }
}
