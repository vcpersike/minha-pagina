declare module 'tweakpane' {
  export class Pane {
    constructor(options?: PaneOptions);
    addFolder(params: { title: string }): Folder;
    addInput(target: object, key: string, options?: InputParams): Input;
    addMonitor(target: object, key: string, options?: MonitorParams): Monitor;
    dispose(): void;
  }

  export interface PaneOptions {
    container?: HTMLElement;
  }

  export interface InputParams {
    min?: number;
    max?: number;
    step?: number;
    options?: { [key: string]: any };
  }

  export interface MonitorParams {
    view?: string;
    interval?: number;
  }

  export class Folder {
    addInput(target: object, key: string, options?: InputParams): Input;
    addMonitor(target: object, key: string, options?: MonitorParams): Monitor;
  }

  export class Input {}
  export class Monitor {}
}

declare module '@tweakpane/core' {
  export interface Semver {
    major: number;
    minor: number;
    patch: number;
  }

  export interface TpPluginBundle {
    id: string;
    type: string;
    version: Semver;
  }

  declare module '@tweakpane/core' {
    export interface ApiChangeEvents {}
    export interface BladeApi {}
    export interface EventListenable {}
    export interface LabeledValueBladeController {}
    export interface ListController {}
    export interface ListItem {}
    export interface BaseBladeParams {}
    export interface BladePlugin {}
    export interface ListParamsOptions {}
    export interface FolderApi {}
    export interface PluginPool {}
    export interface Blade {}
    export interface FolderController {}
    export interface FolderProps {}
    export interface ViewProps {}
    export interface SeparatorApi {}
    export interface SliderTextController {}
    export interface TextController {}
    export interface BooleanInputParams {}
    export interface BooleanMonitorParams {}
    export interface ButtonApi {}
    export interface ButtonParams {}
    export interface ColorInputParams {}
    export interface InputBindingApi {}
    export interface MonitorBindingApi {}
    export interface NumberInputParams {}
    export interface NumberMonitorParams {}
    export interface ObjectStyleListOptions {}
    export interface TabApi {}
    export interface TabPageApi {}
    export interface TpChangeEvent {}
    export interface TpPlugin {}
  }

}

