const { test, expect } = require('@playwright/test');

test('Debug - inspect page elements', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.waitForLoadState('networkidle');
  
  // Count textareas
  const textareaCount = await page.locator('textarea').count();
  console.log(`\n📊 Found ${textareaCount} textarea(s)`);
  
  // Get all textareas info
  const textareas = page.locator('textarea');
  for (let i = 0; i < textareaCount; i++) {
    const textarea = textareas.nth(i);
    const placeholder = await textarea.getAttribute('placeholder');
    const id = await textarea.getAttribute('id');
    const className = await textarea.getAttribute('class');
    console.log(`   Textarea ${i}: id="${id}", placeholder="${placeholder}", class="${className}"`);
  }
  
  // Look for div with contenteditable or output areas
  const divCount = await page.locator('div[contenteditable="true"]').count();
  console.log(`\n📊 Found ${divCount} contenteditable div(s)`);
  
  // Look for elements with "output" or "sinhala" in class/id
  const outputElements = await page.locator('[class*="output"], [class*="sinhala"], [id*="output"], [id*="sinhala"]').count();
  console.log(`📊 Found ${outputElements} element(s) with output/sinhala in class/id`);
  
  // Type in first textarea and wait
  const inputArea = page.locator('textarea').first();
  await inputArea.fill('mama gedhara yanavaa.');
  await page.waitForTimeout(3000);
  
  // Try to find any element that might have the translation
  const allText = await page.locator('body').innerText();
  if (allText.includes('මම')) {
    console.log('\n✅ Found Sinhala text on page!');
    
    // Find elements after "Sinhala" heading - look for the output div
    const sinhalaLabel = page.locator('text=Sinhala').first();
    const parent = sinhalaLabel.locator('xpath=..');
    console.log('Parent of Sinhala label:', await parent.getAttribute('class'));
    
    // Look for paragraph elements with Sinhala text
    const paragraphs = await page.locator('p:has-text("මම")').all();
    console.log(`Found ${paragraphs.length} <p> elements with Sinhala`);
    for (let i = 0; i < paragraphs.length; i++) {
      const text = await paragraphs[i].innerText();
      const className = await paragraphs[i].getAttribute('class');
      console.log(`   <p> ${i}: class="${className}" text="${text}"`);
    }
    
    // Look for divs that contain ONLY the translation
    const divs = await page.locator('div').all();
    for (let i = 0; i < divs.length; i++) {
      try {
        const text = await divs[i].innerText();
        if (text === 'මම ගෙදර යනවා.' || text.trim() === 'මම ගෙදර යනවා.') {
          const className = await divs[i].getAttribute('class');
          console.log(`\n🎯 EXACT MATCH: <div> class="${className}"`);
        }
      } catch (e) {}
    }
  } else {
    console.log('\n❌ No Sinhala text found on page');
  }
  
  // Take screenshot for debugging
  await page.screenshot({ path: 'debug-screenshot.png', fullPage: true });
  console.log('\n📸 Screenshot saved to debug-screenshot.png');
});
