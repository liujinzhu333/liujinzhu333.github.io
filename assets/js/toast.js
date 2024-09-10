class Toast {
  constructor() {
    this.toastContainer = document.createElement('div');
    this.toastContainer.className = 'an-toast-container';
    this.toastContainer.style.display = 'none';
    document.body.appendChild(this.toastContainer);
  }
  close(toast) {
    setTimeout(() => {
      this.toastContainer.removeChild(toast);
      if (this.toastContainer.children.length === 0) {
        this.toastContainer.style.display = 'none';
      }
    }, 3000)
  }
  closeAll() {
    this.toastContainer.innerHTML = '';
  }
  create(text) {
    const toast = document.createElement('div');
    toast.className = 'an-toast';
    toast.innerText = text;
    this.toastContainer.appendChild(toast);
    this.close(toast)
  }
  info(text) {
    this.toastContainer.style.display = 'flex';
    this.create(text)
  }
}

const toast = new Toast();
