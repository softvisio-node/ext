Ext.define( "Ext.overrides.data.Model", {
    "override": "Ext.data.Model",

    // set default proxy type to "softvisio"
    "inheritableStatics": {
        getProxy () {
            var proxy = this.proxy,
                defaultProxy = this.defaultProxy,
                defaults;

            if ( !proxy ) {

                // Check what was defined by the class (via onClassExtended):
                proxy = this.proxyConfig;

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
                    defaults = Ext.merge( this.schema.constructProxy( this ), proxy );

                    if ( proxy && proxy.type ) {
                        proxy = proxy.schema === false ? proxy : defaults;
                    }
                    else {
                        proxy = defaults;
                    }
                }

                proxy = this.setProxy( proxy );
            }

            return proxy;
        },
    },
} );
