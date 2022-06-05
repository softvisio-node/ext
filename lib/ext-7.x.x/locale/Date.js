Ext.Date.dayNames = [

    //
    window.i18n( "Sunday" ),
    window.i18n( "Monday" ),
    window.i18n( "Tuesday" ),
    window.i18n( "Wednesday" ),
    window.i18n( "Thursday" ),
    window.i18n( "Friday" ),
    window.i18n( "Saturday" ),
];

const dayNamesShort = [

    //
    window.i18n( "Sun" /* short day name for Sunday */ ),
    window.i18n( "Mon" /* short day name for Monday */ ),
    window.i18n( "Tue" /* short day name for  Tuesday */ ),
    window.i18n( "Wed" /* short day name for Wednesday */ ),
    window.i18n( "Thu" /* short day name for Thursday */ ),
    window.i18n( "Fri" /* short day name for  Friday */ ),
    window.i18n( "Sat" /* short day name for Saturday */ ),
];

Ext.Date.monthNames = [

    //
    window.i18n( "January" ),
    window.i18n( "February" ),
    window.i18n( "March" ),
    window.i18n( "April" ),
    window.i18n( "May" ),
    window.i18n( "June" ),
    window.i18n( "July" ),
    window.i18n( "August" ),
    window.i18n( "September" ),
    window.i18n( "October" ),
    window.i18n( "November" ),
    window.i18n( "December" ),
];

const monthNamesShort = [

    //
    window.i18n( "Jan" /* short month name for January */ ),
    window.i18n( "Feb" /* short month name for February */ ),
    window.i18n( "Mar" /* short month name for  March */ ),
    window.i18n( "Apr" /* short month name for April */ ),
    window.i18n( "May" /* short month name for May */ ),
    window.i18n( "Jun" /* short month name for  June */ ),
    window.i18n( "Jul" /* short month name for July */ ),
    window.i18n( "Aug" /* short month name for August */ ),
    window.i18n( "Sep" /* short month name for September */ ),
    window.i18n( "Oct" /* short month name for October */ ),
    window.i18n( "Nov" /* short month name for November */ ),
    window.i18n( "Dec" /* short month name for  December */ ),
];

for ( let n = 0; n < Ext.Date.monthNames.length; n++ ) {
    Ext.Data.monthNumbers[Ext.Date.monthNames[n]] = n;
    Ext.Data.monthNumbers[monthNamesShort[n]] = n;
}

Ext.Date.getShortMonthName = month => monthNamesShort[month];

Ext.Date.getShortDatName = day => dayNamesShort[day];
