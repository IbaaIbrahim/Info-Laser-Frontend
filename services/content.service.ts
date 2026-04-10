import { contentApi } from "@/api/content.api";
import { Content, ContentJson } from "@/types/content/content";

/**
 * Global and Standardized Method for fetching and resolving Content alongside its Metas.
 * 
 * Fetches Content recursively by using any Telerik filter dictionary.
 * It automatically maps the result to a normalized `ContentJson` structural class, ensuring that all 
 * nested `contentMetas` array entries are cleanly mapped into a simplified object mapping 
 * based on the meta item's `keyName`.
 * 
 * This enables easily converting data into conventional component props (e.g. `toHome()`).
 */
export async function readGroupedPageContentAsJsonByFilter(filter: { page_id: string, type?: string, slug?: string }): Promise<Record<string, ContentJson[]>> {
  try {
    // Generate Telerik filter expression
    const filterString = Object.entries(filter).map(([key, value]) => `${key}~eq~'${value}'`).join("~and~");

    const contentResult = await contentApi.readByFilters(filterString);

    const structuredSectionsInPage: Record<string, Content[]> = {}
    const contentJsonGroupedBySectionInPage: Record<string, ContentJson[]> = {}

    contentResult.data.list.forEach((section) => {
      structuredSectionsInPage[section.type] = []
      section.sections.forEach((item) => {
        structuredSectionsInPage[section.type].push(Content.fromDto(item))
      });
      const content = structuredSectionsInPage[section.type]
      const jsonContent = content.map((item) => new ContentJson(item));
      contentJsonGroupedBySectionInPage[section.type] = jsonContent;
    });

    return contentJsonGroupedBySectionInPage;
  } catch (error) {
    console.error("Error reading content:", error);
    return {};
  }
}
