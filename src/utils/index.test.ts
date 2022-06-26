import { describe, expect, it } from "vitest";
import { convertForChart } from ".";

describe("convertForChart", () => {
  it("converts to a format suitable as a data source for chart", () => {
    const from = [
      {
        prefCode: 1,
        prefName: "北海道",
        populations: [
          { year: 1960, value: 5039206 },
          { year: 1965, value: 5171800 },
          { year: 1970, value: 5184287 },
        ],
      },
      {
        prefCode: 2,
        prefName: "青森県",
        populations: [
          { year: 1960, value: 1426606 },
          { year: 1965, value: 1416591 },
          { year: 1970, value: 1427520 },
        ],
      },
    ];

    const to = [
      { year: 1960, ["北海道"]: 5039206, ["青森県"]: 1426606 },
      { year: 1965, ["北海道"]: 5171800, ["青森県"]: 1416591 },
      { year: 1970, ["北海道"]: 5184287, ["青森県"]: 1427520 },
    ];

    expect(convertForChart(from)).toMatchObject(to);
  });
});
