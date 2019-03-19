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
  try {
    await Example.create(ctx.query)
    ctx.body = {
      code: 200,
      data: 'create success'
    }
  }
  catch(err) {
    const msg = err.errors[0]
    ctx.body = {
      code: 200,
      data: msg.value + msg.message
    }
  }
}
module.exports = {
  list,
  creat
}