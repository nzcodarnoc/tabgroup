import { useState } from "react";
import Head from "next/head";
import { Button, ButtonGroup, Paper, Container } from "@material-ui/core";

export default function Home() {
  const [state, setState] = useState({
    socrates: {
      selected: true,
    },
    aristotle: {
      selected: false,
    },
    plato: {
      selected: false,
    },
  });

  const didSelectTab = (tab) => {
    if (state[tab].selected) return;
    setState({
      socrates: {
        selected: tab === 'socrates',
      },
      aristotle: {
        selected: tab === 'aristotle',
      },
      plato: {
        selected: tab === 'plato',
      }});
  };

  return (
    <Container>
      <Head>
        <title>Tab Panel</title>
      </Head>

      <main>
        <h1>Tab Panel ft. Accessibility</h1>
        <div class="tabs">
          <div role="tablist" aria-label="Entertainment" class="tab-list">
            <ButtonGroup
              variant="text"
              disableElevation
              aria-label="outlined primary button group"
            >
              <Button
                role="tab"
                aria-selected={state.socrates.selected}
                color={state.socrates.selected ? "primary" : ""}
                variant="contained"
                aria-controls="tab-socrates"
                id="tab-socrates"
                data-deletable=""
                onClick={() => didSelectTab("socrates")}
              >
                Socrates
              </Button>
              <Button
                role="tab"
                aria-selected={state.plato.selected}
                color={state.plato.selected ? "primary" :""}
                variant="contained"
                aria-controls="tab-plato"
                id="tab-plato"
                data-deletable=""
                onClick={() => didSelectTab("plato")}
              >
                Plato
              </Button>
              <Button
                role="tab"
                aria-selected={state.aristotle.selected}
                color={state.aristotle.selected ? "primary" : ""}
                variant="contained"
                aria-controls="tab-aristotle"
                id="tab-aristotle"
                tabindex="-1"
                data-deletable=""
                onClick={() => didSelectTab("aristotle")}
              >
                Aristotle
              </Button>
            </ButtonGroup>
          </div>
          <Paper>
            <div
              tabindex="0"
              role="tabpanel"
              id="tab-socrates"
              aria-labelledby="nils"
              class={state.socrates.selected ? "tab-content" : "tab-hidden" }
            >
              <p>
                Socrates was a Greek philosopher from Athens who is credited as
                one of the founders of Western philosophy, and as being the
                first moral philosopher of the Western ethical tradition of
                thought. An enigmatic figure, he authored no texts, and is known
                chiefly through the accounts of classical writers composing
                after his lifetime, particularly his students Plato and
                Xenophon.
              </p>
            </div>
            <div
              tabindex="0"
              role="tabpanel"
              id="tab-plato"
              aria-labelledby="agnes"
              hidden=""
              class={state.plato.selected ? "tab-content" : "tab-hidden" }
            >
              <p>
                Plato was an Athenian philosopher during the Classical period in
                Ancient Greece, founder of the Platonist school of thought and
                the Academy, the first institution of higher learning in the
                Western world.
              </p>
            </div>
            <div
              tabindex="0"
              role="tabpanel"
              id="tab-aristotle"
              aria-labelledby="complex"
              hidden=""
              class={state.aristotle.selected ? "tab-content" : "tab-hidden" }
            >
              <p>
                Aristotle was a Greek philosopher and polymath during the
                Classical period in Ancient Greece. Taught by Plato, he was the
                founder of the Lyceum, the Peripatetic school of philosophy, and
                the Aristotelian tradition.
              </p>
            </div>
          </Paper>
        </div>
      </main>
    </Container>
  );
}
