import { render, screen, waitFor } from "@testing-library/react";

import { setupServer } from "msw/node";
import { handlers } from "@/mocks/handlers";
import { ApiComponent } from "@/components/api_component";

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("ApiComponent", () => {
  it("title is rendered", async () => {
    render(<ApiComponent />);
    const out = await waitFor(() => screen.getByRole("book_title"));
    expect(out).toHaveTextContent("The Lord of the Rings");
  });
  it("desc is rendered", async () => {
    render(<ApiComponent />);
    const out = await waitFor(() => screen.getByRole("desc"));
    expect(out).toHaveTextContent(
      "The Lord of the Rings is an epic high-fantasy novel written by English author and scholar J. R. R. Tolkien."
    );
  });
});
