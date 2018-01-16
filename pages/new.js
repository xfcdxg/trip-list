import Unsplash from 'unsplash-js'
import { Button } from 'antd-mobile'
import { getStore } from 'mulan-lib'
import Layout from '../components/layout'

const App = () => {
  const { image } = getStore('backgroundImage') || {}
  
  return (
    <Layout background={{ image, color: '#000' }} >
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

export default App
