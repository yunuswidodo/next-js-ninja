import Link from "next/link";
import Image from "next/image"

const navbar = () => {
  return ( 
    <nav>
      <div className="logo">
          <img src="/logo.png" width={128} height={77}/>
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/yunus">Yunus list</Link>
    </nav>
    );
}
 
export default navbar;