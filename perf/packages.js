const niv = require('npm-install-version')

const packages = [{
    package: 'ramda',
    versions: ['0.25.0']
}, {
    package: 'immutable',
    versions: ['3.8.2']
}, {
    package: 'imlazy',
    versions: ['6.3.1']
}, {
    package: 'wu',
    versions: ['2.1.0']
}, {
    package: 'es-iter',
    versions: ['1.1.1']
}, {
    package: 'drop-while-iterable',
    versions: ['0.1.0', '0.2.0']
}, {
    package: 'transform-arraylike-iterable',
    versions: ['0.1.0', '0.1.8', '0.1.9', '0.1.10']
}, {
    package: 'transform-iterable',
    versions: ['0.1.0']
}]

packages.forEach(({package, versions}) => {
    versions.forEach(version => niv.install(`${package}@${version}`))
})

module.exports = packages.map(({package, versions}) => {
    return {
        package,
        instances: versions.map(version => {
            return {
                version,
                instance: niv.require(`${package}@${version}`)
            }
        })
    }
}).concat([{
    package: 'native',
    instances: [{}]
}])
