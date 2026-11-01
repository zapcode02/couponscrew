const fs = require('fs');
const path = require('path');

// Reusable script to update months in app/stores
// Usage: node scripts/update-stores-month.js [fromMonth] [toMonth] [year]
// Defaults: fromMonth = 'October', toMonth = 'November', year = '2026'

const monthMap = {
  january: { short: 'Jan', full: 'January', days: 31 },
  february: { short: 'Feb', full: 'February', days: 28 },
  march: { short: 'Mar', full: 'March', days: 31 },
  april: { short: 'Apr', full: 'April', days: 30 },
  may: { short: 'May', full: 'May', days: 31 },
  june: { short: 'Jun', full: 'June', days: 30 },
  july: { short: 'Jul', full: 'July', days: 31 },
  august: { short: 'Aug', full: 'August', days: 31 },
  september: { short: 'Sep', full: 'September', days: 30 },
  october: { short: 'Oct', full: 'October', days: 31 },
  november: { short: 'Nov', full: 'November', days: 30 },
  december: { short: 'Dec', full: 'December', days: 31 },
  jan: { short: 'Jan', full: 'January', days: 31 },
  feb: { short: 'Feb', full: 'February', days: 28 },
  mar: { short: 'Mar', full: 'March', days: 31 },
  apr: { short: 'Apr', full: 'April', days: 30 },
  jun: { short: 'Jun', full: 'June', days: 30 },
  jul: { short: 'Jul', full: 'July', days: 31 },
  aug: { short: 'Aug', full: 'August', days: 31 },
  sep: { short: 'Sep', full: 'September', days: 30 },
  sept: { short: 'Sep', full: 'September', days: 30 },
  oct: { short: 'Oct', full: 'October', days: 31 },
  octuber: { short: 'Oct', full: 'October', days: 31 },
  nov: { short: 'Nov', full: 'November', days: 30 },
  dec: { short: 'Dec', full: 'December', days: 31 }
};

const args = process.argv.slice(2);
const fromArg = (args[0] || 'October').toLowerCase();
const toArg = (args[1] || 'November').toLowerCase();
const yearArg = args[2] || '2026';

const fromInfo = monthMap[fromArg];
const toInfo = monthMap[toArg];

if (!fromInfo || !toInfo) {
  console.error(`Unknown month. Provided from: "${args[0]}", to: "${args[1]}"`);
  process.exit(1);
}

console.log(`Updating stores month from ${fromInfo.full}/${fromInfo.short} to ${toInfo.full}/${toInfo.short} for year ${yearArg}...`);

function walk(dir) {
  let res = [];
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) res = res.concat(walk(p));
    else res.push(p);
  }
  return res;
}

const storesDir = path.join(process.cwd(), 'app', 'stores');
const files = walk(storesDir);

let totalReplacements = 0;
let modifiedFilesCount = 0;

