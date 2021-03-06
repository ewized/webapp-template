import { css, unsafeCSS } from 'lit-element'


/** Takes the import object for scss files and inject it into the custom element */
export const _styles = style => css`${unsafeCSS(style[0][1])}`

/** Creates a decorator for the class */
export function styles(style) {
  // this is the equalivant of doing in the class
  // static styles = _styles(style)
  return descriptor => {
    return {
      ...descriptor,
      elements: [ ...descriptor.elements, {
        kind: 'field',
        placement: 'static',
        key: 'styles',
        descriptor: {},
        initializer: () => _styles(style)
      }]
    }
  }
}
