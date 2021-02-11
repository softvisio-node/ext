import WebComponentsBaseComponent from "./webcomponentsbase-original.js";

export default class Ext_Base extends WebComponentsBaseComponent {

    // patch for vue3 boolean attributes coercion
    // value == null if attribute is not set
    // value === "" if attribute is set
    getAttribute ( property ) {
        if ( property === "hidden" ) {
            return super.getAttribute( property ) != null;
        }
        else {
            return super.getAttribute( property );
        }
    }
}
