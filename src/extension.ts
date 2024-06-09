import * as vscode from 'vscode';
import { readConfig } from './io'
import { executeCommand } from './terminal'

const start = () => {
	const config = readConfig()
	if (!config)
		return

	const { start } = config
	let cmd: string
	if (typeof start !== 'string') {
		const { executeName, runtimeArgs } = start
		const isRunPrefix = executeName === 'npm' ? ' run' : ''
		cmd = `${executeName}${isRunPrefix} ${runtimeArgs.join(' ')}`
	} else {
		cmd = start
	}
	executeCommand(cmd)
}
export function activate(context: vscode.ExtensionContext) {

	start()

}

export function deactivate() { }
