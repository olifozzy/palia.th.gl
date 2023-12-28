"use client";
import { getNitroAds } from "@/lib/nitro-pay";
import { useEffect } from "react";

export default function FloatingOutstreamVideoPlayer({ id }: { id: string }) {
  useEffect(() => {
    getNitroAds().createAd(id, {
      format: "floating",
      floating: {
        reduceMobileSize: true,
      },
      mediaQuery: "(min-width: 320px) and (max-width: 767px)",
      demo: process.env.VERCEL_ENV === "production" ? "false" : "true",
      debug: "silent",
    });
  }, []);

  return <></>;
}
