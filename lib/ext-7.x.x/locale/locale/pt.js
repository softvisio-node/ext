Ext.onReady( function () {
    if ( Ext.Date ) {
        Ext.Date.monthNames = ["Janeiro", "Fevereiro", "Mar&ccedil;o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

        Ext.Date.dayNames = ["Domingo", "Segunda", "Ter&ccedil;a", "Quarta", "Quinta", "Sexta", "S&aacute;bado"];
    }

    if ( Ext.util && Ext.util.Format ) {
        Ext.apply( Ext.util.Format, {
            "thousandSeparator": ".",
            "decimalSeparator": ",",
            "currencySign": "\u20ac",

            // Portugese Euro
            "dateFormat": "d/m/Y",
        } );
    }
} );
