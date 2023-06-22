// import '@/styles/globals.css'
import Layout from "./comp/layout";

export default function App({ Component, pageProps }) {
  return (
  <Layout>
    <Component {...pageProps} />
  </Layout>
  )
}


// const App = ({ Component, pageProps }) => {
//   return (  
//    
//       <Component {...pageProps}/>
//    
    
//   );
// }
 
// export default App;