(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{466:function(t,a,s){"use strict";s.r(a);var n=s(26),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("This release concentrates on tweaking the DI story and fixing some found dependency issues.")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#quartz-extensions-hosting"}},[t._v("Quartz.Extensions.Hosting")])]),s("li",[s("a",{attrs:{href:"#refining-di-integration-api"}},[t._v("Refining DI integration API")]),s("ul",[s("li",[s("a",{attrs:{href:"#options-pattern"}},[t._v("Options pattern")])]),s("li",[s("a",{attrs:{href:"#schedulejob"}},[t._v("ScheduleJob")])]),s("li",[s("a",{attrs:{href:"#addcalendar"}},[t._v("AddCalendar")])])])]),s("li",[s("a",{attrs:{href:"#microsoft-sql-server"}},[t._v("Microsoft SQL Server")]),s("ul",[s("li",[s("a",{attrs:{href:"#full-framework"}},[t._v("Full Framework")])]),s("li",[s("a",{attrs:{href:"#net-core"}},[t._v(".NET Core")])]),s("li",[s("a",{attrs:{href:"#query-plan-cache-pollution-fix"}},[t._v("Query plan cache pollution fix")])])])]),s("li",[s("a",{attrs:{href:"#github-issues"}},[t._v("GitHub Issues")])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"quartz-extensions-hosting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#quartz-extensions-hosting"}},[t._v("#")]),t._v(" Quartz.Extensions.Hosting")]),t._v(" "),s("p",[t._v("A new package "),s("a",{attrs:{href:"https://www.nuget.org/packages/Quartz.Extensions.Hosting/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Quartz.Extensions.Hosting"),s("OutboundLink")],1),t._v("\nwas created with the help of "),s("a",{attrs:{href:"https://andrewlock.net/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Andrew Lock"),s("OutboundLink")],1),t._v(". If you are using generic host and you don't need\nASP.NET specific functionality like health checks, you can switch to this new package to reduce dependencies.")]),t._v(" "),s("h2",{attrs:{id:"refining-di-integration-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#refining-di-integration-api"}},[t._v("#")]),t._v(" Refining DI integration API")]),t._v(" "),s("p",[t._v("Some work was done to improve the MS DI integration API.")]),t._v(" "),s("h3",{attrs:{id:"options-pattern"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#options-pattern"}},[t._v("#")]),t._v(" Options pattern")]),t._v(" "),s("p",[t._v("Now the API uses "),s("a",{attrs:{href:"https://docs.microsoft.com/en-us/aspnet/core/fundamentals/configuration/options",target:"_blank",rel:"noopener noreferrer"}},[t._v("options pattern"),s("OutboundLink")],1),t._v("\nproperly and you can attach your own configurators to alter "),s("code",[t._v("QuartzOptions")]),t._v(".")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// we can use options pattern to support hooking your own configuration")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// because we don't use service registration api")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// we need to manally ensure the job is present in DI")]),t._v("\nservices"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token generic-method"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("AddTransient")]),s("span",{pre:!0,attrs:{class:"token generic class-name"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ExampleJob"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            \nservices"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token generic-method"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Configure")]),s("span",{pre:!0,attrs:{class:"token generic class-name"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("SampleOptions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Configuration"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetSection")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Sample"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nservices"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token generic-method"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("AddOptions")]),s("span",{pre:!0,attrs:{class:"token generic class-name"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("QuartzOptions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token generic-method"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Configure")]),s("span",{pre:!0,attrs:{class:"token generic class-name"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("IOptions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("SampleOptions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dep"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("IsNullOrWhiteSpace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dep"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CronSchedule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" jobKey "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("JobKey")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"options-custom-job"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"custom"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token generic-method"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("AddJob")]),s("span",{pre:!0,attrs:{class:"token generic class-name"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ExampleJob"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("j "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" j"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("WithIdentity")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("jobKey"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("AddTrigger")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("trigger "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" trigger\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("WithIdentity")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"options-custom-trigger"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"custom"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ForJob")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("jobKey"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("WithCronSchedule")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dep"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CronSchedule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("h3",{attrs:{id:"schedulejob"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#schedulejob"}},[t._v("#")]),t._v(" ScheduleJob")]),t._v(" "),s("p",[t._v("A new shorthand was created to quickly define a job with trigger using a single call.")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[t._v("q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token generic-method"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ScheduleJob")]),s("span",{pre:!0,attrs:{class:"token generic class-name"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ExampleJob"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("trigger "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" trigger\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("WithIdentity")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Combined Configuration Trigger"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("StartAt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("DateBuilder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("EvenSecondDate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("DateTimeOffset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("UtcNow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("AddSeconds")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("WithDailyTimeIntervalSchedule")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("WithInterval")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" IntervalUnit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Second"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("WithDescription")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"my awesome trigger configured for a job with single call"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"addcalendar"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#addcalendar"}},[t._v("#")]),t._v(" AddCalendar")]),t._v(" "),s("p",[t._v("You can now add calendars using the DI API.")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")])]),t._v(" calendarName "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myHolidayCalendar"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nq"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token generic-method"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("AddCalendar")]),s("span",{pre:!0,attrs:{class:"token generic class-name"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("HolidayCalendar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token named-parameter punctuation"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" calendarName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token named-parameter punctuation"}},[t._v("replace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token named-parameter punctuation"}},[t._v("updateTriggers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("AddExcludedDate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("DateTime")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nq"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("AddTrigger")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" t\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("WithIdentity")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Daily Trigger"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ForJob")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("jobKey"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("StartAt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("DateBuilder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("EvenSecondDate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("DateTimeOffset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("UtcNow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("AddSeconds")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("WithDailyTimeIntervalSchedule")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("WithInterval")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" IntervalUnit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Second"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("WithDescription")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"my awesome daily time interval trigger"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ModifiedByCalendar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("calendarName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"microsoft-sql-server"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#microsoft-sql-server"}},[t._v("#")]),t._v(" Microsoft SQL Server")]),t._v(" "),s("p",[t._v("Now Quartz no longer has hard dependency on "),s("code",[t._v("Microsoft.Data.SqlClient")]),t._v(" package.\nFull framework defaults now back to same behavior as it was with Quartz 3.0 (using built-in System.Data.SqlClient driver).")]),t._v(" "),s("h3",{attrs:{id:"full-framework"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#full-framework"}},[t._v("#")]),t._v(" Full Framework")]),t._v(" "),s("p",[t._v("You can use either one of the two providers, "),s("code",[t._v("SqlServer")]),t._v(" (default) or "),s("code",[t._v("SystemDataSqlClient")]),t._v(". Former uses "),s("code",[t._v("System.Data.SqlClient")]),t._v(" and latter\nthe new "),s("a",{attrs:{href:"https://www.nuget.org/packages/Microsoft.Data.SqlClient",target:"_blank",rel:"noopener noreferrer"}},[t._v("Microsoft.Data.SqlClient package"),s("OutboundLink")],1),t._v(".\nIf you choose to use the new package, make sure you have the NuGet package installed.")]),t._v(" "),s("h3",{attrs:{id:"net-core"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#net-core"}},[t._v("#")]),t._v(" .NET Core")]),t._v(" "),s("p",[t._v("You need to ensure you have "),s("a",{attrs:{href:"https://www.nuget.org/packages/Microsoft.Data.SqlClient",target:"_blank",rel:"noopener noreferrer"}},[t._v("Microsoft.Data.SqlClient package"),s("OutboundLink")],1),t._v(" installed.")]),t._v(" "),s("h3",{attrs:{id:"query-plan-cache-pollution-fix"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#query-plan-cache-pollution-fix"}},[t._v("#")]),t._v(" Query plan cache pollution fix")]),t._v(" "),s("p",[t._v("There was an important fix for SQL Server where varying text parameter sizes caused query plan cache pollution. Now when no parameter size is\ndefined for string parameter, default value of 4000 will be used. This problem has been present since the beginning.")]),t._v(" "),s("h2",{attrs:{id:"github-issues"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#github-issues"}},[t._v("#")]),t._v(" GitHub Issues")]),t._v(" "),s("p",[s("strong",[t._v("BREAKING CHANGES")])]),t._v(" "),s("ul",[s("li",[t._v("Remove dependency on Microsoft.Data.SqlClient (#912)")]),t._v(" "),s("li",[t._v("LogContext moved from Quartz namespace to Quartz.Logging namespace (#915)")]),t._v(" "),s("li",[t._v("For Full Framework, System.Data.SqlClient is again the default provider, Microsoft.Data can be used via provider MicrosoftDataSqlClient (#916)")])]),t._v(" "),s("p",[s("strong",[t._v("NEW FEATURE")])]),t._v(" "),s("ul",[s("li",[t._v("Introduce separate Quartz.Extensions.Hosting (#911)")]),t._v(" "),s("li",[t._v("You can now schedule job and trigger in MS DI integration with single .ScheduleJob call (#943)")]),t._v(" "),s("li",[t._v("Support adding calendars to MS DI via AddCalendar<T> (#945)")])]),t._v(" "),s("p",[s("strong",[t._v("FIXES")])]),t._v(" "),s("ul",[s("li",[t._v("Revert change in 3.1: CronExpression/cron trigger throwing "),s("code",[t._v("NotImplementedException")]),t._v(" when calculating final fire time (#905)")]),t._v(" "),s("li",[t._v("Use 2.1 as the minimum version for the .NET Platform Extensions (#923)")]),t._v(" "),s("li",[t._v("ServiceCollection.AddQuartz() should register default ITypeLoadHelper if none supplied (#924)")]),t._v(" "),s("li",[t._v("SqlServer AdoJobStore SqlParameter without text size generates pressure on server (#939)")]),t._v(" "),s("li",[t._v("DbProvider initialization logic should also read quartz.config (#951)")]),t._v(" "),s("li",[t._v("LoggingJobHistoryPlugin and LoggingTriggerHistoryPlugin names are null with IoC configuration (#926)")]),t._v(" "),s("li",[t._v("Improve options pattern to allow better custom configuration story (#955)")])]),t._v(" "),s("Download")],1)}),[],!1,null,null,null);a.default=e.exports}}]);