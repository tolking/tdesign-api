/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TNode, AttachNode } from '../common';
import { MouseEvent } from 'react';

export interface TdBackTopProps {
  /**
   * 回到顶部内容，同 content
   */
  children?: TNode;
  /**
   * 监听滚动的容器。数据类型为 String 时，会被当作选择器处理，进行节点查询。示例：'body' 或 () => document.body
   * @default 'body'
   */
  container?: AttachNode;
  /**
   * 回到顶部内容
   */
  content?: TNode;
  /**
   * 回到顶部的耗时单位：毫秒
   * @default 200
   */
  duration?: number;
  /**
   * 回到顶部相对右下角的位置偏移，示例：[10, 20] 或 ['10em', '8rem']
   * @default ["24px", "80px"]
   */
  offset?: Array<string | number>;
  /**
   * 回到顶部的形状
   * @default square
   */
  shape?: BackTopShapeEnum;
  /**
   * 指定回到该对象。数据类型为 String 时，会被当作选择器处理，进行节点查询。示例：'body' 或 () => document.body
   * @default 'body'
   */
  target?: AttachNode;
  /**
   * 滚动高度达到此参数值才出现
   * @default '200px'
   */
  visibleHeight?: string | number;
  /**
   * 点击回到顶部时触发
   */
  onClick?: (e: MouseEvent<HTMLElement>) => void;
}

export type BackTopShapeEnum = 'circle' | 'square';
