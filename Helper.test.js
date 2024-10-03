const {
  getFormatedDate__YYYY_MM_DD,
  getInstanceLastDayOnCurrentMonth,
  getFirstDayOnNextMonth,
} = require("./Helper");

test("Получили форматированную дату YYYY-MM-DD", () => {
  expect(getFormatedDate__YYYY_MM_DD(new Date("2024-1-1"))).toBe("2024-01-01");
});

test("Получили последнюю дату для текущего месяца", () => {
  expect(getInstanceLastDayOnCurrentMonth(new Date("2024-1-1"))).toBe(
    "2024-01-31"
  );
  expect(getInstanceLastDayOnCurrentMonth(new Date("2024-2-1"))).toBe(
    "2024-02-29"
  );
  expect(getInstanceLastDayOnCurrentMonth(new Date("2024-3-1"))).toBe(
    "2024-03-31"
  );
  expect(getInstanceLastDayOnCurrentMonth(new Date("2024-4-1"))).toBe(
    "2024-04-30"
  );
  expect(getInstanceLastDayOnCurrentMonth(new Date("2024-5-1"))).toBe(
    "2024-05-31"
  );
  expect(getInstanceLastDayOnCurrentMonth(new Date("2024-6-1"))).toBe(
    "2024-06-30"
  );
  expect(getInstanceLastDayOnCurrentMonth(new Date("2024-7-1"))).toBe(
    "2024-07-31"
  );
  expect(getInstanceLastDayOnCurrentMonth(new Date("2024-8-1"))).toBe(
    "2024-08-31"
  );
  expect(getInstanceLastDayOnCurrentMonth(new Date("2024-9-1"))).toBe(
    "2024-09-30"
  );
  expect(getInstanceLastDayOnCurrentMonth(new Date("2024-10-1"))).toBe(
    "2024-10-31"
  );
  expect(getInstanceLastDayOnCurrentMonth(new Date("2024-11-1"))).toBe(
    "2024-11-30"
  );
  expect(getInstanceLastDayOnCurrentMonth(new Date("2024-12-1"))).toBe(
    "2024-12-31"
  );

  expect(getInstanceLastDayOnCurrentMonth(new Date("2024-1-30"))).toBe(
    "2024-01-31"
  );
  expect(getInstanceLastDayOnCurrentMonth(new Date("2024-2-28"))).toBe(
    "2024-02-29"
  );
  expect(getInstanceLastDayOnCurrentMonth(new Date("2024-3-30"))).toBe(
    "2024-03-31"
  );
  expect(getInstanceLastDayOnCurrentMonth(new Date("2024-4-29"))).toBe(
    "2024-04-30"
  );
  expect(getInstanceLastDayOnCurrentMonth(new Date("2024-5-30"))).toBe(
    "2024-05-31"
  );
  expect(getInstanceLastDayOnCurrentMonth(new Date("2024-6-29"))).toBe(
    "2024-06-30"
  );
  expect(getInstanceLastDayOnCurrentMonth(new Date("2024-7-30"))).toBe(
    "2024-07-31"
  );
  expect(getInstanceLastDayOnCurrentMonth(new Date("2024-8-30"))).toBe(
    "2024-08-31"
  );
  expect(getInstanceLastDayOnCurrentMonth(new Date("2024-9-29"))).toBe(
    "2024-09-30"
  );
  expect(getInstanceLastDayOnCurrentMonth(new Date("2024-10-30"))).toBe(
    "2024-10-31"
  );
  expect(getInstanceLastDayOnCurrentMonth(new Date("2024-11-29"))).toBe(
    "2024-11-30"
  );
  expect(getInstanceLastDayOnCurrentMonth(new Date("2024-12-30"))).toBe(
    "2024-12-31"
  );

  expect(getInstanceLastDayOnCurrentMonth(new Date("2024-1-31"))).toBe(
    "2024-01-31"
  );
  expect(getInstanceLastDayOnCurrentMonth(new Date("2024-2-29"))).toBe(
    "2024-02-29"
  );
  expect(getInstanceLastDayOnCurrentMonth(new Date("2024-3-31"))).toBe(
    "2024-03-31"
  );
  expect(getInstanceLastDayOnCurrentMonth(new Date("2024-4-30"))).toBe(
    "2024-04-30"
  );
  expect(getInstanceLastDayOnCurrentMonth(new Date("2024-5-31"))).toBe(
    "2024-05-31"
  );
  expect(getInstanceLastDayOnCurrentMonth(new Date("2024-6-30"))).toBe(
    "2024-06-30"
  );
  expect(getInstanceLastDayOnCurrentMonth(new Date("2024-7-31"))).toBe(
    "2024-07-31"
  );
  expect(getInstanceLastDayOnCurrentMonth(new Date("2024-8-31"))).toBe(
    "2024-08-31"
  );
  expect(getInstanceLastDayOnCurrentMonth(new Date("2024-9-30"))).toBe(
    "2024-09-30"
  );
  expect(getInstanceLastDayOnCurrentMonth(new Date("2024-10-31"))).toBe(
    "2024-10-31"
  );
  expect(getInstanceLastDayOnCurrentMonth(new Date("2024-11-30"))).toBe(
    "2024-11-30"
  );
  expect(getInstanceLastDayOnCurrentMonth(new Date("2024-12-31"))).toBe(
    "2024-12-31"
  );
});

test("Получили первый день следующего месяца", () => {
  const TEST_CASES_ARRAY = [
    {
      realResult: getFirstDayOnNextMonth(new Date("2024-1-1")),
      expectedResult: "2024-02-01",
    },
    {
      realResult: getFirstDayOnNextMonth(new Date("2024-2-1")),
      expectedResult: "2024-03-01",
    },
    {
      realResult: getFirstDayOnNextMonth(new Date("2024-3-1")),
      expectedResult: "2024-04-01",
    },
    {
      realResult: getFirstDayOnNextMonth(new Date("2024-4-1")),
      expectedResult: "2024-05-01",
    },
    {
      realResult: getFirstDayOnNextMonth(new Date("2024-5-1")),
      expectedResult: "2024-06-01",
    },
    {
      realResult: getFirstDayOnNextMonth(new Date("2024-6-1")),
      expectedResult: "2024-07-01",
    },
    {
      realResult: getFirstDayOnNextMonth(new Date("2024-7-1")),
      expectedResult: "2024-08-01",
    },
    {
      realResult: getFirstDayOnNextMonth(new Date("2024-8-1")),
      expectedResult: "2024-09-01",
    },
    {
      realResult: getFirstDayOnNextMonth(new Date("2024-9-1")),
      expectedResult: "2024-10-01",
    },
    {
      realResult: getFirstDayOnNextMonth(new Date("2024-10-1")),
      expectedResult: "2024-11-01",
    },
    {
      realResult: getFirstDayOnNextMonth(new Date("2024-11-1")),
      expectedResult: "2024-12-01",
    },
    {
      realResult: getFirstDayOnNextMonth(new Date("2024-12-1")),
      expectedResult: "2025-01-01",
    },
  ];

  TEST_CASES_ARRAY.forEach(({ realResult, expectedResult }) => {
    expect(realResult).toBe(expectedResult);
  });
});
