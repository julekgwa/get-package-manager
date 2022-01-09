import { exec } from 'shelljs'
import { Prefer } from './types'

function runExec (command: string): boolean {
  return exec(`${command} > /dev/null 2>&1`).code === 0
}
export function getPackageManager (pkg?: Prefer): string {

  const prefer = pkg?.prefer || ''

  switch (true) {
    case prefer && runExec(`${prefer} --version`):
      return prefer
    case runExec('npm --version'):
      return 'npm'
    case runExec('yarn --version'):
      return 'yarn'
    case runExec('pnpm --version'):
      return 'pnpm'
    default:
      return 'Unknown'
  }

}
