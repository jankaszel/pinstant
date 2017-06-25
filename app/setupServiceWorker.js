/*eslint-disable no-console */
import * as OfflineRuntime from 'offline-plugin/runtime';

export default function setupServiceWorker() {
  if (process.env.NODE_ENV !== 'production') {
    OfflineRuntime.install({
      onUpdating: () => {
        console.log('SW Event:', 'onUpdating');
      },
      onUpdateReady: () => {
        console.log('SW Event:', 'onUpdateReady');
        OfflineRuntime.applyUpdate();
      },
      onUpdated: () => {
        console.log('SW Event:', 'onUpdated');
        window.location.reload();
      },

      onUpdateFailed: () => {
        console.log('SW Event:', 'onUpdateFailed');
      },
    });
  } else {
    OfflineRuntime.install();
  }
}
