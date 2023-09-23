export type TNavbarMenu = {
  path: string;
  label: string;
  icon: ({ isActive }: { isActive: boolean }) => JSX.Element;
};
