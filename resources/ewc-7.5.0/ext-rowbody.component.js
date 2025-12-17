import ElementParser from "./common/ElementParser.js";
import Ext_grid_RowBody from "./Ext/grid/RowBody.js";

export default class EWCRowbody extends Ext_grid_RowBody {
    constructor () {
        super( [], [] );
        this.xtype = "rowbody";
    }
}
try {
    if ( globalThis.customElements.get( "ext-rowbody" ) == undefined ) {
        globalThis.customElements.define( "ext-rowbody", ElementParser.withParsedCallback( EWCRowbody ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-rowbody" ) == undefined ) {
        globalThis.customElements.define( "ext-rowbody", EWCRowbody );
    }
}
