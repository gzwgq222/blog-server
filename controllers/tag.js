const Tag = require('../model/tag')
const Op = require('sequelize').Op

const listAll = async (ctx) => {
  const data = await Tag.findAll()
  ctx.body = {
    code: 1000,
    data
  }
}

const list = async (ctx) => {
  const query = ctx.query
  const where = {
    name: {
      [Op.like]: `%${query.name}%`
    }
  }
  const {rows:data, count: total } = await Tag.findAndCountAll({
    where,
    offset: (+query.pageNo - 1) * +query.pageSize,
    limit: +query.pageSize
  })
  ctx.body = {
    data,
    total,
    code: 1000,
    desc: 'success'
  }
}
const create = async (ctx) => {
  const params = ctx.request.body
  if (!params.name) {
    ctx.body = {
      code: 1003,
      desc: '标签不能为空'
    }
    return false
  }
  try {
    await Tag.create(params)
    ctx.body = {
      code: 1000,
      data: '创建成功'
    }
  }
  catch(err) {
    const msg = err.errors[0]
    ctx.body = {
      code: 300,
      data: msg.value + msg.message
    }
  }
}
const destroy = async ctx => {
  await Tag.destroy({where: ctx.request.body})
  ctx.body = {
    code: 1000,
    desc: '删除成功'
  }
}
module.exports = {
  list,
  create,
  listAll,
  destroy
}