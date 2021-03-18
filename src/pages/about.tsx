import client from 'graphql/client'
import { useRouter } from 'next/dist/client/router'

import PageTemplate from 'template/Pages'
import { GET_PAGES } from 'graphql/queries'

export default function AboutPage() {
  const router = useRouter()

  if (router.isFallback) return null
  return <PageTemplate />
}

export async function getStaticPaths() {
  const { pages } = await client.request(GET_PAGES, { first: 3 })

  const paths = pages.map(({ slug }) => ({
    params: { slug }
  }))

  return {
    paths,
    fallback: true
  }
}

/* export const getStaticProps = async () => {
  const { pages } = await client.request(GET_PAGES)

  console.log(pages)

  return {
    props: {}
  }
}
 */

/*
- getStaticPaths -server para gerar as urls em build time /about /trip/petropolis
- getStaticProps - server para buscar dados da página  (props) - build time
- getServerSideProps - serve para buscar os dados da página (props) - Run Time (bundle fica no server)

// Not Recommended
- getInitialProps - serve para buscar os dados da página (props) - Run Time (bundle vai para o client) - Hydrate

*/
