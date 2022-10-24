import { render, screen } from "@testing-library/react";
import { SideBar } from "@/components/side_bar";

describe("SideBar", () => {
  it("sidebar content is correct", () => {
    const items = [{ name: "test", href: "/test" }];
    render(<SideBar items={items} />);
    const anchorElements = screen.getAllByRole("navigation");
    expect(anchorElements[0]).toHaveTextContent("test");
    expect(anchorElements[0]).toHaveAttribute("href", "/test");
  });
});
