import { ContentJson } from "../content";

export default class FeaturesBanner {
  id?: string;
  image?: string;
  title?: string;
  desc?: string;
  btnText?: string;
  btnLink?: string;

  static fromContentJson(contentJson: ContentJson): FeaturesBanner {
    return {
      id: `${contentJson.id}`,
      image: contentJson.contentMetasJson?.['src'] ?? "",
      title: contentJson.contentMetasJson?.['title'] ?? "",
      desc: contentJson.contentMetasJson?.['desc'] ?? "",
      btnText: contentJson.contentMetasJson?.['btn_text'] ?? "",
      btnLink: contentJson.contentMetasJson?.['btn_link'] ?? ""
    } as FeaturesBanner;
  }
}