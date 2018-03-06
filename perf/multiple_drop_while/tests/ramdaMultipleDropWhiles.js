module.exports = ({dropWhile, map, compose, range}) => {
    return function () {
        const n = this.numberOfDropWhiles
        const dropWhiles = map(i => dropWhile(e => e !== i), range(0, n))
        return {
            transducer: compose(...dropWhiles),
            iterable: this.iterable
        }
    }
}
