(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{404:function(t,a,s){"use strict";s.r(a);var e=s(26),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("As you saw in Lesson 2, jobs are rather easy to implement. There are just a few more things that you need to understand about\nthe nature of jobs, about the "),s("code",[t._v("Execute(..)")]),t._v(" method of the "),s("code",[t._v("IJob")]),t._v(" interface, and about JobDetails.")]),t._v(" "),s("p",[t._v("While a job class that you implement has the code that knows how to do the actual work\nof the particular type of job, Quartz.NET needs to be informed about various attributes\nthat you may wish an instance of that job to have. This is done via the JobDetail class,\nwhich was mentioned briefly in the previous section.")]),t._v(" "),s("p",[t._v("JobDetail instances are built using the "),s("code",[t._v("JobBuilder")]),t._v(" class. "),s("code",[t._v("JobBuilder")]),t._v(" allows you to describe\nyour job's details using a fluent interface.")]),t._v(" "),s("p",[t._v("Let's take a moment now to discuss a bit about the 'nature' of jobs and the life-cycle of job instances within Quartz.NET.\nFirst lets take a look back at some of that snippet of code we saw in Lesson 1:")]),t._v(" "),s("p",[s("strong",[t._v("Using Quartz.NET")])]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// define the job and tie it to our HelloJob class")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IJobDetail")]),t._v(" job "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" JobBuilder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token generic-method"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Create")]),s("span",{pre:!0,attrs:{class:"token generic class-name"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("HelloJob"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("WithIdentity")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myJob"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"group1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Build")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Trigger the job to run now, and then every 40 seconds")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ITrigger")]),t._v(" trigger "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" TriggerBuilder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Create")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("WithIdentity")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myTrigger"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"group1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("StartNow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("WithSimpleSchedule")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" x\n\t  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("WithIntervalInSeconds")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("40")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("RepeatForever")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Build")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \nsched"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ScheduleJob")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("job"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" trigger"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("Now consider the job class "),s("strong",[t._v("HelloJob")]),t._v("  defined as such:")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HelloJob")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token type-list"}},[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IJob")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t._v("Task")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Execute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IJobExecutionContext")]),t._v(" context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" Console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("WriteLineAsync")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HelloJob is executing."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Notice that we give the scheduler a "),s("code",[t._v("IJobDetail")]),t._v(" instance, and that it refers to the job to be executed by simply\nproviding the job's class. Each (and every) time the scheduler executes the job, it creates a new instance of the\nclass before calling its "),s("code",[t._v("Execute(..)")]),t._v(" method. One of the ramifications of this behavior is the fact that jobs must\nhave a no-arguement constructor. Another ramification is that it does not make sense to have data-fields defined\non the job class - as their values would not be preserved between job executions.")]),t._v(" "),s("p",[t._v('You may now be wanting to ask "how can I provide properties/configuration for a Job instance?" and "how can I\nkeep track of a job\'s state between executions?" The answer to these questions are the same: the key is the '),s("code",[t._v("JobDataMap")]),t._v(",\nwhich is part of the JobDetail object.")]),t._v(" "),s("h2",{attrs:{id:"jobdatamap"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jobdatamap"}},[t._v("#")]),t._v(" JobDataMap")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("JobDataMap")]),t._v(" can be used to hold any number of (serializable) objects which you wish to have made available\nto the job instance when it executes. "),s("code",[t._v("JobDataMap")]),t._v(" is an implementation of the "),s("code",[t._v("IDictionary")]),t._v(" interface, and has\nsome added convenience methods for storing and retrieving data of primitive types.")]),t._v(" "),s("p",[t._v("Here's some quick snippets of putting data into the JobDataMap prior to adding the job to the scheduler:")]),t._v(" "),s("p",[s("strong",[t._v("Setting Values in a JobDataMap")])]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// define the job and tie it to our DumbJob class")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IJobDetail")]),t._v(" job "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" JobBuilder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token generic-method"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Create")]),s("span",{pre:!0,attrs:{class:"token generic class-name"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("DumbJob"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("WithIdentity")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myJob"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"group1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// name "myJob", group "group1"')]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("UsingJobData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"jobSays"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("UsingJobData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myFloatValue"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.141f")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Build")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("Here's a quick example of getting data from the JobDataMap during the job's execution:")]),t._v(" "),s("p",[s("strong",[t._v("Getting Values from a JobDataMap")])]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DumbJob")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token type-list"}},[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IJob")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t._v("Task")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Execute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IJobExecutionContext")]),t._v(" context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JobKey")]),t._v(" key "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("JobDetail"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t\t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JobDataMap")]),t._v(" dataMap "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("JobDetail"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("JobDataMap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t\t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")])]),t._v(" jobSays "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" dataMap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"jobSays"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")])]),t._v(" myFloatValue "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" dataMap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetFloat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myFloatValue"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" Console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("WriteLineAsync")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Instance "')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" key "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('" of DumbJob says: "')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" jobSays "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('", and val is: "')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" myFloatValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("If you use a persistent JobStore (discussed in the JobStore section of this tutorial) you should use some care\nin deciding what you place in the JobDataMap, because the object in it will be serialized, and they therefore\nbecome prone to class-versioning problems. Obviously standard .NET types should be very safe,  but beyond that,\nany time someone changes the definition of a class for which you have serialized instances,\ncare has to be taken not to break compatibility.")]),t._v(" "),s("p",[t._v("Optionally, you can put AdoJobStore and JobDataMap into a mode where only primitives\nand strings can be stored in the map, thus eliminating any possibility of later serialization problems.")]),t._v(" "),s("p",[t._v("If you add properties with set accessor to your job class that correspond to the names of keys in the JobDataMap,\nthen Quartz's default JobFactory implementation will automatically call those setters when the job is instantiated,\nthus preventing the need to explicitly get the values out of the map within your execute method. Note this\nfunctionality is not maintained by default when using a custom JobFactory.")]),t._v(" "),s("p",[t._v("Triggers can also have JobDataMaps associated with them. This can be useful in the case where you have a Job that is stored in the scheduler\nfor regular/repeated use by multiple Triggers, yet with each independent triggering, you want to supply the Job with different data inputs.")]),t._v(" "),s("p",[t._v("The JobDataMap that is found on the JobExecutionContext during Job execution serves as a convenience. It is a merge of the JobDataMap\nfound on the JobDetail and the one found on the Trigger, with the values in the latter overriding any same-named values in the former.")]),t._v(" "),s("p",[t._v("Here's a quick example of getting data from the JobExecutionContext's merged JobDataMap during the job's execution:")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DumbJob")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token type-list"}},[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IJob")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t._v("Task")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Execute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IJobExecutionContext")]),t._v(" context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JobKey")]),t._v(" key "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("JobDetail"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t\t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JobDataMap")]),t._v(" dataMap "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MergedJobDataMap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Note the difference from the previous example")]),t._v("\n\n\t\t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")])]),t._v(" jobSays "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" dataMap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"jobSays"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")])]),t._v(" myFloatValue "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" dataMap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetFloat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myFloatValue"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("DateTimeOffset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" state "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("IList"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("DateTimeOffset"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("dataMap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myStateData"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\tstate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("DateTimeOffset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("UtcNow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" Console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("WriteLineAsync")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Instance "')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" key "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('" of DumbJob says: "')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" jobSays "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('", and val is: "')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" myFloatValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v('Or if you wish to rely on the JobFactory "injecting" the data map values onto your class, it might look like this instead:')]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DumbJob")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token type-list"}},[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IJob")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")])]),t._v(" JobSays "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")])]),t._v(" FloatValue "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t._v("Task")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Execute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IJobExecutionContext")]),t._v(" context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JobKey")]),t._v(" key "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("JobDetail"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t\t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JobDataMap")]),t._v(" dataMap "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MergedJobDataMap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Note the difference from the previous example")]),t._v("\n\n\t\t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("DateTimeOffset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" state "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("IList"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("DateTimeOffset"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("dataMap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myStateData"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\tstate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("DateTimeOffset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("UtcNow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" Console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("WriteLineAsync")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Instance "')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" key "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('" of DumbJob says: "')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" JobSays "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('", and val is: "')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" FloatValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("You'll notice that the overall code of the class is longer, but the code in the "),s("code",[t._v("Execute()")]),t._v(" method is cleaner.\nOne could also argue that although the code is longer, that it actually took less coding, if the programmer's IDE was used to auto-generate the properties,\nrather than having to hand-code the individual calls to retrieve the values from the JobDataMap. The choice is yours.")]),t._v(" "),s("h2",{attrs:{id:"job-instances"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#job-instances"}},[t._v("#")]),t._v(' Job "Instances"')]),t._v(" "),s("p",[t._v('Many users spend time being confused about what exactly constitutes a "job instance".\nWe\'ll try to clear that up here and in the section below about job state and concurrency.')]),t._v(" "),s("p",[t._v("You can create a single job class, and store many 'instance definitions' of it within the scheduler by creating multiple instances of JobDetails")]),t._v(" "),s("ul",[s("li",[t._v("each with its own set of properties and JobDataMap - and adding them all to the scheduler.")])]),t._v(" "),s("p",[t._v("For example, you can create a class that implements the "),s("code",[t._v("IJob")]),t._v(' interface called "SalesReportJob".\nThe job might be coded to expect parameters sent to it (via the JobDataMap) to specify the name of the sales person that the sales\nreport should be based on. They may then create multiple definitions (JobDetails) of the job, such as "SalesReportForJoe"\nand "SalesReportForMike" which have "joe" and "mike" specified in the corresponding JobDataMaps as input to the respective jobs.')]),t._v(" "),s("p",[t._v("When a trigger fires, the JobDetail (instance definition) it is associated to is loaded,\nand the job class it refers to is instantiated via the JobFactory configured on the Scheduler.\nThe default JobFactory simply calls the default constructor of the job class using Activator.CreateInstance,\nthen attempts to call setter properties on the class that match the names of keys within the JobDataMap.\nYou may want to create your own implementation of JobFactory to accomplish things such as having your application's IoC or DI container produce/initialize the job instance.")]),t._v(" "),s("p",[t._v('In "Quartz speak", we refer to each stored JobDetail as a "job definition" or "JobDetail instance",\nand we refer to a each executing job as a "job instance" or "instance of a job definition".\nUsually if we just use the word "job" we are referring to a named definition, or JobDetail.\nWhen we are referring to the class implementing the job interface, we usually use the term "job type".')]),t._v(" "),s("h2",{attrs:{id:"job-state-and-concurrency"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#job-state-and-concurrency"}},[t._v("#")]),t._v(" Job State and Concurrency")]),t._v(" "),s("p",[t._v("Now, some additional notes about a job's state data (aka JobDataMap) and concurrency.\nThere are a couple attributes that can be added to your Job class that affect Quartz's behaviour with respect to these aspects.")]),t._v(" "),s("p",[s("code",[t._v("[DisallowConcurrentExecution]")]),t._v(' is an attribute that can be added to the Job class that tells Quartz not to execute multiple instances\nof a given job definition (that refers to the given job class) concurrently.\nNotice the wording there, as it was chosen very carefully. In the example from the previous section, if "SalesReportJob" has this attribute,\nthan only one instance of "SalesReportForJoe" can execute at a given time, but it can execute concurrently with an instance of "SalesReportForMike".\nThe constraint is based upon an instance definition (JobDetail), not on instances of the job class.\nHowever, it was decided (during the design of Quartz) to have the attribute carried on the class itself, because it does often make a difference to how the class is coded.')]),t._v(" "),s("p",[s("code",[t._v("[PersistJobDataAfterExecution]")]),t._v(" is an attribute that can be added to the Job class that tells Quartz to update the stored copy of\nthe JobDetail's JobDataMap after the Execute() method completes successfully (without throwing an exception), such that the next\nexecution of the same job (JobDetail) receives the updated values rather than the originally stored values.\nLike the "),s("code",[t._v("[DisallowConcurrentExecution]")]),t._v(" attribute, this applies to a job definition instance, not a job class instance,\nthough it was decided to have the job class carry the attribute because it does often make a difference to how the class is coded\n(e.g. the 'statefulness' will need to be explicitly 'understood' by the code within the execute method).")]),t._v(" "),s("p",[t._v("If you use the "),s("strong",[t._v("PersistJobDataAfterExecution")]),t._v(" attribute, you should strongly consider also using the "),s("code",[t._v("[DisallowConcurrentExecution]")]),t._v(" attribute,\nin order to avoid possible confusion (race conditions) of what data was left stored when two instances of the same job (JobDetail) executed concurrently.")]),t._v(" "),s("h2",{attrs:{id:"other-attributes-of-jobs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#other-attributes-of-jobs"}},[t._v("#")]),t._v(" Other Attributes Of Jobs")]),t._v(" "),s("p",[t._v("Here's a quick summary of the other properties which can be defined for a job instance via the JobDetail object:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("Durability")]),t._v(" - if a job is non-durable, it is automatically deleted from the scheduler once there are no longer any active triggers associated with it.\nIn other words, non-durable jobs have a life span bounded by the existence of its triggers.")]),t._v(" "),s("li",[s("code",[t._v("RequestsRecovery")]),t._v(" - if a job \"requests recovery\", and it is executing during the time of a 'hard shutdown' of the scheduler\n(i.e. the process it is running within crashes, or the machine is shut off), then it is re-executed when the scheduler is started again.\nIn this case, the "),s("code",[t._v("JobExecutionContext.Recovering")]),t._v(" property will return true.")])]),t._v(" "),s("h2",{attrs:{id:"jobexecutionexception"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jobexecutionexception"}},[t._v("#")]),t._v(" JobExecutionException")]),t._v(" "),s("p",[t._v("Finally, we need to inform you of a few details of the "),s("code",[t._v("IJob.Execute(..)")]),t._v(" method. The only type of exception\nthat you should throw from the execute method is the JobExecutionException. Because of this, you should generally wrap the entire contents of the\nexecute method with a 'try-catch' block. You should also spend some time looking at the documentation for the JobExecutionException,\nas your job can use it to provide the scheduler various directives as to how you want the exception to be handled.")])])}),[],!1,null,null,null);a.default=n.exports}}]);