import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning({ meaning }) {
  const { partOfSpeech, definition, example, synonyms } = meaning;
  return (
    <div className="Meaning">
      <h3>{partOfSpeech}</h3>
      <p>
        <strong>Definition:</strong> {definition}
        <br />
        {example && (
          <>
            <strong>Example:</strong> <em>{example}</em>
            <br />
          </>
        )}
        <Synonyms synonyms={synonyms} />
      </p>
    </div>
  );
}
