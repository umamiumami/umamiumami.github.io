import React from "react";

import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";
import p5 from "../assets/p5.jpg";
import p6 from "../assets/p6.jpg";
import p7 from "../assets/p7.jpg";
import p8 from "../assets/p8.jpg";
import p9 from "../assets/p9.jpg";
import p10 from "../assets/p10.jpg";
import p11 from "../assets/p11.jpg";
import p12 from "../assets/p12.jpg";
import p13 from "../assets/p13.jpg";
import p14 from "../assets/p14.jpg";

const PHOTOS = [
  {
    source: p1,
    caption: "fish",
  },
  {
    source: p2,
    caption: "fish 2",
  },
  {
    source: p3,
    caption: "fish 3",
  },
  {
    source: p4,
    caption: "fish 4",
  },
  {
    source: p5,
    caption: "fish 5",
  },
  {
    source: p6,
    caption: "fish 6",
  },
  {
    source: p7,
    caption: "fish 7",
  },
  {
    source: p8,
    caption: "fish 8",
  },
  {
    source: p9,
    caption: "fish 9",
  },
  {
    source: p10,
    caption: "fish 10",
  },
  {
    source: p11,
    caption: "fish 11",
  },
  {
    source: p12,
    caption: "fish 12",
  },
  {
    source: p13,
    caption: "fish 13",
  },
  {
    source: p14,
    caption: "fish 14",
  },
];

function Photos() {
  return (
    <article id="work">
      {PHOTOS.map((p) => {
        return (
          <img
            className="image fit"
            src={p.source}
            alt={p.caption}
            key={p.caption}
          />
        );
      })}
    </article>
  );
}

export default Photos;
