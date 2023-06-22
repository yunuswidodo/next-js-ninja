import Link from "next/link";

const navbar = () => {
  return ( 
    <nav>
      <div className="logo">
          <h1>Yunus List</h1>
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/yunus">Yunus list</Link>
    </nav>
    );
}
 
export default navbar;