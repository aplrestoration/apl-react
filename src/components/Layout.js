import Header from './Header'
import Footer from './Footer'
import SEO from './SEO'

const Layout = ({ children }) => (
    <div style={{height: '100%', overflowY: 'auto', overflowX: 'hidden'}}>
        <Header />
        <SEO />
        {children}
        <Footer/>
    </div>
)

export default Layout;