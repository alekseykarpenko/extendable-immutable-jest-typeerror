import { fromJS } from 'immutable'
import { List } from 'extendable-immutable'

const list = fromJS([
    {title: "A"},
    {title: "E"},
    {title: "B"},
    {title: "D"},
    {title: "C"},
])

const result = fromJS([
    {title: "A"},
    {title: "B"},
    {title: "C"},
    {title: "D"},
    {title: "E"},
])

class Second extends List {
    lol(){
        return 'LOL:)'
    }
}

const originalList = new List(list)
const secondList = new Second(list)

describe('original List', () => {
    it('should return sorted list', () => {
        expect(originalList.sort().toJS(), result)
    })
})

describe('extended List', () => {
    it('should return sorted list', () => {
        expect(secondList.sort().toJS(), result)
    })
    it('should say LOL!', () => {
        expect(secondList.lol(), "LOL:)")
    })
})