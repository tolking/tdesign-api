/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdBackTopProps } from './type';
import { PropType } from 'vue';

export default {
  /** 监听滚动的容器。数据类型为 String 时，会被当作选择器处理，进行节点查询。示例：'body' 或 () => document.body */
  container: {
    type: [String, Function] as PropType<TdBackTopProps['container']>,
    default: 'body',
  },
  /** 回到顶部内容 */
  content: {
    type: [String, Function] as PropType<TdBackTopProps['content']>,
  },
  /** 回到顶部的耗时单位：毫秒 */
  duration: {
    type: Number,
    default: 200,
  },
  /** 回到顶部相对右下角的位置偏移，示例：[10, 20] 或 ['10em', '8rem'] */
  offset: {
    type: Array as PropType<TdBackTopProps['offset']>,
    default: (): TdBackTopProps['offset'] => ["24px", "80px"],
  },
  /** 回到顶部的形状 */
  shape: {
    type: String as PropType<TdBackTopProps['shape']>,
    default: 'square' as TdBackTopProps['shape'],
    validator(val: TdBackTopProps['shape']): boolean {
      if (!val) return true;
      return ['circle', 'square'].includes(val);
    },
  },
  /** 指定回到该对象。数据类型为 String 时，会被当作选择器处理，进行节点查询。示例：'body' 或 () => document.body */
  target: {
    type: [String, Function] as PropType<TdBackTopProps['target']>,
    default: 'body',
  },
  /** 滚动高度达到此参数值才出现 */
  visibleHeight: {
    type: [String, Number] as PropType<TdBackTopProps['visibleHeight']>,
    default: '200px',
  },
  /** 点击回到顶部时触发 */
  onClick: Function as PropType<TdBackTopProps['onClick']>,
};
