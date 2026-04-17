"use client";

import React, { useEffect } from "react";

export default function ZohoEmbed() {
  useEffect(() => {
    const containerId = "zf_div_5lXrF3naIqH5J_NNih7iPLLas8x8miLIRA1_xKOL8og";
    const container = document.getElementById(containerId);
    
    // Prevent multiple iframes from being injected during re-renders
    if (container && container.getElementsByTagName("iframe").length > 0) {
      return; 
    }

    try {
      const f = document.createElement("iframe");
      let ifrmSrc = 'https://forms.zohopublic.in/wolviosolutions/form/ContactUs/formperma/5lXrF3naIqH5J_NNih7iPLLas8x8miLIRA1_xKOL8og?zf_rszfm=1';

      try {
        // @ts-ignore
        if (typeof window.ZFAdvLead !== "undefined" && typeof window.zfutm_zfAdvLead !== "undefined") {
          // @ts-ignore
          for (let prmIdx = 0; prmIdx < window.ZFAdvLead.utmPNameArr.length; prmIdx++) {
            // @ts-ignore
            let utmPm = window.ZFAdvLead.utmPNameArr[prmIdx];
            // @ts-ignore
            utmPm = (window.ZFAdvLead.isSameDomian && (window.ZFAdvLead.utmcustPNameArr.indexOf(utmPm) == -1)) ? "zf_" + utmPm : utmPm;
            // @ts-ignore
            let utmVal = window.zfutm_zfAdvLead.zfautm_gC_enc(window.ZFAdvLead.utmPNameArr[prmIdx]);
            if (typeof utmVal !== "undefined") {
              if (utmVal != "") {
                if (ifrmSrc.indexOf('?') > 0) {
                  ifrmSrc = ifrmSrc + '&' + utmPm + '=' + utmVal;
                } else {
                  ifrmSrc = ifrmSrc + '?' + utmPm + '=' + utmVal;
                }
              }
            }
          }
        }
        // @ts-ignore
        if (typeof window.ZFLead !== "undefined" && typeof window.zfutm_zfLead !== "undefined") {
          // @ts-ignore
          for (let prmIdx = 0; prmIdx < window.ZFLead.utmPNameArr.length; prmIdx++) {
            // @ts-ignore
            let utmPm = window.ZFLead.utmPNameArr[prmIdx];
            // @ts-ignore
            let utmVal = window.zfutm_zfLead.zfutm_gC_enc(window.ZFLead.utmPNameArr[prmIdx]);
            if (typeof utmVal !== "undefined") {
              if (utmVal != "") {
                if (ifrmSrc.indexOf('?') > 0) {
                  ifrmSrc = ifrmSrc + '&' + utmPm + '=' + utmVal;
                } else {
                  ifrmSrc = ifrmSrc + '?' + utmPm + '=' + utmVal;
                }
              }
            }
          }
        }
      } catch (e) {}

      f.src = ifrmSrc;
      f.style.border = "none";
      f.style.height = "1278px"; // Preserved requested height
      f.style.width = "100%"; // Adjusted to 100% for responsive container layout
      f.style.transition = "all 0.5s ease";
      f.setAttribute("aria-label", 'Contact Us');

      if (container) {
          container.appendChild(f);
      }
      
      const messageHandler = function(event: MessageEvent) {
        const evntData = event.data;
        if (evntData && evntData.constructor === String) {
          const zf_ifrm_data = evntData.split("|");
          if (zf_ifrm_data.length == 2 || zf_ifrm_data.length == 3) {
            const zf_perma = zf_ifrm_data[0];
            const zf_ifrm_ht_nw = (parseInt(zf_ifrm_data[1], 10) + 15) + "px";
            const iframe = document.getElementById(containerId)?.getElementsByTagName("iframe")[0];
            if (iframe && (iframe.src).indexOf('formperma') > 0 && (iframe.src).indexOf(zf_perma) > 0) {
              const prevIframeHeight = iframe.style.height;
              let zf_tout = false;
              if (zf_ifrm_data.length == 3) {
                iframe.scrollIntoView();
                zf_tout = true;
              }

              if (prevIframeHeight != zf_ifrm_ht_nw) {
                if (zf_tout) {
                  setTimeout(function() {
                    iframe.style.height = zf_ifrm_ht_nw;
                  }, 500);
                } else {
                  iframe.style.height = zf_ifrm_ht_nw;
                }
              }
            }
          }
        }
      };

      window.addEventListener('message', messageHandler, false);

      return () => {
        window.removeEventListener('message', messageHandler, false);
      }
    } catch (e) {}
  }, []);

  return (
    <div id="zf_div_5lXrF3naIqH5J_NNih7iPLLas8x8miLIRA1_xKOL8og" className="w-full h-full bg-white"></div>
  );
}
