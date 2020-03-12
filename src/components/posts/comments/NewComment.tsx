import React, { useState } from "react";
import "./NewComment.scoped.css";

const requiredErrorMessage = "You can't post if you've got nothing to say!";

const NewComment: React.FC = () => {
  const [entry, setEntry] = useState("");
  const [error, setError] = useState("");

  return <>
    <h3>Share your opinion</h3>
    <div>
      <label>
        personUsingTheSiteRightNow says...
      </label>
      <textarea
        value={entry}
        onChange={(e) => { setEntry(e.target.value); setError(''); }}
        onBlur={(e) => e.target.value.trim() ? null : setError(requiredErrorMessage) }
        className={error ? "input-validation-error" : ""}
      />
      {!!error &&
        <span className="form-validation-error">{error}</span>
      }
      <button onClick={() => entry.trim() ? alert("Not yet implemented") : setError(requiredErrorMessage)}>
        Post Comment
      </button>
    </div>
  </>;
}

export default NewComment;