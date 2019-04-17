/* eslint valid-jsdoc: "off" */

'use strict';

// const path = require('path');

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1555487653377_4653';

  // add your middleware config here
  config.middleware = [];

  // config.view = {
  //   root: [
  //     path.join(appInfo.baseDir, 'app/view'),
  //     path.join(appInfo.baseDir, 'path/to/another'),
  //   ].join(',')
  // };
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  };

  config.news = {
    pageSize: 5,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
