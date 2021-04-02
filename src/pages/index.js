import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
   <div className="overlay" /></div>
  <video playsinline=”playsinline” autoplay=”autoplay” muted=”muted” loop=”loop”>
<source src={bgVideo} type=”video/mp4" />
</video>

  <div className="masthead" />
    <div className="masthead-bg" /></div>
    <div className="container h-100" />
      <div className="row h-100" />
        <div className="col-12 my-auto" />
          <div className="masthead-content text-white py-5 py-md-0" />
            <h1 className="mb-3" />Coming Soon!</h1>
            <p className="mb-5" />We're working hard to finish the development of this site. Our target launch date is
              <strong />January 2022</strong>! Sign up for updates using the form below!</p>
            <div className="input-group input-group-newsletter" />
              <input type="email" class="form-control" placeholder="Enter email..." aria-label="Enter email..." aria-describedby="submit-button" />
              <div className="input-group-append" />
                <button className="btn btn-secondary" type="button" id="submit-button" />Notify Me!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="social-icons">
    <ul class="list-unstyled text-center mb-0">
      <li class="list-unstyled-item">
        <a href="#">
          <i class="fab fa-twitter"></i>
        </a>
      </li>
      <li class="list-unstyled-item">
        <a href="#">
          <i class="fab fa-facebook-f"></i>
        </a>
      </li>
      <li class="list-unstyled-item">
        <a href="#">
          <i class="fab fa-instagram"></i>
        </a>
      </li>
    </ul>
  </div>
  </Layout>
)

export default IndexPage
