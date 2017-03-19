import model from '../../models/index';
import middleware from '../../middleware/';
import fs from 'fs';
import path from 'path';
import querystring from 'querystring';
export default class BaseService {
  constructor(className) {
    this._model;
    this.setModel(className);
  };

  setModel(className) {
    if (!model[className]) {
      throw new Error('模块名错误' + className);
    }
    this._model = model[className];
  };

  get(id, res) {
    this._model.findOne({_id: id}).exec((err, result) => {
      if (err) {
        return res.send(err);
      }
      res.send(result);
    });
  };

  find(res) {
    this._model.find().exec((err, result) => {
      if (err) {
        return res.send(err);
      }
      res.send(result);
    });
  };

  delete(id, res) {
    this._model.remove({_id: id}).exec((err, result) => {
      if (err) {
        return res.send(err);
      }
      res.send(result);
    });
  };

  put(id, res) {

  };

  post(body, res) {
    const model = new this._model(body);
    model.save((err, body) => {
      if (err) {
        return res.send(err);
      }
      return res.send(body);
    });
  };

  fileUpload (req, res) {
    req.setEncoding('binary');
    let chunks = new Array;
    console.log(typeof chunks);
    // boundary 在传输的数据中也在请求头中
    let boundary = req.headers['content-type'].split('; ')[1].replace('boundary=', '');
    let body = '';
    req.on('data', (chunk) => {
      chunks.push(chunk);
    });
    req.on('end', () => {
      let chunks = Buffer.concat(chunks);
      middleware.writeFile(buffer, boundary).then((result) => {
        console.log(result);
      }).catch((err) => {
        console.log(err);
      });
    });
  };
};