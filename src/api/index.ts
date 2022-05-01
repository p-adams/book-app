import { makeVar } from "@apollo/client";
export const MOCK_DATA = {
  // TODO: update to contacts mock data
  id: "",
  contacts: [
    {
      id: "0",
    },
  ],
};

export const mockContactListData = makeVar(MOCK_DATA);
