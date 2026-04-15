# PROJECT_RULES.md - 全球购2.0 项目护栏文件

> 本文件定义 AI Coding Agent 在本项目中的行为约束。Codex 执行前必须读取并遵守。

---

## 1. 技术栈约束
- 前端：React + Vite（不换）
- 后端：不动（不新增后端服务）
- 部署：GitHub Pages（main 分支触发部署）
- 禁止：不使用 Gitee / 不新增数据库 / 不修改登录逻辑

## 2. 代码质量约束
- 提交规范：commit 信息说明做了什么，不写废话
- 分支命名：feature/xxx / fix/xxx / hotfix/xxx
- Code Review：Eddy 自验收后才合并
- 禁止：不经过验收直接 push 到 main

## 3. 功能变更约束
- 需求变更：必须先通知 Monica，不擅自增加/删除功能
- 设计变更：必须经过设计评审才能改 UI
- 第三方依赖：新增 npm 包需经 Monica 审批

## 4. 验收标准
- 每次 commit 后必须在 GitHub Pages 验证功能正常
- HTTP 200 + 实际功能可运行
- 页面响应时间 < 3s（正常网络下）

## 5. 安全约束
- 不在代码里硬编码密钥/Token
- 不在 commit 里暴露用户数据
- 外部 API 调用走环境变量，不写死在代码里

---
*最后更新：2026-04-15 · 版本：v1.0*
