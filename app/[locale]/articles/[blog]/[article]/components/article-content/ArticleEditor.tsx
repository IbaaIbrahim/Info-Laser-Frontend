import { cn, decodeHtml } from "@/lib/utils";
import { ArticleEditorData } from '@/types/article';

interface ArticleEditorProps {
  data: ArticleEditorData;
}

export const ArticleEditor: React.FC<ArticleEditorProps & { id?: string }> = ({ data, id }) => {
  const cleanText = decodeHtml(data.text)
    .replace(/^"|"$/g, '')
    .replace(/\\n/g, '');

  return (
    <div
      id={id || data.slug}
      className={cn(
        "mb-5 last:mb-0 max-md:text-sm max-md:mb-3 article-editor-content",
        data.border?.width ? `border-${data.border.width}` : ""
      )}
      style={{ borderColor: data.border?.color }}
      dangerouslySetInnerHTML={{ __html: cleanText }}
    />
  );
};
