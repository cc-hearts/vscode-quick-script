import { workspace } from "vscode";
import { resolve } from 'path'
import { existsSync, readFileSync } from "fs";
import { Config } from "./helper";

function getConfigPath() {
  const workspaceFolders = workspace.workspaceFolders

  if (!workspaceFolders)
    return null

  const [{ uri }] = workspaceFolders
  return resolve(uri.fsPath, '.vscode', 'quick-script.json')
}

export function readConfig(): Config | undefined {
  const rootPath = getConfigPath();
  if (!rootPath)
    return

  if (!existsSync(rootPath)) {
    console.log('config file is not found');
    return
  }

  const configStr = readFileSync(rootPath, { encoding: 'utf-8' })

  return JSON.parse(configStr)
}