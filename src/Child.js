import { useEffect, memo } from "react";

function Child({ log, value }) {
  useEffect(() => {
    console.log("Child got rendered");
  });

  return <div onClick={log}>Child</div>;
}

export default memo(Child);
