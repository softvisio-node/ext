import ElementParser from "./common/ElementParser.js";
import Ext_grid_column_Text from "./Ext/grid/column/Text.js";

export default class EWCTextcolumn extends Ext_grid_column_Text {
    constructor () {
        super( [], [] );
        this.xtype = "textcolumn";
    }
}
try {
    if ( globalThis.customElements.get( "ext-textcolumn" ) == undefined ) {
        globalThis.customElements.define( "ext-textcolumn", ElementParser.withParsedCallback( EWCTextcolumn ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-textcolumn" ) == undefined ) {
        globalThis.customElements.define( "ext-textcolumn", EWCTextcolumn );
    }
}
