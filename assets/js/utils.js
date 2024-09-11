/**
 * 工具函数
 */

/** 复制文本到剪贴板 */
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