import Class from "../../resources/ewc-v7.2.0/Ext/form/TextArea";

Class.PROPERTIES_ORIG = Class.PROPERTIES;

Class.PROPERTIES = function () {
    var props = this.PROPERTIES_ORIG();

    props.push( "wrap" );

    return props;
};
