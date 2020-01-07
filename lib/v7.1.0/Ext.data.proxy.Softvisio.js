Ext.define( "Ext.data.proxy.Softvisio", {
    "extend": "Ext.data.proxy.Server",

    "alternateClassName": "Ext.data.SoftvisioProxy",

    "alias": "proxy.softvisio",

    "statics": {
        "api": null,

        "setApi": function ( api ) {
            this.api = api;
        },
    },

    "pageParam": "",

    "reader": {
        "type": "json",
        "rootProperty": "data",
        "summaryRootProperty": "summary",
    },

    "writer": { "clientIdProperty": "__client_id__" },

    doRequest ( operation ) {
        var me = this,
            writer = me.getWriter(),
            request = me.buildRequest( operation ),
            api = me.getApi(),
            action,
            method,
            args;

        if ( writer && operation.allowWrite() ) {
            request = writer.write( request );
        }

        if ( writer && operation.allowWrite() ) {
            request = writer.write( request );
        }

        action = request.getAction();

        method = api[action];

        if ( action === "read" ) {
            args = request.getParams();
        }
        else {
            args = request.getJsonData();
        }

        Ext.data.proxy.Softvisio.api.call( method, args, function ( res ) {
            me.processResponse( res.isSuccess(), operation, request, res );
        } );

        return request;
    },

    "applyEncoding": Ext.identityFn,

    extractResponseData ( response ) {
        var data = response.data;

        if ( Ext.isObject( data ) ) {
            return [data];
        }
        else {
            return data;
        }
    },

    buildUrl () {
        return "";
    },

    // filter serializer
    encodeFilters ( filters ) {
        var out = {},
            length = filters.length,
            i,
            filter;

        for ( i = 0; i < length; i++ ) {
            filter = filters[i];

            filter.getFilterFn();

            if ( filter.generatedFilterFn ) {
                out[filter.getProperty()] = [filter.getOperator() || "=", filter.getValue()];
            }
        }

        return this.applyEncoding( out );
    },
} );

module.exports = Ext.data.proxy.Softvisio;
