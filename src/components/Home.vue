<script lang="ts" setup>
import { WebView } from "@nativescript/core";
import { isAndroid } from "@nativescript/core";
function webViewLoaded(args: { object: WebView }) {
  var webview: WebView = <WebView>args.object;
  if (isAndroid) {
    webview.android.getSettings().setBuiltInZoomControls(true);
    webview.android.getSettings().setDisplayZoomControls(false);
  }
}
</script>

<template>
  <Page>
    <WebView @loaded="webViewLoaded" src="https://araripina.com.br/" />
  </Page>
</template>
