import style from './styles.module.css'
import qrImage from '/image-qr-code.png'

function App() {
  return (
    <div className={style.container}>
      <div className={style.card}>
        <img src={qrImage} alt="logo" />
        <h1> Improve your front-end skills by building projects</h1>
        <p> Scan the QR code to visti Frontend Mentor and take your coding skills to the next level</p>
      </div> 
    </div>
  )
}

export default App


