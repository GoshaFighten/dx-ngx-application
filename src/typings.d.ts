/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

declare module 'devextreme/localization/messages/*' {
  const value: any;
  export = value;
}
