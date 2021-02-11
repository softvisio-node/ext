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

        const instance = Ext.Container.vueApp.config.globalProperties.$mountComponent( cmp, {
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
                        if ( ext.destroyed ) instance.$destroy();

                        // instance is destroyed
                        else if ( instance.$isDestroyed() ) {
                            ext.destroy();
                        }
                        else {
                            instance.ext = ext;

                            // destroy instance on ext destroyed
                            ext.on( "destroy", () => instance.$destroy(), null, { "single": true } );

                            // destroy ext on instance destroyed
                            instance.$setOnDestroy( () => ext.destroy() );

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
