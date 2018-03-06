module.exports = ({dropWhile, into}) => {
    return {
        fn () {
            return into([], dropWhile(this.cb), this.iterable)
        },
        toArray (iterable) {
            return iterable
        }
    }
}
