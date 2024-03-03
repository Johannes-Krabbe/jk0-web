import { useEffect, useState } from "react";
import { Background } from "../components/background";
import styles from "./styles.module.css";
import { request } from "../utils/axios";

export function All() {
  const [allLinks, setAllLinks] = useState<
    {
      id: string;
      slug: string;
      redirectUrl: string;
      clicks: number;
    }[]
  >();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    request.get("/api/link/all").then((res) => {
      if (res.status === 200 && res.data.success === true) {
        setAllLinks(res.data.links);
      } else {
        setError("Error fetching links");
      }
    });
  }, []);

  return (
    <>
      <Background />
      <div className={styles.horiCenter}>
        <div className={styles.box}>
          {allLinks
            ? allLinks.map((link) => (
                <div className={styles.listItem} key={link.id}>
                  <p>{link.slug}</p>
                  <p>{link.redirectUrl}</p>
                  <p>{link.clicks}</p>
                </div>
              ))
            : error ?? "loading"}
        </div>
      </div>
    </>
  );
}
