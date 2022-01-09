[![npm](https://img.shields.io/npm/v/get-package-manager.svg)](https://www.npmjs.com/package/get-package-manager) [![GitHub stars](https://img.shields.io/github/stars/julekgwa/get-package-manager.svg?style=social&label=Stars)](https://github.com/julekgwa/get-package-manager) [![gzip size](http://img.badgesize.io/https://unpkg.com/get-package-manager/dist/index.js?compression=gzip)](https://unpkg.com/get-package-manager/dist/index.js) ![npm](https://img.shields.io/npm/dm/get-package-manager) [![julekgwa](https://circleci.com/gh/julekgwa/get-package-manager.svg?style=shield)](https://github.com/julekgwa/get-package-manager) [![Coverage Status](https://coveralls.io/repos/github/julekgwa/get-package-manager/badge.svg?branch=main)](https://coveralls.io/github/julekgwa/get-package-manager?branch=main)

![toggle](images/pkg.png)

# Installation

```bash
npm i get-package-manager
```

or

```bash
yarn add get-package-manager
```

# Usage

To get installed package manager run:
```javascript
import { getPackageManager } from 'get-package-manager'

const pkg = getPackageManager()
console.log(pkg) // logs npm|yarn|pnpm
```

To get preferred package manager use:
```javascript
const pkg = getPackageManager({ prefer: 'npm'})
console.log(pkg) // logs npm
```

# License

MIT
