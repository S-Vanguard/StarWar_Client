const Koa = require('koa2')

const app = new Koa();

app.use(async (ctx, next) => {
  await next();
  ctx.response.type = 'text/html';
  ctx.response.body = '<h1>Hello, koa2!</h1>';
});

app.listen(3000);
console.log('Koa2 server now listening at http://localhost:3000');