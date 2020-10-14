Ext.define( "Ext.overrides.data.Model", {
    "override": "Ext.data.Model",

    // set default proxy type to "softvisio"
    "inheritableStatics": {
        getProxy () {
            var me = this,
                proxy = me.proxy,
                defaultProxy = me.defaultProxy,
                defaults;

            if ( !proxy ) {

                // Check what was defined by the class (via onClassExtended):
                proxy = me.proxyConfig;

                if ( !proxy && defaultProxy ) {
                    proxy = defaultProxy;
                }

                if ( !proxy || !proxy.isProxy ) {
                    if ( typeof proxy === "string" ) {
                        proxy = {
                            "type": proxy,
                        };
                    }
                    else if ( proxy ) {
                        proxy.type = "softvisio";
                    }

                    // We have nothing or a config for the proxy. Get some defaults from
                    // the Schema and smash anything we've provided over the top.
                    defaults = Ext.merge( me.schema.constructProxy( me ), proxy );

                    if ( proxy && proxy.type ) {
                        proxy = proxy.schema === false ? proxy : defaults;
                    }
                    else {
                        proxy = defaults;
                    }
                }

                proxy = me.setProxy( proxy );
            }

            return proxy;
        },
    },
} );
