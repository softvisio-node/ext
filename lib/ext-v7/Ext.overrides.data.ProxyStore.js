Ext.define( "Ext.overrides.data.ProxyStore", {
    "override": "Ext.data.ProxyStore",

    applyProxy ( proxy ) {
        if ( Ext.isObject( proxy ) && !proxy.type ) {
            proxy.type = "softvisio";
        }

        return this.callParent( arguments );
    },
} );
