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

        const instance = Ext.Container.vueApp.config.globalProperties.$mount( cmp, {
            props,
        } );

        // append to the dom
        this.el.dom.appendChild( instance.$.vnode.el );

        if ( instance.$.vnode.el.tagName.substring( 0, 4 ) === "EXT-" ) {
            return new Promise( resolve => {
                instance.$.vnode.el.addEventListener( "ready",
                    e => {
                        const ext = e.detail.cmp;

                        // ext is destoryed
                        if ( ext.destroyed ) {
                            instance.$unmount();
                        }
                        else {
                            instance.ext = ext;

                            // destroy instance on ext destroyed
                            ext.on( "destroy", () => instance.$unmount(), null, { "single": true } );

                            // add ext to the current container
                            this.add( ext );
                        }

                        resolve( instance );
                    },
                    { "once": true } );
            } );
        }
        else {
            return instance;
        }
    },
} );
