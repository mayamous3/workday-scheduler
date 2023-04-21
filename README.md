# Description
Given html, css and js file with starter code for a workday scheduler.

Task to enable users to add events to the scheduler using click events, local storage, and widgets.

## Accomplishments
- Enabled Users to save their scheduled events to local storage.
- Applied color coding based on whether scheduled hour is in past, present or future.
- Created button for clearing storage, which helps with testing and also user experience.
- Used regex to separate digits from string values.
- Event listeners are associated to Button Clicks.
- Cleaned up HTML file and JS file comments that are no longer applicable.


## User Story

AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively

## Acceptance Criteria


GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
