const Tag = require('../model/admin')

const loginIn = async (ctx) => {
  const user = ctx.request.body
  console.log(111, user)
  const data = await Tag.findOne({
    where: {
      name: user.userName,
      password: user.password
    }
  })
  ctx.body = {
    code: data ? 1000 : 1003,
    data,
    desc: data ? '登陆成功' : '账号或密码错误'
  }
}

module.exports = {
  loginIn
}