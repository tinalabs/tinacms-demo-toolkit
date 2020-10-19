import Link from 'next/link'
import {useRouter} from 'next/router'
// import Layout from '../components/Layout'
import { Layout } from 'next-tinacms-doc-toolkit'
import { DocumentConfig } from 'next-tinacms-doc-toolkit/build/interfaces'
export const loadComponent = async (fileName: string) => {
  try {
    const component = await import(`../../docs/${fileName}.mdx`);
    return component;
  } catch (e) {
    console.error(`${fileName} was not found`);
    console.error(e);
    throw e;
  }
};

export const CONFIG: DocumentConfig = {
    LinkWrapper: ({to, children})=>{
      if(to==='/'){
          return <Link href={`/docs`} as={`/docs`}>{children}</Link>
      }
      return <Link href={`/docs/[slug]`} as={`/docs${to}`}>{children}</Link>
    },
    title: 'this is a test',
    pages: [
        { filePath: "pageOne" ,label: 'page 1',  slug: '/', },
        { filePath: "pageTwo" , label: 'page 2',  slug: '/page-2',},
        { filePath: "pageTwo" , label: 'page 2',  slug: '/page-3',},
        { filePath: "pageTwo" , label: 'page 2',  slug: '/page-4',},
        { filePath: "pageTwo" , label: 'page 2',  slug: '/page-5',},
        { filePath: "pageTwo" , label: 'page 2',  slug: '/page-6',},
    ],
    tinaConfig: {
      enabled:true,
      sidebar: true
    }
}
const IndexPage = () => {
  const router = useRouter()
  const currentSlug = router.query.slug as string
  console.log({currentSlug })
  if(router.isFallback || !currentSlug){
      return <div>Loading...</div>
  }
  return <Layout currentSlug={'/'+currentSlug} config={CONFIG} loadComponent={loadComponent}>
    {}
    </Layout>
}


export default IndexPage