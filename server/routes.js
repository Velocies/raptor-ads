module.exports = (app, db) => {

  app.get('/testing', (req, res) => {
    res.send(200, 'testing');
  });

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(rootPath + '/index.html'));
  });

}