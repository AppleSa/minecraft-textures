import { writeFileSync as write } from 'fs';
import fetch from 'node-fetch';

import type { TexturesType } from '../lib/types';
import { latestVersion } from '../index';

// latest list of items from the reports from Arcensoth
const VERSION_FILE =
  'https://github.com/misode/mcmeta/raw/registries/version.json';
const ITEMS_FILE =
  'https://github.com/misode/mcmeta/raw/registries/item/data.json'; // no minecraft: prefix

// lists all the missing items, probably from a new version
const main = async () => {
  const remoteLatestVersion = (await (await fetch(VERSION_FILE)).json()).id;
  console.log(
    `Comparing (local) items from ${latestVersion} to (remote) ${remoteLatestVersion}`
  );

  const allItems = (await (await fetch(ITEMS_FILE)).json()) as string[];

  const latest: TexturesType = (await import(`../textures/${latestVersion}.ts`))
    .default;
  const ids = latest.items.map((i) => i.id.replace('minecraft:', ''));

  // compare files and exclude air
  const diff = allItems.filter((v) => !ids.includes(v) && v !== 'air');

  console.log(`Found ${diff.length} missing items.`);

  write('./missing.json', JSON.stringify(diff, null, 2));
};

main();
