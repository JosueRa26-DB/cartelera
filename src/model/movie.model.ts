export interface Movie{
    id : string;
    title: string;
    description: string;
    duration: string;
    cinema?: string;
    showtimes: string;
    availableSeats: number;
    posterUrl: string;
}