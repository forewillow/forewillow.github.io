---
title: 水面渲染技术研究
description: 从基础物理模拟到实时 Shader 实现的完整记录
sidebar:
  order: 1
---

本系列博客将记录我从零开始实现一个写实水面渲染器的全过程。
参考网站:
https://zhuanlan.zhihu.com/p/486631970
https://github.com/AshenOneArt/HPWater/wiki/BSDF%E2%80%90Model
https://zhuanlan.zhihu.com/p/95917609

## 详细步骤

水面的渲染,我将其分为以下几个步骤：

1. **顶点构建**：波浪算法（Gerstner Wave）与法线平铺。
2. **光学属性**：折射（Refraction）、反射（Reflection）与菲涅尔效应。

