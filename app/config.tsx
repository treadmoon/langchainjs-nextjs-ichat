export const AGENT_CONFIG = {
  modelName: "moonshot-v1-8k", // 替换为具体模型名称
  openAIApiKey: process.env.OPENAI_API_KEY, // 替换为你的 API 密钥
  configuration: {
    baseURL: "https://api.moonshot.cn/v1", // Moonshot API 端点
  },
};
