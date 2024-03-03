import { useState } from "react";
import { Background } from "../components/background";
import styles from "./styles.module.css";
import { request } from "../utils/axios";

export function Create() {
  const [redirectUrl, setRedirectUrl] = useState("");
  const [slug, setSlug] = useState("");
  const [password, setPassword] = useState("");

  const [response, setResponse] = useState("");

  return (
    <>
      <Background />
      <div className={styles.center}>
        <div className={styles.box}>
          <div>
            <p className={styles.head}>create new link</p>

            <p className={styles.label}>redirect url</p>
            <input
              className={styles.input}
              onChange={(e) => {
                setRedirectUrl(e.target.value);
              }}
            />

            <p className={styles.label}>slug</p>
            <input
              className={styles.input}
              onChange={(e) => {
                setSlug(e.target.value);
              }}
            />

            <p className={styles.label}>password</p>
            <input
              className={styles.input}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <button
            onClick={() => {
              request
                .post("/api/link/create", {
                  redirectUrl,
                  slug,
                  password,
                })
                .then((res) => {
                  setResponse(res.data.message);
                });
            }}
          >
            create
          </button>
          {response ? <p>{response}</p> : null}
        </div>
      </div>
    </>
  );
}
