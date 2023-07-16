Ext.define( "Ext.overrides.data.ProxyStore", {
    "override": "Ext.data.ProxyStore",

    // set default proxy type to "softvisio"
    applyProxy ( proxy ) {
        if ( proxy && Ext.isObject( proxy ) && !proxy.type ) {
            proxy.type = "softvisio";
        }

        return this.callParent( arguments );
    },
} );
