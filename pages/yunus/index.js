import Style from "../../styles/Yunus.module.css"
import Link from "next/link";

export const getStaticProps  = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: {yunus : data}
    }
}


const Yunus = ({yunus}) => {

    return ( 
        <div>
            <h1>Hallo Ini adalah List Yunsu</h1>
            {yunus.map(yunus => (
                
                    <Link href={'/yunus/' + yunus.id} key={yunus.id} className={Style.single}>
                        {/* <a className={Style.single}> */}
                        <h3>{yunus.name}</h3>
                        {/* </a> */}
                    </Link>
                ))
            }
        </div>
     );
}
 
export default Yunus;