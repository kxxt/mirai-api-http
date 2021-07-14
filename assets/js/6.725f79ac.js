(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{746:function(s,t,a){"use strict";a.r(t);var n=a(107),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),a("h2",{attrs:{id:"使用-mirai-console-loader-安装mirai-api-http"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-mirai-console-loader-安装mirai-api-http"}},[s._v("#")]),s._v(" 使用 "),a("a",{attrs:{href:"https://github.com/iTXTech/mirai-console-loader",target:"_blank",rel:"noopener noreferrer"}},[s._v("Mirai Console Loader"),a("OutboundLink")],1),s._v(" 安装"),a("code",[s._v("mirai-api-http")])]),s._v(" "),a("ul",[a("li",[a("code",[s._v("MCL")]),s._v(" 支持自动更新插件，支持设置插件更新频道等功能")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("./mcl --update-package net.mamoe:mirai-api-http --channel stable --type plugin\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"手动安装mirai-api-http"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#手动安装mirai-api-http"}},[s._v("#")]),s._v(" 手动安装"),a("code",[s._v("mirai-api-http")])]),s._v(" "),a("ol",[a("li",[s._v("运行 "),a("a",{attrs:{href:"https://github.com/mamoe/mirai-console",target:"_blank",rel:"noopener noreferrer"}},[s._v("Mirai Console"),a("OutboundLink")],1),s._v(" 生成 plugins 文件夹")]),s._v(" "),a("li",[s._v("从 "),a("a",{attrs:{href:"https://github.com/project-mirai/mirai-api-http/releases",target:"_blank",rel:"noopener noreferrer"}},[s._v("Releases"),a("OutboundLink")],1),s._v(" 下载"),a("code",[s._v("jar")]),s._v("并将其放入"),a("code",[s._v("plugins")]),s._v("文件夹中")])]),s._v(" "),a("h1",{attrs:{id:"开始使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开始使用"}},[s._v("#")]),s._v(" 开始使用")]),s._v(" "),a("ol",[a("li",[s._v("编辑"),a("code",[s._v("config/MiraiApiHttp/setting.yml")]),s._v("配置文件 (没有则自行创建)")]),s._v(" "),a("li",[s._v("启动 "),a("a",{attrs:{href:"https://github.com/mamoe/mirai-console",target:"_blank",rel:"noopener noreferrer"}},[s._v("Mirai Console"),a("OutboundLink")],1)]),s._v(" "),a("li",[s._v("记录日志中出现的"),a("code",[s._v("authKey")])])]),s._v(" "),a("h2",{attrs:{id:"setting-yml-模板"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setting-yml-模板"}},[s._v("#")]),s._v(" setting.yml 模板")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 配置文件中的值，全为默认值")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 启用的 adapter, 内置有 http, ws, reverse-ws, webhook")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("adapters")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" http\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ws\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 是否开启认证流程, 若为 true 则建立连接时需要验证 verifyKey")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 建议公网连接时开启")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("enableVerify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("verifyKey")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1234567890")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 开启一些调式信息")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("debug")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("false")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 是否开启单 session 模式, 若为 true，则自动创建 session 绑定 console 中登录的 bot")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 开启后，接口中任何 sessionKey 不需要传递参数")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 若 console 中有多个 bot 登录，则行为未定义")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 确保 console 中只有一个 bot 登陆时启用")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("singleMode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("false")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 历史消息的缓存大小")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 同时，也是 http adapter 的消息队列容量")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("cacheSize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## adapter 的单独配置，键名与 adapters 项配置相同")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("adapterSettings")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 详情看 http adapter 使用说明 配置")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("http")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("host")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" localhost\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("cors")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  \n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 详情看 websocket adapter 使用说明 配置")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ws")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("host")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" localhost\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("reservedSyncId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("-1")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);