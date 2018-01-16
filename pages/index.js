import Router from 'next/router'
import { Icon } from 'antd-mobile'
import { moment, getStore, setStore } from 'mulan-lib'
import { randomPhoto } from '../lib/unsplash'
import Layout from '../components/layout'

const fetchImg = async (now = moment('x')()) => {
  let { image, ts = 0 } = getStore('backgroundImage') || {}

  if (typeof image === 'undefined' || now - ts > 0) {
    const { regular } = await randomPhoto()
    image = regular
    ts = now
    setStore('backgroundImage', { image, ts })
  }
  console.log(image)
  return image
}


const App = () => (
  <Layout background={{ color: '#000' }} >
    <div className='content' ref={
      async () => {
        const img = new Image()

        img.src = await fetchImg()
        img.onload = () => {
          // Router.push('/new')
        }
      }
    }>
      <Icon type='loading' style={{ width: '40px', height: '40px' }} />
    </div>
    <style jsx>
    {`
      .content {
        text-align: center;
        position: absolute;
        width: 100%;
        top: 50%;
        margin-top: -20px;
      }
      .content img {
        width: 100%;
        vertical-align: top;
      }
    `}
    </style>
  </Layout>
)


App.getInitialProps = (props) => {
  console.log(props)
  return {}
}

export default App
