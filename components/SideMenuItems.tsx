type ListItem = string | JSX.Element;

export default function SideMenuItems({ children }: { children: ListItem }) {
  return <li>{children}</li>;
}
