import { createVariation } from '../src/index'

describe('Variations are created with success', () => {
  it('should with colors', () => {
    const draft = {
      primary: {
        backgroundColor: 'blue',
        color: 'green'
      },
      secondary: {
        backgroundColor: 'black',
        color: 'pink'
      }
    }
    const variation = createVariation({ name: 'theme', variation: draft })
    const primary = variation({ theme: 'primary' })
    expect(primary).toEqual({
      backgroundColor: 'blue',
      color: 'green'
    })
    const secondary = variation({ theme: 'secondary' })
    expect(secondary).toEqual({
      backgroundColor: 'black',
      color: 'pink'
    })
  })

  it('should with sizes', () => {
    const draft = {
      small: {
        padding: '1rem',
        margin: '1rem',
        borderRadius: '1rem'
      },
      medium: {
        padding: '2rem',
        margin: '2rem',
        borderRadius: '2rem'
      }
    }
    const variation = createVariation({ name: 'size', variation: draft })
    const small = variation({ size: 'small' })
    expect(small).toEqual({
      padding: '1rem',
      margin: '1rem',
      borderRadius: '1rem'
    })
    const medium = variation({ size: 'medium' })
    expect(medium).toEqual({
      padding: '2rem',
      margin: '2rem',
      borderRadius: '2rem'
    })
  })
})
