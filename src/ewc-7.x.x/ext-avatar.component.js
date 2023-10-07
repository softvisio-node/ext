import ExtImage from "#ewc//Ext/Image";
import ElementParser from "#ewc/common/ElementParser";

export default class EwcAvatar extends ExtImage {
    constructor () {
        super( [], [] );
        this.xtype = "avatar";
    }
}

try {
    if ( window.customElements.get( "ext-avatar" ) === undefined ) {
        window.customElements.define( "ext-avatar", ElementParser.withParsedCallback( EwcAvatar ) );
    }
}
catch ( e ) {
    if ( window.customElements.get( "ext-avatar" ) === undefined ) {
        window.customElements.define( "ext-avatar", EwcAvatar );
    }
}
