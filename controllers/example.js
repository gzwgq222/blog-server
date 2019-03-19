const Example = require('../model/example')
const list = async (ctx) => {
  const data = await Example.findAll()
  ctx.body = {
    data,
    code: 200,
    desc: 'success'
  }
}
const creat = async (ctx) => {
  console.log(111, ctx.query)
  await Example.create(ctx.query)
  ctx.body = {
    code: 200,
    data: 'creat success'
  }
}
module.exports = {
  list,
  creat
}