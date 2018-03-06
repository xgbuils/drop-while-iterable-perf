module.exports = function () {
    const {length} = this
    this.iterable = {
        * [Symbol.iterator] () {
            for (let i = 0; i < length; ++i) {
                yield i
            }
        }
    }
}
