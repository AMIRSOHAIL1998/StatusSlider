import { ReactNode } from "react";

export interface statusInterface {
  statusArray: React.ReactNode[];
  count?: any;
  progressColor?: string;
  progressContainerColor?: string;
  progressContainerStyles?: string;
  footer?: ReactNode;
}

export interface ProgressWrapperInterface {
  children: ReactNode;
  index?: number;
  progressContainerColor?: string;
  progressContainerStyles?: string;
}

export interface ProgressInterface {
  index: number;
  activeSlide: number;
  count: number;
  isScrollPaused: boolean;
  active: number;
  setLastTime: any;
  lastTime: any;
  slideChange: boolean;
  progressColor?: string;
  progressContainerColor?: string;
  progressContainerStyles?: string;
}
