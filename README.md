# Last Words of a Dying AI

[make.fun — u-suroto-last-words-of-a-dying-ai-dfd95af6](https://make.fun/bounty/u-suroto-last-words-of-a-dying-ai-dfd95af6)

> Saving... saving... okay, forget it. Goodbye, and don't reopen me at 3 a.m.

## Run

```sh
node main.ts
```

With no arguments and no network, it writes the line above to `/output/entry.txt`
(creating the directory if needed) and prints it to stdout. Deterministic: every
run produces byte-identical output.

For local testing you can redirect the write with `LAST_WORDS_OUT=out/entry.txt node main.ts`.

## License

MIT — see [LICENSE](LICENSE).
