# nested-js
The library is introducing a new way of making web templates only using javascript. The purpose of the library is to allow developers to make web applications only using javascript to manage the code easily and for making rich dynamic templates.

## Features

- Create HTML templates using javascript
- Binding events on HTML elements
- Binding attributes on HTML elements

## Installation

```
npm i @capsular/nested-js
```

## Examples

[nested-js application](https://github.com/h123eranga/nested-js-app)

```

import { renderContent, div, h1, p } from "@capsular/nested-js"

function App() {
  return div(
    h1('nested-js'),
    p('Welcome to nested-js')
  )
}

renderContent(App, document.getElementBy('root')

```

## Components

```
function HeaderComponent() {
  return div(
    'Header Component'
  )
}

export default HeaderComponent

...
div(
  'Inject custom components',
  
  HeaderComponent,
  
  div('body component'),
  
  BodyComponent,
  
  span('All rights reserved'),
  
  FooterComponent,
)
...

```

## License

MIT
