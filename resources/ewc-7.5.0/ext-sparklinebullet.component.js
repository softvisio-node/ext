import ElementParser from "./common/ElementParser.js";
import Ext_sparkline_Bullet from "./Ext/sparkline/Bullet.js";

export default class EWCSparklinebullet extends Ext_sparkline_Bullet {
    constructor () {
        super( [], [] );
        this.xtype = "sparklinebullet";
    }
}
try {
    if ( globalThis.customElements.get( "ext-sparklinebullet" ) == undefined ) {
        globalThis.customElements.define( "ext-sparklinebullet", ElementParser.withParsedCallback( EWCSparklinebullet ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-sparklinebullet" ) == undefined ) {
        globalThis.customElements.define( "ext-sparklinebullet", EWCSparklinebullet );
    }
}
