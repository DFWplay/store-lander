"use client";

import React from "react";
import clsx from "clsx";

type SmartButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  /** show a spinner/disabled state */
  pending?: boolean;
};

export default function SmartButton(props: SmartButtonProps) {
  // DO NOT pass `pending` to the DOM
  const { pending = false, className, disabled, children, ...rest } = props;

  const classes = clsx(
    "inline-flex items-center justify-center rounded-2xl px-5 py-2.5 font-medium transition",
    pending || disabled
      ? "cursor-not-allowed opacity-60 bg-emerald-600 text-white"
      : "bg-emerald-600 text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400",
    className
  );

  return (
    <button
      {...rest}
      aria-busy={pending || undefined}
      disabled={disabled || pending}
      className={classes}
    >
      {pending ? "Sending…" : children}
    </button>
  );
}

