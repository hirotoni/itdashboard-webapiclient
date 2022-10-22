/** 情報システム基本情報：基本情報 */
export interface BasicInformation {
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
    year: number;
}
/** 情報システム基本情報：情報処理システム分類 */
export interface SystemField {
    /** 情報システムID */
    system_id: string;
    /** 情報処理システム分類コード */
    system_field_code: string;
    /** 情報処理システム分類 */
    system_field: string;
    /** 年（西暦） */
    year: string;
}
/** 情報システム基本情報：システム方式 */
export interface SystemArchitecture {
    /** 情報システムID */
    system_id: string;
    /** システムアーキテクチャコード */
    architecture_code: string;
    /** システムアーキテクチャ */
    architecture: string;
    /** 年（西暦） */
    year: string;
}
/** 情報システム基本情報：組織マスタ */
export interface OrganizationMaster {
    /** コード */
    code: string;
    /** 組織名 */
    name: string;
    /** 建制順 */
    order: string;
}
/** 情報システム基本情報：情報システム区分マスタ */
export interface SystemClassMaster {
    /** コード */
    code: string;
    /** 名称 */
    name: string;
}
/** 情報システム基本情報：情報処理システム分類マスタ */
export interface SystemFieldMaster {
    /** コード */
    code: string;
    /** 名称 */
    name: string;
}
/** 情報システム基本情報：システムアーキテクチャ分類マスタ */
export interface SystemArchitectureMaster {
    /** コード */
    code: string;
    /** 名称 */
    name: string;
}
