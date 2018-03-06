const log = require('./log')
const template = require('./template')
const findTestThatMatches = require('./findTestThatMatches')
const getTests = require('./getTests')
const Benchmarck = require('benchmark')

module.exports = function (params) {
    return function (options = {indentation: 0}) {
        if (params.testsDir) {
            params.tests = getTests(params.testsDir)
        }
        const setups = Object.assign({}, params.setups, options.setups)
        const title = template(params.name, setups)
        return log(options.indentation, `${title}\n`, '- ')
            .then(() => suiteFactory(Object.assign({}, params, options, {
                setups
            })))
    }
}

const testTypes = {
    onlyBuild: test => function (context) {
        return test.fn.call(context)
    },
    buildAndProcess: test => function (context) {
        return test.toArray(test.fn.call(context))
    }
}

function getPackageTests ({package, instances}, {testType, context, tests}) {
    const packageTests = tests.get(package) || new Map()
    return instances
        .map(({version, instance}) => {
            return ({
                testFn: findTestThatMatches(version, packageTests),
                version,
                instance
            })
        })
        .filter(({testFn}) => testFn)
        .map(({testFn, version, instance}) => {
            const packageTest = testTypes[testType](testFn(instance))
            return {
                name: package + (version ? `@${version}` : ''),
                test: () => packageTest(context)
            }
        })
}

function suiteFactory (params) {
    return Promise.resolve(params)
        .then(params => {
            const context = Object.assign({}, params.setups)
            params.build.call(context)
            return Object.assign({
                testType: 'buildAndProcess',
                context
            }, params)
        })
        .then(params => {
            return params.packages.reduce((suite, package) => {
                const tests = getPackageTests(package, params)
                return tests.reduce((suite, {name, test}) => {
                    return suite.add(name, test)
                }, suite)
            }, new Benchmarck.Suite())
        })
        .then(suite => {
            return new Promise((resolve, reject) => {
                suite
                    .on('cycle', ({target}) => log(params.indentation + 4, `${String(target)}\n`, '- '))
                    .on('complete', function () {
                        log(params.indentation + 4, `Fastest is ${this.filter('fastest').map('name')}\n`)
                        resolve()
                    })
                    .on('error', reject)
                    .run({async: true})
            })
        })
        // eslint-disable-next-line no-console
        .catch(err => console.log(err))
}
