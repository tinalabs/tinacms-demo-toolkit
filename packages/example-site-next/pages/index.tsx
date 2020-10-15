import Link from 'next/link'
// import Layout from '../components/Layout'
import { Layout } from 'next-tinacms-doc-toolkit'
import {CONFIG} from './docs/[slug]'

export const loadComponent = async (fileName: string) => {
  try {
    const component = await import(`../docs/${fileName}.mdx`);
    return component;
  } catch (e) {
    console.error(`${fileName} was not found`);
    console.error(e);
    throw e;
  }
}
// import Asdf from  '../docs/pageOne.mdx'
  const IndexPage = () => {
    return <Layout currentSlug={'/'} config={CONFIG} loadComponent={loadComponent}/>
  }


export default IndexPage