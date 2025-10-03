/**
 * If you want to enable locale keys typechecking and enhance IDE experience.
 *
 * Requires `resolveJsonModule:true` in your tsconfig.json.
 *
 * @link https://www.i18next.com/overview/typescript
 */
import 'i18next'

// resources file is generated with `yarn toc`
import Resources from './resources'

declare module 'i18next' {
  interface CustomTypeOptions {
    // defaultNS: 'common'
    resources: Resources
  }
}
