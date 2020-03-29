import Vue from "vue";

const hasSymbol = typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol";

function isESModule ( obj ) {
    return obj.__esModule || ( hasSymbol && obj[Symbol.toStringTag] === "Module" );
}

Ext.define( "Ext.overrides.Container", {
    "override": "Ext.Container",

    async addComponent ( cmp, propsData ) {
        // async component
        if ( typeof cmp === "function" ) {
            cmp = await cmp();

            if ( isESModule( cmp ) ) {
                cmp = cmp.default;
            }
        }

        const component = Vue.extend( cmp ),
            instance = new component( { propsData } ),
            wrapper = this.add( {
                "xtype": "component",
            } );

        instance.$mount();

        wrapper.innerElement.dom.appendChild( instance.$el );
        // wrapper.setHtml( instance.$el );

        instance.$once( "hook:beforeDestroy", () => {
            wrapper.destroy();
        } );

        return instance;
    },
} );
