import { useEffect } from 'react';

declare global {
  interface Window {
    ldfdr: any;
  }
}

export function LeadfeederScript() {
  useEffect(() => {
    const initializeLeadfeeder = () => {
      window.ldfdr = window.ldfdr || function() {
        (ldfdr._q = ldfdr._q || []).push([].slice.call(arguments));
      };

      const script = document.createElement('script');
      script.src = 'https://sc.lfeeder.com/lftracker_v1_ywVkO4XeGRwaZ6Bj.js';
      script.async = true;
      
      const firstScript = document.getElementsByTagName('script')[0];
      firstScript.parentNode?.insertBefore(script, firstScript);
    };

    initializeLeadfeeder();
  }, []);

  return null;
}