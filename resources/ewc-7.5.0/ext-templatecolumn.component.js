import ElementParser from "./common/ElementParser.js";
import Ext_grid_column_Template from "./Ext/grid/column/Template.js";

export default class EWCTemplatecolumn extends Ext_grid_column_Template {
    constructor () {
        super( [], [] );
        this.xtype = "templatecolumn";
    }
}
try {
    if ( globalThis.customElements.get( "ext-templatecolumn" ) == undefined ) {
        globalThis.customElements.define( "ext-templatecolumn", ElementParser.withParsedCallback( EWCTemplatecolumn ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-templatecolumn" ) == undefined ) {
        globalThis.customElements.define( "ext-templatecolumn", EWCTemplatecolumn );
    }
}
