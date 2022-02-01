module.exports = {
    // Page and Application information
    pageId: process.env.PAGE_ID,
    appId: process.env.APP_ID,
    pageAccesToken: process.env.PAGE_ACCESS_TOKEN,
    appSecret: process.env.APP_SECRET,
    verifyToken: process.env.VERIFY_TOKEN,
  
    // URL of your app domain
    appUrl: process.env.APP_URL,
  
    // URL of your website
    shopUrl: process.env.SHOP_URL,
  
    // Persona IDs
    personas: {},
  
    // Preferred port (default to 3000)
    port: process.env.PORT || 3000,
  
    // Base URL for Messenger Platform API calls
    get apiUrl() {
      return `${this.apiDomain}/${this.apiVersion}`;
    },
  
    // URL of your webhook endpoint
    get webhookUrl() {
      return `${this.appUrl}/webhook`;
    },
  
    
  }