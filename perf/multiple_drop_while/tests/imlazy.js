module.exports = ({dropWhile}) => {
    return {
        fn () {
            const n = this.numberOfDropWhiles
            let iterable = this.iterable
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
