# Reminder App planing



## App Requisites

### The user way:
A user must be able to: 
-   singup
-   singin
-   once has singed up
    -   create a recurrent tastk to be remainded about
    -   recieve notifications to be reminded of his task at a swetted schedule
    -   set as completed for the current interval
    -   edit a task 
    -   archive a task (fully completed or not)
    -   list his current and archived tasks
    -   lists a task is records (date times when tasks sessions where completed or not)

## BackEnd


###   Models

####    User:
-   name
-   email
-   
####    Task
-   label
-   description
-   start_date
-   end_date
-   frecuency
-   notification_timing (1h before etc)
-   is_fully_completed
-   use_alarm (defered)
-   alarm_timing (defered)

####    Task Records


###   Routes
-   task_create
    -   create a task and schedule a notification job
-   task_edit_data
-   task_edit_date_intervals
-   task_edit_notification_timing
-   task_records


### Tech Stack
-   CF Workers
-   Faunadb
-   Auth0
-   One Signal 

### Learn and define how
-   Authentication & Authorization
-   Dinamically create or destroy workers cron jobs



## FrontEnd

### Home page
-   Little about the app & the proyect
-   Sinup & Singin btns

### App 
/app/

