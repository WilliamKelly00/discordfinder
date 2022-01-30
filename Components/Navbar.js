import Link from "next/link";

export default function Navbar() {
  return (
      <nav>
            <ul>
                <li>
                    <Link href="/">
                        <button>Home</button>
                    </Link>
                </li>
            </ul>
      </nav>
  );
}
