"use client";

import { useState } from "react";
import { PressableButton } from "@/components/pressable-button";

export default function Home() {
  const [presses, setPresses] = useState(0);

  return (
    <main className="relative grid min-h-screen place-items-center overflow-hidden bg-black px-5 py-10 text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle at 50% 48%, rgba(185, 28, 28, 0.22), rgba(0, 0, 0, 0) 34%)",
        }}
      />

      <section className="relative z-10 flex w-full max-w-xl flex-col items-center text-center">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.28em] text-red-200/70">
          PromptParty
        </p>
        <h1 className="text-4xl font-semibold tracking-normal text-white sm:text-5xl">
          Press the Button
        </h1>
        <p className="mt-3 max-w-sm text-base leading-7 text-zinc-400 sm:text-lg">
          A tiny 2.5D interaction template.
        </p>

        <div className="mt-14 sm:mt-16">
          <PressableButton
            ariaLabel="Press the red button"
            pressCount={presses}
            onPress={() => setPresses((count) => count + 1)}
          />
        </div>

        <p className="mt-16 text-lg font-medium text-zinc-200" aria-live="polite">
          Pressed {presses} {presses === 1 ? "time" : "times"}
        </p>

        <button
          type="button"
          onClick={() => setPresses(0)}
          className="mt-5 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-sm font-medium text-zinc-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition hover:border-red-400/40 hover:bg-red-500/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-300 disabled:pointer-events-none disabled:opacity-35"
          disabled={presses === 0}
        >
          Reset
        </button>
      </section>
    </main>
  );
}
