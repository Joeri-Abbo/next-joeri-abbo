type BadgeType = {
    id: string;
    amount: number;
    expires_at_date: string | null;
    issued_at_date: string;
    issued_to: string;
    locale: string;
    public: boolean;
    state: string;
    translate_metadata: boolean;
    accepted_at: string;
    expires_at: string | null;
    issued_at: string;
    last_updated_at: string;
    updated_at: string;
    earner_path: string;
    earner_photo_url: string;
    is_private_badge: boolean;
    user_is_earner: boolean;
    issuer: {
        summary: string;
        entities: {
            label: string;
            primary: boolean;
            entity: {
                type: string;
                id: string;
                name: string;
                url: string;
                vanity_url: string;
                internationalize_badge_templates: boolean;
                share_to_ziprecruiter: boolean;
                verified: boolean;
            };
        }[];
    };
    badge_template: {
        id: string;
        cost: string | null;
        description: string;
        global_activity_url: string;
        earn_this_badge_url: string | null;
        enable_earn_this_badge: boolean;
        enable_detail_attribute_visibility: boolean;
        level: string | null;
        name: string;
        vanity_slug: string;
        time_to_earn: string | null;
        type_category: string;
        show_badge_lmi: boolean;
        show_skill_tag_links: boolean;
        translatable: boolean;
        image: {
            id: string;
            url: string;
        };
        image_url: string;
        url: string;
        issuer: {
            summary: string;
            entities: {
                label: string;
                primary: boolean;
                entity: {
                    type: string;
                    id: string;
                    name: string;
                    url: string;
                    vanity_url: string;
                    internationalize_badge_templates: boolean;
                    share_to_ziprecruiter: boolean;
                    verified: boolean;
                };
            }[];
        };
        alignments: any[];
        badge_template_activities: {
            id: string;
            activity_type: string;
            required_badge_template_id: string | null;
            title: string;
            url: string;
        }[];
        endorsements: any[];
        skills: {
            id: string;
            name: string;
            vanity_slug: string;
        }[];
    };
    image: {
        id: string;
        url: string;
    };
    image_url: string;
    evidence: any[];
    recommendations: any[];
};

export default BadgeType;