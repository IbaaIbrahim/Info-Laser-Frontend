import React from 'react';
import { CircleCheck } from "lucide-react";
import { decodeHtml } from "@/lib/utils";

import { ArticleTextWithListData } from '@/types/article';

interface ArticleTextWithListProps {
  data: ArticleTextWithListData;
}

export const ArticleTextWithList: React.FC<ArticleTextWithListProps & { id?: string }> = ({ data, id }) => {
  return (
    <div id={id || data.slug} className="mb-8">
      <div
        className="font-semibold mb-3 max-md:text-sm"
        dangerouslySetInnerHTML={{ __html: decodeHtml(data.text).replace(/^"|"$/g, '').replace(/\\n/g, '') }}
      />
      <ul className="space-y-2 mb-5 max-md:text-sm max-md:mb-3">
        {data.list.map((item) => (
          <li key={item.uuid} className="flex items-center gap-3">
            <CircleCheck size={20} className={"text-white fill-[var(--violet)]/70 shrink-0"} />
            <p>{decodeHtml(item.text)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
