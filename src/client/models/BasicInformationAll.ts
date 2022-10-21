/** 情報システム全体：情報システム全体 */
export interface BasicInformationAll {
  /** 情報システムID */
  system_id: string;
  /** 情報システム名 */
  system_name: string;
  /** 情報システム区分コード */
  system_class_code: string;
  /** 情報システム区分 */
  system_class: string;
  /** 組織コード */
  organization_code: string;
  /** 組織名 */
  organization: string;
  /** 情報処理システム分類コード */
  system_field_code: string;
  /** 情報処理システム分類 */
  system_field: string;
  /** システムアーキテクチャコード */
  architecture_code: string;
  /** システムアーキテクチャ */
  architecture: string;
  /** 統廃合・該非コード */
  reduction_code: string;
  /** 統廃合・該非 */
  reduction: string;
  /** PF統合・該非コード */
  pf_code: string;
  /** PF統合・該非 */
  pf: string;
  /** 年（西暦） */
  year: string;
}
