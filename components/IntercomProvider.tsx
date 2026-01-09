'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    Intercom: any;
  }
}

export function IntercomProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize Intercom
    (function() {
      var w: any = window;
      var ic = w.Intercom;
      if (typeof ic === "function") {
        ic('reattach_activator');
        ic('update', w.intercomSettings);
      } else {
        var d = document;
        var i: any = function() {
          (i as any).c(arguments);
        };
        (i as any).q = [];
        (i as any).c = function(args: any) {
          (i as any).q.push(args);
        };
        w.Intercom = i;
        var l = function() {
          var s = d.createElement('script');
          s.type = 'text/javascript';
          s.async = true;
          s.src = `https://widget.intercom.io/widget/${process.env.NEXT_PUBLIC_INTERCOM_APP_ID || 'YOUR_APP_ID'}`;
          var x = d.getElementsByTagName('script')[0];
          x.parentNode?.insertBefore(s, x);
        };
        if (document.readyState === 'complete') {
          l();
        } else if (w.attachEvent) {
          w.attachEvent('onload', l);
        } else {
          w.addEventListener('load', l, false);
        }
      }
    })();

    // Configure Intercom
    const appId = process.env.NEXT_PUBLIC_INTERCOM_APP_ID;
    if (appId) {
      window.Intercom('boot', {
        app_id: appId,
        hide_default_launcher: true, // We'll use custom launcher
      });
    }
  }, []);

  return <>{children}</>;
}
