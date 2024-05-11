export type Movie = {
    // type: MovieType;
    id: string;
    title: string;
    description: string;
    yearLaunched: number;
    opened: boolean;
    // rating: Rating;
    duration: number;
    // genres: Genre[];
    categories: string[];
    castMembers: string[];
    thumbFileURL: string;
    bannerFileURL: string;
    bannerHalfFileURL: string;
    trailerFileURL: string;
    videoFileURL: string;
    createdAt: Date;
    updatedAt: Date;
  };

  export type Movies = Movie[];