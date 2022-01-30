import Link from "next/link";

export default function Navbar() {
  return (
      <nav className="navbar">
            <ul>
                <li>
                    <Link href="/">
                        <button className="btn-blue">Home</button>
                    </Link>
                </li>
            </ul>
      </nav>
  );
}
