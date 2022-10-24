import React, { useCallback, useState } from "react";

// component(s)
const useCounter = () => {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => setCount((x) => x + 1), []);
  return { count, increment };
};

// export
export default useCounter;

export { useCounter };
