// Simple test - just verify HTML file structure
const fs = require('fs');
const path = require('path');

describe('旅行购物计算器 - 代码结构测试', () => {
  let html;

  beforeEach(() => {
    html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf-8');
  });

  test('HTML文件存在且包含必要元素', () => {
    expect(html).toBeTruthy();
    expect(html.length).toBeGreaterThan(1000);
  });

  test('包含商品名称输入框 (P0-5)', () => {
    expect(html).toContain('id="itemName"');
    expect(html).toContain('商品名称');
  });

  test('包含免税开关 (P0-2)', () => {
    expect(html).toContain('taxFreeToggle');
    expect(html).toContain('免税');
  });

  test('包含自定义税率输入 (P0-3)', () => {
    expect(html).toContain('taxRateInput');
    expect(html).toContain('自定义税率');
  });

  test('包含多币种选择器 (P0-4)', () => {
    expect(html).toContain('resultCurrency');
    expect(html).toContain('CNY');
    expect(html).toContain('USD');
    expect(html).toContain('EUR');
    expect(html).toContain('JPY');
    expect(html).toContain('HKD');
  });

  test('包含历史详情弹窗 (P0-6)', () => {
    expect(html).toContain('historyModal');
    expect(html).toContain('modal-close');
    expect(html).toContain('openHistoryDetail');
    expect(html).toContain('closeHistoryModal');
  });

  test('汇率面板显示USD/CNY (P0-1)', () => {
    expect(html).toContain('jpyCnyRate');
    expect(html).toContain('1 USD =');
  });

  test('历史显示币种符号 (P0-7)', () => {
    expect(html).toContain('sourceSymbol');
    expect(html).toContain('finalPriceText');
  });

  test('历史显示格式化时间 (P0-8)', () => {
    expect(html).toContain('savedAtShort');
    expect(html).toContain('formatShortDateTime');
  });

  test('包含18个国家选项', () => {
    const countryMatches = html.match(/<option value="[a-z]{2}">/g) || [];
    expect(countryMatches.length).toBe(18);
  });

  test('包含折扣按钮', () => {
    expect(html).toContain('discount-btn');
    expect(html).toContain('data-discount');
    expect(html).toContain('setDiscount');
  });

  test('包含calculate函数', () => {
    expect(html).toContain('function calculate()');
    expect(html).toContain('function getCalculationData()');
  });

  test('包含汇率API配置', () => {
    expect(html).toContain('open.er-api.com');
    expect(html).toContain('exchangeRates');
  });

  test('包含保存记录功能', () => {
    expect(html).toContain('function saveRecord()');
    expect(html).toContain('function renderHistory()');
    expect(html).toContain('function getHistory()');
  });

  test('包含COUNTRY_META配置', () => {
    expect(html).toContain('COUNTRY_META');
    expect(html).toContain("fr:");
    expect(html).toContain("jp:");
    expect(html).toContain("uk:");
    expect(html).toContain("us:");
  });

  test('包含RESULT_CURRENCIES配置', () => {
    expect(html).toContain('RESULT_CURRENCIES');
    expect(html).toContain("CNY");
    expect(html).toContain("USD");
    expect(html).toContain("EUR");
    expect(html).toContain("JPY");
    expect(html).toContain("HKD");
  });

  test('包含ESC键关闭弹窗功能', () => {
    expect(html).toContain("Escape");
    expect(html).toContain("closeHistoryModal");
  });
});
