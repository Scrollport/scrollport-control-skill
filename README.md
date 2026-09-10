# Scrollport control Skill

Give an AI agent access to Scrollport's live tool catalog through six control
tools: `list_apps`, `search_tools`, `inspect_tool`, `run_tool`, `get_run` and `get_wallet`.

## Install

Install the root [`SKILL.md`](SKILL.md) in an Agent Skills compatible host,
then follow [Scrollport setup](https://scrollport.com/start) to connect the agent.
A host may put the installed file in its own `skills/scrollport/` directory;
this single-Skill source repository does not need that nesting.

Outcome Skills are optional. The agent can compose tools directly for both
simple and multi-step tasks. Ready-made outcome Skills live in the public
[Search and SEO](https://github.com/Scrollport/search-seo-skills),
[Sales and prospecting](https://github.com/Scrollport/sales-prospecting-skills)
and [Media creation](https://github.com/Scrollport/media-creation-skills) packages.

## Source and publication

This repository is the editable authority. Update `SKILL.md`, bump its date-based
`version`, run `npm test` and merge the reviewed change to `main`.

The website's stable `/skill` route redirects to
[`SKILL.md` as raw Markdown](https://raw.githubusercontent.com/Scrollport/scrollport-control-skill/refs/heads/main/SKILL.md).
After the one-time website cutover, guidance changes need only a GitHub merge;
there is no website copy, synchronization job or deployment for each edit.

The product repository still owns `/start` and the API contract. Coordinate
changes to tool names, prices, authorization or spend controls with that contract.
The plugin uses this same core guidance with its additional transport restrictions.
