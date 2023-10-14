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
        "metaProperty": "meta",
        "rootProperty": "data",
        "summaryRootProperty": "meta.summary",
        "totalProperty": "meta.total_rows",
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

            if ( typeof args === "object" ) {

                // do not send offset if offset = 0
                if ( "offset" in args && !args.offset ) {
                    delete args.offset;
                }

                if ( !Object.keys( args ).length ) {
                    args = [];
                }
                else {
                    args = [args];
                }
            }
            else {
                args = [args];
            }
        }
        else {
            args = [request.getJsonData()];
        }

        Ext.getApplication()
            .app.api.call( method, ...args )
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
                const operator = filter.getOperator() || "=";

                if ( operator === "like" ) {
                    out[filter.getProperty()] = ["includes case insensitive", filter.getValue()];
                }
                else {
                    out[filter.getProperty()] = [operator, filter.getValue()];
                }
            }
        }

        return this.applyEncoding( out );
    },

    // serialize sorters
    encodeSorters ( sorters, preventArray ) {
        const out = [];

        for ( const sorter of sorters ) {
            out.push( [sorter.getProperty(), sorter.getDirection().toLowerCase()] );
        }

        return out;
    },
} );
