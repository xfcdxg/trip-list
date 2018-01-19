import { Icon } from 'antd-mobile'

export default (
  () => (
    <div className='content' >
      <Icon type='loading' style={{ width: '40px', height: '40px' }} />
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
    </div>
  )
)
