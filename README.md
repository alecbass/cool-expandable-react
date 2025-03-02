# Cool Expandable React

## A React port of the [cool-expandable library](https://github.com/alecbass/cool-expandable)

A simple web component which can open smoothly to a dynamic height.

For when you ceebs writing the logic yourself.

## Installation
```
pnpm add cool-expandable-react
```

Then, inside a `.js` or `.tsx` file:
```
import { useState } from "react";
import { Expandable } from "cool-expandable";

const Example = () => {
    const [isExpandableOpen, setIsExpandableOpen] = useState(false);
    
    return (
        <Expandable isOpen={isExpandableOpen} onClick={() => setIsExpandableOpen(isOpen => !isOpen)}>
            Contents!
        </Expandable>
    );
};
```

The element has three custom props:

* `isOpen`: `boolean`
* * Controls the `open` attribute of the underlying web component. A value of `true` expands the element while `false` shrinks it
* `shrunkHeight`: `string | undefined`
* * Sets the height the expandable element will sit at while shrunken. Defaults to `"120px`
* `expandedHeight`: `string | undefined`
* * Optionally sets a height limit on how big the element can expand. Defaults to fitting all the `<Expandable>` component's children
