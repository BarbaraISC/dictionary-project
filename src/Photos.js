import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="row">
          {props.photos.map((photo, index) => (
            <div className="col-4 mb-4" key={index}>
              <img src={photo.src.landscape} className="img-fluid" />
            </div>
          ))}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
