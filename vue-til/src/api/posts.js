// 학습노트 CRUD API
import { posts } from "./index.js";

// 학습노트 데이터 조회 API
function fetchPosts() {
  return posts.get("/");
}

// 학습노트 데이터 생성 API
function createPost(postData) {
  return posts.post("/", postData);
}

export { fetchPosts, createPost };
