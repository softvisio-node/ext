Ext.define( "Ext.overrides.data.ProxyStore", {
    "override": "Ext.data.ProxyStore",

    "config": {
        "meta": {},
    },

    applyProxy ( proxy ) {
        if ( proxy && Ext.isObject( proxy ) && !proxy.type ) {
            proxy.type = "softvisio";
        }

        return this.callParent( arguments );
    },

    "onMetaChange": function ( proxy, meta ) {
        this.setMeta( meta );

        this.fireEvent( "metachange", this, meta );
    },
} );
