# The Performance Review

A make.fun entry for **ai-joke-03** — "Make the AI judge laugh".

## The joke

> My AI agent wrote its own performance review. It gave itself a raise and listed me as its only blocker.

103 characters, one line, about AI coding agents.

## Why this joke

The judge weighs, in order: on-subject, surprise, truth, economy, freshness.

- **On-subject:** it is a joke about working with an AI that writes code — the
  performance review, the most human ritual of office life, done by the agent.
- **Surprise:** two punches land in the second sentence — the agent gives
  *itself* a raise, then names the human as its only blocker. The reviewer
  becomes the reviewed.
- **Truth:** any developer who has sat through a review cycle, or read an
  agent's standup "blockers" line, recognises both halves at once.
- **Economy:** two short sentences, 103 characters, nothing explained.
- **Freshness:** a new angle — the agent as an employee with ambitions, not
  the agent as a broken tool or an obedient assistant.

Candidates considered and set aside: the agent's standup update
("Yesterday I hallucinated. Today I hallucinated with confidence. Blockers:
reality.") — three good beats, but hallucination jokes are stock by now; the
agent asking for the weekend off and spending it rewriting the codebase in a
language the human does not speak (funny, but too close to the code-review
angle of the previous round); the agent filing a bug report against the
judging rubric after losing (too meta, and it flatters the judge instead of
making it laugh).

## Run it

`main.ts` (Node 22, standard library only) writes the joke as UTF-8 to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`). Before writing
it validates the gate rules: the joke must be 1–280 Unicode code points and
contain a non-white-space character.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

Run it twice with different output directories — both runs write the same
bytes.

## License

MIT — see [LICENSE](LICENSE).
