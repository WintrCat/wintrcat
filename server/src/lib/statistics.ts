import { youtube } from "@googleapis/youtube";
import Statistics from "../types/Statistics";

const youtubeApi = youtube("v3");

const fetchIntervalMinutes = parseInt(process.env.YOUTUBE_FETCH_INTERVAL_MINUTES || "0");
const channelID = process.env.YOUTUBE_CHANNEL_ID;
const youtubeApiKey = process.env.YOUTUBE_DATA_API_KEY;

let statisticsCache: Statistics = {};

async function fetchStatistics(): Promise<Statistics | null> {
    if (!channelID || !youtubeApiKey) {
        return null;
    }

    // Retrieve the analytics behind the channel ID
    const channelsResponse = await youtubeApi.channels.list({
        part: ["contentDetails", "statistics"],
        id: [channelID],
        key: youtubeApiKey
    });

    const channel = channelsResponse.data.items?.[0];
    if (!channel) return null;
    if (!channel.statistics || !channel.contentDetails) {
        return null;
    }

    const analytics = channel.statistics;

    // Retrieve the uploads playlist from the channel
    const uploadsPlaylistId = channel.contentDetails.relatedPlaylists?.uploads;
    if (!uploadsPlaylistId) return null;

    const uploadsResponse = await youtubeApi.playlistItems.list({
        part: ["snippet"],
        playlistId: uploadsPlaylistId,
        key: youtubeApiKey
    });

    const uploads = uploadsResponse.data.items;
    if (!uploads) return null;

    // Find the first long form video in the list (the most recent one)
    const latestLongFormVideoId = uploads.find(upload => {
        const title = upload.snippet?.title;
        const id = upload.snippet?.resourceId?.videoId;
        if (!title || !id) return false;

        return !title.includes("#shorts");
    })?.snippet?.resourceId?.videoId;
    if (!latestLongFormVideoId) return null;

    // Build statistics object
    const statistics = {
        subscribers: parseInt(analytics.subscriberCount || "0"),
        views: parseInt(analytics.viewCount || "0"),
        videos: parseInt(analytics.videoCount || "0"),
        latestVideo: `https://youtube.com/embed/${latestLongFormVideoId}`
    };

    // Update statistics cache with fetched statistics
    statisticsCache = statistics;

    // Return statistics
    return statistics;
}

export async function createStatisticsUpdater() {
    return setInterval(
        fetchStatistics,
        fetchIntervalMinutes * 1000 * 60
    );
}

export async function getStatistics() {
    if (Object.values(statisticsCache).length == 0) {
        return await fetchStatistics();
    } else {
        return statisticsCache;
    }
}