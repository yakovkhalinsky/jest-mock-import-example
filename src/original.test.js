import { foo } from './index'

describe('Test With Import Restored', () => {
  test('foo should return value of bar()', () => {
    expect(foo()).toBe('bar')
  })
})
