const createTokens = (styles: DraftToken) => {
  const { propName, values } = styles
  const props = Object.keys(propName)

  const styledFunctions = props.map(prop => {
    const name = propName[prop]

    const curriedStyleFn = (name: string, values: { [key: string]: any }) => (
      receivedProps: any
    ) => ({
      [prop]: values[receivedProps[name]]
    })

    return curriedStyleFn(name, values)
  })

  return styledFunctions
}

const createVariation = (draft: DraftVariation) => {
  const { variation, name } = draft

  const styledFunction = (name: string, variationValues: { [key: string]: any }) => (
    receivedProps: any
  ) => {
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
