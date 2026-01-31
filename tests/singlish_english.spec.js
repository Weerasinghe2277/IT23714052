const { test, expect } = require('@playwright/test');

const testCases = [
  { id: 'Pos_Fun_0001', name: 'Convert simple daily sentence', length: 'S',
  input: 'mama kaeema kanavaa.',
  expected: 'මම කෑම කනවා.' },

  { id: 'Pos_Fun_0002', name: 'Convert simple request sentence', length: 'S',
  input: 'oyaa potha ganna.',
  expected: 'ඔයා පොත ගන්න.' },

  { id: 'Pos_Fun_0003', name: 'Convert simple present tense sentence', length: 'S',
    input: 'minissu paaree yanavaa.',
    expected: 'මිනිස්සු පාරේ යනවා.' },

  { id: 'Pos_Fun_0004', name: 'Convert compound sentence with reason (News Reporter context)', length: 'M', input: 'maargaya vasaa thiyennee, naethnam thavath anathuru venavaa.',expected: 'මාර්ගය වසා තියෙන්නේ, නැත්නම් තවත් අනතුරු වෙනවා.' },

  { id: 'Pos_Fun_0005', name: 'Convert compound sentence with sequence', length: 'M',
    input: 'minissu aahaara gannavaa saha passee nidhaaganna yanavaa.',
    expected: 'මිනිස්සු ආහාර ගන්නවා සහ පස්සේ නිදාගන්න යනවා.' },

  { id: 'Pos_Fun_0006', name: 'Convert complex conditional sentence', length: 'M',
    input: 'vaessa vaedi vennee nam mahaamaargaya vasaa thabanavaa.',
    expected: 'වැස්ස වැඩි වෙන්නේ නම් මහාමාර්ගය වසා තබනවා.' },

  { id: 'Pos_Fun_0007', name: 'Convert complex cause effect sentence', length: 'M',
    input: 'api pramaadha vuNee vaahanaya naethi nisaa.',
    expected: 'අපි ප්‍රමාද වුණේ වාහනය නැති නිසා.' },

  { id: 'Pos_Fun_0008', name: 'Convert interrogative daily question', length: 'S',
    input: 'oyaa adha badu gannavadha?',
    expected: 'ඔයා අද බඩු ගන්නවද?' },

  { id: 'Pos_Fun_0009', name: 'Convert interrogative assignment question', length: 'M',
    input: 'oyaa kavadhaadha potha baara dhenne?',
    expected: 'ඔයා කවදාද පොත බාර දෙන්නෙ?' },

  { id: 'Pos_Fun_0010', name: 'Convert imperative instruction', length: 'S',
    input: 'vahaama beheth bonna.',
    expected: 'වහාම බෙහෙත් බොන්න.' },

  { id: 'Pos_Fun_0011', name: 'Convert imperative polite command', length: 'S',
    input: 'methanin vaahanaya nathara karanna.',
    expected: 'මෙතනින් වාහනය නතර කරන්න.' },

  { id: 'Pos_Fun_0012', name: 'Convert positive completion sentence', length: 'M',
    input: 'mama assignment eka complete karanavaa.',
    expected: 'මම assignment එක complete කරනවා.' },

  { id: 'Pos_Fun_0013', name: 'Convert future tense sentence', length: 'S',
    input: 'mama heta gedhara enavaa.',
    expected: 'මම හෙට ගෙදර එනවා.' },

  { id: 'Pos_Fun_0014', name: 'Convert negative form sentence', length: 'S',
    input: 'mama eeka dhannee nae.',
    expected: 'මම ඒක දන්නේ නැ.' },

  { id: 'Pos_Fun_0015', name: 'Convert polite request', length: 'M',
    input: 'karuNaakaralaa mata visthara poddak kiyanna.',
    expected: 'කරුණාකරලා මට විස්තර පොඩ්ඩක් කියන්න.' },

  { id: 'Pos_Fun_0016', name: 'Convert greeting sentence', length: 'S',
    input: 'suba udhaeesanak veevaa!',
    expected: 'සුබ උදෑසනක් වේවා!' },

  { id: 'Pos_Fun_0017', name: 'Convert common response sentence', length: 'S',
    input: 'hari, mama balannam.',
    expected: 'හරි, මම බලන්නම්.' },

  { id: 'Pos_Fun_0018', name: 'Convert informal daily sentence', length: 'S',
    input: 'api passee vathura eka dhaamu.',
    expected: 'අපි පස්සේ වතුර එක දාමු.' },

  { id: 'Pos_Fun_0019', name: 'Convert multi-word expression', length: 'S',
    input: 'poddak kathaa karanna.',
    expected: 'පොඩ්ඩක් කතා කරන්න.' },

  { id: 'Pos_Fun_0020', name: 'Convert joined verb phrase', length: 'S',
    input: 'velaavata gihin enna.',
    expected: 'වෙලාවට ගිහින් එන්න.' },

  { id: 'Pos_Fun_0021', name: 'Convert mixed English technical term', length: 'M',
    input: 'Zoom lecture ekak thiyenavaa.',
    expected: 'Zoom lecture එකක් තියෙනවා.' },

  { id: 'Pos_Fun_0022', name: 'Convert sentence with place name', length: 'M',
    input: 'api trip eka Kandy valata yamudha?',
    expected: 'අපි trip එක Kandy වලට යමුද?' },

  { id: 'Pos_Fun_0023', name: 'Convert sentence with abbreviation', length: 'S',
    input: 'PIN eka dhenna.',
    expected: 'PIN එක දෙන්න.' },

{ id: 'Pos_Fun_0024', name: 'Convert slang greeting', length: 'S',
  input: 'sthuuthiyi! aayith enna!',
  expected: 'ස්තූතියි! ආයිත් එන්න!' },

  { id: 'Pos_Fun_0025', name: 'Convert currency format', length: 'S',
    input: 'mila Rs. 5343',
    expected: 'මිල Rs. 5343' },

  { id: 'Pos_Fun_0026', name: 'Convert sentence with time reference', length: 'S',
  input: 'aeya 7.30 AM ta dhaekkaa.',
  expected: 'ඇය 7.30 AM ට දැක්කා.' }
,

  { id: 'Pos_Fun_0028', name: 'Convert sentence with multiple spaces', length: 'M',
  input: 'mee aya   ekama dhavasata paadam karanne.',
  expected: 'මේ අය   එකම දවසට පාඩම් කරන්නේ.' }
,

  { id: 'Pos_Fun_0029', name: 'Convert kade closure notice with line break', length: 'M',
  input: 'heta kadee vahalaa.\ndhina dhekakata passee aayith enna.',
  expected: 'හෙට කඩේ වහලා.\nදින දෙකකට පස්සේ ආයිත් එන්න.' }
,

  { id: 'Pos_Fun_0030', name: 'Convert long paragraph accident news report', length: 'L',
  input: 'raathrii kaalayee mahaamaargayaka sidhu vuu vaahana anathurak heethuven vaahana dhekak ekin eka gaetii thibuna athara, ehi ek vaahanayak maargayen eLiyata paena giyaa. anathurata lak vuu ek pudhgalayeku maraNayata path va aethi athara, thavath dhedheneku thuvaala labaa roohal gatha kara aethi bava vaarthaa vee.',
  expected: 'රාත්‍රී කාලයේ මහාමාර්ගයක සිදු වූ වාහන අනතුරක් හේතුවෙන් වාහන දෙකක් එකින් එක ගැටී තිබුන අතර, එහි එක් වාහනයක් මාර්ගයෙන් එළියට පැන ගියා. අනතුරට ලක් වූ එක් පුද්ගලයෙකු මරණයට පත් ව ඇති අතර, තවත් දෙදෙනෙකු තුවාල ලබා රෝහල් ගත කර ඇති බව වාර්තා වේ.' },

  { id: 'Neg_Fun_0001', name: 'Fail on joined food request sentence', length: 'S',
  input: 'matafriedriceonee',
  expected: 'මට ෆ්‍රයිඩ් රයිස් ඕනේ',
  isNegative: true },

{ id: 'Neg_Fun_0002', name: 'Fail on mixed symbols and words', length: 'm',
  input: 'class@campus#today',
  expected: 'අද කැම්පස් එකේ ක්ලාස් තියෙනවා',
  isNegative: true },

{ id: 'Neg_Fun_0003', name: 'Fail on informal slang command', length: 'S',
  input: 'adooo hariyata karapan',
  expected: 'අඩෝ හරියට කරපන්',
  isNegative: true },

{ id: 'Neg_Fun_0004', name: 'Fail on mixed English and slang phrasing', length: 'M',
  input: 'machan meeting eka cancel da kiyala sirta msg ekak dhaapan',
  expected: 'මචන් මීටින් එක කැන්සල් ද කියලා සර්ට මැසේජ් එකක් දාපන්',
  isNegative: true },

{ id: 'Neg_Fun_0005', name: 'Fail on repeated emphasis words', length: 'S',
  input: 'lassanayi lassanayi',
  expected: 'ලස්සනයි ලස්සනයි ලස්සනයි',
  isNegative: true },

{ id: 'Neg_Fun_0006', name: 'Fail on slang sentence with missing grammar', length: 'M',
  input: 'appatasiri mata beheth bonna amathaka vunaa kiyahankoo',
  expected: 'අප්පටසිරි, මට බෙහෙත් බොන්න අමතක වුණා කියහන්කෝ.',
  isNegative: true },

{ id: 'Neg_Fun_0007', name: 'Fail on incorrect negation structure', length: 'S',
  input: 'mata eeka karanna be',
  expected: 'මට ඒක කරන්න බැහැ',
  isNegative: true },

{ id: 'Neg_Fun_0008', name: 'Fail on incomplete transport notice', length: 'S',
  input: 'bus eka heta',
  expected: 'බස් එක හෙට එනවා',
  isNegative: true },

{ id: 'Neg_Fun_0009', name: 'Fail on multiple exclamation points with Singlish', length: 'M',
  input: 'ayiyo!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! mokaද meeeee????',
  expected: 'අයියෝ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! මොකද මේ????',
  isNegative: true },

{ id: 'Neg_Fun_0010', name: 'Fail on excessive punctuation and slang', length: 'S',
  input: 'hariiii!!! okkoma hariii??',
  expected: 'හරි! ඔක්කොම හරිද?',
  isNegative: true } ,
  
  { id: 'Pos_UI_0007', name: 'Scrolling behavior for long text output', length: 'L', 
    input: 'mama '.repeat(100), 
    expected: 'මම '.repeat(100), 
    isUI: true },

{ id: 'Neg_UI_0001', name: 'UI freezes or fails on multiline input', length: 'M',
  input: 'mama gedhara yanavaa.\noyaa enne?',
  expected: 'මම ගෙදර යනවා.\nඔයා එන්නේ?',
  isUI: true }

];


