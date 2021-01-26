(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{438:function(e,t,r){"use strict";r.r(t);var n=r(26),i=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h2",{attrs:{id:"clustering"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#clustering"}},[e._v("#")]),e._v(" Clustering")]),e._v(" "),r("p",[e._v('Clustering currently only works with the AdoJobstore (JobStoreTX). Features include load-balancing and job fail-over (if the JobDetail\'s "request recovery" flag is set to true).')]),e._v(" "),r("p",[e._v('Enable clustering by setting the "quartz.jobStore.clustered" property to "true".\nEach instance in the cluster should use the same copy of the quartz properties.\nExceptions of this would be to use properties that are identical, with the following allowable exceptions:\nDifferent thread pool size, and different value for the "quartz.scheduler.instanceId" property.\nEach node in the cluster MUST have a unique instanceId, which is easily done (without needing different properties files) by placing "AUTO" as the value of this property.')]),e._v(" "),r("p",[e._v("Never run clustering on separate machines, unless their clocks are synchronized using some form of time-sync service (daemon) that runs very regularly\n(the clocks must be within a second of each other). See "),r("a",{attrs:{href:"http://www.boulder.nist.gov/timefreq/service/its.htm"}},[e._v("http://www.boulder.nist.gov/timefreq/service/its.htm")]),e._v("\nif you are unfamiliar with how to do this.")]),e._v(" "),r("p",[e._v("Never fire-up a non-clustered instance against the same set of tables that any other instance is running against.\nYou may get serious data corruption, and will definitely experience eratic behavior.")])])}),[],!1,null,null,null);t.default=i.exports}}]);