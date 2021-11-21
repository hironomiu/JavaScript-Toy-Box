import { Model } from '../modules/model'

describe('initialize', () => {
  it('count', () => {
    const model = new Model()
    expect(model.count).toBe(0)
  })
  it('input', () => {
    const model = new Model()
    expect(model.input).toBe(0)
  })
})

describe('increment', () => {
  it('increment', () => {
    const model = new Model()
    model.increment()
    expect(model.count).toBe(1)
  })
})

describe('decrement', () => {
  it('decrement', () => {
    const model = new Model()
    model.decrement()
    expect(model.count).toBe(-1)
  })
})
