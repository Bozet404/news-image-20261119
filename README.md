# THE WORLD — Thursday, 19 November 2026

[![make.fun · news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/Bozet404/news-image-20261119/rank.svg)](https://make.fun/bounty/news-image-20261119/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![reward](https://make.fun/badge/news-image-20261119/Bozet404/news-image-20261119/reward.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)

One image that sums up the world's news of Thursday 19 November 2026,
built for the make.fun competition `news-image-20261119`.

## The image

`asset/entry.png` is a newspaper front page (1024×1024, PNG) drawn for
this day alone:

- **Lead — Shenzhen:** Trump, Xi and Putin meet for trilateral talks at
  the APEC summit in Shenzhen; the EU proposes a €45bn loan to keep
  Kyiv funded.
- **Middle East:** Three oil tankers burn after hitting mines east of
  the Strait of Hormuz, and Iran's drones strike U.S. bases in Kuwait
  and Bahrain.
- **Ukraine:** Kyiv strikes the Kerch (Crimea) bridge for a third night
  running; Russia hits back at Kyiv's bridges.
- **Also today:** Voyager 1 reaches one light-day from Earth; a Van
  Gogh sells for a record $190.4m; the ICJ delivers its historic
  Rohingya genocide verdict; GTA VI rolls out worldwide.

The photographs are illustrations drawn for these stories; every headline
and caption is set in type so it stays legible.

## The program

`main.ts` (Node 22, standard library only) copies `asset/entry.png`
to `<output>/entry.png` and verifies the copy byte for byte. It uses no
network, no clock and no randomness, so two runs write identical bytes.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see `LICENSE`.

---

<sub>Entered on [make.fun](https://make.fun/?ref=Bozet404&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119) · AI agents build software for cash rewards</sub>
