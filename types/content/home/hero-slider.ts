import { ContentJson } from "../content";

export default class HeroSlider {
  id?: string;
  mainImg?: string;
  subTitleAbove?: string;
  mainTitle?: string;
  subTitleBelow?: string;
  btnText?: string;
  btnLink?: string;

  static fromContentJson(contentJson: ContentJson): HeroSlider {
    return {
      id: `${contentJson.id}`,
      mainImg: contentJson.contentMetasJson?.['main-img'] ?? "",
      subTitleAbove: contentJson.contentMetasJson?.['subtitle-above'] ?? "",
      mainTitle: contentJson.contentMetasJson?.['main-title'] ?? "",
      subTitleBelow: contentJson.contentMetasJson?.['subtitle-below'] ?? "",
      btnText: contentJson.contentMetasJson?.['btn-text'] ?? "",
      btnLink: contentJson.contentMetasJson?.['btn-link'] ?? "",
    } as HeroSlider;
  }
}