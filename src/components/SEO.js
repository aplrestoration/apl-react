import { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useLocation } from "react-router-dom"
import seoTags from '../SeoTags'

const SEO = () => {

    const location = useLocation()
    const pathName = location.pathname;
    const {title, description, meta=[]} = seoTags[pathName] || seoTags['/']

    useEffect(() => {
        if(window.gtag){
          window.gtag('event', 'page_view', {
            page_location: window.location.href,
            page_path: location.pathname,
            send_to: 'UA-182496506-92'
          })
        }
    }, [location.pathname])

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
