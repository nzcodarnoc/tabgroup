import Head from "next/head";
import { Container, Box } from "@material-ui/core";
import dynamic from "next/dynamic";
const TabPanel = dynamic(() => import("../components/TabPanel"), {
  ssr: false,
});

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Tab Panel</title>
      </Head>

      <main>
        <h1>Tab Panel ft. Accessibility</h1>
        <Box mb={3}>
          <TabPanel
            id="SPA"
            label="Philosophers"
            tabs={[
              {
                id: "socrates",
                title: "Socrates",
                content: (
                  <p>
                    Socrates was a Greek philosopher from Athens who is credited
                    as one of the founders of Western philosophy, and as being
                    the first moral philosopher of the Western ethical tradition
                    of thought. An enigmatic figure, he authored no texts, and
                    is known chiefly through the accounts of classical writers
                    composing after his lifetime, particularly his students
                    Plato and Xenophon.
                  </p>
                ),
              },
              {
                id: "plato",
                title: "Plato",
                content: (
                  <p>
                    Plato was an Athenian philosopher during the Classical
                    period in Ancient Greece, founder of the Platonist school of
                    thought and the Academy, the first institution of higher
                    learning in the Western world.
                  </p>
                ),
              },
              {
                id: "aristotle",
                title: "Aristotle",
                content: (
                  <p>
                    Aristotle was a Greek philosopher and polymath during the
                    Classical period in Ancient Greece. Taught by Plato, he was
                    the founder of the Lyceum, the Peripatetic school of
                    philosophy, and the Aristotelian tradition.
                  </p>
                ),
              },
            ]}
          />
        </Box>
        <Box mb={3}>
          <TabPanel
            id="cats"
            label="Cats"
            tabs={[
              {
                id: "tabby",
                title: "Tabby Cat",
                content: (
                  <p>
                    A tabby is any domestic cat with a distinctive 'M' shaped
                    marking on its forehead, stripes by its eyes and across its
                    cheeks, along its back, and around its legs and tail, and,
                    characteristic striped, dotted, lined, flecked, banded or
                    swirled patterns on the body—neck, shoulders, sides, flanks,
                    chest and abdomen.
                  </p>
                ),
              },
              {
                id: "tortie",
                title: "Tortoiseshell Cat",
                content: (
                  <p>
                    Tortoiseshell is a cat coat coloring named for its
                    similarity to tortoiseshell material. Like calicos,
                    tortoiseshell cats are almost exclusively female. Male
                    tortoiseshells are rare and are usually sterile.
                  </p>
                ),
              },
              {
                id: "calico",
                title: "Calico Cat",
                content: (
                  <p>
                    A calico cat is a domestic cat of any breed with a tri-color
                    coat. The calico cat is most commonly thought of as being
                    typically 25% to 75% white with large orange and black
                    patches; however, the calico cat can have any three colors
                    in its pattern.
                  </p>
                ),
              },
            ]}
          />
        </Box>
      </main>
    </Container>
  );
}
