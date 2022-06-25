import { describe, expect, it } from "vitest";
import { convertForChart } from ".";

describe("convert", () => {
  it("converts to a format suitable as a data source for chart", () => {
    const from = [
      {
        prefCode: 1,
        populations: [
          { year: 1960, value: 5039206 },
          { year: 1965, value: 5171800 },
          { year: 1970, value: 5184287 },
        ],
      },
      {
        prefCode: 2,
        populations: [
          { year: 1960, value: 1426606 },
          { year: 1965, value: 1416591 },
          { year: 1970, value: 1427520 },
        ],
      },
    ];

    const to = [
      { year: 1960, 1: 5039206 },
      { year: 1965, 1: 5171800 },
      { year: 1970, 1: 5184287 },
      { year: 1960, 2: 1426606 },
      { year: 1965, 2: 1416591 },
      { year: 1970, 2: 1427520 },
    ];

    expect(convertForChart(from)).toMatchObject(to);
  });
});
