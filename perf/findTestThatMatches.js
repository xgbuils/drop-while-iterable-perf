const semver = require('semver')

module.exports = function findTestThatMatches (version, tests) {
    const [, test] = [...tests].find(([versionRange]) => {
        return semver.satisfies(version, versionRange)
    }) || []
    return test
}
