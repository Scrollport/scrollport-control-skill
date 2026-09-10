import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const root = resolve(fileURLToPath(new URL("..", import.meta.url)));
const instruction = readFileSync(resolve(root, "SKILL.md"), "utf8");

test("publishes one current six-tool control Skill", () => {
  assert.match(instruction, /^---\nname: scrollport\nversion: 2026-09-10\n/);
  for (const tool of ["search_tools", "inspect_tool", "run_tool", "get_run", "list_apps", "get_wallet"]) {
    assert.match(instruction, new RegExp(`\\*\\*${tool}\\*\\*`));
  }
  assert.match(instruction, /native Skill discovery/);
  assert.match(instruction, /installing an outcome Skill is never a prerequisite/);
  assert.match(instruction, /If installation is declined or no suitable/);
  assert.match(instruction, /https:\/\/scrollport\.com\/skill/);
  assert.match(instruction, /Both routes retain the user's scope, spend controls, required approvals/);
  assert.match(instruction, /compare its `version`/);
  assert.match(instruction, /first time you use scrollport in a session/);
  assert.match(instruction, /https:\/\/scrollport\.com\/start/);
  assert.doesNotMatch(instruction, /\/v1\/auth\//);
  assert.match(instruction, /per_call/);
  assert.match(instruction, /flat per.call/);
  assert.match(instruction, /\$1\.00/);
  assert.match(instruction, /account-level default/);
  assert.match(instruction, /exact `daily_resets_at` time/);
  assert.doesNotMatch(instruction, /wait until midnight UTC/);
  assert.match(instruction, /`GET \/tools\/search`/);
  assert.match(instruction, /`GET \/tools\/:id`/);
  assert.match(instruction, /Use `tool_id` for new work/);
  assert.match(instruction, /Remote MCP deliberately does/);
  assert.match(instruction, /Never approve\n   your own run/);
  assert.match(instruction, /same UUID/);
});
