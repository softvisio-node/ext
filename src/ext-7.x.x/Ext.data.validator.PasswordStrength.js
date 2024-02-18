import passwords from "#core/passwords";

Ext.define( "Ext.data.validator.PasswordStrength", {
    "extend": "Ext.data.validator.Validator",
    "alias": "data.validator.password-strength",
    "type": "password-strength",

    "weakMessage": l10n( `Password is weak` ),

    "config": {
        "strength": "strong",
    },

    validate ( value ) {
        if ( !passwords.checkPasswordStrength( value, { "strength": this.getStrength() } ).ok ) {
            return this.weakMessage;
        }

        return true;
    },
} );
