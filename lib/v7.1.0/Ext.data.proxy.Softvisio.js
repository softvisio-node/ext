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

    extractResponseData ( response ) {
        return Ext.isDefined( response.result ) ? response.result : response.data;
    },
} );

module.exports = Ext.data.proxy.Softvisio;
