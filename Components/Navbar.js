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
                <li className="push-left">
                    <Link href="/addserver">
                        <button>Add Server</button>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <button className="btn-blue">Login</button>
                    </Link>
                </li>
            </ul>
      </nav>
  );
}
