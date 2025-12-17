import ElementParser from "./common/ElementParser.js";
import Ext_dataview_listswiper_Item from "./Ext/dataview/listswiper/Item.js";

export default class EWCListswiperitem extends Ext_dataview_listswiper_Item {
    constructor () {
        super( [], [] );
        this.xtype = "listswiperitem";
    }
}
try {
    if ( globalThis.customElements.get( "ext-listswiperitem" ) == undefined ) {
        globalThis.customElements.define( "ext-listswiperitem", ElementParser.withParsedCallback( EWCListswiperitem ) );
    }
}
catch {
    if ( globalThis.customElements.get( "ext-listswiperitem" ) == undefined ) {
        globalThis.customElements.define( "ext-listswiperitem", EWCListswiperitem );
    }
}
