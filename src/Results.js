import React from "react";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section className="Phonetics">
          <h2>{props.results.word}</h2>
          {props.results.phonetic && <p>{props.results.phonetic}</p>}
        </section>
        {props.results.meanings.map((meaning, index) => (
          <section key={index}>
            <Meaning meaning={meaning} />
          </section>
        ))}
      </div>
    );
  } else {
    return null;
  }
}
