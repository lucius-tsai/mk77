import { render, screen } from "@testing-library/react";
import { Person } from "@/components/person";

describe("Person", () => {
  it("renders a person", () => {
    render(<Person name="Jack" />);
    const divElement = screen.getByRole("content_info");
    expect(divElement).toHaveTextContent("Name is Jack");
    expect(divElement).toHaveAttribute("role", "content_info");
  });
});
