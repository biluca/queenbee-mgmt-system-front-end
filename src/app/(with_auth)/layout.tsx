import "./style.scss"
import SideNav from "@/components/SideNav/SideNav";


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="WithAuthLayout">
      <SideNav />
      <div className="MainContent">{children}</div>
    </div>
  );
}