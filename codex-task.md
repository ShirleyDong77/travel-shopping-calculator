Fix all 8 P0 issues in this travel-shopping-calculator HTML app. The file is index.html.

## Current State
- Single HTML file at /Users/muyu/Documents/coding-projects/travel-shopping-calculator/index.html
- Already has: 19 country tax rates, exchange rate API (open.er-api.com), discount buttons, history list
- Missing ALL 8 P0 features below

## 8 P0 Fixes Required

### P0-1: 实时汇率显示
- Add a visible display of current exchange rate on the UI (e.g., showing "1美元 = X人民币" or "1 USD = X CNY")
- Show this prominently in the result card area so users see the actual rate
- The exchange rate data comes from open.er-api.com (USD-based), rate to CNY is in exchangeRates['CNY']

### P0-2: 免税开关
- Add a toggle/switch to allow users to turn tax refund on/off
- When OFF: calculate() should skip the tax deduction
- When ON (default): apply the country's tax rate
- Style as a toggle switch, visually clear

### P0-3: 自定义税率
- Instead of only using fixed TAX_RATES per country, allow manual tax rate input
- Show an input field for custom tax rate % (0-30 range)
- When user enters a custom rate, use it instead of the country's default
- Allow switching between "country default" and "custom" mode

### P0-4: 多币种结果切换
- Currently only shows result in CNY (¥)
- Add currency selector to show the final price in different currencies
- Options: CNY, USD, EUR, GBP, JPY, KRW (at minimum)
- Update the final result display when user selects a different output currency
- Show the converted amount with proper currency symbol

### P0-5: 商品名称输入
- Add a text input field for "商品名称" (product name)
- Place it above the price input in the form
- Use this name when saving to history

### P0-6: 历史详情弹窗
- When clicking on a history item, show a modal/popup with full details:
  - 商品名称 (product name)
  - 购买地点 (country)
  - 保存时间 (exact save time)
  - 原价币种 (original currency)
  - 汇率 (exchange rate used)
  - 手续费/税率 (tax rate applied)
  - 应付金额 (final amount in result currency)
- The modal should have a close button and be dismissible
- Clicking outside the modal should also close it

### P0-7: 历史显示币种
- In the history list, show the original currency symbol next to the price
- e.g., instead of just showing price, show "€1,000" or "¥14,000"
- The history item should show: name, currency+price, time, final CNY amount

### P0-8: 历史显示保存时间
- Show more precise/formatted save time in history list
- Show format like "04-13 14:32" (MM-DD HH:MM)
- Include the year for clarity

## Implementation Notes
- Keep the existing dark gradient result card style
- The exchange rate data structure: exchangeRates is keyed by currency code (CNY, USD, EUR, etc.)
- To convert CNY to another currency: cnyAmount / exchangeRates['CNY'] * exchangeRates['TARGET_CURRENCY']
- For the modal/popup, use a simple overlay div with close button
- Keep all existing functionality working (API, discounts, history save, etc.)
- Maintain responsive design for mobile
- Store the exchange rate in history records so the detail modal can show it

## After completing all fixes
1. Verify the page loads without JS errors
2. Make sure calculate() is called properly on all input changes
3. Commit with message: 'fix(P0): 完成全球购2.0 M1核心功能修复 (8项P0)'
4. Push to origin main
5. Print "DONE: All 8 P0 fixes committed and pushed"
