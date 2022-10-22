/** 運用コスト削減状況：運用コスト削減状況（全体） */
export interface CostReductionAllSystems {
  /** 年（西暦） */
  year: number;
  /** 情報システム名 */
  system_name: string;
  /** 組織名 */
  organization: string;
  /** 運用等経費（見込み） */
  cost_reduction_plan: string;
  /** 削減額（見込み） */
  prospects: string;
  /** 削減額（実績） */
  actual_results: string;
}

/** 運用コスト削減状況：情報システム別削減見込額推移 */
export interface CostReduction5BillionSystems {
  /** 年（西暦） */
  year: string;
  /** 情報システムID */
  system_id: string;
  /** 情報システム名 */
  system_name: string;
  /** 組織コード */
  organization_order: string;
  /** 組織名 */
  organization: string;
  /** 削減額（見込み） */
  prospects: string;
}

/** 運用コスト削減状況：観点別削減見込額 */
export interface CostReductionViewPoint {
  /** 年（西暦） */
  year: string;
  /** 情報システムID */
  system_id: string;
  /** 情報システム名 */
  system_name: string;
  /** 組織コード */
  organization_order: string;
  /** 組織名 */
  organization: string;
  /** 削減観点コード */
  point_code: string;
  /** 削減観点 */
  point: string;
  /** 削減額（見込み） */
  prospects: string;
}
