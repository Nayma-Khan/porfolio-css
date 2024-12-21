import Link from "next/link";
import logo from "/public/logo.avif";
import Image from "next/image";
import "@/styles/header.css";

const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <Image src={logo} alt="NK logo" width={50} height={30} />
        <h1 className="heading">NK</h1>
      </div>

      <nav>
        <ul className="links">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/Skill">Skills</Link>
          </li>
          <li>
            <Link href="/Projects">Projects</Link>
          </li>
          <li>
            <Link href="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
