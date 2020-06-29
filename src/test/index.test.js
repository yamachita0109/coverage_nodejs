/* eslint-disable no-undef */
const usecase = require('../index')
const assert = require('assert')

describe('# index', () => {
  it('## execute', async () => {
    let res
    await usecase.execute().then((result) => { res = result })
    assert.strictEqual(res, 'yamachita')
  })
})
