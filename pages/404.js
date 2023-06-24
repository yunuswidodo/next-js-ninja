import Link from "next/link";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h1>Oooopss...</h1>
            <h2>That page cannot to found</h2>
            <p>Go back to the <Link href="/">Home Page</Link></p>
        </div>
     );
}
 
export default NotFound;