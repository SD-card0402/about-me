import {useState} from "react";
import type {FormEvent} from "react";
import {Send} from "lucide-react";
import styles from "./Contact.module.css";

export default function Contact(){
    const[sent,setSent]=useState(false);
    function submit(e:FormEvent){e.preventDefault();
        setSent(true)
    }
    return <main className={`${styles.page} ${styles.container}`}>
        <section className={`${styles.glass} ${styles.content} ${styles.contact}`}>
            <div className={styles.title}>
                <p>Contact</p>
                <hr/><h1>お問い合わせ</h1>
            </div>
            <p className={styles["center-copy"]}>
                ご質問やご相談などがありましたら、フォームからお気軽にご連絡ください。
            </p>
            <form onSubmit={submit}>
                <div className={styles["form-row"]}>
                    <label>
                        NAME
                        <input required placeholder="お名前"/>
                    </label>
                    <label>
                        EMAIL
                        <input required type="email" placeholder="hello@example.com"/>
                    </label>
                </div>
                <label>
                    SUBJECT
                    <input required placeholder="件名"/>
                </label>
                <label>
                    MESSAGE
                    <textarea required rows={5} placeholder="メッセージをご入力ください"/>
                </label>
                <button className={`${styles.button} ${styles.dark}`}><Send size={14}/> SEND MESSAGE</button>
                {sent && <p className={styles.success}>メッセージを受け付けました。ありがとうございます。</p>}
            </form>
        </section>
    </main>
}