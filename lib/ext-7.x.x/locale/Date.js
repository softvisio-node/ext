Ext.Date.dayNames = [

    //
    window.i18nd( "ext", "Sunday" ),
    window.i18nd( "ext", "Monday" ),
    window.i18nd( "ext", "Tuesday" ),
    window.i18nd( "ext", "Wednesday" ),
    window.i18nd( "ext", "Thursday" ),
    window.i18nd( "ext", "Friday" ),
    window.i18nd( "ext", "Saturday" ),
];

const dayNamesShort = [

    //
    window.i18nd( "ext", "Sun" /* short day name for Sunday */ ),
    window.i18nd( "ext", "Mon" /* short day name for Monday */ ),
    window.i18nd( "ext", "Tue" /* short day name for  Tuesday */ ),
    window.i18nd( "ext", "Wed" /* short day name for Wednesday */ ),
    window.i18nd( "ext", "Thu" /* short day name for Thursday */ ),
    window.i18nd( "ext", "Fri" /* short day name for  Friday */ ),
    window.i18nd( "ext", "Sat" /* short day name for Saturday */ ),
];

Ext.Date.monthNames = [

    //
    window.i18nd( "ext", "January" ),
    window.i18nd( "ext", "February" ),
    window.i18nd( "ext", "March" ),
    window.i18nd( "ext", "April" ),
    window.i18nd( "ext", "May" ),
    window.i18nd( "ext", "June" ),
    window.i18nd( "ext", "July" ),
    window.i18nd( "ext", "August" ),
    window.i18nd( "ext", "September" ),
    window.i18nd( "ext", "October" ),
    window.i18nd( "ext", "November" ),
    window.i18nd( "ext", "December" ),
];

const monthNamesShort = [

    //
    window.i18nd( "ext", "Jan" /* short month name for January */ ),
    window.i18nd( "ext", "Feb" /* short month name for February */ ),
    window.i18nd( "ext", "Mar" /* short month name for  March */ ),
    window.i18nd( "ext", "Apr" /* short month name for April */ ),
    window.i18nd( "ext", "May" /* short month name for May */ ),
    window.i18nd( "ext", "Jun" /* short month name for  June */ ),
    window.i18nd( "ext", "Jul" /* short month name for July */ ),
    window.i18nd( "ext", "Aug" /* short month name for August */ ),
    window.i18nd( "ext", "Sep" /* short month name for September */ ),
    window.i18nd( "ext", "Oct" /* short month name for October */ ),
    window.i18nd( "ext", "Nov" /* short month name for November */ ),
    window.i18nd( "ext", "Dec" /* short month name for  December */ ),
];

for ( let n = 0; n < Ext.Date.monthNames.length; n++ ) {
    Ext.Date.monthNumbers[Ext.Date.monthNames[n]] = n;
    Ext.Date.monthNumbers[monthNamesShort[n]] = n;
}

Ext.Date.getShortMonthName = month => monthNamesShort[month];

Ext.Date.getShortDayName = day => dayNamesShort[day];
