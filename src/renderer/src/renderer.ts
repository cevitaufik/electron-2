function init(): void {
  window.addEventListener('DOMContentLoaded', () => {
    doAThing()
  })
}

function doAThing(): void {
  const versions = window.electron.process.versions
  replaceText('.electron-version', `Electron v${versions.electron}`)
  replaceText('.chrome-version', `Chromium v${versions.chrome}`)
  replaceText('.node-version', `Node v${versions.node}`)

  const ipcHandlerBtn = document.getElementById('ipcHandler')
  ipcHandlerBtn?.addEventListener('click', () => {
    // window.electron.ipcRenderer.send('ping')

    window.electron.ipcRenderer.invoke('request', 'nama').then((result) => {
      // console.log(result) // Output: Selamat datang, nama Anda adalah nama
      alert(result)
    })
  })
}

function replaceText(selector: string, text: string): void {
  const element = document.querySelector<HTMLElement>(selector)
  if (element) {
    element.innerText = text
  }
}

init()

function send(arg: string): void {
  window.electron.ipcRenderer.invoke('request', arg).then((result) => {
    alert(result)
  })
}
