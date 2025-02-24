import {BannerMain} from "@/components/shared/carousels/banners/Banner-main";
import {NewProductsSlider} from "@/components/shared/carousels/New-products-slider";
import {PartnersSlider} from "@/components/shared/carousels/Partners-slider";
import {OfflineOrOnline} from "@/components/shared/OfflineOrOnline";
import {UniqMachinesSlider} from "@/components/shared/carousels/Uniq-machines-slider";

export default function MainPage() {
  return (
    <>
      <BannerMain/>

      <NewProductsSlider/>

      <PartnersSlider/>

      <UniqMachinesSlider/>

      <OfflineOrOnline/>

    </>
  );
}
