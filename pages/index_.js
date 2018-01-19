import Router from 'next/router'
import { fetchImg } from 'lib'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'
import initStore from 'store'
import { changeBackground } from 'store/action/common'

import Layout from 'components/layout'
import GlobalLoading from 'components/global-loading'

const App = ({ changeBackground, bgImage, ts, isServer }) => (
  <Layout isServer={ isServer }>
    <GlobalLoading />
    <i ref={
         async () => {
           const img = new Image()
           img.src = bgImage
           img.onload = () => {
             Router.push('/new')
           }
         }
       }
    ></i>
  </Layout>
)


App.getInitialProps = async ({ store, isServer }) => {

  const { common } = store.getState()
  const { bgImage, ts } = common
  const { image, rts } = await fetchImg(bgImage, ts, isServer)

  store.dispatch(changeBackground(image, rts))

  return {
    ...(store.getState().common),
    isServer
  }
}

export default withRedux(initStore)(App)
