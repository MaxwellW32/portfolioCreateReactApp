import React from "react";
import resume from "../../raw/resumeUpdated.pdf";
import cert from "../../raw/meta.pdf";
function Resume() {
  return (
    <div>
      <embed src={resume} className="resumeStyle" type="application/pdf" />
      <embed src={cert} className="resumeStyle" type="application/pdf" />
    </div>
  );
}

export default Resume;
