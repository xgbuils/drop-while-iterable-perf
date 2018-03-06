module.exports = Iterable => {
    return {
        fn () {
            const n = this.numberOfDropWhiles
            let iterable = new Iterable(this.iterable)
            for (let i = 0; i < n; ++i) {
                iterable = iterable.dropWhile(e => e !== i)
            }
            return iterable
        },
        toArray (iterable) {
            return [...iterable]
        }
    }
}
