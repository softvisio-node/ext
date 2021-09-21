import { filterProp as filterPropOrig, doProp as doPropOrig } from "./util-orig.js";

export * from "./util-orig.js";

// known VueJS boolean props (@vue/shared/isBooleanAttr):
// allowfullscreen, async, autofocus, autoplay, checked, controls, default, defer, disabled, formnovalidate, hidden, ismap, itemscope, loop, multiple, muted, nomodule, novalidate, open, readonly, required, reversed, scoped, seamless, selected

// known ExtJS boolean props, which are conflicts with the VueJS boolean props
const BOOL_PROPS = new Set( ["checked", "disabled", "hidden"] );

// patch for vue3 boolean attributes coercion
// if boolean attribute is set, vue3 converts it value to "", here we need to convert it back to the boolean
export function filterProp ( propertyValue, property, me ) {

    // if attribute is set - value is ""
    if ( BOOL_PROPS.has( property ) ) return propertyValue === "";

    return filterPropOrig( propertyValue, property, me );
}

export function doProp ( me, prop ) {
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

// VueJS set properties as is, without any coercion, for boolean props we need stringify boolean values
function doSet ( doSetOrig, me, prop, val ) {
    if ( typeof val === "boolean" ) val = val.toString();

    doSetOrig( val );
}
