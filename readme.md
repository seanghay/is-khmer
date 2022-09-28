Khmer utility functions

## Installation

```
# pnpm
pnpm add is-khmer

# npm
npm add is-khmer

# yarn
yarn add is-khmer
```

## Browser

```js
import { 
	isKhmer, 
	containsKhmer, 
	parseKhmer 
} from "https://unpkg.com/is-khmer"
```

## API

### `isKhmer(text: string) => boolean`

Check if a string is in Khmer language

```js
import { isKhmer } from "is-khmer";

isKhmer("កូនខ្មែរ");
// => true

isKhmer("Cambodia");
// => false
```

### `containsKhmer(text: string) => boolean`

Check if a string contains Khmer language

```js
import { containsKhmer } from "is-khmer";

containsKhmer("Proud to be ខ្មែរ");
// => true

containsKhmer("Proud to be Cambodian");
// => false
```

### `parseKhmer(text: string) => KhmerMatchResult[]`

Extract Khmer text from a string.


```js
import { parseKhmer, KhmerMatchResult  } from "is-khmer";

const result = parseKhmer("ដោយយល់ឃើញថា ការមិនទទួលស្គាល់");

// =>
[
	{ start: 0, end: 11, value: "ដោយយល់ឃើញថា" },
	{ start: 12, end: 28, value: "ការមិនទទួលស្គាល់" },
];
```


## License

Apache 2.0