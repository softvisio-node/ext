import Class from "#ewc/Ext/form/TextArea.js";

Class.PROPERTIES_ORIG = Class.PROPERTIES;

Class.PROPERTIES = function () {
    var props = this.PROPERTIES_ORIG();

    props.push( "wrap" );

    return props;
};
