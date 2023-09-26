const conf = {
  appwriteUrl: String(import.meta.env.REACT_APP_API_URL),
  appwriteProjectId: String(import.meta.env.REACT_APP_PROJECT_ID),
  appwriteCollectionId: String(import.meta.env.REACT_APP_COLLECTION_ID),
  appwriteDatabaseId: String(import.meta.env.REACT_APP_DATABASE_ID),
  appwriteBucketId: String(import.meta.env.REACT_APP_BUCKET_ID),
};

export default conf;
