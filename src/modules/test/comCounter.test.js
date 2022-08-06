/* eslint-disable quotes */
/* jshint camelcase: false */
/* eslint-disable camelcase */
// import api_mock from '../_mock_/api_mock.json';
import comments from "./comments";

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
  test("Test Number of comments", () => {
    expect(comments(movieComments)).toBe(3);
  });
});