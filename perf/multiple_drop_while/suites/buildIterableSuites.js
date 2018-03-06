const suiteCollection = require('../../suiteCollectionFactory')
const suite = require('../../suiteFactory')
const packages = require('../../packages')

const {
    FEW_DROP_WHILES,
    ENOUGH_DROP_WHILES,
    TOO_MUCH_DROP_WHILES,
    SMALL_SIZE,
    MEDIUM_SIZE,
    BIG_SIZE
} = require('../../setup/values')

module.exports = function (name, buildIterable, testsDir) {
    return suiteCollection({
        name,
        packages,
        testsDir,
        setups: {},
        build: buildIterable,
        suites: [
            suiteCollection({
                name: 'iterable size (with ${numberOfDropWhiles} dropWhiles)',
                setups: {
                    numberOfDropWhiles: ENOUGH_DROP_WHILES
                },
                suites: [
                    suite({
                        name: 'small size (${length} items)',
                        setups: {
                            length: SMALL_SIZE
                        }
                    }),
                    suite({
                        name: 'medium size (${length} items)',
                        setups: {
                            length: MEDIUM_SIZE
                        }
                    }),
                    suite({
                        name: 'big size (${length} items)',
                        setups: {
                            length: BIG_SIZE
                        }
                    })
                ]
            }),
            suiteCollection({
                name: 'number of dropWhiles (with ${length} items)',
                setups: {
                    length: MEDIUM_SIZE
                },
                suites: [
                    suite({
                        name: 'few dropWhiles (x${numberOfDropWhiles})',
                        setups: {
                            numberOfDropWhiles: FEW_DROP_WHILES
                        }
                    }),
                    suite({
                        name: 'enough dropWhiles (x${numberOfDropWhiles})',
                        setups: {
                            numberOfDropWhiles: ENOUGH_DROP_WHILES
                        }
                    }),
                    suite({
                        name: 'a lot of dropWhiles (x${numberOfDropWhiles})',
                        setups: {
                            numberOfDropWhiles: TOO_MUCH_DROP_WHILES
                        }
                    })
                ]
            }),
            suite({
                testType: 'onlyBuild',
                name: 'build without processing (${length} items & ${numberOfDropWhiles} maps)',
                setups: {
                    length: BIG_SIZE,
                    numberOfDropWhiles: TOO_MUCH_DROP_WHILES
                }
            })
        ]
    })
}
