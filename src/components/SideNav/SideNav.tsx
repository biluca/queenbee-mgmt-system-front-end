import "./style.scss"
import Link from 'next/link';
import BeeMLogo from "../BeeMLogo/BeeMLogo";

import { navigationGroupList } from '@/app/navigation'
import SideNavGroup from "./SideNavGroup/SideNavGroup";
import SideNavItem from "./SideNavItem/SideNavItem";


export default function SideNav() {

  return (
    <div className="SideNavContainer">
      <Link href="/dashboard">
        <div className="NavBarHeader">
          <BeeMLogo />
        </div>
      </Link>
      <div className="NavBar">
        {navigationGroupList.map((navigationGroup) => {
          const LinkIcon = navigationGroup.icon;
          const navigationItems = navigationGroup.nav_items || [];
          return (
            <>
              <SideNavGroup
                key={navigationGroup.name}
                name={navigationGroup.name}
                href={navigationGroup.href}
                icon={navigationGroup.icon}
                active={navigationGroup.active}
              />
              {navigationItems.map((navigationItem) => {
                return (
                  <SideNavItem
                    key={navigationItem.name}
                    name={navigationItem.name}
                    href={navigationItem.href}
                    icon={navigationItem.icon}
                    active={navigationItem.active}
                  />
                );
              })}

            </>
          );
        })}
      </div>
      <div className="NavBarFooter"></div>
    </div>
  );
}
