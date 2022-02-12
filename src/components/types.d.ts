interface NavElement {
  label: string;
  link: {
    href?: string;
    path?: string;
  };
  icon?: JSX.Element | string; // path
}

interface NavOptions {
  align?: "left" | "center" | "right";
  navElements: NavElement[];
}
