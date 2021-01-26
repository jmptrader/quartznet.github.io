(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{458:function(e,t,a){"use strict";a.r(t);var o=a(26),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("This FAQ was adapted from Quartz Java")])]),e._v(" "),a("h1",{attrs:{id:"general-questions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#general-questions"}},[e._v("#")]),e._v(" General Questions")]),e._v(" "),a("h2",{attrs:{id:"what-is-quartz"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-quartz"}},[e._v("#")]),e._v(" What is Quartz")]),e._v(" "),a("p",[e._v('Quartz is a job scheduling system that can be integrated with, or used along\nside virtually any other software system. The term "job scheduler" seems to\nconjure different ideas for different people. As you read this tutorial, you\nshould be able to get a firm idea of what we mean when we use this term, but\nin short, a job scheduler is a system that is responsible for executing\n(or notifying) other software components when a pre-determined (scheduled)\ntime arrives.')]),e._v(" "),a("p",[e._v("Quartz is quite flexible, and contains multiple usage paradigms that can be\nused separately or together, in order to achieve your desired behavior, and\nenable you to write your code in the manner that seems most 'natural' to\nyour project.")]),e._v(" "),a("p",[e._v("Quartz is very light-weight, and requires very little setup/configuration -\nit can actually be used 'out-of-the-box' if your needs are relatively basic.")]),e._v(" "),a("p",[e._v("Quartz is fault-tolerant, and can persist ('remember') your scheduled\njobs between system restarts.")]),e._v(" "),a("p",[e._v("Although Quartz is extremely useful for simply running certain system\nprocesses on given schedules, the full potential of Quartz can be realized\nwhen you learn how to use it to drive the flow of your application's\nbusiness processes.")]),e._v(" "),a("h2",{attrs:{id:"what-is-quartz-from-a-software-component-view"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-quartz-from-a-software-component-view"}},[e._v("#")]),e._v(" What is Quartz - From a Software Component View?")]),e._v(" "),a("p",[e._v("Quartz is distributed as a small dynamically linked library (.dll file)\nthat contains all  of the core Quartz functionality. The main interface (API) to this\nfunctionality is the Scheduler interface. It provides simple operations\nsuch as scheduling/unscheduling jobs, starting/stopping/pausing the scheduler.")]),e._v(" "),a("p",[e._v("If you wish to schedule your own software components for execution they must\nimplement the simple Job interface, which contains the method execute().\nIf you wish to have components notified when a scheduled fire-time arrives,\nthen the components should implement either the TriggerListener or JobListener\ninterface.")]),e._v(" "),a("p",[e._v("The main Quartz 'process' can be started and ran within your own application,\nor a stand-alone application (with an remote interface).")]),e._v(" "),a("h1",{attrs:{id:"why-not-just-use-system-timers-timer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why-not-just-use-system-timers-timer"}},[e._v("#")]),e._v(" Why not just use System.Timers.Timer?")]),e._v(" "),a("p",[e._v('.NET Framework has "built-in" timer capabilities, through the\nSystem.Timers.Timer class - why would someone use Quartz rather than these\nstandard features?')]),e._v(" "),a("p",[e._v("There are many reasons! Here are a few:")]),e._v(" "),a("ul",[a("li",[e._v("Timers have no persistence mechanism.")]),e._v(" "),a("li",[e._v("Timers have inflexible scheduling (only able to set start-time & repeat interval, nothing based on dates, time of day, etc.")]),e._v(" "),a("li",[e._v("Timers don't utilize a thread-pool (one thread per timer)")]),e._v(" "),a("li",[e._v("Timers have no real management schemes - you'd have to write your own mechanism for being able to remember, organize and retreive your tasks by name, etc.")])]),e._v(" "),a("p",[e._v("...of course to some simple applications these features may not be important,\nin which case it may then be the right decision not to use Quartz.NET.")]),e._v(" "),a("h1",{attrs:{id:"miscellaneous-questions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#miscellaneous-questions"}},[e._v("#")]),e._v(" Miscellaneous Questions")]),e._v(" "),a("h2",{attrs:{id:"how-many-jobs-is-quartz-capable-of-running"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-many-jobs-is-quartz-capable-of-running"}},[e._v("#")]),e._v(" How many jobs is Quartz capable of running?")]),e._v(" "),a("p",[e._v('This is a tough question to answer... the answer is basically "it depends".')]),e._v(" "),a("p",[e._v('I know you hate that answer, to here\'s some information about what it depends "on".')]),e._v(" "),a("p",[e._v('First off, the JobStore that you use plays a significant factor.\nThe RAM-based JobStore is MUCH (1000x) faster than the ADO.NET-based JobStore.\nThe speed of AdoJobStore depends almost entirely on the speed of the\nconnection to your database, which data base system that you use, and what\nhardware the database is running on. Quartz actually does very little\nprocessing itself, nearly all of the time is spent in the database. Of course\nRAMJobStore has a more finite limit on how many Jobs & Triggers can be stored,\nas you\'re sure to have less RAM than hard-drive space for a database.\nYou may also look at the FAQ "How do I improve the performance of AdoJobStore?"')]),e._v(" "),a("p",[e._v('So, the limitting factor of the number of Triggers and Jobs Quartz can "store"\nand monitor is really the amount of storage space available to the JobStore\n(either the amount of RAM or the amount of disk space).')]),e._v(" "),a("p",[e._v('Now, aside from "how many can I store?" is the question of "how many jobs\ncan Quartz be running at the same moment in time?"')]),e._v(" "),a("p",[e._v('One thing that CAN slow down quartz itself is using a lot of listeners\n(TriggerListeners, JobListeners, and SchedulerListeners). The time spent in\neach listener obviously adds into the time spent "processing" a job\'s\nexecution, outside of actual execution of the job. This doesn\'t mean that\nyou should be terrified of using listeners, it just means that you should\nuse them judiciously - don\'t create a bunch of "global" listeners if you can\nreally make more specialized ones. Also don\'t do "expensive" things in the\nlisteners, unless you really need to. Also be mindful that many\nplug-ins (such as the "history" plugin) are actually listeners.')]),e._v(" "),a("p",[e._v("The actual number of jobs that can be running at any moment in time is\nlimitted by the size of the thread pool. If there are five threads in\nthe pool, no more than five jobs can run at a time. Be careful of making a\nlot of threads though, as the VM, Operating System, and CPU all have a hard\ntime juggling lots of threads, and performance degrades just because of all\nof the management. In most cases performance starts to tank as you get into\nthe hundreds of threads. Be mindful that if you're running within an\napplication server, it probably has created at least a few dozen threads\nof its own!")]),e._v(" "),a("p",[e._v("Aside from those factors, it really comes down to what your jobs DO.\nIf your jobs take a long time to complete their work, and/or their work is\nvery CPU-intensive, then you're obviously not going to be able to run very\nmany jobs at once, nor very many in a given spanse of time.")]),e._v(" "),a("p",[e._v("Finally, if you just can't get enough horse-power out of one Quartz instance,\nyou can always load-balance many Quartz instances (on separate machines).\nEach will run the jobs out of the shared database on a first-come first-serve\nbasis, as quickly as the triggers need fired.")]),e._v(" "),a("p",[e._v('So here you are this far into the answer of "how many", and I still\nhaven\'t given you a number And I really hate to, because of all of the\nvariables mentioned above. So let me just say, there are installments of\nQuartz Java out there that are managing hundreds-of-thousands of Jobs and Triggers,\nand that at any given moment in time are executing dozens of jobs - and this\nexcludes using load-balancing. With this in mind, most people should feel\nconfident that they can get the performance out of Quartz that they need.')]),e._v(" "),a("h1",{attrs:{id:"questions-about-jobs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#questions-about-jobs"}},[e._v("#")]),e._v(" Questions About Jobs")]),e._v(" "),a("h2",{attrs:{id:"how-can-i-control-the-instantiation-of-jobs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-can-i-control-the-instantiation-of-jobs"}},[e._v("#")]),e._v(" How can I control the instantiation of Jobs?")]),e._v(" "),a("p",[e._v("See Quartz.Spi.IJobFactory and the Quartz.IScheduler.JobFactory property.")]),e._v(" "),a("h2",{attrs:{id:"how-do-i-keep-a-job-from-being-removed-after-it-completes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-do-i-keep-a-job-from-being-removed-after-it-completes"}},[e._v("#")]),e._v(" How do I keep a Job from being removed after it completes?")]),e._v(" "),a("p",[e._v('Set the property JobDetail.Durable = true - which instructs Quartz not to\ndelete the Job when it becomes an "orphan" (when the Job not longer has a\nTrigger referencing it).')]),e._v(" "),a("h2",{attrs:{id:"how-do-i-keep-a-job-from-firing-concurrently"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-do-i-keep-a-job-from-firing-concurrently"}},[e._v("#")]),e._v(" How do I keep a Job from firing concurrently?")]),e._v(" "),a("p",[a("strong",[e._v("Quartz.NET 2.x")])]),e._v(" "),a("p",[e._v("Implement "),a("strong",[e._v("IJob")]),e._v(" and also decorate your job class with "),a("code",[e._v("[DisallowConcurrentExecution]")]),e._v(" attribute. Read the API\ndocumentation for "),a("code",[e._v("DisallowConcurrentExecutionAttribute")]),e._v(" for more information.")]),e._v(" "),a("p",[a("strong",[e._v("Quartz.NET 1.x")])]),e._v(" "),a("p",[e._v("Make the job class implement "),a("code",[e._v("IStatefulJob")]),e._v(" rather than "),a("code",[e._v("IJob")]),e._v(". Read the API\ndocumentation for "),a("code",[e._v("IStatefulJob")]),e._v(" for more information.")]),e._v(" "),a("h2",{attrs:{id:"how-do-i-stop-a-job-that-is-currently-executing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-do-i-stop-a-job-that-is-currently-executing"}},[e._v("#")]),e._v(" How do I stop a Job that is currently executing?")]),e._v(" "),a("p",[e._v("Quartz 1.x and 2x: See the "),a("code",[e._v("Quartz.IInterruptableJob")]),e._v(" interface, and the "),a("code",[e._v("IScheduler.Interrupt(string, string)")]),e._v(" method.")]),e._v(" "),a("p",[e._v("Quartz 3.x: See "),a("code",[e._v("IJobExecutionContext")]),e._v("'s "),a("code",[e._v("CancellationToken.IsCancellationRequested")])]),e._v(" "),a("h1",{attrs:{id:"questions-about-triggers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#questions-about-triggers"}},[e._v("#")]),e._v(" Questions About Triggers")]),e._v(" "),a("h2",{attrs:{id:"how-do-i-chain-job-execution-or-how-do-i-create-a-workflow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-do-i-chain-job-execution-or-how-do-i-create-a-workflow"}},[e._v("#")]),e._v(" How do I chain Job execution? Or, how do I create a workflow?")]),e._v(" "),a("p",[e._v('There currently is no "direct" or "free" way to chain triggers with Quartz.\nHowever there are several ways you can accomplish it without much effort.\nBelow is an outline of a couple approaches:')]),e._v(" "),a("p",[e._v("One way is to use a listener (i.e. a TriggerListener, JobListener or\nSchedulerListener) that can notice the completion of a job/trigger and then\nimmediately schedule a new trigger to fire. This approach can get a bit\ninvolved, since you'll have to inform the listener which job follows which")]),e._v(" "),a("ul",[a("li",[e._v("and you may need to worry about persistence of this information.")])]),e._v(" "),a("p",[e._v("Another way is to build a Job that contains within its JobDataMap the name\nof the next job to fire, and as the job completes (the last step in its\n"),a("code",[e._v("Execute()")]),e._v(" method) have the job schedule the next job. Several people are\ndoing this and have had good luck. Most have made a base (abstract) class\nthat is a Job that knows how to get the job name and group out of the\nJobDataMap using special keys (constants) and contains code to schedule the\nidentified job. Then they simply make extensions of this class that included\nthe additional work the job should do.")]),e._v(" "),a("p",[e._v("In the future, Quartz will provide a much cleaner way to do this, but until\nthen, you'll have to use one of the above approaches, or think of yet another\nthat works better for you.")]),e._v(" "),a("h2",{attrs:{id:"why-isn-t-my-trigger-firing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why-isn-t-my-trigger-firing"}},[e._v("#")]),e._v(" Why isn't my trigger firing?")]),e._v(" "),a("p",[e._v("The most common reason for this is not having called "),a("code",[e._v("Scheduler.Start()")]),e._v(",\nwhich tells the scheduler to start firing triggers.")]),e._v(" "),a("p",[e._v("The second most common reason is that the trigger or trigger group\nhas been paused.")]),e._v(" "),a("h2",{attrs:{id:"daylight-saving-time-and-triggers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#daylight-saving-time-and-triggers"}},[e._v("#")]),e._v(" Daylight Saving Time and Triggers")]),e._v(" "),a("p",[e._v("CronTrigger and SimpleTrigger each handle daylight savings time in their own\nway - each in the way that is intuitive to the trigger type.")]),e._v(" "),a("p",[e._v("First, as a review of what daylight savings time is, please read this resource:\nhttp://webexhibits.org/daylightsaving/g.html . Some readers may be unaware\nthat the rules are different for different nations/contents. For example,\nthe 2005 daylight savings time starts in the United States on April 3, but\nin Egypt on April 29. It is also important to know that not only the dates\nare different for different locals, but the time of the shift is different\nas well. Many places shift at 2:00 am, but others shift time at 1:00 am,\nothers at 3:00 am, and still others right at midnight.")]),e._v(" "),a("p",[e._v('SimpleTrigger allows you to schedule jobs to fire every N milliseconds.\nAs such, it has to do nothing in particular with respect to daylight\nsavings time in order to "stay on schedule" - it simply keeps firing every\nN milliseconds. Regardless your SimpleTrigger is firing every 10 seconds,\nor every 15 minutes, or every hour or every 24 hours it will continue to do\nso. However the implication of this which confuses some users is that if\nyour SimpleTrigger is firing say every 12 hours, before daylight savings\nswitches it may be firing at what appears to be 3:00 am and 3:00 pm,\nbut after daylight savings 4:00 am and 4:00 pm. This is not a bug')]),e._v(" "),a("ul",[a("li",[e._v('the trigger has kept firing exacly every N milliseconds, it just that the\n"name" of that time that humans impose on that moment has changed.')])]),e._v(" "),a("p",[e._v('CronTrigger allows you to schedule jobs to fire at certain moments with\nrespect to a "gregorian calendar". Hence, if you create a trigger to fire\nevery day at 10:00 am, before and after daylight savings time switches it\nwill continue to do so. However, depending on whether it was the Spring or\nAutumn daylight savings event, for that particular Sunday, the actual time\ninterval between the firing of the trigger on Sundary morning at 10:00 am\nsince its firing on Saturday morning at 10:00 am will not be 24 hours,\nbut will instead be 23 or 25 hours respectively.')]),e._v(" "),a("p",[e._v("There is one additional point users must understand about CronTrigger with\nrespect to daylight savings. This is that you should take careful thought\nabout creating schedules that fire between midnight and 3:00 am (the critical\nwindow of time depends on your trigger's locale, as explained above).\nThe reason is that depending on your trigger's schedule, and the particular\ndaylight event, the trigger may be skipped or may appear to not fire for an\nhour or two. As examples, say you are in the United States, where daylight\nsavings events occur at 2:00 am. If you have a CronTrrigger that fires every\nday at 2:15 am, then on the day of the beginning of daylight savings time\nthe trigger will be skipped, since, 2:15 am never occurs that day. If you\nhave a CronTrigger that fires every 15 minutes of every hour of every day,\nthen on the day daylight savings time ends you will have an hour of time\nfor which no triggerings occur, because when 2:00 am arrives, it will become\n1:00 am again, however all of the firings during the one o'clock hour have\nalready occurred, and the trigger's next fire time was set to 2:00 am")]),e._v(" "),a("ul",[a("li",[e._v("hence for the next hour no triggerings will occur.")])]),e._v(" "),a("p",[e._v("In summary, all of this makes perfect sense, and should be easy to remember\nif you keep these two rules in mind:")]),e._v(" "),a("ul",[a("li",[e._v("SimpleTrigger ALWAYS fires exacly every N seconds,  with no relation to the time of day.")]),e._v(" "),a("li",[e._v("CronTrigger ALWAYS fires at a given time of day and then computes its  next time to fire. If that time does not occur on a given day, the  trigger will be skipped. If the time occurs twice in a given day, it only fires once, because after firing on that time the first time, it computes the next time of day to fire on.")])]),e._v(" "),a("h1",{attrs:{id:"questions-about-adojobstore"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#questions-about-adojobstore"}},[e._v("#")]),e._v(" Questions About AdoJobStore")]),e._v(" "),a("h2",{attrs:{id:"how-do-i-improve-the-performance-of-adojobstore"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-do-i-improve-the-performance-of-adojobstore"}},[e._v("#")]),e._v(" How do I improve the performance of AdoJobStore?")]),e._v(" "),a("p",[e._v("There are a few known ways to speed up AdoJobStore, only one of which is\nvery practical.")]),e._v(" "),a("p",[e._v("First, the obvious, but not-so-practical:")]),e._v(" "),a("ul",[a("li",[e._v("Buy a better (faster) network between the machine that runs Quartz, and the machine that runs your RDBMS.")]),e._v(" "),a("li",[e._v("Buy a better (more powerful) machine to run your database on.")]),e._v(" "),a("li",[e._v("Buy a better RDBMS.")])]),e._v(" "),a("p",[e._v("Sencondly, use driver delegate implementation that is specific to your database, like "),a("code",[e._v("SQLServerDelegate")]),e._v(", for best performance.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("You should also always prefer the latest version of the library. Quartz.NET 2.0 is much more efficient than 1.x series and 2.2.x line again has AdoJobStore related performance improvements over earlier 2.x releases.")])]),e._v(" "),a("h1",{attrs:{id:"quartz-in-web-environment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quartz-in-web-environment"}},[e._v("#")]),e._v(" Quartz in web environment")]),e._v(" "),a("h2",{attrs:{id:"scheduler-keeps-stopping-when-application-pool-gets-recycled"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scheduler-keeps-stopping-when-application-pool-gets-recycled"}},[e._v("#")]),e._v(" Scheduler keeps stopping when application pool gets recycled")]),e._v(" "),a("p",[e._v("By default IIS recycles and stops app pools from time to time. This means that even if you have Application_Start event to start Quartz when web app is being first accessed, the scheduler might get disposed later on due to site inactivity.")]),e._v(" "),a("p",[e._v("If you have a IIS 8 available, you can configure your site to be preloaded and kept running. See "),a("a",{attrs:{href:"https://blogs.msdn.microsoft.com/vijaysk/2012/10/11/iis-8-whats-new-website-settings/",target:"_blank",rel:"noopener noreferrer"}},[e._v("this blog post"),a("OutboundLink")],1),e._v(" for details.")])])}),[],!1,null,null,null);t.default=n.exports}}]);