const createTokens = (styles: DraftToken) => {
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

const createVariation = (draft: DraftVariation) => {
  const { variation, name } = draft

  const styledFunction = (name: string, variationValues: { [key: string]: any}) => (receivedProps: any) => {
    const passedVariation = receivedProps[name]
    const props = variationValues[passedVariation]
    return props
  }

  return styledFunction(name, variation)
}

type DraftToken = {
  values: { [key: string]: any }
  propName: { [key: string]: string }
}

type DraftVariation = {
  variation: { [key: string]: any }
  name: string
}

export { createTokens, DraftToken, createVariation }
