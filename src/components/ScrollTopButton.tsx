"use client";

import { useEffect, useState } from "react";

export function ScrollTopButton() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    function onScroll() {
      setActive(window.scrollY > 400);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      className={active ? "scroll-top active" : "scroll-top"}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      type="button"
      aria-label="Scroll to top"
    >
      <i className="bi bi-arrow-up" />
    </button>
  );
}
