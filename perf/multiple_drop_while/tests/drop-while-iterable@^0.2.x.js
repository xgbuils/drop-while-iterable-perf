module.exports = I => {
    return {
        fn () {
            const n = this.numberOfDropWhiles
            const dropWhile = I.dropWhile
            let iterable = I.of(this.iterable)
            for (let i = 0; i < n; ++i) {
                iterable = dropWhile(e => e !== i, iterable)
            }
            return iterable
        },
        toArray (iterable) {
            return [...iterable]
        }
    }
}