const testResults = [];

test.describe('Singlish to Sinhala Translation Tests', () => {
  
  test.beforeAll(() => {
    console.log('\n========================================');
    console.log('🚀 Starting Singlish to Sinhala Translation Tests');
    console.log('📅 Test Date: ' + new Date().toLocaleString());
    console.log('🌐 Website: https://www.swifttranslator.com/');
    console.log('========================================\n');
  });

  for (const tc of testCases) {
    test(`${tc.id}: ${tc.name}`, async ({ page }) => {
      await page.goto('https://www.swifttranslator.com/');
      
      await page.waitForLoadState('networkidle');
      
      const inputArea = page.locator('textarea').first();
      
      const outputArea = page.locator('div.whitespace-pre-wrap.overflow-y-auto.bg-slate-50');
      
      await inputArea.clear();
      await inputArea.fill(tc.input);
      
      const waitTime = tc.length === 'L' ? 5000 : 3000;
      await page.waitForTimeout(waitTime);
      
      let outputValue = await outputArea.innerText();
      
      if (outputValue === '' && !tc.isNegative) {
        await page.waitForTimeout(2000);
        outputValue = await outputArea.innerText();
      }
      
      console.log(`\n${tc.id}: ${tc.name}`);
      console.log(`   Type:     ${tc.isNegative ? '❌ Negative' : tc.isUI ? '🖥️ UI' : '✅ Positive'}`);
      console.log(`   Length:   ${tc.length}`);
      console.log(`   Input:    "${tc.input}"`);
      console.log(`   Expected: "${tc.expected}"`);
      console.log(`   Actual:   "${outputValue}"`);
      
      const passed = outputValue.includes(tc.expected) || tc.expected.includes(outputValue) || outputValue === tc.expected;
      console.log(`   Status:   ${passed ? '✅ PASSED' : '❌ FAILED'}`);
      
      testResults.push({
        id: tc.id,
        name: tc.name,
        length: tc.length,
        input: tc.input,
        expected: tc.expected,
        actual: outputValue,
        passed: passed,
        isNegative: tc.isNegative || false,
        isUI: tc.isUI || false
      });
      
      if (tc.isNegative) {
        expect(outputValue).toBe(tc.expected);
      } else {
        expect(outputValue).toBe(tc.expected);
      }
    });
  }

  test.afterAll(() => {
    console.log('\n========================================');
    console.log('📊 TEST SUMMARY REPORT');
    console.log('========================================');
    const passed = testResults.filter(r => r.passed).length;
    const failed = testResults.filter(r => !r.passed).length;
    console.log(`✅ Passed: ${passed}`);
    console.log(`❌ Failed: ${failed}`);
    console.log(`📈 Total:  ${testResults.length}`);
    console.log(`📊 Pass Rate: ${((passed / testResults.length) * 100).toFixed(2)}%`);
    console.log('========================================\n');
  });
});