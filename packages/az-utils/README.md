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

### validateFin / isFin

Validates an Azerbaijani FIN (Fərdi İdentifikasiya Nömrəsi).

```ts
import { validateFin, isFin } from "@asmelabs/az-utils";

validateFin("5NXLM7A"); // true
validateFin("5nxlm7a"); // true (case insensitive)
validateFin(" 5NXLM7A "); // true (trims whitespace)
validateFin("ABCIDEF"); // false (contains I)
validateFin("123"); // false (too short)

isFin("5NXLM7A"); // true (alias)
```

### normalizeFin

Normalizes a FIN to uppercase, trimmed format. Throws if invalid.

```ts
import { normalizeFin } from "@asmelabs/az-utils";

normalizeFin("5nxlm7a"); // '5NXLM7A'
normalizeFin(" 5NXLM7A "); // '5NXLM7A'
normalizeFin("ABCIDEF"); // throws Error
```

## Regexes

```ts
import { FIN_REGEX } from "@asmelabs/az-utils";

FIN_REGEX.test("5NXLM7A"); // true
```

## License

MIT © Asme Labs
