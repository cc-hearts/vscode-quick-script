interface StartScript {
  executeName: 'pnpm' | 'npm' | 'yarn'
  runtimeArgs: string[]
}
export interface Config {
 start: string | StartScript
}