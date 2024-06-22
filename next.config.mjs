/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        MONGO_URL: process.env.MONGO_URL || 'mongodb+srv://Metalino:stt4i579HpawSDPO@metalino-cluster.fxxyyul.mongodb.net/food-ordering'
      },
};

export default nextConfig;
