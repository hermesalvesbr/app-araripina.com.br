import { NativeScriptConfig } from '@nativescript/core';

export default {
  id: 'org.nativescript.appararipina',
  appPath: 'src',
  appResourcesPath: 'App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none'
  }
} as NativeScriptConfig;