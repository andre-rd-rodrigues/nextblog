import Head from "next/head";
import PageContainer from "components/PageContainer/PageContainer";
import Introduction from "components/Homepage/Introduction";
import CategorySection from "components/Homepage/CategorySection";
import styles from "styles/homepage.module.scss";
import { CATEGORY } from "utils";

export default function Homepage() {
  return (
    <>
      <Head>
        <title>Curiosity Gem &bull; Discover hidden gems of knowledge</title>
      </Head>
      <PageContainer>
        <Introduction />
        <div className={styles.wrapper}>
          <CategorySection categoryType={CATEGORY.recent} />
          <CategorySection categoryType={CATEGORY.tech} />
          <CategorySection categoryType={CATEGORY.wellbeing} />
        </div>
      </PageContainer>
    </>
  );
}
