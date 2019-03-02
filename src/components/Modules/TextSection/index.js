import React from 'react'
import { pathOr } from 'ramda'
import Markdown from '../../Styles/Markdown'

const TextSection = props => {
  const heading = pathOr('', ['heading'], props)
  const subheading = pathOr('', ['subheading'], props)
  const text = pathOr('', ['sectionText', 'internal', 'content'], props)
  return (
    <div>
      {heading && <h3>{heading}</h3>}
      {subheading && <h5>{subheading}</h5>}
      {text && <Markdown value={text} />}
    </div>
  )
}

export default TextSection
