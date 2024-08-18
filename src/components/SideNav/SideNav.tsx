import Navigation from "@/app/navigation";
import "./style.css"
import Link from 'next/link';
import BeeMLogo from "../BeeMLogo/BeeMLogo";


export default function SideNav() {

  return (
    <div className="SideNav">
      <Link href="/dashboard">
        <div className="NavBarHeader">
          <BeeMLogo />
        </div>
      </Link>
      <div className="NavBar">
        <Navigation />
        <div className="NavBarFooter"></div>
      </div>
    </div>
  );
}
