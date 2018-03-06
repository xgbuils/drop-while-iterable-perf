const requireDir = require('require-dir')

module.exports = function (testsDir) {
    const tests = requireDir(testsDir)
    return Object.keys(tests).reduce(function (result, testName) {
        const [packageTest, versionRange = '*'] = testName.split('@')
        const versions = (result.get(packageTest) || new Map())
        versions.set(versionRange, tests[testName])
        result.set(packageTest, versions)
        return result
    }, new Map())
}
