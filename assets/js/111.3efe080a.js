(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{410:function(t,e,a){"use strict";a.r(e);var o=a(26),n=Object(o.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v('Quartz is architected in modular way, and therefore to get it running, several components need to be "snapped" together.\nFortunately, some helpers exist for making this happen.')]),t._v(" "),a("p",[t._v("The major components that need to be configured before Quartz can do its work are:")]),t._v(" "),a("ul",[a("li",[t._v("ThreadPool")]),t._v(" "),a("li",[t._v("JobStore")]),t._v(" "),a("li",[t._v("DataSources (if necessary)")]),t._v(" "),a("li",[t._v("The Scheduler itself")])]),t._v(" "),a("p",[t._v("Thread pooling has changed a lot since the Task-based jobs were introduced.\nNow the default implementation, "),a("code",[t._v("DefaultThreadPool")]),t._v(" uses "),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/dotnet/standard/threading/the-managed-thread-pool",target:"_blank",rel:"noopener noreferrer"}},[t._v("CLR's managed thread pool"),a("OutboundLink")],1),t._v(" to execute jobs as tasks.\nYou can configure the pool that have max concurrency, which effectively limits how many concurrent tasks can be scheduled to the CLR's thread pool.\nSee configuration reference for more details on how to configure the thread pool implementation.")]),t._v(" "),a("p",[t._v("JobStores and DataSources were discussed in Lesson 9 of this tutorial. Worth noting here, is the fact that all JobStores\nimplement the "),a("code",[t._v("IJobStore")]),t._v(" interface - and that if one of the bundled JobStores does not fit your needs, then you can make your own.")]),t._v(" "),a("p",[t._v("Finally, you need to create your Scheduler instance. The Scheduler itself needs to be given a name and handed\ninstances of a JobStore and ThreadPool.")]),t._v(" "),a("h2",{attrs:{id:"stdschedulerfactory"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stdschedulerfactory"}},[t._v("#")]),t._v(" StdSchedulerFactory")]),t._v(" "),a("p",[a("code",[t._v("StdSchedulerFactory")]),t._v(" is an implementation of the "),a("code",[t._v("ISchedulerFactory")]),t._v(" interface.\nIt uses a set of properties ("),a("code",[t._v("NameValueCollection")]),t._v(") to create and initialize a Quartz Scheduler.\nThe properties are generally stored in and loaded from a file, but can also be created by your program and handed directly to the factory.\nSimply calling "),a("code",[t._v("GetScheduler()")]),t._v(" on the factory will produce the scheduler, initialize it (and its ThreadPool, JobStore and DataSources),\nand return a handle to its public interface.")]),t._v(" "),a("p",[t._v('You can find complete documentation in the "Configuration Reference" section of the Quartz documentation.')]),t._v(" "),a("h2",{attrs:{id:"directschedulerfactory"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#directschedulerfactory"}},[t._v("#")]),t._v(" DirectSchedulerFactory")]),t._v(" "),a("p",[a("code",[t._v("DirectSchedulerFactory")]),t._v(" is another "),a("code",[t._v("ISchedulerFactory")]),t._v(" implementation. It is useful to those wishing to create their Scheduler\ninstance in a more programmatic way. Its use is generally discouraged for the following reasons:")]),t._v(" "),a("ul",[a("li",[t._v("It requires the user to have a greater understanding of what they're doing, and")]),t._v(" "),a("li",[t._v("it does not allow for declarative configuration - or in other words, you end up hard-coding all of the scheduler's settings.")])]),t._v(" "),a("h2",{attrs:{id:"logging"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#logging"}},[t._v("#")]),t._v(" Logging")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("As of Quartz.NET 3.1, you can configure "),a("a",{attrs:{href:"https://www.nuget.org/packages/Microsoft.Extensions.Logging.Abstractions/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Microsoft.Extensions.Logging.Abstractions"),a("OutboundLink")],1),t._v(" to be used instead of LibLog.")])]),t._v(" "),a("h3",{attrs:{id:"liblog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#liblog"}},[t._v("#")]),t._v(" LibLog")]),t._v(" "),a("p",[t._v("Quartz.NET uses "),a("a",{attrs:{href:"https://github.com/damianh/LibLog"}},[t._v("LibLog library")]),t._v(' for all of its logging needs.\nQuartz does not produce much logging information - generally just some information during initialization, and\nthen only messages about serious problems while Jobs are executing. In order to "tune" the logging settings\n(such as the amount of output, and where the output goes), you need to actually configure your logging framework of choice as LibLog mostly delegates the work to\nmore full-fledged logging framework like log4net, serilog etc.')]),t._v(" "),a("p",[t._v("Please see "),a("a",{attrs:{href:"https://github.com/damianh/LibLog/wiki"}},[t._v("LibLog Wiki")]),t._v(" for more information.")]),t._v(" "),a("h3",{attrs:{id:"microsoft-extensions-logging-abstractions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#microsoft-extensions-logging-abstractions"}},[t._v("#")]),t._v(" Microsoft.Extensions.Logging.Abstractions")]),t._v(" "),a("p",[t._v("You can configure Microsoft.Extensions.Logging.Abstractions either manually or using services found in "),a("a",{attrs:{href:"https://www.nuget.org/packages/Quartz.Extensions.DependencyInjection",target:"_blank",rel:"noopener noreferrer"}},[t._v("Quartz.Extensions.DependencyInjection"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h4",{attrs:{id:"manual-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#manual-configuration"}},[t._v("#")]),t._v(" Manual configuration")]),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// obtain your logger factory, for example from IServiceProvider")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ILoggerFactory")]),t._v(" loggerFactory "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token range operator"}},[t._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Quartz 3.1")]),t._v("\nQuartz"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("LogContext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("SetCurrentLogProvider")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("loggerFactory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Quartz 3.2 onwards")]),t._v("\nQuartz"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Logging"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("LogContext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("SetCurrentLogProvider")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("loggerFactory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h4",{attrs:{id:"configuration-using-microsoft-di-integration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration-using-microsoft-di-integration"}},[t._v("#")]),t._v(" Configuration using Microsoft DI integration.")]),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[t._v("services"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("AddQuartz")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("q "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// this automatically registers the Microsoft Logging")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);