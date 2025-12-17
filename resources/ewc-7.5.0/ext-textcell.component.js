import ElementParser from "./common/ElementParser.js";
import Ext_grid_cell_Text from "./Ext/grid/cell/Text.js";

export default class EWCTextcell extends Ext_grid_cell_Text {
    constructor () {
        super( [], [] );
        this.xtype = "textcell";
    }
}
try {
    if ( globalThis.customElements.get( "ext-textcell" ) == undefined ) {
        globalThis.customElements.define( "ext-textcell", ElementParser.withParsedCallback( EWCTextcell ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-textcell" ) == undefined ) {
        globalThis.customElements.define( "ext-textcell", EWCTextcell );
    }
}
