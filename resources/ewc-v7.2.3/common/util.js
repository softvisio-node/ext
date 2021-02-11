import { filterProp as filterPropOrig } from "./util-orig.js";

export * from "./util-orig.js";

const BOOL_ATTRS = new Set( ["hidden"] );

// patch for vue3 boolean attributes coercion
export function filterProp ( propertyValue, property, me ) {
    if ( BOOL_ATTRS.has( property ) ) return propertyValue === "";

    return filterPropOrig( propertyValue, property, me );
}
