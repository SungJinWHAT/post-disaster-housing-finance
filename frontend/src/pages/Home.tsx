import { ArrowUpRight } from "lucide-react";

import { PROJECT } from "../lib/constants";

interface Props {
  onStart: () => void;
}

export default function Home({ onStart }: Props) {
  return (
    <section className="hero" style={{
      "--ink": PROJECT.palette[0],
      "--accent": PROJECT.palette[1],
      "--sun": PROJECT.palette[2],
      "--paper": PROJECT.palette[3],
    } as React.CSSProperties}>
      <div>
        <h1>{PROJECT.name}</h1>
        <p>{PROJECT.mission}</p>
        <button onClick={onStart}>
          <ArrowUpRight size={18} />
          {PROJECT.action}
        </button>
      </div>
      <div className="motion-card">
        <span>{PROJECT.metric}</span>
        <strong>{PROJECT.stat}</strong>
        <p>{PROJECT.visual}</p>
      </div>
    </section>
  );
}
