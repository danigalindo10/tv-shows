/* eslint-disable quotes */
/* jshint camelcase: false */
/* eslint-disable camelcase */
// import api_mock from '../_mock_/api_mock.json';
import comments from '../_mock_/comments.js';

const movieComments = [
  {
    username: "Jhon",
    comment: "Wowww...",
  },
  {
    username: "Maria",
    comment: "Cool",
  },
  {
    username: "Peter",
    comment: "Nice movie",
  },
];

describe("Test Number of movies and comments", () => {
//   test("test number of movies", () => {
//     expect(movies(api_mock)).toBe(10);
//   });
  test("Test Number of comments", () => {
    expect(comments(movieComments)).toBe(3);
  });
});