interface NavElement {
  label: string;
  link: {
    href: string;
    isAbsolute?: boolean;
  };
  icon?: JSX.Element | string; // path
}

interface NavOptions {
  align?: "left" | "center" | "right";
  navElements: NavElement[];
}
