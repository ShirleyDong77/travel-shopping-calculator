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
    expect(html).toContain('实付金额（CNY）');
  });

  test('结果区支持保存和清空操作', () => {
    expect(html).toContain('保存到历史');
    expect(html).toContain('清空');
    expect(html).toContain('function resetCalculatorForm()');
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
    expect(html).toContain('localStorage.setItem(HISTORY_KEY');
    expect(html).toContain('localStorage.getItem(HISTORY_KEY');
  });

  test('历史页支持日期分组和顶部筛选', () => {
    expect(html).toContain('id="history-page"');
    expect(html).toContain('id="historyDateFilter"');
    expect(html).toContain('id="historyCurrencyFilter"');
    expect(html).toContain('id="historySearchInput"');
    expect(html).toContain('function groupHistoryByDate(');
    expect(html).toContain('formatFullHistoryDate');
  });

  test('历史页支持多选和批量删除确认', () => {
    expect(html).toContain('historyMultiSelectBtn');
    expect(html).toContain('historyDeleteBtn');
    expect(html).toContain('history-checkbox');
    expect(html).toContain('function deleteSelectedHistory()');
    expect(html).toContain('确认删除已选中的');
  });

  test('保存按钮下方显示动态汇率注释并支持中英文', () => {
    expect(html).toContain('id="saveExchangeNote"');
    expect(html).toContain('function updateSaveExchangeNote()');
    expect(html).toContain('1 CNY =');
    expect(html).toContain('Calculated using reference exchange rate');
  });

  test('包含COUNTRY_META配置', () => {
    expect(html).toContain('COUNTRY_META');
    expect(html).toContain("fr:");
    expect(html).toContain("jp:");
    expect(html).toContain("uk:");
    expect(html).toContain("us:");
  });

  test('我的页面包含用户设置和统计', () => {
    expect(html).toContain('id="profile-page"');
    expect(html).toContain('id="profileAvatarInput"');
    expect(html).toContain('id="profileNickname"');
    expect(html).toContain('id="profileNationality"');
    expect(html).toContain('id="profileTotalRecords"');
    expect(html).toContain('id="profileCountryStats"');
    expect(html).toContain('const PROFILE_KEY =');
    expect(html).toContain('function getProfileSettings()');
    expect(html).toContain('function renderProfile(');
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

  test('历史列表展示外币金额到人民币换算摘要', () => {
    expect(html).toContain('function formatHistoryAmountSummary(item)');
    expect(html).toContain('formatAmount(item.price, item.sourceCurrency, item.sourceSymbol)');
    expect(html).toContain('→');
    expect(html).toContain('formatCny(getHistoryItemFinalCny(item))');
  });
});
