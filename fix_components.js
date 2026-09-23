const fs = require('fs');
const files = [
  'app/festival-offers/black-friday-offers/_components/BlackFridayOffers.tsx',
  'app/festival-offers/christmas-offers/_components/ChristmasOffers.tsx',
  'app/festival-offers/cyber-monday-offers/_components/CyberMondayOffers.tsx',
  'app/festival-offers/dusshera-offers/_components/DushsheraOffers.tsx',
  'app/festival-offers/new-year-offers/_components/NewYearOffers.tsx'
];
for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/<BrandLogo name=\{brand\.logo\} \/>/g, '<span className=\"text-sm font-bold text-center\">{brand.name}</span>');
  content = content.replace(/openIndex === index/g, 'openFaqIndex === index');
  content = content.replace(/toggleAccordion\(index\)/g, 'toggleFaq(index)');
  fs.writeFileSync(file, content, 'utf8');
  console.log('Fixed ' + file);
}
