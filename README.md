# Minecraft Textures

This is a library containing all the textures I use for my generators.

Textures from 1.12 to 1.21.4 currently available.

`npm install minecraft-textures`

## Example Usage:

```js
import hasVersion from 'minecraft-textures';
const version = '1.21';
if (hasVersion(version)) {
  const textures = await import(
    `minecraft-textures/dist/textures/json/${version}.json`
  );
}
```

## Update Notes

### 1.20

- The ordering of the JSON files have been updated to match the order of the items in the Search Items creative tab.

### 1.17

- The file names were updated to be the actual version (i.e. `1.17.ts` rather than `117.ts`)

### 1.16

- The versions are now dynamically imported. You will need to import the path provided by `byVersion`.
  - For anyone using the .json files, you can now use something like this:
    - https://unpkg.com/minecraft-textures/dist/textures/json/1.16.json

## License

Please credit `destruc7i0n (https://thedestruc7i0n.ca)` if you use this. Its not required, but is appreciated.

The Minecraft item icons are owned by Mojang Studios.

This project is not affiliated with Mojang Studios.
