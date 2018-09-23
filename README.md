## capricious

狂魔乱舞

## install

```bash
npm i capricious
```

## configuration

```js
const options = {
  el: null, // 变化的节点
  frequency: 5, // 频率(每一次变动, 产生多少次变化)
  interval: 3000 // 多久变化一次
}

import capricious from 'capricious'

capricious(options)
```