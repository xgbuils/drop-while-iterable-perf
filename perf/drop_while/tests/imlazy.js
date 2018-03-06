module.exports = ({dropWhile}) => {
    return {
        fn () {
            return dropWhile(this.cb, this.iterable)
        },
        toArray (iterable) {
            return [...iterable]
        }
    }
}
