import Head from "next/head";
import { Container } from "@material-ui/core";
import dynamic from "next/dynamic";
const TabPanel = dynamic(() => import("./components/TabPanel"), { ssr: false });

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Tab Panel</title>
      </Head>

      <main>
        <h1>Tab Panel ft. Accessibility</h1>
        <TabPanel />
      </main>
    </Container>
  );
}
