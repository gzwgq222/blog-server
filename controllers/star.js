const Star = require('../model/star')
const Op = require('sequelize').Op

const list = async (ctx) => {
  const query = ctx.query
  const where = {
    title: {
      [Op.like]: `%${query.title}%`
    }
  }
  const {rows:data, count: total } = await Star.findAndCountAll({
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
  if (!params.title) {
    ctx.body = {
      code: 1003,
      desc: '标题不能为空'
    }
    return false
  }
  await Star.create(params)
  ctx.body = {
    code: 1000,
    data: '创建成功'
  }
}

const destroy = async ctx => {
  await Star.destroy({where: ctx.request.body})
  ctx.body = {
    code: 1000,
    desc: '删除成功'
  }
}

module.exports = {
  list,
  create,
  destroy
}