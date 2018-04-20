const app = require('./server/server');

app.listen(process.env.PORT, process.env.IP, () => {
  console.log('Listening');
});
