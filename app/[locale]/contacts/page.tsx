import {Container} from "@/components/shared/Container";
import {getTranslations} from "next-intl/server";
import {ContactsInfo} from "@/components/shared/contacts/ContactsInfo";
import {SocialAndOnlineMini} from "@/components/shared/banners/SocialAndOnlineMini";
import React from "react";
import {Metadata} from "next";

export async function generateMetadata(
  {params}: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale});

  return {
    title: t('contactsMetaTitle'),
    description: t('contactsMetaDescription'),
  };
}

const ContactsPage = async ({params}: { params: Promise<{ locale: string }> }) => {

  const {locale} = await params;
  const t = await getTranslations({locale});

  return (
    <>
      <section>
        <Container className="py-3">
          <h1 className="text-5xl font-semibold mb-15">Контакты InfoLaser</h1>
          <ContactsInfo t={t}/>
        </Container>
        <SocialAndOnlineMini className={"mb-15"}/>
      </section>
    </>
  );
};

export default ContactsPage;
