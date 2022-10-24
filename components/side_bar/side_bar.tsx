import React from "react";
interface SideBarProps {
  items: {
    name: string;
    href: string;
  }[];
}

export const SideBar = ({ items }: SideBarProps) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item.name}>
          <a href={item.href} role="navigation">
            {item.name}
          </a>
        </div>
      ))}
    </div>
  );
};
