import { filterProp as filterPropOrig, doProp as doPropOrig } from "./util-orig.js";

export * from "./util-orig.js";

// known HTML boolean args (@vue/shared/isBooleanAttr):
// itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly,async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected

// knoext ExtJS boolean props, which conflicts with the HTML boolean props
const BOOL_PROPS = new Set( ["checked", "disabled", "hidden"] );

// patch for vue3 boolean attributes coercion
export function filterProp ( propertyValue, property, me ) {

    // if attribute is set value is ""
    if ( BOOL_PROPS.has( property ) ) return propertyValue === "";

    return filterPropOrig( propertyValue, property, me );
}

export function doProp ( me, prop ) {
    if ( !BOOL_PROPS.has( prop ) ) return doPropOrig( me, prop );

    Object.defineProperty( me, prop, { "configurable": true } );

    doPropOrig( me, prop );

    const { get, set } = Object.getOwnPropertyDescriptor( me, prop );

    Object.defineProperty( me, prop, {
        "configurable": false,
        get,
        "set": function ( val ) {
            doSet( set, me, prop, val );
        },
    } );
}

function doSet ( doSetOrig, me, prop, val ) {
    if ( BOOL_PROPS.has( prop ) ) {
        if ( typeof val === "boolean" ) val = val.toString();
    }

    doSetOrig( val );
}
