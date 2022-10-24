// foundations
import { renderHook, act, waitFor } from "@testing-library/react";

import { setupServer } from "msw/node";
import { handlers } from "@/mocks/handlers";

import { useApi } from "./use_api";

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("should increment", async () => {
  const { result } = renderHook(() => useApi());
  const out = await waitFor(() => {
    if (result.current) {
      expect(result.current.title).toBe("The Lord of the Rings");
    }
  });
});
