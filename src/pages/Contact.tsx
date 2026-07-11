import { Link } from 'react-router-dom'
import { Layout } from '../components/Layout'

const Contact = () => {
  return (
    <Layout title="Contact">
      <p>ここはダミーの Contact ページです。</p>
      <p>
        <Link to="/">← Home に戻る</Link>
      </p>
    </Layout>
  )
}

export default Contact
