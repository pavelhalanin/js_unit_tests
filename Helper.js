function getFormatedDate__YYYY_MM_DD(d = new Date()) {
  const YYYY = d.getFullYear();

  const M = d.getMonth() + 1;
  const MM = `${M}`.padStart(2, "0");

  const D = d.getDate();
  const DD = `${D}`.padStart(2, "0");

  return `${YYYY}-${MM}-${DD}`;
}

function getInstanceLastDayOnCurrentMonth(d = new Date()) {
  const CURRENT_YEAR = d.getFullYear();
  const CURRENT_MONTH = d.getMonth() + 1;

  const TEMP_INSTANCE = new Date(`${CURRENT_YEAR}-${CURRENT_MONTH}-28`);

  const NEXT_MONTH_DATE_INSTANCE = new Date(
    TEMP_INSTANCE.getTime() + 1 * 1000 * 60 * 60 * 24 * 28
  );
  const NEXT_MONTH__YEAR = NEXT_MONTH_DATE_INSTANCE.getFullYear();
  const NEXT_MONTH__MONTH = NEXT_MONTH_DATE_INSTANCE.getMonth() + 1;
  const NEXT_MONTH_FIRST_DATE_INSTANCE = new Date(
    `${NEXT_MONTH__YEAR}-${NEXT_MONTH__MONTH}-1`
  );
  const NEXT_MONTH_FIRST_DATE_TIME = NEXT_MONTH_FIRST_DATE_INSTANCE.getTime();
  const LAST_DATE_ON_CURRENT_MONTH = new Date(
    NEXT_MONTH_FIRST_DATE_TIME - 1 * 1000 * 60 * 60 * 24
  );

  const YYYY = LAST_DATE_ON_CURRENT_MONTH.getFullYear();

  const M = LAST_DATE_ON_CURRENT_MONTH.getMonth() + 1;
  const MM = `${M}`.padStart(2, "0");

  const D = LAST_DATE_ON_CURRENT_MONTH.getDate();
  const DD = `${D}`.padStart(2, "0");

  return `${YYYY}-${MM}-${DD}`;
}

function getFirstDayOnNextMonth(d = new Date()) {
  const CURRENT_YEAR = d.getFullYear();
  const CURRENT_MONTH = d.getMonth() + 1;

  const TEMP_INSTANCE_ON_THIS_MONTH = new Date(
    `${CURRENT_YEAR}-${CURRENT_MONTH}-28`
  );
  const TEMP_TIME_ON_THIS_MONTH = TEMP_INSTANCE_ON_THIS_MONTH.getTime();
  const TEMP_INSTANCE_ON_NEXT_MONTH = new Date(
    TEMP_TIME_ON_THIS_MONTH + 1 * 1000 * 60 * 60 * 24 * 28
  );

  
  const NEXT_MONTH__YEAR = TEMP_INSTANCE_ON_NEXT_MONTH.getFullYear();
  const NEXT_MONTH__MONTH = TEMP_INSTANCE_ON_NEXT_MONTH.getMonth() + 1;

  const YYYY = NEXT_MONTH__YEAR;
  const MM = `${NEXT_MONTH__MONTH}`.padStart(2, '0');
  const DD = '01';

  return `${YYYY}-${MM}-${DD}`;
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = {
      getFormatedDate__YYYY_MM_DD,
      getInstanceLastDayOnCurrentMonth,
      getFirstDayOnNextMonth,
    };
}
