/** オープンデータ：ODグループ */
export interface OdGroup {
  /** オープンデータID */
  opendata_id: number;
  /** グループタイトル */
  group_title: string;
  /** グループ名称 */
  group_name: string;
  /** 説明 */
  description: string;
  /** グループ分類コード */
  group_type_code: string;
  /** グループ分類 */
  group_type: string;
  /** 年（西暦） */
  year: number;
}

/** オープンデータ：ODデータセット */
export interface OdDataset {
  /** オープンデータID */
  opendata_id: number;
  /** データセットID */
  dataset_id: number;
  /** データセットタイトル */
  dataset_title: string;
  /** データセット名称 */
  dataset_name: string;
  /** 組織コード */
  organization_code: string;
  /** 組織名 */
  organization: string;
  /** 公表者（部局） */
  publisher: string;
  /** 作成者 */
  author: string;
  /** 作成頻度コード */
  frequency_code: string;
  /** 作成頻度 */
  frequency: string;
  /** 説明 */
  description: string;
  /** リリース日 */
  release_day: string;
}

/** オープンデータ：リソース集計 */
export interface ResourceTotal {
  /** データセットID */
  dataset_id: string;
  /** リソース集計値 */
  resource_count: string;
}

/** オープンデータ：データ形式別リソース集計 */
export interface DataFormatTotal {
  /** データセットID */
  dataset_id: string;
  /** データ形式コード */
  data_format_code: string;
  /** データ形式 */
  data_format: string;
  /** リソース集計値 */
  resource_count: string;
}

/** オープンデータ：使用言語別リソース集計 */
export interface LanguageTotal {
  /** データセットID */
  dataset_id: string;
  /** 使用言語コード */
  language_code: string;
  /** 使用言語 */
  language: string;
  /** リソース集計値 */
  resource_count: string;
}

/** オープンデータ：タグ */
export interface TagRelation {
  /** データセットID */
  dataset_id: string;
  /** タグ */
  tag: string;
}

/** オープンデータ：グループ分類マスタ */
export interface GroupTypeMaster {
  /** コード */
  code: string;
  /** 名称 */
  name: string;
}

/** オープンデータ：作成頻度マスタ */
export interface FrequencyMaster {
  /** コード */
  code: string;
  /** 名称 */
  name: string;
}

/** オープンデータ：データ形式マスタ */
export interface DataFormatMaster {
  /** コード */
  code: string;
  /** 名称 */
  name: string;
}

/** オープンデータ：使用言語マスタ */
export interface LanguageMaster {
  /** コード */
  code: string;
  /** 名称 */
  name: string;
}

/** オープンデータ：OD全項目集計 */
export interface OdAllTotal {
  /** 年（西暦） */
  year: string;
  /** 組織コード */
  organization_code: string;
  /** 組織名 */
  organization: string;
  /** データセットID */
  dataset_id: string;
  /** グループ分類コード */
  group_type_code: string;
  /** グループ分類 */
  group_type: string;
  /** 作成頻度コード */
  frequency_code: string;
  /** 作成頻度 */
  frequency: string;
  /** データ形式コード */
  data_format_code: string;
  /** データ形式 */
  data_format: string;
  /** 使用言語コード */
  language_code: string;
  /** 使用言語 */
  language: string;
  /** リソース集計値 */
  resource_count: string;
}
