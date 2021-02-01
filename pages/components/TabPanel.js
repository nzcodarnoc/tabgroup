import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { Button, ButtonGroup, Paper } from "@material-ui/core";
import queryString from "query-string";

export default function Home() {
  const router = useRouter();

  const [state, setState] = useState({
    socrates: {
      selected: philosopher === "socrates",
    },
    aristotle: {
      selected: philosopher === "aristotle",
    },
    plato: {
      selected: philosopher === "plato",
    },
  });

  let { philosopher } = queryString.parse(location.search);
  if (!philosopher || !state[philosopher]) {
    philosopher = "socrates";
    router.push({
      query: { philosopher },
    });
  }

  useEffect(() => {
    const { philosopher } = router.query;
    if (philosopher && state[philosopher] && !state[philosopher].selected) {
      didSelectTab(philosopher);
    }
  }, [router.query]);

  const didSelectTab = (tab) => {
    if (state[tab].selected) return;
    router.push({
      query: { philosopher: tab },
    });
    setState({
      socrates: {
        selected: tab === "socrates",
      },
      aristotle: {
        selected: tab === "aristotle",
      },
      plato: {
        selected: tab === "plato",
      },
    });
  };

  return (
    <div className="tabs">
      <div role="tablist" aria-label="Entertainment" className="tab-list">
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
            aria-controls="content-socrates"
            id="tab-socrates"
            tabIndex="1"
            onClick={() => didSelectTab("socrates")}
            aria-labelledby="tab-socrates"
          >
            Socrates
          </Button>
          <Button
            role="tab"
            aria-selected={state.plato.selected}
            color={state.plato.selected ? "primary" : ""}
            variant="contained"
            aria-controls="content-plato"
            id="tab-plato"
            tabIndex="2"
            onClick={() => didSelectTab("plato")}
            aria-labelledby="tab-plato"
          >
            Plato
          </Button>
          <Button
            role="tab"
            aria-selected={state.aristotle.selected}
            color={state.aristotle.selected ? "primary" : ""}
            variant="contained"
            aria-controls="content-aristotle"
            id="tab-aristotle"
            tabIndex="3"
            onClick={() => didSelectTab("aristotle")}
            aria-labelledby="tab-aristotle"
          >
            Aristotle
          </Button>
        </ButtonGroup>
      </div>
      <Paper>
        <div
          role="tabpanel"
          id="content-socrates"
          className={state.socrates.selected ? "tab-content" : "tab-hidden"}
          aria-hidden={state.socrates.selected}
        >
          <p>
            Socrates was a Greek philosopher from Athens who is credited as one
            of the founders of Western philosophy, and as being the first moral
            philosopher of the Western ethical tradition of thought. An
            enigmatic figure, he authored no texts, and is known chiefly through
            the accounts of classical writers composing after his lifetime,
            particularly his students Plato and Xenophon.
          </p>
        </div>
        <div
          role="tabpanel"
          id="content-plato"
          aria-hidden={state.socrates.selected}
          className={state.plato.selected ? "tab-content" : "tab-hidden"}
        >
          <p>
            Plato was an Athenian philosopher during the Classical period in
            Ancient Greece, founder of the Platonist school of thought and the
            Academy, the first institution of higher learning in the Western
            world.
          </p>
        </div>
        <div
          role="tabpanel"
          id="content-aristotle"
          aria-hidden={state.socrates.selected}
          className={state.aristotle.selected ? "tab-content" : "tab-hidden"}
        >
          <p>
            Aristotle was a Greek philosopher and polymath during the Classical
            period in Ancient Greece. Taught by Plato, he was the founder of the
            Lyceum, the Peripatetic school of philosophy, and the Aristotelian
            tradition.
          </p>
        </div>
      </Paper>
    </div>
  );
}
