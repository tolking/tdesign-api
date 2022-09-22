:: BASE_DOC ::

## API

### TooltipLite Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式，TS 类型：`React.CSSProperties` | N
children | TNode | - | 触发元素，同 triggerElement。TS 类型：`string | TNode`。[通用类型定义](https://github.com/Tencent/tdesign-react/blob/develop/src/common.ts) | N
color | String | - | 背景颜色，可传入 16 进制颜色码或 RGB 颜色值，优先级高于theme | N
content | TNode | - | 文字提示内容。TS 类型：`string | TNode`。[通用类型定义](https://github.com/Tencent/tdesign-react/blob/develop/src/common.ts) | N
delay | Number / Array | - | 延时显示或隐藏浮层，[延迟显示的时间，延迟隐藏的时间]，单位：毫秒。如果只有一个时间，则表示显示和隐藏的延迟时间相同。示例 `'300'` 或者 `[200, 200]`。默认为：[250, 150]。TS 类型：`number | Array<number>` | N
placement | String | top | 提示浮层出现的位置。可选项：top/bottom | N
showArrow | Boolean | true | 是否显示箭头 | N
theme | String | dark | 组件风格，有亮色模式和暗色模式两种。可选项：light/dark | N
trigger | String | hover | 出现提示浮层的触发方式。可选项：hover/click/focus | N
triggerElement | TNode | - | 触发元素。TS 类型：`string | TNode`。[通用类型定义](https://github.com/Tencent/tdesign-react/blob/develop/src/common.ts) | N
visibleChange | Boolean | - | 当浮层隐藏或显示时触发。[详细类型定义](https://github.com/Tencent/tdesign-react/blob/develop/src/tooltip-lite/type.ts)。<br/>`interface TooltipVisibleChangeContext { e?: TooltipTriggerEvent; trigger?: TooltipTriggerSource }`<br/><br/>`type TooltipTriggerEvent = MouseEvent | FocusEvent`<br/><br/>`type TooltipTriggerSource = 'document' | 'trigger-element-click' | 'trigger-element-hover' | 'trigger-element-blur' | 'trigger-element-focus'`<br/> | N