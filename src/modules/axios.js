import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const getDeviceId = () => {
    if (localStorage.deviceId) {
        return localStorage.deviceId;
    } else {
        const deviceId = uuidv4();
        localStorage.deviceId = deviceId;
        return deviceId;
    }
};

const headers = {
    "X-Device-Id": getDeviceId(),
    "X-Client-Time": Date.now(),
    "X-Platform": "web",
    "X-Version": import.meta.env.VITE_APP_VERSION,
    "Content-type": "application/json",
};

export const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    // headers,
});
