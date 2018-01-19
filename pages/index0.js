import { Button } from 'antd-mobile'

import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'
import initStore from 'store'
import { Component } from 'react'
import Layout from 'components/layout'

const App = ({ bgImage, isServer }) => {

  return (
    <Layout background={{ bgImage }} isServer={ isServer } >
      <div className='deep-mask'></div>
      <div className='content'>
        <Button type='primary'>创建清单</Button>
      </div>
      <style jsx>
      {`
        .content {
          padding: 0 2rem;
          text-align: center;
          position: absolute;
          width: 100%;
          bottom: 15%
        }
        .content img {
          width: 100%;
          vertical-align: top;
        }
        .deep-mask {
          background: linear-gradient(transparent 50%,#000);
          // -webkit-gradient(linear, 50%, 100%, from(#fff), to(rgba(0, 0, 0, 0.3)));
          opacity: .3;
          width: 100%;
          height: 100%;
        }
      `}
      </style>
    </Layout>
  )
}

App.getInitialProps = ({ store, isServer }) => {
  const { common } = store.getState()
  return {
    ...common,
    isServer
  }
}

export default withRedux(initStore)(App)
