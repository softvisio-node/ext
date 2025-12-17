import ElementParser from "./common/ElementParser.js";
import Ext_grid_cell_Widget from "./Ext/grid/cell/Widget.js";

export default class EWCWidgetcell extends Ext_grid_cell_Widget {
    constructor () {
        super( [], [] );
        this.xtype = "widgetcell";
    }
}
try {
    if ( globalThis.customElements.get( "ext-widgetcell" ) == undefined ) {
        globalThis.customElements.define( "ext-widgetcell", ElementParser.withParsedCallback( EWCWidgetcell ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-widgetcell" ) == undefined ) {
        globalThis.customElements.define( "ext-widgetcell", EWCWidgetcell );
    }
}
