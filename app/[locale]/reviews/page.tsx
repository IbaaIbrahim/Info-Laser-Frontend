import {getTranslations} from "next-intl/server";
import {ReviewsWidget} from "@/components/shared/reviews/ReviewsWidget";
import {VideoReviews} from "@/components/shared/reviews/VideoReviews";
import {SocialAndOnlineMini} from "@/components/shared/banners/SocialAndOnlineMini";
import {LetterOfThanks} from "@/components/shared/reviews/LetterOfThanks";

export async function generateMetadata({params: paramsPromise}: { params: Promise<{ locale: string }> }) {
  const {locale} = await paramsPromise;
  const t = await getTranslations({locale});

  return {
    title: `${t('reviewsMetaTitle')}`,
    description: `${t('reviewsMetaDescription')}`,
  };
}

export default function MainPage() {

  return (
    <>
      <ReviewsWidget/>
      <VideoReviews/>
      <LetterOfThanks/>
      <SocialAndOnlineMini/>
    </>
  );
}
