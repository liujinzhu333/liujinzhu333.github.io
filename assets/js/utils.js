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
/** 复制JSON对象到剪贴板 */
async function copyTextToClipboard2(jsonString) {
  await navigator.clipboard.writeText(JSON.stringify(jsonString))
  toast.info('复制成功')
}