import { Component } from 'react'
import { fetchImg } from 'lib'
import GlobalLoading from './global-loading'

class Layout extends Component {
  constructor(props) {
    super(props)
    const { background = {} } = this.props
    const { color, bgImage } = background
    this.state = {
      color,
      bgImage
    }
  }

  async componentDidMount() {
    const { background = {} } = this.props
    const { bgImage } = background
    const backgroundEl = this.refs.background
    const fadeIn = () => {
      backgroundEl.className += ' fadeIn'
    }
    if (!bgImage && backgroundEl) {
      const { image, rts } = await fetchImg()
      const img = new Image()

      img.src = image
      img.onload = () => {
        this.setState({
          bgImage: image
        })
        fadeIn()
      }
    } else {
      fadeIn()
    }
  }

  render() {
    const { children, isServer } = this.props
    const { color, bgImage } = this.state

    return (
      <div style={{ backgroundColor: color || '#000' }} >
        <div style={{
               backgroundImage: bgImage ? `url(${ bgImage })` : 'none',
             }} ref='background' className='background'
        >
        </div>
        <div className='container'>
          { bgImage ? children : <GlobalLoading /> }
        </div>
        <style jsx>
          {`
            .background {
              background-size: auto 100%;
              background-repeat: no-repeat;
              background-position: center center;
              height: 100%;
              width: 100%;
              position: absolute;
              top: 0;
              z-index: 1;
              opacity: 0;

            }
            .background.fadeIn {
              transition: all .3s ease-in .5s;
              opacity: 1;
            }
            .container {
              height: 100%;
              width: 100%;
              position: absolute;
              top: 0;
              z-index: 9;
            }
          `}
        </style>
      </div>
    )
  }

}


export default Layout
