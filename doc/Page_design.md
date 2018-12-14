# 页面路径设计文档

## /

根路径，根据登录状态的不同进行跳转。若登陆，则跳转到 `/public/html/swapi.html`，否则跳转到 `/public/html/index.html`。

## /public

静态资源目录，开放 GET 权限。