import { createVNode, render } from "vue";

/*
mount(component, { props, children, element, app })
component: required, the component to be created/mounted
props: props to be passed onto the component, this can include HTML attributes like id or class
children: components to be rendered as children of component
element: if specified, the element to mount the component into, if not specified, a div will be created
app: the Vue app instance from createApp, if provided will be bound to the component's appContext

returns { vNode, destroy, el }
vNode: the instance of the component provided
destroy: a function that will unmount and destroy the component
el: will provide the HTML element the component is mounted into
 */
function mount ( component, { props, children, element, app } = {} ) {
    let el = element;

    let vNode = createVNode( component, props, children );
    if ( app?._context ) vNode.appContext = app._context;
    if ( el ) render( vNode, el );
    else if ( typeof document !== "undefined" ) render( vNode, ( el = document.createElement( "div" ) ) );

    const destroy = () => {
        if ( el ) render( null, el );
        el = null;
        vNode = null;
    };

    return { vNode, destroy, el };
}

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

        const { vNode, destroy, el } = mount( cmp, { props, "app": Ext.Container.vueApp } );

        // append to the dom
        this.el.dom.appendChild( el );

        if ( vNode.el.tagName.substring( 0, 4 ) === "EXT-" ) {
            const me = this;

            return new Promise( resolve => {
                vNode.el.addEventListener( "ready", function readListener ( e ) {

                    // remove "ready" event listener
                    vNode.el.removeEventListener( e.type, readListener );

                    const ext = e.detail.cmp;

                    if ( ext.destroyed ) {
                        destroy();

                        return;
                    }

                    // XXX
                    // if ( instance._isDestroyed ) {
                    //     ext.destroy();

                    //     return;
                    // }

                    vNode.ext = ext;

                    // link "destroy" events
                    ext.on( "destroy",
                        () => {
                            destroy();
                        },
                        null,
                        { "single": true } );

                    // XXX
                    // vNode.$once( "hook:beforeDestroy", () => {
                    //     ext.destroy();
                    // } );

                    me.add( ext );

                    resolve( vNode );
                } );
            } );
        }
        else {
            return vNode;
        }
    },
} );
