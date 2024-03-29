'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async list() {
    const ctx = this.ctx;
    const page = ctx.query.page || 1;
    const newsList = await this.service.news.list(page);
    await this.ctx.render('news/list.tpl', { list: newsList });
  }
}

module.exports = NewsController;
