import { IconNavCalendar } from "@/components/navbar/icons/IconNavCalendar";
import { IconNavContact } from "@/components/navbar/icons/IconNavContact";
import { IconNavHome } from "@/components/navbar/icons/IconNavHome";
import { IconNavMy } from "@/components/navbar/icons/IconNavMy";
import { TNavbarMenu } from "@/components/navbar/types/TNavbarMenu";

export const NAVBAR_MENU_LIST: TNavbarMenu[] = [
  {
    path: "/",
    label: "홈",
    icon: IconNavHome,
  },
  {
    path: "/contacts",
    label: "연락책",
    icon: IconNavContact,
  },
  {
    path: "/calendar",
    label: "달력",
    icon: IconNavCalendar,
  },
  {
    path: "/my",
    label: "내소개",
    icon: IconNavMy,
  },
];
