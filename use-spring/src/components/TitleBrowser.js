import React, { useState } from "react";
import H2 from "./AnimatedTitle";

const titles = ["Title one", "Title two", "Title three"];

const goNext = (currentKey, cb) => {
  if (currentKey === titles.length - 1) currentKey = 0;
  else currentKey += 1;

  cb(currentKey);
};

const TitleBrowser = () => {
  const [key, setKey] = useState(0);
  return (
    <div>
      <H2 key={titles[key]} title={titles[key]} />
      <button onClick={() => goNext(key, setKey)}>Next</button>
    </div>
  );
};

export default TitleBrowser;
