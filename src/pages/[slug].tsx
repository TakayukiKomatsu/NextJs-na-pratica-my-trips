import client from 'graphql/client'
import { useRouter } from 'next/dist/client/router'

import PageTemplate, { PageTemplateProps } from 'template/Pages'
import { GET_PAGES, GET_PAGE_BY_SLUG } from 'graphql/queries'
import { GetStaticProps } from 'next'

export default function Page({ heading, body }: PageTemplateProps) {
  const router = useRouter()

  if (router.isFallback) return null
  return <PageTemplate heading={heading} body={body} />
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

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { page } = await client.request(GET_PAGE_BY_SLUG, {
    slug: `${params?.slug}`
  })

  if (!page) return { notFound: true }

  return {
    props: {
      heading: page.heading,
      body: page.body.html
    }
  }
}

/*
- getStaticPaths -server para gerar as urls em build time /about /trip/petropolis
- getStaticProps - server para buscar dados da página  (props) - build time
- getServerSideProps - serve para buscar os dados da página (props) - Run Time (bundle fica no server)

// Not Recommended
- getInitialProps - serve para buscar os dados da página (props) - Run Time (bundle vai para o client) - Hydrate

*/
