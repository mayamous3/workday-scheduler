# Description
Given html, css and js file with starter code for a workday scheduler.

Task to enable users to add events to the scheduler using click events and local storage.


<img width="810" alt="Screen Shot 2023-04-20 at 10 41 25 PM" src="https://user-images.githubusercontent.com/127701178/233528976-59c9f15d-709b-4acc-836a-17601576afb0.png">


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

## Sources
Regex: https://stackoverflow.com/questions/10003683/how-can-i-extract-a-number-from-a-string-in-javascript
Clear Local Storage: https://stackoverflow.com/questions/7667958/clearing-localstorage-in-javascript
Name of Day and Month: https://stackabuse.com/how-to-get-name-of-month-and-day-in-javascript/
