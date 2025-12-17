import ElementParser from "./common/ElementParser.js";
import Ext_grid_Row from "./Ext/grid/Row.js";

export default class EWCGridrow extends Ext_grid_Row {
    constructor () {
        super( [], [] );
        this.xtype = "gridrow";
    }
}
try {
    if ( globalThis.customElements.get( "ext-gridrow" ) == undefined ) {
        globalThis.customElements.define( "ext-gridrow", ElementParser.withParsedCallback( EWCGridrow ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-gridrow" ) == undefined ) {
        globalThis.customElements.define( "ext-gridrow", EWCGridrow );
    }
}
