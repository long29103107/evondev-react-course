import React from 'react'
import styled from 'styled-components'
import { Button } from '@/components/button'

const HomeBannerStyles = styled.div`
    padding: 40px 0;
    min-height: 520px;
    background-image: linear-gradient(to right bottom, ${props => props.theme.primary}, ${props => props.theme.secondary});

    .banner {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    
    .banner-content {
      max-width: 600px;
      color: white;
    }
    
    .banner-heading {
      font-size: 36px;
      font-weight: 700;
      margin-bottom: 20px;
    }

    .banner-desc {
      line-height: 1.75;
      margin-bottom: 40px;
    }
`

const HomeBanner = () => {
  return (
    <HomeBannerStyles>
      <div className="container">
        <div className="banner">
          <div className="banner-content">
            <h1 className="banner-heading">Monkey Blogging</h1>
            <p className="banner-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
            </p>
            <Button kind="secondary" to="/sign-in">Get started</Button>
          </div>
          <div className="banner-image">
            <img src="/img-banner.png" alt="banner" />
          </div>
        </div>
      </div>
    </HomeBannerStyles>
  )
}

export default HomeBanner