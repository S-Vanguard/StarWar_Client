const Koa = require('koa2');
const proxy = require('koa2-proxy-middleware');
const serve = require('koa2-static-middleware');
const router = require('koa-router')();

const app = new Koa();

if (process.argv.length != 4) {
  console.log('Error: Invalid number of arguments.')
  console.log('Usage:')
  console.log('node index.js {listen port} {api server url}')
  return;
}

const listenPort = process.argv[2];
const apiServer  = process.argv[3];

app.use(async (ctx, next) => {
  console.log(`${ctx.request.method} ${ctx.request.url}`);
  await next();
});

app.use(async (ctx, next) => {
  const start = new Date().getTime();
  await next();
  const ms = new Date().getTime() - start;
  console.log(`Time: ${ms}ms`);
});

router.all('/', ctx => {
  ctx.redirect('/public/html/index.html');
});

router.get('/public/*', serve('./public'));
app.use(router.routes());

const proxyOptions = {
  targets: {
    '/user/(.*)' : {
      target: apiServer,
      changeOrigin: true,
    },
    '/people(.*)' : {
      target: apiServer,
      changeOrigin: true,
    },
    '/planets(.*)' : {
      target: apiServer,
      changeOrigin: true,
    },
    '/starships(.*)' : {
      target: apiServer,
      changeOrigin: true,
    },
  }
}
app.use(proxy(proxyOptions));

app.listen(Number(listenPort));
console.log('Koa2 server now listening at http://localhost:3000');