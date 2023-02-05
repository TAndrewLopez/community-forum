import { Timestamp } from "@google-cloud/firestore";
import { atom } from "recoil";

export interface Community {
  id: string;
  creatorId: string;
  numberOfMembers: number;
  privacyType: "public" | "restricted" | "private";
  createdAt?: Timestamp;
  imageUrl?: string;
}

export interface CommunitySnippet {
  communityId: string;
  isModerator: boolean;
  imageURL?: string;
}

interface CommunityState {
  mySnippets: CommunitySnippet[];
  // visitedCommunities
}

const defaultCommunitiesState: CommunityState = {
  mySnippets: [],
};

export const CommunityState = atom<CommunityState>({
  key: "communitiesState",
  default: defaultCommunitiesState,
});
