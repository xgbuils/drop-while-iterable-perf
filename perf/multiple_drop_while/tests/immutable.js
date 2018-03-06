module.exports = dep => {
    const {List} = dep
    return {
        fn () {
            const n = this.numberOfDropWhiles
            let iterable = new List(this.iterable)
            for (let i = 0; i < n; ++i) {
                iterable = iterable.skipWhile(e => e !== i)
            }
            return iterable
        },
        toArray (iterable) {
            return [...iterable]
        }
    }
}
