# @asmelabs/az-utils

Utilities for Azerbaijani developers.

## Installation

```bash
npm install @asmelabs/az-utils
# or
pnpm add @asmelabs/az-utils
yarn add @asmelabs/az-utils
bun add @asmelabs/az-utils
```

## Functions

### slugify

Converts text to URL-friendly slug format with Azerbaijani character support.

```ts
import { slugify } from "@asmelabs/az-utils";

slugify("Hello World"); // 'hello-world'
slugify("Səlam Dünya"); // 'selam-dunya'
slugify("İşıq və Çörək"); // 'ishiq-ve-chorek'
```

## License

MIT © Asme Labs
