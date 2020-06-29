'use strict'

const execute = () => new Promise((resolve, reject) => {
  Promise.resolve()
    .then(() => {
      resolve('yamachita')
    })
    .catch(reject)
})

module.exports = {
  execute
}
