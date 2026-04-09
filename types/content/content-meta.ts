export type ContentMetaDto = {
  id: number | string;
  contentId: number | string;
  type: string;
  key: string;
  value: string | null;
  createdAt?: string;
  updatedAt?: string;
};

export class ContentMeta {
  constructor(
    public readonly id: number,
    public readonly contentId: number,
    public readonly type: string,
    public readonly keyName: string,
    public readonly value: string | null,
    public readonly createdAt?: string,
    public readonly updatedAt?: string,
  ) { }

  static fromDto(dto: ContentMetaDto): ContentMeta {
    return new ContentMeta(
      Number(dto.id),
      Number(dto.contentId),
      dto.type ?? "",
      dto.key ?? "",
      dto.value ?? null,
      dto.createdAt,
      dto.updatedAt,
    );
  }

  toPlain(): ContentMetaDto {
    return {
      id: this.id,
      contentId: this.contentId,
      type: this.type,
      key: this.keyName,
      value: this.value,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
