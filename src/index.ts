import { exec } from 'shelljs'
import { Prefer } from './types'

export function getPackageManager (pkg?: Prefer): string {

  const prefer = pkg?.prefer || ''

  switch (true) {
    case prefer && exec(`${prefer} --verion`).code === 0:
      return prefer
    case exec('npm --version').code === 0:
      return 'npm'
    case exec('yarn --version').code === 0:
      return 'yarn'
    case exec('pnpm --version').code === 0:
      return 'pnpm'
    default:
      return 'Unknown'
  }

}
