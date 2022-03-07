import { makeVar } from "@apollo/client";
export const MOCK_DATA = {
  // TODO: update to books mock data
  id: "Bedrock Books",
  books: [
    {
      id: "0",
    },
  ],
};

export const mockBookData = makeVar(MOCK_DATA);
