Ext.define( "Ext.data.proxy.Softvisio", {
    "extend": "Ext.data.proxy.Server",

    "alternateClassName": "Ext.data.SoftvisioProxy",

    "alias": "proxy.softvisio",

    "idParam": "id",
    "filterParam": "where",
    "groupParam": "group_by",
    "limitParam": "limit",
    "startParam": "offset",
    "pageParam": "",
    "sortParam": "order_by",

    "reader": {
        "type": "json",
        "rootProperty": "data",
        "summaryRootProperty": "summary",
    },

    "writer": { "clientIdProperty": "__client_id__" },

    doRequest ( operation ) {
        var writer = this.getWriter(),
            request = this.buildRequest( operation ),
            api = this.getApi(),
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

        Ext.getApplication()
            .api.call( method, args )
            .then( res => {
                this.processResponse( res.ok, operation, request, res );
            } );

        return request;
    },

    "applyEncoding": Ext.identityFn,

    extractResponseData ( response ) {
        return response;
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
