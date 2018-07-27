import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'
import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'

class HomeIndex extends React.Component {
    render() {
        const siteTitle = this.props.data.site.siteMetadata.title
        const siteDescription = this.props.data.site.siteMetadata.description

        return (
            <div>
                <Helmet>
                    <title>{siteTitle}</title>
                    <meta name="description" content={siteDescription} />
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>Technology</h3>
                                <p>Weatherproof and Breathable</p>
                            </header>
                            <Link to="#technology" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>Design</h3>
                                <p>Built to be worn all day</p>
                            </header>
                            <Link to="#design" className="link primary"></Link>
                        </article>
                        {/* <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>Magna</h3>
                                <p>Lorem etiam nullam</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>Ipsum</h3>
                                <p>Nisl sed aliquam</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic05})`}}>
                            <header className="major">
                                <h3>Consequat</h3>
                                <p>Ipsum dolor sit amet</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic06})`}}>
                            <header className="major">
                                <h3>Etiam</h3>
                                <p>Feugiat amet tempus</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article> */}
                    </section>
                    <section id="two" className="spotlights">
                        <section id="technology">
                            <Link to="/generic" className="image">
                                <img src={pic08} alt="" />
                            </Link>
                            <div className="content">
                                <div className="inner">
                                    <header className="major">
                                        <h3>Technology</h3>
                                    </header>
                                    <p>Weatherproof materials keep air out but allow your feet to breathe.</p>
                                    <ul className="actions">
                                        {/* <li><Link to="/generic" className="button">Learn more</Link></li> */}
                                    </ul>
                                </div>
                            </div>
                        </section>
                        <section id="design">
                            <Link to="/generic" className="image">
                                <img src={pic09} alt="" />
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

export const pageQuery = graphql`
    query PageQuery {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`