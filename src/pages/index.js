import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Banner from '../components/Banner'
import Img from "gatsby-image";


class HomeIndex extends React.Component {
    render() {
        const siteTitle = this.props.data.site.siteMetadata.title
        const siteDescription = this.props.data.site.siteMetadata.description
        const tools = this.props.data.tools.sizes.src
        const draw = this.props.data.draw.sizes.src

        return (
            <div>
                <Helmet>
                    <title>{siteTitle}</title>
                    <meta name="description" content={siteDescription} />
                </Helmet>

                <Banner/>

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${tools})`}}>
                            <header className="major">
                                <h3>Technology</h3>
                                <p>Weatherproof and Breathable</p>
                            </header>
                            <Link to="#technology" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${draw})`}}>
                            <header className="major">
                                <h3>Design</h3>
                                <p>Built to be worn all day</p>
                            </header>
                            <Link to="#design" className="link primary"></Link>
                        </article>
                    </section>
                    <section id="two" className="spotlights">
                        <section id="technology">
                            <Link to="#technology" className="image">
                                <Img sizes={this.props.data.workshop.sizes} />
                            </Link>
                            <div className="content">
                                <div className="inner">
                                    <header className="major">
                                        <h3>Technology</h3>
                                    </header>
                                    <p>Weatherproof materials keep water out but allow your feet to breathe.</p>
                                    <ul className="actions">
                                        {/* <li><Link to="/generic" className="button">Learn more</Link></li> */}
                                    </ul>
                                </div>
                            </div>
                        </section>
                        <section id="design">
                            <Link to="#design" className="image">
                                <Img sizes={this.props.data.rainy.sizes} />
                            </Link>
                            <div className="content">
                                <div className="inner">
                                    <header className="major">
                                        <h3>Design</h3>
                                    </header>
                                    <p>Fashionable design meets superior comfort.</p>
                                    <ul className="actions">
                                        {/* <li><Link to="/generic" className="button">Learn more</Link></li> */}
                                    </ul>
                                </div>
                            </div>
                        </section>
                      </section>
                    <section id="three">
                        <div className="inner">
                            <header className="major">
                                <h2>Join the waiting list</h2>
                            </header>
                            <p>Be the first to find out about our product launches.</p>
                            <ul className="actions">
                                <li><Link to="#contact" className="button next">Sign Up</Link></li>
                            </ul>
                        </div>
                    </section>
                </div>

            </div>
        )
    }
}

export default HomeIndex

export const query = graphql`
    query PageQuery {
        site {
            siteMetadata {
                title
                description
            }
        }
        rainy: imageSharp(id: { regex: "/rainy.jpg/" }) {
          sizes(maxWidth: 800 ) {
            ...GatsbyImageSharpSizes
          }
        }
        workshop: imageSharp(id: { regex: "/workshop.jpg/" }) {
          sizes(maxWidth: 800 ) {
            ...GatsbyImageSharpSizes
          }
        }
        tools: imageSharp(id: { regex: "/tools.jpg/" }) {
          sizes(maxWidth: 800 ) {
            ...GatsbyImageSharpSizes
          }
        }
        draw: imageSharp(id: { regex: "/draw.jpg/" }) {
          sizes(maxWidth: 800 ) {
            ...GatsbyImageSharpSizes
          }
        }
        logo: imageSharp(id: { regex: "/s3.png/" }) {
          sizes(maxWidth: 300 ) {
            ...GatsbyImageSharpSizes
          }
        }
    }
`
