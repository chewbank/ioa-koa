'use strict';

const app = require('@app');
const loads = require('@chewbank/ioa-router/lib/loads.js');

app.emit('loads', loads);

app.loader({
   "koa.js": {
      level: 100
   },
})