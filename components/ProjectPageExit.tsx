"use client";

export function ProjectPageExit({ onClick, ariaLabel = "Back to homepage" }: { onClick: () => void; ariaLabel?: string }) {
  return (
    <button
      type="button"
      className="ganson-page__exit"
      onClick={onClick}
      aria-label={ariaLabel}
    >
      <svg
        className="ganson-page__exit-icon"
        viewBox="0 0 20 20"
        stroke="currentColor"
        fill="none"
        strokeWidth={2}
        strokeLinecap="round"
        aria-hidden
      >
        <path d="M4 4l12 12M16 4L4 16" />
      </svg>
    </button>
  );
}
