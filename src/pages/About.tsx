import { Link } from 'react-router-dom'

const About = () => {
    return (
    <>
    <section id='header'>
        <div className='header'>
            <h1>About</h1>
            <h3>このサイトについて</h3>
        </div>
    </section>

    <section id='center'>
        <div style={{ padding: 24 }}>
            <p>ここはダミーの About ページです。</p>
            <p>
            <Link to="/">← Home に戻る</Link>
            </p>
        </div>
    </section>
    </>
    );
}

export default About
