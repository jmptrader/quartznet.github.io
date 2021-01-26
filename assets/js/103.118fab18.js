(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{418:function(t,e,a){"use strict";a.r(e);var n=a(26),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("a",{attrs:{href:"https://www.nuget.org/packages/Quartz.OpenTelemetry.Instrumentation",target:"_blank",rel:"noopener noreferrer"}},[t._v("Quartz.OpenTelemetry.Instrumentation"),a("OutboundLink")],1),t._v("\nprovides integration with "),a("a",{attrs:{href:"https://opentelemetry.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("OpenTelemetry"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("Quartz 3.1 or later required.")])]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("The integration library can still live a bit and thus integration API can have breaking changes and change behavior.")])]),t._v(" "),a("h2",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),a("p",[t._v("You need to add NuGet package reference to your project which uses Quartz.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("Install-Package Quartz.OpenTelemetry.Instrumentation\n")])])]),a("p",[t._v("It also makes sense to install package for exporter to actually get the results somewhere.")]),t._v(" "),a("h2",{attrs:{id:"using"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using"}},[t._v("#")]),t._v(" Using")]),t._v(" "),a("p",[t._v("You can add Quartz configuration by invoking an extension method "),a("code",[t._v("AddQuartzInstrumentation")]),t._v(" on "),a("code",[t._v("TracerProviderBuilder")]),t._v(".")]),t._v(" "),a("p",[t._v("In the next example we will integrate with "),a("a",{attrs:{href:"https://www.jaegertracing.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Jaeger"),a("OutboundLink")],1),t._v(". We expect that you have also installed dependencies:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.nuget.org/packages/OpenTelemetry.Extensions.Hosting",target:"_blank",rel:"noopener noreferrer"}},[t._v("OpenTelemetry.Extensions.Hosting"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.nuget.org/packages/OpenTelemetry.Exporter.Jaeger",target:"_blank",rel:"noopener noreferrer"}},[t._v("OpenTelemetry.Exporter.Jaeger"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("You can run local Jaeger via docker using:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ docker run -d --name jaeger \\\n  -e COLLECTOR_ZIPKIN_HTTP_PORT=9411 \\\n  -p 5775:5775/udp \\\n  -p 6831:6831/udp \\\n  -p 6832:6832/udp \\\n  -p 5778:5778 \\\n  -p 16686:16686 \\\n  -p 14268:14268 \\\n  -p 14250:14250 \\\n  -p 9411:9411 \\\n  jaegertracing/all-in-one:1.18\n")])])]),a("p",[a("strong",[t._v("Example Startup.ConfigureServices configuration")])]),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token return-type class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ConfigureServices")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IServiceCollection")]),t._v(" services"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// make sure you configure logging and open telemetry before quartz services")]),t._v("\n\n    services"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("AddOpenTelemetry")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("builder "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        builder\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("AddQuartzInstrumentation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("UseJaegerExporter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("o "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                o"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ServiceName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"My Software Name"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// these are the defaults")]),t._v("\n                o"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AgentHost "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"localhost"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                o"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AgentPort "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6831")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);