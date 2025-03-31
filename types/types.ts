export interface ClassName {
    className?: string;
}

export interface Category {
    id: number;
    name: string;
    slug: string;
    description: string;
    order: number;
    banner_image_url: string;
    type: string;
    created_at?: string;
    updated_at?: string;
    products: Product[];
}

export interface Product {
    id: number;
    name: string;
    slug: string;
    description?: string;
    orderPrice: number;
    stockPrice: number;
    newPrice: number;
    inStock: boolean;
    rating: number;
    guarantee?: number;
    guaranteeContent?: string;
    created_at?: string;
    updated_at?: string;
    order?: number;
    pivot?: Pivot;
    categories: OneProductCategory[];
    labels?: Label[];
    product_attachments?: Attachments[];
    characteristics?: Characteristics[];
    category_ids: number[];
    onClick?: () => void,
    quantity?: number,
    className?: string
}

export interface Characteristics {
    id: number;
    order: number;
    name: string;
    unit: string;
    created_at?: string;
    updated_at?: string;
    characteristic_id?: number;
    value?: string;
    is_featured?: boolean;
    laravel_through_key?: number;
}

export interface Pivot {
    category_id?: number;
    product_id?: number;
}

export interface OneProductCategory {
    id: number;
    name: string;
    slug: string;
    description: string;
    order: number;
    banner_image_url: string;
    type: string;
    created_at?: string;
    updated_at?: string;
    pivot: {
        product_id: number;
        category_id: number;
    };
}

export interface Label {
    id: number;
    name: string;
    slug: string;
    color: string;
    created_at?: string | null;
    updated_at?: string | null;
    pivot: {
        product_id: number;
        label_id: number;
    };
}

export interface Attachments {
    id: number;
    product_id: string;
    name: string;
    external_url: string;
    internal_path: string;
    width: number;
    height: number;
    type: string;
    is_main: boolean;
    order: number;
    created_at?: string | null;
    updated_at?: string | null;
}

export interface CategoriesProps extends ClassName {
    categories: Category[];
    activeCategory?: string;
    title?: string;
}

export interface ArticleCategoriesProps {
    id: number;
    title: string;
    slug: string;
    articles: Article[];
}

export interface Article {
    id: number;
    name: string;
    slug: string;
    description: string;
    date: string;
    image: string;
    articleCategory: articleCategory[];
}

export interface articleCategory {
    id: number;
    title: string;
    slug: string;
}