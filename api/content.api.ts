import { apiClient } from "@/api/client";
import type { DataSourceResult } from "@/types/data-source";
import type { ContentGroupedByPageDto } from "@/types/content/content";

export const contentApi = {
  async readByFilters(filters: string, options?: { page?: number; pageSize?: number }) {
    const { data } = await apiClient.get<DataSourceResult<ContentGroupedByPageDto>>("/api/page-section/grouped-by-type", {
      params: {
        filter: filters,
        page: options?.page ?? 1,
        pageSize: options?.pageSize ?? 100,
      },
    });
    return data;
  },
};
