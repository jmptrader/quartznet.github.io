(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{491:function(e,t,i){"use strict";i.r(t);var o=i(26),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("p",[i("strong",[e._v("Addition of column required to database")])]),e._v(" "),i("ul",[i("li",[e._v("This release fixes a long standing issue, DailyTimeIntervalTrigger's time zone is now finally persisted to database")]),e._v(" "),i("li",[e._v("This requires running "),i("a",{attrs:{href:"https://github.com/quartznet/quartznet/blob/2.x/database/schema_25_to_26_upgrade.sql",target:"_blank",rel:"noopener noreferrer"}},[e._v("schema_25_to_26_upgrade.sql"),i("OutboundLink")],1),e._v(" to add new column to QRTZ_SIMPROP_TRIGGERS table")])]),e._v(" "),i("p",[e._v("A slight performance boost can also be unlocked when using PostgreSQL by switching PostgreSqlDelegate.")]),e._v(" "),i("p",[i("strong",[e._v("NEW FEATURE")])]),e._v(" "),i("ul",[i("li",[e._v("Add support for eager validation of job scheduling XML file on plugin start (#492)")]),e._v(" "),i("li",[e._v("Add support for extra custom time zone resolver function in TimeZoneUtil (#290)")])]),e._v(" "),i("p",[i("strong",[e._v("FIXES")])]),e._v(" "),i("ul",[i("li",[e._v("CalendarIntervalTrigger's first fire time doesn't consider time zone (#505)")]),e._v(" "),i("li",[e._v("QRTZ_FIRED_TRIGGERS.ENTRY_ID column length too small (#474)")]),e._v(" "),i("li",[e._v("Decrease log level for message when host name is too long (#471)")]),e._v(" "),i("li",[e._v("Quartz should not log transient faults related to azure db connection as errors (#470)")]),e._v(" "),i("li",[e._v("RemotingSchedulerExporter can't create remoting channel on Mono (#464)")]),e._v(" "),i("li",[e._v("Regression in 2.5, TriggerBuilder.UsingJobData(JobDataMap newJobDataMap) should ovewrite existing (#460)")]),e._v(" "),i("li",[e._v("QuartzScheduler.Clear does not clear QRTZ_FIRED_TRIGGERS table (#437)")]),e._v(" "),i("li",[e._v("No wait time between db connection failures with AcquireNextTriggers (#428)")]),e._v(" "),i("li",[e._v("DailyTimeIntervalTriggerImpl prevents altering EndTimeOfDay to a later time of day (#382)")]),e._v(" "),i("li",[e._v("Quartz.CronExpression.IsSatisfiedBy claims to ignore milliseconds but doesn't (#349)")]),e._v(" "),i("li",[e._v("Add back PostgreSqlDelegate to support database LIMIT in trigger acquiring (#318)")]),e._v(" "),i("li",[e._v("Bug in XSD schema: cannot set "),i("misfire-instruction",[e._v("IgnoreMisfirePolicy")]),e._v(" (#280)")],1),e._v(" "),i("li",[e._v("Quartz.Xml.XMLSchedulingDataProcessor uses GetType() instead of typeof(Quartz.Xml.XMLSchedulingDataProcessor) (#277)")]),e._v(" "),i("li",[e._v("With SQLite default isolation level should be set to serializable (#242)")]),e._v(" "),i("li",[e._v("DailyTimeIntervalTrigger's time zone is not persisted into database (#136)")]),e._v(" "),i("li",[e._v("XMLSchedulingDataProcessorPlugin incompatible with StdAdoDelegate when useProperties=true (#44)")]),e._v(" "),i("li",[e._v("Trigger loop encountered using DailyTimeIntervalTrigger across DST start boundary (#332)")])]),e._v(" "),i("Download")],1)}),[],!1,null,null,null);t.default=r.exports}}]);