import React from 'react'
import { pathOr, cond, equals, T, always } from 'ramda'
import Contact from './Contact'
import ImageGallery from './ImageGallery'
import Form from './Form'

export const Row2Columns = data => {
  return cond([
    [equals('Contact'), () => <Contact key={data.entryTitle} data={data} />],
    [
      equals('Image Gallery'),
      () => <ImageGallery key={data.entryTitle} data={data} />
    ],
    [equals('Form'), () => <Form key={data.entryTitle} data={data} />],
    [T, always('Please add missing component')]
  ])(pathOr('', ['layout'], data))
}
