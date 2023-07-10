export const getStaticPaths = async () => {
    const res  = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    
    const paths = data.map(yunus => {
        return{
            params: { id: yunus.id.toString()}
        }
    })

    return {
        paths,
        fallback: false 
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch ('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();

    return {
        props: {yunus:data}
    }
}

const Details  = ({yunus}) =>{
    return(
        <div>
            <h1>Detail Page tess</h1>
            <h3>{yunus.name}</h3>
            <h3>{yunus.email}</h3>
            <h3>{yunus.address.street}</h3>
        </div>
    )
}


export default Details;