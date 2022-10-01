import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Post from '../components/Post'
import { sortByDate } from '../utils'
import { motion } from "framer-motion"

export default function Blogs({ posts }) {
  return (
    <div>
      <motion.div initial="pageInitial" animate="pageAnimate" exit="pageExit" transition={{ duration: .7, type: 'easeInOut' }} style={{ position: 'relative' }} variants={{
        pageInitial: {
          opacity: 0,
        },
        pageAnimate: {
          opacity: [0, 1],
          scale: [1, 1.03, 1]
        },
        pageExit: {
          backgroundColor: 'white',
          filter: `invert()`,
          opacity: 0,
        }
      }}>

          <div className='posts'>
            {posts.map((post, index) => (
              <Post key={index} post={post} />
            ))}
          </div>
      </motion.div>
    </div>
  )
}

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join('posts'))

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace('.md', '')

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    )

    const { data: frontmatter } = matter(markdownWithMeta)

    return {
      slug,
      frontmatter,
    }
  })

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  }
}