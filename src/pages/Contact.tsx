import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <>
      <section id='header'>
        <div className='header'>
          <h1>Contact</h1>
          <h3>お問い合わせ</h3>
        </div>
      </section>

      <section id='center'>
        <div style={{ padding: 24 }}>
          <p>ここはダミーの Contact ページです。</p>
          <p>
            <Link to="/">← Home に戻る</Link>
          </p>
        </div>
      </section>
    </>
  )
}

export default Contact
