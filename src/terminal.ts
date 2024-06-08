import { Terminal, window } from 'vscode'

let terminal: Terminal

function initTerminal() {
  if (!terminal) {
    terminal = window.createTerminal('quick-script')
  }
  return terminal
}

export function executeCommand(cmd: string) {
  initTerminal()

  terminal.sendText(cmd)

  terminal.show(true)
}