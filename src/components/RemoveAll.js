import React from "react";

const RemoveAll = ({ onRemove }) => {
  return (
    <div>
      <input
        type="button"
        value="Remove All"
        className="btn btn-block1"
        onClick={onRemove}
      />
    </div>
  );
};

export default RemoveAll;
