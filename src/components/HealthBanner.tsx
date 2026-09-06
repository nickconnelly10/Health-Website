import BrandMenu from "./BrandMenu";
import NavLinks from "./NavLinks";

export default function HealthBanner() {
  return (
    <nav aria-label="Primary" className="fixed top-0 left-0 w-full z-50 p-4 bg-white shadow-sm">
      <div className="w-full flex justify-between items-center max-w-6xl mx-auto gap-4">
        <BrandMenu />
        <NavLinks variant="desktop" />
        <NavLinks variant="mobile" />
      </div>
    </nav>
  );
}
