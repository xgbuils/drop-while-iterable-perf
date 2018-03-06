module.exports = I => {
    return {
        fn () {
            return I.dropWhile(this.cb, I.of(this.iterable))
        },
        toArray (iterable) {
            return [...iterable]
        }
    }
}
