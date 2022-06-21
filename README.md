<div align="center">
  <img src="./public/logo.svg" width="100px" height="100px" />
</div>

<h1 align="center">@elonehoo/point-line</h1>

## Install

```bash
# npm
npm i @elonehoo/point-line
# yarn
yarn add @elonehoo/point-line
#pnpm
pnpm i @elonehoo/point-line
```

## Usage

```typescript
import {decode ,encode} from '@elonehoo/point-line'
// standart morse
encode('Hello, World!')

// unicode
encode('こんにちは世界！')
encode('你好，世界！')

// option
const option = {
  space: ' ',
  long: '-',
  short: '*'
}
encode('你好，世界！', option)
```

```typescript
import {decode ,encode} from '@elonehoo/point-line'

decode('...././.-../.-../---/--..--/.--/---/.-./.-../-../-.-.--')
```