for (const filePath of files) {
  const content = fs.readFileSync(filePath, 'utf8');
  let newContent = content;

  // 1. validTill in coupon files:
  // e.g. validTill: '31 Oct 2026' -> validTill: '30 Nov 2026'
  // Also handle cases like '30 Oct 2026', '28 Oct 2026'
  // When changing to new month, end of month is toInfo.days (e.g. 30 for Nov)
  const validTillRegex = new RegExp(`(validTill:\\s*['"])(?:3[01]|2[89]|\\d{1,2})\\s+${fromInfo.short}\\s+${yearArg}(['"])`, 'g');
  newContent = newContent.replace(validTillRegex, `$1${toInfo.days} ${toInfo.short} ${yearArg}$2`);

  // Also in HTML tables like: <td className="p-4">31 Oct 2026</td>
  const tdRegex = new RegExp(`(<td[^>]*>)(?:3[01]|2[89]|\\d{1,2})\\s+${fromInfo.short}\\s+${yearArg}(</td>)`, 'gi');
  newContent = newContent.replace(tdRegex, `$1${toInfo.days} ${toInfo.short} ${yearArg}$2`);

  // 2. Titles and Names in metadata & JSON-LD:
  // e.g. "| Oct 2026" -> "| Nov 2026"
  // e.g. "| October 2026" -> "| November 2026"
  // e.g. "| Sept 2026"
  const pipeShortRegex = new RegExp(`(\\|\\s*)${fromInfo.short}(\\s+${yearArg})`, 'g');
  newContent = newContent.replace(pipeShortRegex, `$1${toInfo.short}$2`);

  const pipeFullRegex = new RegExp(`(\\|\\s*)${fromInfo.full}(\\s+${yearArg})`, 'gi');
  newContent = newContent.replace(pipeFullRegex, `$1${toInfo.full}$2`);

  // 3. Headings, sections, and verifications:
  // e.g. "Verified for October 2026" -> "Verified for November 2026"
  // e.g. "Verified for Oct 2026" -> "Verified for Nov 2026"
  const verifiedFullRegex = new RegExp(`(Verified for\\s+)${fromInfo.full}(\\s+${yearArg})`, 'gi');
  newContent = newContent.replace(verifiedFullRegex, `$1${toInfo.full}$2`);

  const verifiedShortRegex = new RegExp(`(Verified for\\s+)${fromInfo.short}(\\s+${yearArg})`, 'gi');
  newContent = newContent.replace(verifiedShortRegex, `$1${toInfo.short}$2`);

  // 4. "Today's Best ... Codes (October 2026)"
  const todaysBestFullRegex = new RegExp(`(Today's Best[^\\(]*\\()${fromInfo.full}(\\s+${yearArg}\\))`, 'gi');
  newContent = newContent.replace(todaysBestFullRegex, `$1${toInfo.full}$2`);

  // 5. "As of October 2026" -> "As of November 2026"
  const asOfRegex = new RegExp(`(As of\\s+)${fromInfo.full}(\\s+${yearArg})`, 'gi');
  newContent = newContent.replace(asOfRegex, `$1${toInfo.full}$2`);

  // 6. "Valid till the end of October 2026" -> "Valid till the end of November 2026"
  const validTillEndRegex = new RegExp(`(Valid till the end of\\s+)${fromInfo.full}(\\s+${yearArg})`, 'gi');
  newContent = newContent.replace(validTillEndRegex, `$1${toInfo.full}$2`);

  // 7. Descriptions with "discount code for October 2026" or "deals for Oct 2026"
  // e.g. "for October 2026" or "for Oct 2026" or "this October 2026"
  const forFullRegex = new RegExp(`(\\b(?:for|this|in)\\s+)${fromInfo.full}(\\s+${yearArg}\\b)`, 'gi');
  newContent = newContent.replace(forFullRegex, `$1${toInfo.full}$2`);

  const forShortRegex = new RegExp(`(\\b(?:for|this|in)\\s+)${fromInfo.short}(\\s+${yearArg}\\b)`, 'g');
  newContent = newContent.replace(forShortRegex, `$1${toInfo.short}$2`);

  // 8. Headers with "— October 2026" or "— Oct 2026"
  const dashFullRegex = new RegExp(`(—\\s*)${fromInfo.full}(\\s+${yearArg}\\b)`, 'gi');
  newContent = newContent.replace(dashFullRegex, `$1${toInfo.full}$2`);

  // 9. Bracketed month year in store headlines, e.g. "(October 2026)"
  const bracketFullRegex = new RegExp(`(\\()${fromInfo.full}(\\s+${yearArg}\\))`, 'gi');
  newContent = newContent.replace(bracketFullRegex, `$1${toInfo.full}$2`);

  const bracketShortRegex = new RegExp(`(\\()${fromInfo.short}(\\s+${yearArg}\\))`, 'g');
  newContent = newContent.replace(bracketShortRegex, `$1${toInfo.short}$2`);

  if (newContent !== content) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    modifiedFilesCount++;
    console.log(`Updated: ${path.relative(process.cwd(), filePath)}`);
  }
}

console.log(`\nComplete! Successfully modified ${modifiedFilesCount} files in app/stores.`);
