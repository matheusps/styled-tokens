export default function createTokens(styles: DraftToken) {
  const { propName, values } = styles
  const props = Object.keys(propName)

  const styleFunctions = props.map(prop => {
    const name = propName[prop]

    const curriedStyleFn = (key, values) => receivedProps => ({
      [prop]: values[receivedProps[key]]
    })

    return curriedStyleFn(name, values)
  })

  return styleFunctions
}

export type DraftToken = {
  values: { [key: string]: any }
  propName: { [key: string]: string }
}
