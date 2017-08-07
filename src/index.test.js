import { foo } from './index'

jest.mock('./module')

beforeEach(() => {
  const { bar } = require('./module')
  bar.mockReturnValue('unicorn')
})

describe('Test With Import Mocked', () => {
  test('foo should return value of bar()', () => {
    expect(foo()).toBe('unicorn')
  })
})
