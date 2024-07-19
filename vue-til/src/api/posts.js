// 학습노트 CRUD API
import { posts } from "./index.js";

// 학습노트 데이터 조회 API
function fetchPosts() {
  return posts.get("/");
}

// 특정 학습노트 데이터 조회 API
function fetchPost(postId) {
  return posts.get(postId);
}

// 학습노트 데이터 생성 API
function createPost(postData) {
  return posts.post("/", postData);
}

// 학습노트 데이터 수정 API
function modifyPost(postId, postData) {
  return posts.put(postId, postData);
}

// 학습노트 데이터 삭제 API
function deletePost(postId) {
  return posts.delete(postId);
}

export { fetchPosts, fetchPost, createPost, modifyPost, deletePost };
