module.exports = dep => {
    const {List} = dep
    return {
        fn () {
            return new List(this.iterable)
                .skipWhile(this.cb)
        },
        toArray (iterable) {
            return [...iterable]
        }
    }
}
