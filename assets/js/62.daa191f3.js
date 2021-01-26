(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{459:function(e,t,a){"use strict";a.r(t);var i=a(26),s=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[a("em",[e._v("This document was adapted from Quartz Java")])]),e._v(" "),a("h2",{attrs:{id:"jobdatamap-tips"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jobdatamap-tips"}},[e._v("#")]),e._v(" JobDataMap Tips")]),e._v(" "),a("h3",{attrs:{id:"only-store-primitive-data-types-including-strings-in-the-jobdatamap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#only-store-primitive-data-types-including-strings-in-the-jobdatamap"}},[e._v("#")]),e._v(" Only Store Primitive Data Types (including Strings) In the JobDataMap")]),e._v(" "),a("p",[e._v("Only store primitive data types (including strings) in JobDataMap to avoid data serialization issues short and long-term.")]),e._v(" "),a("h3",{attrs:{id:"use-the-merged-jobdatamap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-the-merged-jobdatamap"}},[e._v("#")]),e._v(" Use the Merged JobDataMap")]),e._v(" "),a("p",[e._v("The JobDataMap that is found on the "),a("code",[e._v("JobExecutionContext")]),e._v(" during Job execution serves as a convenience.\nIt is a merge of the JobDataMap found on the JobDetail and the one found on the Trigger, with the value in the latter overriding any same-named values in the former.")]),e._v(" "),a("p",[e._v("Storing JobDataMap values on a Trigger can be useful in the case where you have a Job that is stored in the scheduler for regular/repeated use by multiple Triggers,\nyet with each independent triggering, you want to supply the Job with different data inputs.")]),e._v(" "),a("p",[e._v("In light of all of the above, we recommend as a best practice the following: Code within the "),a("code",[e._v("IJob.Execute(..)")]),e._v(" method should generally retrieve\nvalues from the JobDataMap on found on the JobExecutionContext, rather than directly from the one on the JobDetail.")]),e._v(" "),a("h2",{attrs:{id:"trigger-tips"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#trigger-tips"}},[e._v("#")]),e._v(" Trigger Tips")]),e._v(" "),a("h3",{attrs:{id:"use-triggerutils"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-triggerutils"}},[e._v("#")]),e._v(" Use TriggerUtils")]),e._v(" "),a("p",[e._v("TriggerUtils:")]),e._v(" "),a("ul",[a("li",[e._v("Offers a simpler way to create triggers (schedules)")]),e._v(" "),a("li",[e._v("Has various methods for creating triggers with schedules that meet particular descriptions, as opposed to directly instantiating triggers of a specific type (i.e. SimpleTrigger, CronTrigger, etc.) and then invoking various setter methods to configure them")]),e._v(" "),a("li",[e._v("Offers a simple way to create Dates (for start/end dates)")]),e._v(" "),a("li",[e._v("Offers helpers for analyzing triggers (e.g. calculating future fire times)")])]),e._v(" "),a("h2",{attrs:{id:"ado-net-jobstore"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ado-net-jobstore"}},[e._v("#")]),e._v(" ADO.NET JobStore")]),e._v(" "),a("h3",{attrs:{id:"never-write-directly-to-quartz-s-tables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#never-write-directly-to-quartz-s-tables"}},[e._v("#")]),e._v(" Never Write Directly To Quartz's Tables")]),e._v(" "),a("p",[e._v("Writing scheduling data directly to the database (via SQL) rather than using scheduling API:")]),e._v(" "),a("ul",[a("li",[e._v("Results in data corruption (deleted data, scrambled data)")]),e._v(" "),a("li",[e._v('Results in job seemingly "vanishing" without executing when a trigger\'s fire time arrives')]),e._v(" "),a("li",[e._v('Results in job not executing "just sitting there" when a trigger\'s fire time arrives')]),e._v(" "),a("li",[e._v("May result in: Dead-locks")]),e._v(" "),a("li",[e._v("Other strange problems and data corruption")])]),e._v(" "),a("h3",{attrs:{id:"never-point-a-non-clustered-scheduler-at-the-same-database-as-another-scheduler-with-the-same-scheduler-name"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#never-point-a-non-clustered-scheduler-at-the-same-database-as-another-scheduler-with-the-same-scheduler-name"}},[e._v("#")]),e._v(" Never Point A Non-Clustered Scheduler At the Same Database As Another Scheduler With The Same Scheduler Name")]),e._v(" "),a("p",[e._v("If you point more than one scheduler instance at the same set of database tables, and one or more of those instances is not configured for clustering, any of the following may occur:")]),e._v(" "),a("ul",[a("li",[e._v("Results in data corruption (deleted data, scrambled data)")]),e._v(" "),a("li",[e._v('Results in job seemingly "vanishing" without executing when a trigger\'s fire time arrives')]),e._v(" "),a("li",[e._v('Results in job not executing, "just sitting there" when a trigger\'s fire time arrives')]),e._v(" "),a("li",[e._v("May result in: Dead-locks")]),e._v(" "),a("li",[e._v("Other strange problems and data corruption")])]),e._v(" "),a("h3",{attrs:{id:"ensure-adequate-datasource-connection-size"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ensure-adequate-datasource-connection-size"}},[e._v("#")]),e._v(" Ensure Adequate Datasource Connection Size")]),e._v(" "),a("p",[e._v("It is recommended that your Datasource max connection size be configured to be at least the number of worker threads in the thread pool plus three.\nYou may need additional connections if your application is also making frequent calls to the scheduler API.")]),e._v(" "),a("h2",{attrs:{id:"daylight-savings-time"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#daylight-savings-time"}},[e._v("#")]),e._v(" Daylight Savings Time")]),e._v(" "),a("h3",{attrs:{id:"avoid-scheduling-jobs-near-the-transition-hours-of-daylight-savings-time"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#avoid-scheduling-jobs-near-the-transition-hours-of-daylight-savings-time"}},[e._v("#")]),e._v(" Avoid Scheduling Jobs Near the Transition Hours of Daylight Savings Time")]),e._v(" "),a("p",[e._v("NOTE: Specifics of the transition hour and the amount of time the clock moves forward or back varies by locale see: "),a("a",{attrs:{href:"https://secure.wikimedia.org/wikipedia/en/wiki/Daylight_saving_time_around_the_world",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://secure.wikimedia.org/wikipedia/en/wiki/Daylight_saving_time_around_the_world"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("SimpleTriggers are not affected by Daylight Savings Time as they always fire at an exact millisecond in time, and repeat an exact number of milliseconds apart.")]),e._v(" "),a("p",[e._v("Because CronTriggers fire at given hours/minutes/seconds, they are subject to some oddities when DST transitions occur.")]),e._v(" "),a("p",[e._v("As an example of possible issues, scheduling in the United States within TimeZones/locations that observe Daylight Savings time, the following problems may occur if using CronTrigger and scheduling fire times during the hours of 1:00 AM and 2:00 AM:")]),e._v(" "),a("ul",[a("li",[e._v("1:05 AM may occur twice! - duplicate firings on CronTrigger possible")]),e._v(" "),a("li",[e._v("2:05 AM may never occur! - missed firings on CronTrigger possible")])]),e._v(" "),a("p",[e._v("Again, specifics of time and amount of adjustment varies by locale.")]),e._v(" "),a("p",[e._v("Other trigger types that are based on sliding along a calendar (rather than exact amounts of time), such as CalenderIntervalTrigger, will be similarly affected - but rather than missing a firing, or firing twice, may end up having it's fire time shifted by an hour.")]),e._v(" "),a("h2",{attrs:{id:"jobs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jobs"}},[e._v("#")]),e._v(" Jobs")]),e._v(" "),a("h3",{attrs:{id:"waiting-for-conditions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#waiting-for-conditions"}},[e._v("#")]),e._v(" Waiting For Conditions")]),e._v(" "),a("p",[e._v("Long-running jobs prevent others from running (if all threads in the ThreadPool are busy).")]),e._v(" "),a("p",[e._v("If you feel the need to call Thread.sleep() on the worker thread executing the Job, it is typically a sign that the job is not ready to do the rest of its work because it needs to wait for some condition (such as the availability of a data record) to become true.")]),e._v(" "),a("p",[e._v("A better solution is to release the worker thread (exit the job) and allow other jobs to execute on that thread. The job can reschedule itself, or other jobs before it exits.")]),e._v(" "),a("h3",{attrs:{id:"throwing-exceptions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#throwing-exceptions"}},[e._v("#")]),e._v(" Throwing Exceptions")]),e._v(" "),a("p",[e._v("A Job's execute method should contain a try-catch block that handles all possible exceptions.")]),e._v(" "),a("p",[e._v("If a job throws an exception, Quartz will typically immediately re-execute it, meaning the job can and likely will throw the same exception again. This can lead to wasted resources and, in the worst cases, unstable or crashed applications.\nIt's better if the job catches all exceptions it may encounter, handles them, and reschedules itself or other jobs to work around the issue.")]),e._v(" "),a("h3",{attrs:{id:"recoverability-and-idempotence"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#recoverability-and-idempotence"}},[e._v("#")]),e._v(" Recoverability and Idempotence")]),e._v(" "),a("p",[e._v('In-progress Jobs marked "recoverable" are automatically re-executed after a scheduler fails. This means some of the job\'s "work" will be executed twice.')]),e._v(" "),a("p",[e._v("This means the job should be coded in such a way that its work is idempotent.")]),e._v(" "),a("h2",{attrs:{id:"listeners-triggerlistener-joblistener-schedulerlistener"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#listeners-triggerlistener-joblistener-schedulerlistener"}},[e._v("#")]),e._v(" Listeners (TriggerListener, JobListener, SchedulerListener)")]),e._v(" "),a("h3",{attrs:{id:"keep-code-in-listeners-concise-and-efficient"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keep-code-in-listeners-concise-and-efficient"}},[e._v("#")]),e._v(" Keep Code In Listeners Concise And Efficient")]),e._v(" "),a("p",[e._v("Performing large amounts of work is discouraged, as the thread that would be executing the job (or completing the trigger and moving on to firing another job, etc.) will be tied up within the listener.")]),e._v(" "),a("h3",{attrs:{id:"handle-exceptions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#handle-exceptions"}},[e._v("#")]),e._v(" Handle Exceptions")]),e._v(" "),a("p",[e._v("Every listener method should contain a try-catch block that handles all possible exceptions.")]),e._v(" "),a("p",[e._v("If a listener throws an exception, it may cause other listeners not to be notified and/or prevent the execution of the job, etc.")]),e._v(" "),a("h2",{attrs:{id:"exposing-scheduler-functionality-through-applications"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exposing-scheduler-functionality-through-applications"}},[e._v("#")]),e._v(" Exposing Scheduler Functionality Through Applications")]),e._v(" "),a("h3",{attrs:{id:"be-careful-of-security"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#be-careful-of-security"}},[e._v("#")]),e._v(" Be Careful of Security!")]),e._v(" "),a("p",[e._v("Some users expose Quartz's Scheduler functionality through an application user interface. This can be very useful, though it can also be extremely dangerous.")]),e._v(" "),a("p",[e._v("Be sure you don't mistakenly allow users to define jobs of any type they wish, with whatever parameters they wish.\nFor example, Quartz.Jobs package ships with a pre-made job "),a("code",[e._v("NativeJob")]),e._v(", which will execute any arbitrary native (operating system) system command that it is defined to.\nMalicious users could use this to take control of, or destroy your system.")]),e._v(" "),a("p",[e._v("Likewise other jobs such as "),a("code",[e._v("SendEmailJob")]),e._v(", and virtually any others could be used for malicious intent.")]),e._v(" "),a("p",[e._v("Allowing users to define whatever job they want effectively opens your system to all sorts of vulnerabilities comparable/equivalent to Command Injection Attacks as defined by OWASP and MITRE.")])])}),[],!1,null,null,null);t.default=s.exports}}]);