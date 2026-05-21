# Kaizrug Cast / Work-Study OS

This repository is a static landing page for Work-Study OS. It has no build step,
no package manager, and no backend runtime in the production path.

## Production Entry Point

- `index.html` - public landing page
- `styles.css` - active production styling
- `script.js` - active production behavior for reveal animations, marquee,
  sticky topbar, and the waitlist form state

Deploy the repository root as a static site.

## Archive

Non-production files are grouped under `archive/` so the root stays focused:

- `archive/workshop/` - older workshop and studio reference pages plus their CSS
- `archive/legacy/` - placeholder assets, older CSS/JS, and the old
  `README.md.txt`

These files are preserved for history, but they are not part of the primary
public landing page.

## Waitlist

The early-access form posts through FormSubmit using `kaizrug.writer@gmail.com`.
FormSubmit may require first-submission email confirmation before messages are
forwarded.

## Local Preview

Open `index.html` directly in a browser, or serve the folder with any static
server.
