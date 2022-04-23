# workday

GIVEN I am using a daily planner to create a schedule

WHEN I open the planner
THEN the current day is displayed at the top of the calendar
        Moment js? 
        moment().add(3, 'days').calendar();      id=current day class=lead

WHEN I scroll down
THEN I am presented with time blocks for standard business hours
    9-5 Ordered List 

WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
        if statement moment.js

WHEN I click into a time block
THEN I can enter an event
    click event append child, input , form . console log

WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
 click save event console log??
        json / parsing

WHEN I refresh the page
THEN the saved events persist