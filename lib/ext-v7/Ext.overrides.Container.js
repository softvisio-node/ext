import Vue from "vue";

const hasSymbol = typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol";

function isESModule ( obj ) {
    return obj.__esModule || ( hasSymbol && obj[Symbol.toStringTag] === "Module" );
}

Ext.define( "Ext.overrides.Container", {
    "override": "Ext.Container",

    async addComponent ( cmp, propsData ) {
        // async component
        if ( typeof cmp === "function" ) {
            cmp = await cmp();

            if ( isESModule( cmp ) ) {
                cmp = cmp.default;
            }
        }

        const component = Vue.extend( cmp );

        const instance = new component( { propsData } );

        // mount vue component
        instance.$mount();

        // append to the dom
        this.el.dom.appendChild( instance.$el );

        if ( instance.$el.tagName.substring( 0, 4 ) === "EXT-" ) {
            const me = this;

            return new Promise( function ( resolve ) {
                instance.$el.addEventListener( "ready", function readListener ( e ) {
                    // remove "ready" event listener
                    e.target.removeEventListener( e.type, readListener );

                    const ext = e.detail.cmp;

                    instance.$ext = ext;

                    // link "destroy" events
                    ext.on( "destroy",
                        () => {
                            instance.$destroy();
                        },
                        null,
                        { "single": true } );

                    instance.$once( "hook:beforeDestroy", () => {
                        ext.destroy();
                    } );

                    me.add( ext );

                    resolve( instance );
                } );
            } );
        }
        else {
            return instance;
        }
    },
} );
