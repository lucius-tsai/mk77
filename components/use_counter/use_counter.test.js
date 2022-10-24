// foundations
import { renderHook, act } from "@testing-library/react";

// components
import { useCounter } from "./use_counter";

test("should increment", () => {
  const { result } = renderHook(() => useCounter());
  act(() => {
    result.current.increment();
  });
  expect(result.current.count).toBe(1);
});
