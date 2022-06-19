import locale from "./locale.js";

var date = new Date( "2020-01-04" );

const weekDayLong = new Intl.DateTimeFormat( locale.intlLocale, { "weekday": "long" } );
const weekDayShort = new Intl.DateTimeFormat( locale.intlLocale, { "weekday": "short" } );

Ext.Date.dayNames = [];
Ext.Date.dayNamesShort = [];

for ( let n = 0; n < 7; n++ ) {
    date.setDate( date.getDate() + 1 );

    Ext.Date.dayNames.push( weekDayLong.format( date ) );
    Ext.Date.dayNamesShort.push( weekDayShort.format( date ) );
}

date = new Date( "2020-01-01" );

const monthLong = new Intl.DateTimeFormat( locale.intlLocale, { "month": "long" } );
const monthShort = new Intl.DateTimeFormat( locale.intlLocale, { "month": "short" } );

Ext.Date.monthNames = [];
Ext.Date.monthNamesShort = [];

for ( let n = 0; n < 12; n++ ) {
    date.setMonth( n );

    Ext.Date.monthNames.push( monthLong.format( date ) );
    Ext.Date.monthNamesShort.push( monthShort.format( date ) );
}

for ( let n = 0; n < Ext.Date.monthNames.length; n++ ) {
    Ext.Date.monthNumbers[Ext.Date.monthNames[n]] = n;
    Ext.Date.monthNumbers[Ext.Date.monthNamesShort[n]] = n;
}

Ext.Date.getShortMonthName = month => Ext.Date.monthNamesShort[month];

Ext.Date.getShortDayName = day => Ext.Date.dayNamesShort[day];

Ext.Date.formatExt = Ext.Date.format;

Ext.Date.format = function ( value, format ) {
    return Ext.util.Format.date( value, format );
};
