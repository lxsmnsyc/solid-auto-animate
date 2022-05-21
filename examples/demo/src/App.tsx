import { createSignal, For, JSX } from 'solid-js';
import { autoAnimate } from 'solid-auto-animate';

export default function App(): JSX.Element {
  // Required to prevent TS from removing the directive
  // eslint-disable-next-line no-unused-expressions
  autoAnimate;

  const [items, setItems] = createSignal([0, 1, 2]);
  const add = () => setItems((current) => [...current, current.length]);

  return (
    <div
      class="bg-gradient-to-r from-fuchsia-500 to-purple-600 w-screen h-screen flex overflow-hidden"
    >
      <div class="flex flex-col items-center justify-center w-full">
        <ul class="m-4 flex flex-col space-y-4" use:autoAnimate={{}}>
          <For each={items()}>
            {(item) => (
              <li>
                <button
                  type="button"
                  onClick={() => alert(`You clicked Item Number ${item}`)}
                  class="px-4 py-2 text-sm font-medium text-white bg-white rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                >
                  Item Number {item}
                </button>
              </li>
            )}
          </For>
        </ul>
        <button
          type="button"
          onClick={add}
          class="px-4 py-2 text-sm font-medium text-white bg-white rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Add number
        </button>
      </div>
    </div>
  );
}
