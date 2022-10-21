/** 情報システム予算：予算額 */
export interface Budget {
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
  /** 年（西暦） */
  year: string;
  /** 統廃合・該非コード */
  reduction_code: string;
  /** 統廃合・該非 */
  reduction: string;
  /** PF統合・該非コード */
  pf_code: string;
  /** PF統合・該非 */
  pf: string;
  /** 運用等経費 */
  operating_budget: string;
  /** 整備等経費 */
  development_budget: string;
  /** 合計 */
  sum_budget: string;
}

/** 情報システム予算：統廃合・該非マスタ */
export interface ReductionMaster {
  /** コード */
  code: string;
  /** 名称 */
  name: string;
}

/** 情報システム予算：PF統合・該非マスタ */
export interface PfMaster {
  /** コード */
  code: string;
  /** 名称 */
  name: string;
}
