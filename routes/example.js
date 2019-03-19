const Router = require('koa-router')
const router = new Router()
const Example = require('../controllers/example')

router.get('/test', async ctx => {
  ctx.body = 'success requset'
})
router.get('/list', Example.list)
router.post('/creat', Example.creat)

module.exports = router