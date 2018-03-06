const ramdaMultipleDropWhiles = require('../ramdaMultipleDropWhiles')

module.exports = dep => {
    const {into} = dep
    return {
        fn: ramdaMultipleDropWhiles(dep),
        toArray (obj) {
            return into([], obj.transducer, obj.iterable)
        }
    }
}
