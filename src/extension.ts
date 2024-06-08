import * as vscode from 'vscode';
import { readConfig } from './io'
import { executeCommand } from './terminal'

const start = () => {
	const config = readConfig()
	if (!config)
			return

	const { start } = config
	executeCommand(start)
}
export function activate(context: vscode.ExtensionContext) {

	start()

}

export function deactivate() { }
