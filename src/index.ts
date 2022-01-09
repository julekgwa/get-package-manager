import { exec } from 'shelljs'

function runExec (command: string): boolean {
  return exec(`${command} > /dev/null 2>&1`).code === 0
}
export function getPackageManager (pkg?: { prefer: string }): string {

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
