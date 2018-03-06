module.exports = Iterable => {
    return {
        fn () {
            return new Iterable(this.iterable)
                .dropWhile(this.cb)
        },
        toArray (iterable) {
            return [...iterable]
        }
    }
}
