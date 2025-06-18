import React from "react";
import Synonyms from "./Synonyms";
import "./Meanings.css";

export default function Meaning({ meaning }) {
  const { partOfSpeech, definition, example, synonyms } = meaning;
  return (
    <div className="Meaning">
      <h3>{partOfSpeech}</h3>
      <div className="definition">{definition}</div>
      <div className="example">
        {example && (
          <>
            {example}
            <br />
          </>
        )}
      </div>
      <Synonyms synonyms={synonyms} />
    </div>
  );
}
