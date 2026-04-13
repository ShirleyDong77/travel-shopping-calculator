// Simple test - verify HTML file structure
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

  test('包含退税率输入 (P0-3)', () => {
    expect(html).toContain('taxRateInput');
    expect(html).toContain('退税率');
  });

  test('包含历史详情弹窗 (P0-6)', () => {
    expect(html).toContain('historyModal');
    expect(html).toContain('modal-close');
    expect(html).toContain('openHistoryDetail');
    expect(html).toContain('closeHistoryModal');
  });

  test('结果卡片显示三列详情', () => {
    expect(html).toContain('originalPrice');
    expect(html).toContain('discountSaving');
    expect(html).toContain('taxRefund');
    expect(html).toContain('result-final');
  });

  test('结果卡片显示实付金额', () => {
    expect(html).toContain('finalPrice');
    expect(html).toContain('实付金额');
  });

  test('包含18个国家选项', () => {
    const countryMatches = html.match(/<option value="[a-z]{2}">/g) || [];
    expect(countryMatches.length).toBe(18);
  });

  test('包含折扣按钮和自定义折扣输入', () => {
    expect(html).toContain('discount-btn');
    expect(html).toContain('data-discount');
    expect(html).toContain('setDiscount');
    expect(html).toContain('customDiscountInput');
    expect(html).toContain('activateCustomDiscount');
  });

  test('包含calculate函数', () => {
    expect(html).toContain('function calculate()');
    expect(html).toContain('function getCalculationData()');
  });

  test('包含汇率API配置', () => {
    expect(html).toContain('open.er-api.com');
    expect(html).toContain('apiRates');
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

  test('底部弹窗样式', () => {
    expect(html).toContain('modal-overlay');
    expect(html).toContain('modal-sheet');
    expect(html).toContain('modal-handle');
  });

  test('包含ESC键关闭弹窗功能', () => {
    expect(html).toContain("Escape");
    expect(html).toContain("closeHistoryModal");
  });

  test('历史条目支持点击打开详情', () => {
    expect(html).toContain('onclick="openHistoryDetail');
    expect(html).toContain('history-item');
  });
});
