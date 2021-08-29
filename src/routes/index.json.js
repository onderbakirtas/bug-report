import fs from 'fs'

import vfile from 'to-vfile'

export function get() {
  let posts = fs.readdirSync(`src/posts`)
  console.log(posts)
  return { posts }
}