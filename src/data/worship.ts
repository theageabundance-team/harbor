export type WorshipTrack = {
  title: string;
  artist: string;
  youtubeId: string;
};

/**
 * YouTube IDs point to official artist/label uploads, verified at build time.
 * To change the lineup, replace the youtubeId with another official video's ID
 * (found in the video's URL after "v=").
 */
export const worshipTracks: WorshipTrack[] = [
  { title: "What A Beautiful Name", artist: "Hillsong Worship", youtubeId: "nQWFzMvCfLE" },
  { title: "Way Maker", artist: "Leeland", youtubeId: "iJCV_2H9xD0" },
  { title: "Goodness of God", artist: "Bethel Music & Jenn Johnson", youtubeId: "IvSuGyJQ6oM" },
  { title: "Oceans (Where Feet May Fail)", artist: "Hillsong UNITED", youtubeId: "PfpEefKiG2I" },
  { title: "10,000 Reasons (Bless the Lord)", artist: "Matt Redman", youtubeId: "XtwIT8JjddM" },
  { title: "Build My Life", artist: "Pat Barrett", youtubeId: "Z32HiCoFzlU" },
  { title: "Reckless Love", artist: "Cory Asbury", youtubeId: "PyiD9Od8VF0" },
];
