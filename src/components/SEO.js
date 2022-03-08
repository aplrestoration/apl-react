import { Helmet } from 'react-helmet'
import { useLocation } from "react-router-dom"
import seoTags from '../SeoTags'

const SEO = () => {

    const location = useLocation()
    const pathName = location.pathname;
    const {title, description, meta=[]} = seoTags[pathName] || seoTags['/']

    return(
        <Helmet
            title={title}
            meta={[
                {
                    name: `description`,
                    content: description,
                },
                ...meta
            ]}
            link={[
                {
                    rel: 'canonical',
                    href: window.location.href
                }
            ]}
        />
    )
}

export default SEO;
