// import './viewport'

export default (
  ({ children, background }) => (
    <div style={{
           backgroundColor: background.color || '#000',
           backgroundSize: 'auto 100%',
           backgroundImage: background.image ? `url(${ background.image })` : 'none',
           backgroundPosition: 'center center',
           backgroundRepeat: 'no-repeat'
         }}
    >
      { children }
      <style jsx global>
        {`
          body, html {
            height: 100%;
          }
          body {
            padding: 16px;
            margin: 0;
            padding: 0;
          }
          body>div, #__next, #__next>div, #__next>div>div {
            height: 100%;
          }
          * {
            box-sizing: border-box;
          }
        `}
      </style>
    </div>
  )
)
