import fs from 'fs';
import { URL, fileURLToPath } from 'url';
const packagePath = fileURLToPath(new URL('../package.json', import.meta.url));
const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf-8'));
export const cliVersion = packageJson.version;
export const cliName = packageJson.name;
process.env.VSWIFT_CLI_VERSION = cliVersion;
