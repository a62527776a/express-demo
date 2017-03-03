import BaseService from '../services/base.service'

class BaseCtrl {
  find (req, res) {
    new BaseService(req.params.className).find(res)
  }
  post (req, res) {
    new BaseService(req.params.className).post(req.body, res)
  }
  get (req, res) {
    new BaseService(req.params.className).get(req.params.id, res)
  }
  put (req, res) {
    new BaseService(req.params.className).put(req.params.id, req.body, res)
  }
  delete (req, res) {
    new BaseService(req.params.className).delete(req.params.id, res)
  }
}

export default new BaseCtrl()