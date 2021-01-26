(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{411:function(e,t,s){"use strict";s.r(t);var n=s(26),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"clustering"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#clustering"}},[e._v("#")]),e._v(" Clustering")]),e._v(" "),s("p",[e._v("Clustering currently only works with the AdoJobstore ("),s("code",[e._v("JobStoreTX")]),e._v(').\nFeatures include load-balancing and job fail-over (if the JobDetail\'s "request recovery" flag is set to true).')]),e._v(" "),s("p",[e._v("Enable clustering by setting the "),s("code",[e._v("quartz.jobStore.clustered")]),e._v(' property to "true".\nEach instance in the cluster should use the same copy of the quartz properties.\nExceptions of this would be to use properties that are identical, with the following allowable exceptions:\nDifferent thread pool size, and different value for the '),s("code",[e._v("quartz.scheduler.instanceId")]),e._v(" property.\nEach node in the cluster MUST have a unique instanceId, which is easily done (without needing different properties files) by placing "),s("code",[e._v("AUTO")]),e._v(" as the value of this property.")]),e._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),s("p",[e._v("Never run clustering on separate machines, unless their clocks are synchronized using some form of time-sync service (daemon) that runs very regularly (the clocks must be within a second of each other).\nSee "),s("a",{attrs:{href:"https://www.nist.gov/pml/time-and-frequency-division/services/internet-time-service-its",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.nist.gov/pml/time-and-frequency-division/services/internet-time-service-its"),s("OutboundLink")],1),e._v(" if you are unfamiliar with how to do this.")])]),e._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),s("p",[e._v("Never start ("),s("code",[e._v("scheduler.Start()")]),e._v(") a non-clustered instance against the same set of database tables that any other instance is running ("),s("code",[e._v("Start()")]),e._v("ed) against.\nYou may get serious data corruption, and will definitely experience erratic behavior.")])]),e._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),s("p",[e._v("Monitor and ensure that your nodes have enough CPU resources to complete jobs.\nWhen some nodes are in 100% CPU, they may be unable to update the job store and other nodes can consider these jobs lost and recover them by re-running.")])])])}),[],!1,null,null,null);t.default=r.exports}}]);