import Head from "next/head";
import Image from "next/image";
import { Person } from "@/components/person";
import { ApiComponent } from "@/components/api_component";
import styles from "@/pages/index.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Person name="Jack" />
      <ApiComponent />
    </div>
  );
}

// export async function getServerSideProps() {
//   // Server-side requests are mocked by `mocks/server.ts`.
//   const res = await fetch("https://my.backend/books");
//   console.log(res);
//   const book = await res.json();

//   return {
//     props: {
//       book,
//     },
//   };
// }
