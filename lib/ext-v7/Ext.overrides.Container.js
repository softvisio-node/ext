const hasSymbol = typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol";

function isESModule ( obj ) {
    return obj.__esModule || ( hasSymbol && obj[Symbol.toStringTag] === "Module" );
}

Ext.define( "Ext.overrides.Container", {
    "override": "Ext.Container",

    "statics": {
        "vueApp": null,
    },

    async addVue ( cmp, props ) {

        // async component
        if ( typeof cmp === "function" ) {
            cmp = await cmp();

            if ( isESModule( cmp ) ) cmp = cmp.default;
        }

        const vNode = Ext.Container.vueApp.config.globalProperties.$mountComponent( cmp, {
            props,
        } );

        // append to the dom
        this.el.dom.appendChild( vNode.el );

        if ( vNode.el.tagName.substring( 0, 4 ) === "EXT-" ) {
            return new Promise( resolve => {
                vNode.el.addEventListener( "ready",
                    e => {
                        const ext = e.detail.cmp;

                        if ( ext.destroyed ) {
                            vNode.$destroy();

                            return;
                        }

                        // vnode is destroyed
                        if ( !vNode.$destroy ) {
                            ext.destroy();

                            return;
                        }

                        vNode.ext = ext;

                        // link "destroy" events
                        ext.on( "destroy", () => vNode.$destroy(), null, { "single": true } );

                        vNode.$onDestroy = () => ext.destroy();

                        this.add( ext );

                        resolve( vNode );
                    },
                    { "once": true } );
            } );
        }
        else {
            return vNode;
        }
    },
} );
