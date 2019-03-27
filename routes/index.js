const router = require('koa-router')()

const Tag = require('../controllers/tag')
const Star = require('../controllers/star')
const Admin = require('../controllers/admin')
const Category = require('../controllers/category')
const Article = require('../controllers/article')

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

// login
router.post('/loginIn', Admin.loginIn)

// tag
router.get('/tag/list', Tag.list)
router.get('/tag/list/all', Tag.listAll)

router.post('/tag/create', Tag.create)
router.post('/tag/destroy', Tag.destroy)

// star
router.get('/star/list', Star.list)

router.post('/star/create', Star.create)
router.post('/star/destroy', Star.destroy)

// category
router.get('/category/list', Category.list)
router.get('/category/list/all', Category.listAll)

router.post('/category/create', Category.create)
router.post('/category/destroy', Category.destroy)

// Article
router.get('/article/list', Article.list)
router.get('/article/list/all', Article.listAll)

router.post('/article/create', Article.create)
router.post('/article/destroy', Article.destroy)

module.exports = router
