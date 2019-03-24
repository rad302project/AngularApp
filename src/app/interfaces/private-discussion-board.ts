export interface IPrivateDiscussionBoard {
    Title: string;
    Content: string;
    ID?: number;
    CreatedAt?: Date;
    Members?: Member[];
}

export interface Member {
    MemberID: number;
    MemberName: string
}