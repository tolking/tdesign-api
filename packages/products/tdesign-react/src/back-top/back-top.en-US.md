:: BASE_DOC ::

## API
### BackTop Props

name | type | default | description | required
-- | -- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式，Typescript：`React.CSSProperties` | N
children | TNode | - | Backtop's children elements。Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/src/common.ts) | N
container | String / Function | 'body' | Typescript：`AttachNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/src/common.ts) | N
content | TNode | - | Backtop's children elements。Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/src/common.ts) | N
duration | Number | 200 | \- | N
offset | Array | ["24px", "80px"] | Typescript：`Array<string \| number>` | N
shape | String | square | shape of BackTop element。options：circle/square。Typescript：`BackTopShapeEnum ` `type BackTopShapeEnum = 'circle' \| 'square'`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/src/back-top/type.ts) | N
target | String / Function | 'body' | Typescript：`AttachNode`。[see more ts definition](https://github.com/Tencent/tdesign-react/blob/develop/src/common.ts) | N
visibleHeight | String / Number | '200px' | \- | N
onClick | Function |  | Typescript：`(e: MouseEvent) => void`<br/> | N
