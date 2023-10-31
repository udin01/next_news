import Link from "next/link";
import NavLinks from "./NavLinks";

function Header() {
  return (
    <header>
      <div className="p-10 items-center">
        <Link href="/" prefetch={false}>
          <h1 className="font-serif text-4xl text-center">
            My{" "}
            <span className="underline decroation-4 decoration-blue-400"> News </span>{" "}
            App
          </h1>
        </Link>
      </div>
      <NavLinks />
    </header>
  );
}

export default Header;
