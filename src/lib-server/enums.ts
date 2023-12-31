export const UserRole = {
    USER: "USER",
    MODERATOR: "MODERATOR",
    ADMIN: "ADMIN"
} as const;
export type UserRole = (typeof UserRole)[keyof typeof UserRole];
