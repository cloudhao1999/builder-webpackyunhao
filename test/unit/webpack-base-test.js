
const assert = require('assert');

describe('webpack.base.js test case', () => {
  
  const baseConfig = require('../../lib/webpack.base.js');
  
  console.log(baseConfig);
  it('entry', () => {
    assert.strictEqual(baseConfig.entry.index,'D:/文档/Code/webpack_learning/my-project/builder-webpack/test/smoke/template/src/index/index.js')
    assert.strictEqual(baseConfig.entry.search,'D:/文档/Code/webpack_learning/my-project/builder-webpack/test/smoke/template/src/search/index.js')
  })
})