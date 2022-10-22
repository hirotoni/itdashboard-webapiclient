/** 投資計画：投資計画 */
export interface InvestmentPlan {
    /** 投資事項ID */
    investment_id: string;
    /** 年（西暦） */
    year: string;
    /** 組織名 */
    organization: string;
    /** 投資事項番号 */
    investment_no: string;
    /** 投資事項名 */
    investment_name: string;
    /** 投資内容 */
    description: string;
    /** 新規／継続 */
    status: string;
    /** 政策概要 */
    policy: string;
    /** 業務・機能概要 */
    business_and_functions: string;
    /** 投資開始年度 */
    start_year: string;
    /** 投資終了年度 */
    end_year: string;
    /** 本年度投資額 */
    current_amount: string;
    /** 総投資額 */
    aggregate_amount: string;
}
/** 投資計画：投資計画（投資内訳） */
export interface InvestmentByExpense {
    /** 投資事項ID */
    investment_id: string;
    /** 年（西暦） */
    year: string;
    /** 組織名 */
    organization: string;
    /** 投資内訳_年（西暦） */
    expense_year: string;
    /** 投資内訳_費目 */
    expense_item: string;
    /** 投資内訳_投資額 */
    expense_amount: string;
    /** 投資事項番号 */
    investment_no: string;
    /** 投資事項名 */
    investment_name: string;
    /** 新規／継続 */
    status: string;
    /** 投資開始年度 */
    start_year: string;
    /** 投資終了年度 */
    end_year: string;
    /** 本年度投資額 */
    current_amount: string;
    /** 総投資額 */
    aggregate_amount: string;
}
