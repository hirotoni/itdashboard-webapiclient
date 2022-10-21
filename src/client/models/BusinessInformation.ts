/** 契約情報：事業情報 */
export interface BusinessInformation {
  /** 事業ID */
  business_id: string;
  /** 年（西暦） */
  year: string;
  /** 組織名 */
  organization: string;
  /** 事業番号 */
  business_no: string;
  /** 事業名 */
  business_name: string;
  /** 事業開始・終了(予定）年度 */
  period: string;
  /** 担当部局庁名 */
  agency: string;
  /** 担当課室名 */
  section: string;
  /** 会計区分 */
  accounting_class: string;
  /** 政策・施策名 */
  policy: string;
  /** 根拠法令 */
  basis: string;
  /** 関係する計画、通知等 */
  relationship: string;
  /** 主要施策 */
  main_policy: string;
  /** 事業の目的 */
  purpose: string;
  /** 事業概要 */
  summary: string;
  /** 実施方法 */
  action: string;
  /** 行政事業URL */
  url: string;
}

/** 契約情報：事業支出 */
export interface BusinessSpending {
  /** 事業ID */
  business_id: string;
  /** 支出グループ */
  spending_group: string;
  /** 支出番号 */
  spending_no: string;
  /** 支出先法人番号 */
  spending_corp_no: string;
  /** 支出先名 */
  spending_destination: string;
  /** 支出概要 */
  business_overview: string;
  /** 支出額 */
  expenditure: string;
  /** 入札数 */
  number_of_bidders: string;
  /** 落札率 */
  successful_bid_rate: string;
}

/** 契約情報：事業予算 */
export interface BusinessBudget {
  /** 事業ID */
  business_id: string;
  /** 年（西暦） */
  year: string;
  /** 当初予算 */
  initial_budget: string;
  /** 補正予算 */
  supplementary_budget: string;
  /** 前年度から繰越し */
  carryover_budget_from: string;
  /** 翌年度へ繰越し */
  carryover_budget_to: string;
  /** 予備費等 */
  reserve_fund: string;
  /** 予算計 */
  total: string;
  /** 執行額 */
  enforcement_budget: string;
}
