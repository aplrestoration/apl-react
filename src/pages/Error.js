import Layout from "../components/Layout";
import { Link } from "react-router-dom";

const Error = () => (
    <Layout>
        <div style={{minHeight: '80%', display: 'flex', flexFlow: 'column', justifyContent:'center', alignItems: 'center'}}>
            <h2>Sorry! The page you are looking for does not exist.</h2>
            <Link to="/"><h5>Go to Homepage</h5></Link>
        </div>
    </Layout>
)

export default Error;