import { fireEvent, render, screen } from "@testing-library/react";
import { Counter } from "@/components/counter";

describe("Counter", () => {
  it("renders a person", () => {
    render(<Counter />);
    const divElement = screen.getByRole("contentinfo");
    const counterElement = screen.getByText("Add One");
    fireEvent.click(counterElement);
    expect(divElement).toHaveTextContent("Count is 1");
  });
});
