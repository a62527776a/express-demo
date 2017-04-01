import Base from '../controllers/base.controller';
import path from 'path';

let routes = (app) => {
  app.route('/').get((req, res) => {
    res.sendFile(path.join(__dirname, '../../../static/index.html'));
  });
  app.route('/api/:className').get(Base.find);
  app.route('/api/:className').post(Base.post);
  app.route('/api/:className/:id').get(Base.get);
  app.route('/api/:className/:id').put(Base.put);
  app.route('/api/:className/:id').delete(Base.delete);
  app.route('/api/file/upload').post(Base.fileUpload);
};

export default routes;