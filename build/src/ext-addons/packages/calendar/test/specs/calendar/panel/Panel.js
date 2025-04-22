topSuite("Ext.calendar.panel.Panel", ['Ext.calendar.*'], function() {
    var describeTouch =  Ext.supports.Touch ? describe : xdescribe,
    view, cell, calendarData, cal1Data, cal2Data, store, source,
    asyncCalendar, asyncEvents, defaultRange, widget, calendarView,
    widgetStartDate, widgetEndDate, storeStartDate, storeEndDate;

    function makeView(cfg) {
        cfg = Ext.apply({
            width: 800,
            height: 600
        }, cfg);
        view = new Ext.calendar.panel.Panel(cfg);
        view.render(Ext.getBody());
        view.getView().activeView.getView().doRefresh();
    }

    function makeCalStore(cfg) {
        store = new Ext.calendar.store.Calendars(Ext.apply({
            proxy: {
                type: 'ajax',
                url: 'fake'
            }
        }, cfg));
    }

    function makeAutoStore(cfg, preventAutoLoad) {
        makeCalStore(cfg);
        source = store.getEventSource();

        if (!preventAutoLoad) {
            store.load();
            Ext.Ajax.mockCompleteWithData(calendarData);
        }
    }

    function setDefaultRange() {
        return source.setRange(new Ext.calendar.date.Range(defaultRange[0], defaultRange[1]));
    }

    function setDefaultRangeAndComplete() {
        setDefaultRange();
        doComplete.apply(this, arguments);
    }

    function doComplete() {
        var len = arguments.length,
            i;

        for (i = 0; i < len; ++i) {
            Ext.Ajax.mockCompleteWithData(arguments[i]);
        }
    }

    afterEach(function() {
        view = Ext.destroy(view);
    });

    // EXTJS-26815
    describe("TodayCellCls", function() {
        describe("month view", function() {
            var weekCls = "x-today-cell-highlight-weeks-day";

            it("calender should be having the today cell highlighted when config is true", function() {
                makeView({
                    highlightToday: true
                });

                var monthView = view.getView();

                expect(monthView.el.selectNode('.' + weekCls)).toBeTruthy();
            });

            it("calender should not be having the today cell highlighted when config is false", function() {
                makeView({
                    highlightToday: false
                });

                var monthView = view.getView();

                expect(monthView.el.selectNode('.' + weekCls)).toBeNull();
            });
        });

        /** TODO - False positive test */
        xdescribe("week view", function() {
            var dayCls = "x-today-cell-highlight-day";

            it("calender should be having the today cell highlighted when config is true", function() {
                makeView({
                    highlightToday: true,
                    defaultView: 'week'
                });

                var weekView = view.getView();

                expect(weekView.el.selectNode('.' + dayCls)).toBeTruthy();
            });

            it("calender should not be having the today cell highlighted when config is false", function() {
                makeView({
                    highlightToday: false,
                    defaultView: 'week'
                });

                var weekView = view.getView();

                expect(weekView.el.selectNode('.' + dayCls)).toBeNull();
            });
        });
    });

    describeTouch("Touch interaction", function() {
        var calendarView;

        beforeEach(function() {
            makeView({
                highlightToday: true,
                store: {
                    model: 'Ext.calendar.model.Calendar',
                    data: [{
                        id: 1,
                        title: "Personal Meeting",
                        name: 'Event A',
                        startDate: new Date(),
                        endDate: new Date(),
                        allDay: true
                    }, {
                        "id": 2,
                        "title": "Office Meeting",
                        name: 'Event B',
                        startDate: new Date(),
                        endDate: new Date(),
                        allDay: true
                    }, {
                        "id": 3,
                        "title": "Scrum Call",
                        name: 'Event 5',
                        startDate: new Date(),
                        endDate: new Date(),
                        allDay: true
                    }, {
                        "id": 4,
                        "title": "Personal Alarm",
                        name: 'Event 4',
                        startDate: new Date(),
                        endDate: new Date(),
                        allDay: true
                    }, {
                        "id": 5,
                        "title": "Appointment",
                        name: 'Event 8',
                        startDate: new Date(),
                        endDate: new Date(),
                        allDay: true
                    }]
                }
            });
            calendarView = view.getView().activeView.getView();
        });
        afterEach(function() {
            if (calendarView.form.getEl) {
                calendarView.form.getEl().down('.x-calendar-picker-field-icon').destroy();
            }

            view = view.destroy();
        });
        describe("month view", function() {
            it("should display 'Add Events' form on tap", function() {
                cell = calendarView.getCell(new Date());
                Ext.testHelper.touchStart(cell);
                waitsFor(function() {
                    return calendarView.form && calendarView.form.isVisible();
                });
                runs(function() {
                    expect(calendarView.form.isVisible()).toBeTruthy();
                });
            });
        });

        describe("week view", function() {
            it("should display 'Add Events' form on tap", function() {
                var calenderEvent, header, column, widget, selectField;

                view.getView().setView('week');
                calendarView = view.getView().activeView.getView();

                waitsFor(function() {
                    return calendarView.getColumn(0);
                });
                runs(function() {
                    column = calendarView.getColumn(0);
                    header = calendarView.getHeader(0);
                    Ext.testHelper.touchStart(calendarView.getColumn(0));
                    Ext.testHelper.touchMove(calendarView.getColumn(0), { x: 0, y: 60 });
                    Ext.testHelper.touchEnd(calendarView.getColumn(0));
                    calenderEvent = Ext.get(column).el.down('.x-calendar-event');
                    widget = Ext.get(column).down('.x-calendar-event-day').dom;
                    Ext.testHelper.touchStart(widget);
                    Ext.testHelper.touchEnd(widget);
                    waitsFor(function() {
                        calenderEvent = calenderEvent.component.destroy();

                        return calendarView.form && calendarView.form.isVisible();
                    });
                    runs(function() {
                        expect(calendarView.form.isVisible()).toBeTruthy();
                        selectField = calendarView.form.down('calendar-calendar-picker');
                        selectField.expand();
                        expect(selectField.getPicker().isVisible()).toBeTruthy();
                        Ext.get(header.cells[0]).destroy();
                        header = header.destroy();
                        widget = Ext.get(widget).destroy();
                        Ext.get(column).down('.x-calendar-days-day-event-container').destroy();
                        column = Ext.get(column).destroy();
                    });
                });
            });
        });
    });

    // EXTJS-28434
    describe("Events in Week and Month view", function() {

        beforeEach(function() {
            asyncCalendar = Ext.calendar.store.Calendars.prototype.config.asynchronousLoad;
            asyncEvents = Ext.calendar.store.Events.prototype.config.asynchronousLoad;
            Ext.calendar.store.Calendars.prototype.config.asynchronousLoad = false;
            Ext.calendar.store.Events.prototype.config.asynchronousLoad = false;

            MockAjaxManager.addMethods();

            defaultRange = [new Date(2010, 0, 1, 0, 0), new Date(2010, 0, 2, 23, 59)];

            calendarData = [{
                id: 1,
                title: 'Cal1',
                eventCfg: {
                    proxy: {
                        type: 'ajax',
                        url: 'fake1'
                    }
                }
            }, {
                id: 2,
                title: 'Cal2',
                eventCfg: {
                    proxy: {
                        type: 'ajax',
                        url: 'fake2'
                    }
                }
            }];

            cal1Data = [{
                id: 1,
                title: 'Cal1.1',
                startDate: new Date(2009, 11, 25),
                endDate: new Date(2009, 11, 27)
            }];

            cal2Data = [{
                id: 7,
                title: 'Cal2.1',
                startDate: new Date(2010, 0, 1, 0, 0),
                endDate: new Date(2010, 0, 2, 23, 59)
            }];
        });

        afterEach(function() {
            view = Ext.destroy(view);
            source = store = Ext.destroy(source, store);
            MockAjaxManager.removeMethods();
            defaultRange = calendarData = cal1Data = cal2Data = null;

            Ext.calendar.store.Calendars.prototype.config.asynchronousLoad = asyncCalendar;
            Ext.calendar.store.Events.prototype.config.asynchronousLoad = asyncEvents;

        });

        function createCalendarWithEvents() {
            makeAutoStore();
            setDefaultRangeAndComplete(cal1Data, cal2Data);

            store.load();
            doComplete([{
                id: 3,
                title: 'Cal3',
                eventCfg: {
                    proxy: {
                        type: 'ajax',
                        url: 'fake3'
                    }
                }
            }]);
            doComplete([{
                id: 11,
                startDate: new Date(2010, 0, 1, 0, 0),
                endDate: new Date(2010, 0, 2, 23, 59),
                allDay: true
            }]);
            makeView({
                value: new Date(2010, 0, 1),
                store: store
            });

            calendarView = view.getView().activeView.getView();
        }

        describe("Month View", function() {
            it("widget span should be visible in month view", function() {
                createCalendarWithEvents();

                widget = calendarView.el.down('.x-calendar-event');
                storeStartDate = store.getEventSource().data.items[0].getStartDate();
                storeEndDate = store.getEventSource().data.items[0].getEndDate();
                widgetStartDate = widget.component.getStartDate();
                widgetEndDate = widget.component.getEndDate();

                expect(widget.isVisible()).toBeTruthy();
                expect(widgetStartDate).toBe(storeStartDate);
                expect(widgetEndDate).toBe(storeEndDate);
            });
        });

        xdescribe("Week View", function() {
            it("widget span should be visible in Week view", function() {
                createCalendarWithEvents();
                view.getView().setView('week');
                calendarView = view.getView().activeView.getView();

                widget = calendarView.el.down('.x-calendar-event');
                storeStartDate = store.getEventSource().data.items[0].getStartDate();
                storeEndDate = store.getEventSource().data.items[0].getEndDate();
                widgetStartDate = widget.component.getStartDate();
                widgetEndDate = widget.component.getEndDate();

                expect(widgetStartDate).toBe(storeStartDate);
                expect(widgetEndDate).toBe(storeEndDate);
                expect(widget.isVisible()).toBeTruthy();
            });
        });
    });
});
