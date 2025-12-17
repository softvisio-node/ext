import ElementParser from "./common/ElementParser.js";
import Ext_ProgressBarWidget from "./Ext/ProgressBarWidget.js";

export default class EWCProgressbarwidget extends Ext_ProgressBarWidget {
    constructor () {
        super( [], [] );
        this.xtype = "progressbarwidget";
    }
}
try {
    if ( globalThis.customElements.get( "ext-progressbarwidget" ) == undefined ) {
        globalThis.customElements.define( "ext-progressbarwidget", ElementParser.withParsedCallback( EWCProgressbarwidget ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-progressbarwidget" ) == undefined ) {
        globalThis.customElements.define( "ext-progressbarwidget", EWCProgressbarwidget );
    }
}
