const suitesCollection = require('./suiteCollectionFactory')

const dropWhile = require('./drop_while/suites')
const multipleDropWhile = require('./multiple_drop_while/suites')

suitesCollection({
    name: 'benchmark',
    suites: [
        dropWhile,
        multipleDropWhile
    ]
})()
