:: BASE_DOC ::

## API
### BackTop Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
container | String / Function | 'body' | 监听滚动的容器。数据类型为 String 时，会被当作选择器处理，进行节点查询。示例：'body' 或 () => document.body。TS 类型：`AttachNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N
content | String / Slot / Function | - | 回到顶部内容。TS 类型：`string \| TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N
duration | Number | 200 | 回到顶部的耗时单位：毫秒 | N
offset | Array | ["24px", "80px"] | 回到顶部相对右下角的位置偏移，示例：[10, 20] 或 ['10em', '8rem']。TS 类型：`Array<string \| number>` | N
shape | String | square | 回到顶部的形状。可选项：circle/square。TS 类型：`BackTopShapeEnum ` `type BackTopShapeEnum = 'circle' \| 'square'`。[详细类型定义](https://github.com/Tencent/tdesign-vue/tree/develop/src/back-top/type.ts) | N
target | String / Function | 'body' | 指定回到该对象。数据类型为 String 时，会被当作选择器处理，进行节点查询。示例：'body' 或 () => document.body。TS 类型：`AttachNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N
visibleHeight | String / Number | '200px' | 滚动高度达到此参数值才出现 | N
onClick | Function |  | TS 类型：`(e: MouseEvent) => void`<br/>点击回到顶部时触发 | N

### BackTop Events

名称 | 参数 | 描述
-- | -- | --
click | `(e: MouseEvent)` | 点击回到顶部时触发
