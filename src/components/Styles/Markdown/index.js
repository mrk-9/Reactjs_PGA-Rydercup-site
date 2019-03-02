import React from 'react'
import MarkdownIt from 'markdown-it'
import { pure } from 'recompose'

const md = new MarkdownIt({
  html: true
})

export const Markdown = ({ value, ...props }) => (
  <div
    dangerouslySetInnerHTML={{ __html: md.render(value || '') }}
    {...props}
  />
)

export default pure(Markdown)
