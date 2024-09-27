export interface IVacancy {
    "id": number | string,
    "user_id": number | string,
    "company_name": string,
    "job_type_id": number | string,
    "job_type": string,
    "degree_type_id": number | string,
    "educational_level": string,
    "title": string,
    "job_activities": IJobActivity[]
    "created_at": string,
    "updated_at": string
}

export interface IJobActivity {
    "id": number | string,
    "name": string,
    "name_trans": string,
    "order": number,
    "slug": any,
    "is_active": boolean,
    "created_at": string,
    "updated_at": string
}