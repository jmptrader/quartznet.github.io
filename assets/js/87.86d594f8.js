(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{434:function(e,t,o){"use strict";o.r(t);var a=o(26),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("p",[e._v("JobStore's are responsible for keeping track of all the \"work data\" that you give to the scheduler:\njobs, triggers, calendars, etc. Selecting the appropriate IJobStore implementation for your Quartz scheduler instance is an important step.\nLuckily, the choice should be a very easy one once you understand the differences between them.\nYou declare which JobStore your scheduler should use (and it's configuration settings) in the properties file (or object) that\nyou provide to the SchedulerFactory that you use to produce your scheduler instance.")]),e._v(" "),o("p",[o("em",[e._v("Never use a JobStore instance directly in your code. For some reason many people attempt to do this.\nThe JobStore is for behind-the-scenes use of Quartz itself. You have to tell Quartz (through configuration) which JobStore to use,\nbut then you should only work with the Scheduler interface in your code.")])]),e._v(" "),o("h2",{attrs:{id:"ramjobstore"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ramjobstore"}},[e._v("#")]),e._v(" RAMJobStore")]),e._v(" "),o("p",[e._v("RAMJobStore is the simplest JobStore to use, it is also the most performant (in terms of CPU time).\nRAMJobStore gets its name in the obvious way: it keeps all of its data in RAM. This is why it's lightning-fast,\nand also why it's so simple to configure. The drawback is that when your application ends (or crashes) all of\nthe scheduling information is lost - this means RAMJobStore cannot honor the setting of \"non-volatility\" on jobs and triggers.\nFor some applications this is acceptable - or even the desired behavior, but for other applications, this may be disasterous.")]),e._v(" "),o("p",[o("strong",[e._v("Configuring Quartz to use RAMJobStore")])]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("quartz.jobStore.type = Quartz.Simpl.RAMJobStore, Quartz\n")])])]),o("p",[e._v("To use RAMJobStore (and assuming you're using StdSchedulerFactory) you don't need to do anything special. Default configuration\nof Quartz.NET uses RAMJobStore as job store implementation.")]),e._v(" "),o("h2",{attrs:{id:"ado-net-job-store-adojobstore"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ado-net-job-store-adojobstore"}},[e._v("#")]),e._v(" ADO.NET Job Store (AdoJobStore)")]),e._v(" "),o("p",[e._v("AdoJobStore is also aptly named - it keeps all of its data in a database via ADO.NET.\nBecause of this it is a bit more complicated to configure than RAMJobStore, and it also is not as fast.\nHowever, the performance draw-back is not terribly bad, especially if you build the database tables with indexes on the primary keys.")]),e._v(" "),o("p",[e._v('To use AdoJobStore, you must first create a set of database tables for Quartz.NET to use.\nYou can find table-creation SQL scripts in the "database/dbtables" directory of the Quartz.NET distribution.\nIf there is not already a script for your database type, just look at one of the existing ones, and modify it in any way necessary for your DB.\nOne thing to note is that in these scripts, all the the tables start with the prefix "QRTZ_"\nsuch as the tables "QRTZ_TRIGGERS", and "QRTZ_JOB_DETAIL"). This prefix can actually be anything you\'d like, as long as you inform AdoJobStore\nwhat the prefix is (in your Quartz.NET properties). Using different prefixes may be useful for creating multiple sets of tables,\nfor multiple scheduler instances, within the same database.')]),e._v(" "),o("p",[e._v("Currently the only option for the internal implementation of job store is JobStoreTX which creates transactions by itself.\nThis is different from Java version of Quartz where there is also option to choose JobStoreCMT which uses J2EE container\nmanaged transactions.")]),e._v(" "),o("p",[e._v("The last piece of the puzzle is setting up a data source from which AdoJobStore can get connections to your database.\nData sources are defined in your Quartz.NET properties. Data source information contains the connection string\nand ADO.NET delegate information.")]),e._v(" "),o("p",[o("strong",[e._v("Configuring Quartz to use JobStoreTx")])]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("quartz.jobStore.type = Quartz.Impl.AdoJobStore.JobStoreTX, Quartz\n")])])]),o("p",[e._v('Next, you need to select a IDriverDelegate implementation for the JobStore to use.\nThe DriverDelegate is responsible for doing any ADO.NET work that may be needed for your specific database.\nStdAdoDelegate is a delegate that uses "vanilla" ADO.NET code (and SQL statements) to do its work.\nIf there isn\'t another delegate made specifically for your database, try using this delegate -\nspecial delegates usually have better performance or workarounds for database specific issues.\nOther delegates can be found in the "Quartz.Impl.AdoJobStore" namespace, or in its sub-namespaces.')]),e._v(" "),o("p",[o("strong",[e._v("NOTE:")]),e._v(" Quartz.NET will issue warning if you are using the default StdAdoDelegate as it has poor performance\nwhen you have a lot of triggers to select from. Specific delegates have special SQL to limit result\nset length (SQLServerDelegate uses TOP n, PostgreSQLDelegate LIMIT n, OracleDelegate ROWCOUNT() <= n etc.).")]),e._v(" "),o("p",[e._v("Once you've selected your delegate, set its class name as the delegate for AdoJobStore to use.")]),e._v(" "),o("p",[o("strong",[e._v("Configuring AdoJobStore to use a DriverDelegate")])]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("quartz.jobStore.driverDelegateType = Quartz.Impl.AdoJobStore.StdAdoDelegate, Quartz\n")])])]),o("p",[e._v("Next, you need to inform the JobStore what table prefix (discussed above) you are using.")]),e._v(" "),o("p",[o("strong",[e._v("Configuring AdoJobStore with the Table Prefix")])]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("quartz.jobStore.tablePrefix = QRTZ_\n")])])]),o("p",[e._v('And finally, you need to set which data source should be used by the JobStore. The named data source must also be defined in your Quartz properties.\nIn this case, we\'re specifying that Quartz should use the data source name "myDS" (that is defined elsewhere in the configuration properties).')]),e._v(" "),o("p",[o("strong",[e._v("Configuring AdoJobStore with the name of the data source to use")])]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("quartz.jobStore.dataSource = myDS\n")])])]),o("p",[e._v("One last thing that is needed for the configuration is to set data source connection string information and database provider. Connection\nstring is the standard ADO.NET connection which is driver specific. Database provider is an abstraction of database drivers to create\nloose coupling between database drivers and Quartz.")]),e._v(" "),o("p",[o("strong",[e._v("Setting Data Source's Connection String And Database Provider")])]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v(" quartz.dataSource.myDS.connectionString = Server=localhost;Database=quartz;Uid=quartznet;Pwd=quartznet\n quartz.dataSource.myDS.provider = MySql-50\n")])])]),o("p",[e._v("Currently following database providers are supported:")]),e._v(" "),o("ul",[o("li",[e._v("SqlServer-20 - SQL Server driver for .NET Framework 2.0")]),e._v(" "),o("li",[e._v("OracleODP-20 - Oracle's Oracle Driver")]),e._v(" "),o("li",[e._v("OracleODPManaged-1123-40 Oracle's managed driver for Oracle 11")]),e._v(" "),o("li",[e._v("OracleODPManaged-1211-40 Oracle's managed driver for Oracle 12")]),e._v(" "),o("li",[e._v("MySql-50 - MySQL Connector/.NET v. 5.0 (.NET 2.0)")]),e._v(" "),o("li",[e._v("MySql-51 - MySQL Connector/:NET v. 5.1 (.NET 2.0)")]),e._v(" "),o("li",[e._v("MySql-65 - MySQL Connector/:NET v. 6.5 (.NET 2.0)")]),e._v(" "),o("li",[e._v("SQLite-10 - SQLite ADO.NET 2.0 Provider v. 1.0.56 (.NET 2.0)")]),e._v(" "),o("li",[e._v("Firebird-201 - Firebird ADO.NET 2.0 Provider v. 2.0.1 (.NET 2.0)")]),e._v(" "),o("li",[e._v("Firebird-210 - Firebird ADO.NET 2.0 Provider v. 2.1.0 (.NET 2.0)")]),e._v(" "),o("li",[e._v("Npgsql-20 - PostgreSQL Npgsql")])]),e._v(" "),o("p",[o("strong",[e._v("You can and should use latest version of driver if newer is available, just create an assembly binding redirect")])]),e._v(" "),o("p",[e._v("If your Scheduler is very busy (i.e. nearly always executing the same number of jobs as the size of the thread pool, then you should\nprobably set the number of connections in the data source to be the about the size of the thread pool + 1.This is commonly configured\nint the ADO.NET connection string - see your driver implementation for details.")]),e._v(" "),o("p",[e._v('The "quartz.jobStore.useProperties" config parameter can be set to "true" (defaults to false) in order to instruct AdoJobStore that all values in JobDataMaps will be strings,\nand therefore can be stored as name-value pairs, rather than storing more complex objects in their serialized form in the BLOB column. This is much safer in the long term,\nas you avoid the class versioning issues that there are with serializing your non-String classes into a BLOB.')]),e._v(" "),o("p",[o("strong",[e._v("Configuring AdoJobStore to use strings as JobDataMap values (recommended)")])]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("quartz.jobStore.useProperties = true\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);