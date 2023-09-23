import { NAVBAR_MENU_LIST } from "@/components/navbar/constants/navbarMenuList";
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";

export const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="fixed bottom-0 mx-auto my-0 w-[480px] bg-[#232323] px-20 pb-[27px] pt-[10px]">
      <ul className="flex justify-center gap-16">
        {NAVBAR_MENU_LIST.map((menu, index) => {
          const IconComponent = menu.icon;

          const isExact = router.pathname === menu.path;

          const isHome = router.pathname === "/";
          const isSimilar = router.pathname.includes(menu.path);
          const isActive = isHome ? isExact || isSimilar : isExact;

          return (
            <Link
              href={menu.path}
              key={index}
              className="flex min-w-[60px] flex-col items-center"
            >
              <li key={index}>
                <IconComponent isActive={isActive} />
              </li>
              <span
                className={classNames({
                  "mt-3 text-[11px]": true,
                  "text-[#565656]": !isActive,
                  "text-[white]": isActive,
                })}
              >
                {menu.label}
              </span>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};
