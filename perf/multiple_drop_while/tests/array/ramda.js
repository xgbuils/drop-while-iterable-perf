const ramdaMultipleDropWhiles = require('../ramdaMultipleDropWhiles')

module.exports = dep => {
    return {
        fn: ramdaMultipleDropWhiles(dep),
        toArray (obj) {
            return obj.transducer(obj.iterable)
        }
    }
}
