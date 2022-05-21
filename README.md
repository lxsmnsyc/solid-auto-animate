# solid-auto-animate

> SolidJS bindings for FormKit's AutoAnimate

[![NPM](https://img.shields.io/npm/v/solid-auto-animate.svg)](https://www.npmjs.com/package/solid-auto-animate) [![JavaScript Style Guide](https://badgen.net/badge/code%20style/airbnb/ff5a5f?icon=airbnb)](https://github.com/airbnb/javascript)

## Install

```bash
npm install --save solid-js @formkit/auto-animate solid-auto-animate
```

```bash
yarn add solid-js @formkit/auto-animate solid-auto-animate
```

```bash
pnpm add solid-js @formkit/auto-animate solid-auto-animate
```

## Usage

### As directive

```js
import { createSignal } from 'solid-js';
import { autoAnimate } from 'solid-auto-animate';

function App() {
  // Required to prevent TS from removing the directive
  autoAnimate;

  const [items, setItems] = createSignal([0, 1, 2]);
  const add = () => setItems((current) => [...current, current.length]);

  return (
    <>
      <ul use:autoAnimate={/* optional config */}>
        <For each={items()}>
          {(item) => <li>{item}</li>}
        </For>
      </ul>
      <button onClick={add}>Add number</button>
    </>
  );
}
```

### As primitive

```js
import { createSignal } from 'solid-js';
import { useAutoAnimate } from 'solid-auto-animate';

function App() {
  const [items, setItems] = createSignal([0, 1, 2]);
  const add = () => setItems((current) => [...current, current.length])

  let parent;

  useAutoAnimate(() => parent, /* optional config */)

  return (
    <>
      <ul ref={parent}>
        <For each={items()}>
          {(item) => <li>{item}</li>}
        </For>
      </ul>
      <button onClick={add}>Add number</button>
    </>
  );
}
```

## License

MIT © [lxsmnsyc](https://github.com/lxsmnsyc)
