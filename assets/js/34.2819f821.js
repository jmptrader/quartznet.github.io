(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{494:function(e,t,s){"use strict";s.r(t);var o=s(26),i=Object(o.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[e._v("This is the second alpha of v3. This release fixes problems with schedule signaling when AdoJobStore is in use.\nThis release removes the last bits of Quartz's usage of thread local storage and thus makes async-based operations a lot safer.")]),e._v(" "),s("p",[s("strong",[e._v("FIXES")])]),e._v(" "),s("ul",[s("li",[e._v("fix scheduler signaling not working with AdoJobStore due to thread local storage")]),e._v(" "),s("li",[e._v("thread local state removed altogether")]),e._v(" "),s("li",[e._v("quartz.serializer.type was required even though non-serializing RAMJobStore was in use")]),e._v(" "),s("li",[e._v("JSON serialization incorrectly called serialization callbacks")])]),e._v(" "),s("p",[s("strong",[e._v("BREAKING CHANGES")])]),e._v(" "),s("ul",[s("li",[e._v("IStatefulJob was removed, been obsolete since 2.x")]),e._v(" "),s("li",[e._v("ISemaphore interface now passes Guid requestorId that defines lock owner instead of implicit thread name")])]),e._v(" "),s("p",[s("strong",[e._v("KNOWN ISSUES")])]),e._v(" "),s("ul",[s("li",[e._v("Issues with time zone ids between Windows and Linux, they use different ids for the same zone")]),e._v(" "),s("li",[e._v("No remoting support")]),e._v(" "),s("li",[e._v("Documentation lacking")])]),e._v(" "),s("p",[e._v("Check NuGet for pre-release packages.")])])}),[],!1,null,null,null);t.default=i.exports}}]);