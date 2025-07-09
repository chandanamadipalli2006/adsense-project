"use client";
import { useEffect } from "react";

export default function GoogleAd() {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("Adsense error:", e);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-7848126804697958"
      data-ad-slot="1458986472"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
}
