const suiteCollection = require('../../suiteCollectionFactory')

const buildIterableSuites = require('./buildIterableSuites')
const buildArray = require('../../setup/buildArray')
const buildComputedIterable = require('../../setup/buildComputedIterable')

const arraySuite = buildIterableSuites(
    'array',
    buildArray,
    './drop_while/tests/array/'
)

const computedIterableSuite = buildIterableSuites(
    'computed iterable',
    buildComputedIterable,
    './drop_while/tests/computedIterable'
)

module.exports = suiteCollection({
    name: 'dropWhile',
    suites: [
        arraySuite,
        computedIterableSuite
    ]
})
