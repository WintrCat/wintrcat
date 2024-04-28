import { youtube } from "@googleapis/youtube";
import StatisticsCache from "../types/StatisticsCache";

const youtubeApi = youtube("v3");

const statisticsCache: StatisticsCache = {};

export async function getLatestVideo() {
    // get latest video from yt data api somehow
}