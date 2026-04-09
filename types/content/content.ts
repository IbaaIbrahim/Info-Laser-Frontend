import { ContentMeta, ContentMetaDto } from "./content-meta";

export type ContentGroupedByPageDto = {
  type: string;
  count: number;
  sections: ContentDto[];
}

export type ContentDto = {
  id: number | string;
  page_id: number | string;
  type: string;
  /** Present on many CMS rows; optional in UI when copy comes only from `ContentMeta`. */
  title?: string | null;
  sort_order: number | string;
  is_active: boolean;
  meta_content?: ContentMetaDto[];
  created_at?: string;
  updated_at?: string;
};

export class Content {
  constructor(
    public readonly id: number,
    public readonly page_id: number,
    public readonly type: string,
    public readonly title: string | null,
    public readonly displayOrder: number,
    public readonly isActive: boolean,
    public readonly contentMetas?: ContentMeta[],
    public readonly createdAt?: string,
    public readonly updatedAt?: string,
  ) { }

  static fromDto(dto: ContentDto): Content {
    return new Content(
      Number(dto.id),
      Number(dto.page_id),
      dto.type ?? "",
      dto.title ?? null,
      Number(dto.sort_order),
      Boolean(dto.is_active),
      dto.meta_content?.map((meta) => ContentMeta.fromDto(meta)),
      dto.created_at,
      dto.updated_at,
    );
  }

  toPlain(): ContentDto {
    return {
      id: this.id,
      page_id: this.page_id,
      type: this.type,
      title: this.title,
      sort_order: this.displayOrder,
      is_active: this.isActive,
      meta_content: this.contentMetas?.map((meta) => meta.toPlain()),
      created_at: this.createdAt,
      updated_at: this.updatedAt,
    };
  }
}


export type ContentMetaJson = {
  [key: string]: string | null;
}


export class ContentJson extends Content {
  contentMetasJson?: ContentMetaJson
  constructor(content: Content) {
    super(content.id, content.page_id, content.type, content.title, content.displayOrder, content.isActive, content.contentMetas, content.createdAt, content.updatedAt)
    this.contentMetasJson = content.contentMetas?.reduce((acc, meta) => {
      acc[meta.keyName] = meta.value;
      return acc;
    }, {} as ContentMetaJson);
  }

  // toHome(): Home {
  //   if (!this.contentMetasJson) return {};
  //   const home = Home.fromContentJson(this);
  //   return home ? home : {};
  // }
}
