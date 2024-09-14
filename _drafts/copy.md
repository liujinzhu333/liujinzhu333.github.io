---
layout: post
title: "复制粘贴"
tags: [idea]
---

### 复制字符串到剪贴板

```
function copyTextToClipboard(str) {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  const successful = document.execCommand('copy')
  document.body.removeChild(el);
  toast.info('复制成功：'+ str)
}
```
### 复制json到剪贴板
```
function copyTextToClipboard(str) {
  const el = document.createElement('div');
  el.innerHTML = str.toString();
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  const successful = document.execCommand('copy')
  document.body.removeChild(el);
  toast.info('复制成功：'+ str)
}
```
<!-- 人生除了生死，其他都是非固定的。
生命是不分阶段的，没有任何事是必须要在某个阶段必须要做的。 -->
