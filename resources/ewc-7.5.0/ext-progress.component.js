import ElementParser from "./common/ElementParser.js";
import Ext_ProgressBarWidget from "./Ext/ProgressBarWidget.js";

export default class EWCProgress extends Ext_ProgressBarWidget {
    constructor () {
        super( [], [] );
        this.xtype = "progress";
    }
}
try {
    if ( globalThis.customElements.get( "ext-progress" ) == undefined ) {
        globalThis.customElements.define( "ext-progress", ElementParser.withParsedCallback( EWCProgress ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-progress" ) == undefined ) {
        globalThis.customElements.define( "ext-progress", EWCProgress );
    }
}
