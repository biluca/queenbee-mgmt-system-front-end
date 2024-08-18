import "./style.css"
import SideNav from "@/components/SideNav/SideNav";

 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="WithAuthLayout">
      <div className="SideNavContainer">
        <SideNav />
      </div>
      <div className="MainContent">{children}</div>
    </div>
  );
}