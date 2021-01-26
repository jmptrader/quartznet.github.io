(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{405:function(t,e,a){"use strict";a.r(e);var o=a(26),n=Object(o.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"plug-ins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plug-ins"}},[t._v("#")]),t._v(" Plug-Ins")]),t._v(" "),a("p",[t._v("Quartz provides an interface ("),a("code",[t._v("ISchedulerPlugin")]),t._v(") for plugging-in additional functionality.")]),t._v(" "),a("p",[t._v("Plugins that ship with Quartz to provide various utility capabilities can be found documented in the "),a("code",[t._v("Quartz.Plugins")]),t._v(" namespace.\nThey provide functionality such as auto-scheduling of jobs upon scheduler startup, logging a history of job and trigger events,\nand ensuring that the scheduler shuts down cleanly when the virtual machine exits.")]),t._v(" "),a("h2",{attrs:{id:"jobfactory"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jobfactory"}},[t._v("#")]),t._v(" JobFactory")]),t._v(" "),a("p",[t._v("When a trigger fires, the Job it is associated to is instantiated via the JobFactory configured on the Scheduler.\nThe default JobFactory simply activates a new instance of the job class. You may want to create your own implementation\nof JobFactory to accomplish things such as having your application's IoC or DI container produce/initialize the job instance.")]),t._v(" "),a("p",[t._v("See the "),a("code",[t._v("IJobFactory")]),t._v(" interface, and the associated "),a("code",[t._v("IScheduler.JobFactory")]),t._v(" setter property.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("Since Quartz 3.1, there's "),a("a",{attrs:{href:"../packages/microsoft-di-integration"}},[t._v("built-in support for integrating with Microsoft Dependency Injection")]),t._v(" which in\nturn allows to use different IoC container implementations.")])]),t._v(" "),a("h2",{attrs:{id:"factory-shipped-jobs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#factory-shipped-jobs"}},[t._v("#")]),t._v(" 'Factory-Shipped' Jobs")]),t._v(" "),a("p",[t._v("Quartz also provides a number of utility Jobs that you can use in your application for doing things like sending\ne-mails and invoking remote objects. These out-of-the-box Jobs can be found documented in the "),a("code",[t._v("Quartz.Jobs")]),t._v(" namespace and\nare part of the "),a("a",{attrs:{href:"https://www.nuget.org/packages/Quartz.Jobs",target:"_blank",rel:"noopener noreferrer"}},[t._v("Quartz.Jobs NuGet package"),a("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);e.default=n.exports}}]);