import { useEffect, useState } from "react";

/**
 * Small, dependency‑free media‑query hook.
 * Returns `null` on the very first server render → avoids hydration mismatch.
 */
export function useMediaQuery(query: string): boolean | null {
  const [matches, setMatches] = useState<boolean | null>(null);

  useEffect(() => {
    const mql = window.matchMedia(query);
    const listener = (e: MediaQueryListEvent) => setMatches(e.matches);

    // set initial value & subscribe
    setMatches(mql.matches);
    mql.addEventListener("change", listener);
    return () => mql.removeEventListener("change", listener);
  }, [query]);

  return matches;
}