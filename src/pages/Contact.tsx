import { useState } from "react";
import { Mail, Send, User, MessageSquare } from "lucide-react";
import styles from "./Contact.module.css";

export default function Contact() {
    const [sent, setSent] = useState(false);

    const handleSubmit = (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();
        setSent(true);
    };

    return (
        <main className={`${styles.page} ${styles.container}`}>
            <section className={`${styles.glass} ${styles.content}`}>
                <div className={styles.title}>
                    <p>Contact</p>
                    <hr />
                    <h1>お問い合わせ</h1>
                </div>

                <p className={styles.centerCopy}>
                    ご質問やご依頼など、お気軽にお問い合わせください。
                </p>

                <img
                  src="/assets/404 copy.jpeg"
                  alt="プロフィール写真"
                  className={styles.contactImage}
                />

                <form
                    className={styles.form}
                    onSubmit={handleSubmit}
                >
                <div className={styles.formGroup}>
                    <label>
                        <User size={18} />
                            Name
                    </label>

                    <input
                        type="text"
                        placeholder="お名前"
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <label>
                        <Mail size={18} />
                            Email
                    </label>

                    <input
                        type="email"
                        placeholder="sample@example.com"
                        required
                    />
                </div>

          <div className={styles.formGroup}>
            <label>
              <MessageSquare size={18} />
              Subject
            </label>

            <input
              type="text"
              placeholder="件名"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label>Message</label>

            <textarea
              rows={6}
              placeholder="お問い合わせ内容を入力してください"
              required
            />
          </div>

          <button
            type="submit"
            className={styles.submitButton}
          >
            <Send size={18} />
            Send Message
          </button>

          {sent && (
            <div className={styles.success}>
              メッセージを送信しました。
            </div>
          )}
        </form>
      </section>
    </main>
  );
}