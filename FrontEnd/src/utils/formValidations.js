import lodashGet from 'lodash/get';

import { EMAIL_FIELD_VALIDATION, GMAP_FIELD_VALIDATION, VALIDATION_MESSAGES } from '../constants/messages';
import * as PATTERNS from '../constants/patterns';

export const getFieldError = ({ error, errors, name }) => {
  const newError = (error && error.message) || (errors && lodashGet(errors, name) && lodashGet(errors, name).message);
  const color = newError && 'error';

  return { error: newError, color };
};

/**
 *
 * @param {string} value - Target string to validation for
 * @param {[[string, string, boolean]]} patterns -
 * List of `[pattern, VALIDATION_MESSAGE, negate]` where,
 *  - `pattern` is a RegExp
 *  - `VALIDATION_MESSAGE` is a validation string return when pattern is a match
 *  - `negate` is a bool, if true negate the result
 *
 * @returns {boolean|string} Validation success or a message
 */
export const ValidationAggregator = (value, patterns) => {
  const errors = patterns
    .map(([pattern, message, negate = false]) => {
      if (negate) {
        return pattern.test(value) ? message : true;
      }

      return pattern.test(value) ? true : message;
    })
    .filter((e) => e !== true);

  return errors.length === 0 || errors[0];
};

export const ValidateMobileNumber = {
  required: {
    value: true,
    message: VALIDATION_MESSAGES.MOBILE_NUMBER.EMPTY,
  },
  minLength: {
    value: 10,
    message: VALIDATION_MESSAGES.MOBILE_NUMBER.MIN_LENGTH,
  },
  maxLength: {
    value: 10,
    message: VALIDATION_MESSAGES.MOBILE_NUMBER.MAX_LENGTH,
  },
  validate: (value) => ValidationAggregator(value, [[/^[6789]+\d{9}/g, VALIDATION_MESSAGES.MOBILE_NUMBER.INVALID]]),
};

export const ValidateEmailAddress = {
  maxLength: {
    value: 50,
    message: EMAIL_FIELD_VALIDATION.MAX_LENGTH,
  },
  validate: (email) => {
    if (!email) {
      return true;
    }

    return ValidationAggregator(email, [[PATTERNS.EMAIL_PATTERN, EMAIL_FIELD_VALIDATION.INVALID]]);
  },
};

export const ValidateAge = {
  validate: (value) => {
    const age = parseInt(value, 10);

    if (age <= 0) {
      return 'Please enter valid age';
    }

    return true;
  },
};

export const ValidateOTP = {
  required: {
    value: true,
    message: VALIDATION_MESSAGES.OTP.EMPTY,
  },
  minLength: {
    value: 4,
    message: VALIDATION_MESSAGES.OTP.INVALID,
  },
  validate: (value) => ValidationAggregator(value, [[/^[0-9]+$/, VALIDATION_MESSAGES.OTP.INVALID]]),
};

export const ValidateImageInput = {
  required: {
    value: true,
    message: VALIDATION_MESSAGES.IMAGE_UPLOAD.EMPTY,
  },
  minLength: {
    value: 10,
    message: VALIDATION_MESSAGES.IMAGE_UPLOAD.EMPTY,
  },
};

export const ValidateAcademyName = {
  required: {
    value: true,
    message: VALIDATION_MESSAGES.ACADEMY_NAME.EMPTY,
  },
  maxLength: {
    value: 50,
    message: VALIDATION_MESSAGES.ACADEMY_NAME.MAX_LENGTH,
  },
  validate: (value) => ValidationAggregator(value, [[/[^\d\w-. ]+/, VALIDATION_MESSAGES.ACADEMY_NAME.INVALID, true]]),
};

export const ValidateBatchName = {
  required: {
    value: true,
    message: VALIDATION_MESSAGES.BATCH_NAME.EMPTY,
  },
  maxLength: {
    value: 50,
    message: VALIDATION_MESSAGES.BATCH_NAME.MAX_LENGTH,
  },
};

export const ValidateGMapUrl = {
  required: {
    value: false,
    message: VALIDATION_MESSAGES.GROUND_LOCATION.EMPTY,
  },
  validate: (value) => {
    if (!value) {
      return true;
    }

    return ValidationAggregator(value, [[PATTERNS.URL_REGEX, GMAP_FIELD_VALIDATION.INVALID, false]]);
  },
};

export const ValidatePersonName = {
  required: {
    value: true,
    message: VALIDATION_MESSAGES.PERSON_NAME.EMPTY,
  },
  maxLength: {
    value: 50,
    message: VALIDATION_MESSAGES.PERSON_NAME.MAX_LENGTH,
  },
  validate: (value) => ValidationAggregator(value, [[/[^\d\w-. ]+/, VALIDATION_MESSAGES.PERSON_NAME.INVALID, true]]),
};

export const ValidateFullName = {
  required: {
    value: true,
    message: VALIDATION_MESSAGES.FULL_NAME.EMPTY,
  },
  maxLength: {
    value: 200,
    message: VALIDATION_MESSAGES.FULL_NAME.MAX_LENGTH,
  },
  validate: (value) => ValidationAggregator(value, [[PATTERNS.NAME_REGEX, VALIDATION_MESSAGES.FULL_NAME.INVALID]]),
};

export const ValidateJoiningDate = {
  required: {
    value: true,
    message: VALIDATION_MESSAGES.JOINING_DATE.EMPTY,
  },
};

export const ValidateDate = {
  required: {
    value: true,
    message: VALIDATION_MESSAGES.DATE.EMPTY,
  },
};

export const ValidateSubscriptionStartDate = {
  required: {
    value: true,
    message: VALIDATION_MESSAGES.JOINING_DATE.EMPTY,
  },
};

export const ValidateBirthDate = {
  required: {
    value: true,
    message: VALIDATION_MESSAGES.BIRTH_DATE.EMPTY,
  },
};

export const ValidateLastName = {
  required: {
    value: true,
    message: VALIDATION_MESSAGES.LAST_NAME.EMPTY,
  },
  maxLength: {
    value: 50,
    message: VALIDATION_MESSAGES.LAST_NAME.MAX_LENGTH,
  },
  validate: (value) => ValidationAggregator(value, [[PATTERNS.NAME_REGEX, VALIDATION_MESSAGES.LAST_NAME.INVALID]]),
};

export const ValidateMiddleName = {
  maxLength: {
    value: 50,
    message: VALIDATION_MESSAGES.MIDDLE_NAME.MAX_LENGTH,
  },
  validate: (value) => {
    if (!value) {
      return true;
    }

    return ValidationAggregator(value, [[PATTERNS.NAME_REGEX, VALIDATION_MESSAGES.MIDDLE_NAME.INVALID]]);
  },
};

export const ValidateUserName = {
  required: {
    value: true,
    message: VALIDATION_MESSAGES.NAME.EMPTY,
  },
  maxLength: {
    value: 50,
    message: VALIDATION_MESSAGES.NAME.MAX_LENGTH,
  },
  validate: (value) => ValidationAggregator(value, [[/[^\d\w-. ]+/, VALIDATION_MESSAGES.NAME.INVALID, true]]),
};

export const ValidateGSTNumber = {
  maxLength: {
    value: 15,
    message: VALIDATION_MESSAGES.GST_NUMBER.MAX_LENGTH,
  },
  validate: (value) => {
    if (!value) {
      return true;
    }

    return ValidationAggregator(value, [[PATTERNS.GST_NUMBER, VALIDATION_MESSAGES.GST_NUMBER.INVALID]]);
  },
};

export const ValidateAddress = {
  required: {
    value: true,
    message: VALIDATION_MESSAGES.ADDRESS.EMPTY,
  },
  maxLength: {
    value: 100,
    message: VALIDATION_MESSAGES.ADDRESS.MAX_LENGTH,
  },
};

export const ValidateReason = {
  required: {
    value: true,
    message: VALIDATION_MESSAGES.REASON.EMPTY,
  },
  maxLength: {
    value: 250,
    message: VALIDATION_MESSAGES.REASON.MAX_LENGTH,
  },
};

export const ValidateCity = {
  required: {
    value: true,
    message: VALIDATION_MESSAGES.CITY.EMPTY,
  },
  maxLength: {
    value: 50,
    message: VALIDATION_MESSAGES.CITY.MAX_LENGTH,
  },
  validate: (value) => {
    return ValidationAggregator(value, [[PATTERNS.NAME_REGEX, VALIDATION_MESSAGES.CITY.INVALID]]);
  },
};

export const ValidatePinCode = {
  required: {
    value: true,
    message: VALIDATION_MESSAGES.PIN_CODE.EMPTY,
  },
  minLength: {
    value: 6,
    message: VALIDATION_MESSAGES.PIN_CODE.MIN_LENGTH,
  },
  maxLength: {
    value: 8,
    message: VALIDATION_MESSAGES.PIN_CODE.MAX_LENGTH,
  },
  validate: (value) => ValidationAggregator(value, [[/[^\d]+/g, VALIDATION_MESSAGES.PIN_CODE.INVALID, true]]),
};

export const ValidateSportAccess = {
  required: {
    value: true,
    message: VALIDATION_MESSAGES.SPORT_ACCESS.EMPTY,
  },
  validate: (value) => {
    if (value < 1) {
      return VALIDATION_MESSAGES.SPORT_ACCESS.EMPTY;
    }

    return true;
  },
};

export const ValidateSport = {
  required: {
    value: true,
    message: VALIDATION_MESSAGES.SPORT.EMPTY,
  },
};

export const ValidateAmenities = {
  required: {
    value: true,
    message: VALIDATION_MESSAGES.AMENITY.EMPTY,
  },
};

export const ValidateCoaching = {
  required: {
    value: true,
    message: VALIDATION_MESSAGES.COACHING.EMPTY,
  },
};

export const ValidatePaymentType = {
  required: {
    value: true,
    message: VALIDATION_MESSAGES.PAYMENT_TYPE.EMPTY,
  },
};

export const ValidatePlan = {
  required: {
    value: true,
    message: VALIDATION_MESSAGES.SUBSCRIPTION_PLAN.EMPTY,
  },
};

export const ValidateTemplate = {
  required: {
    value: true,
    message: VALIDATION_MESSAGES.TEMPLATE.EMPTY,
  },
};

export const ValidateBatch = {
  required: {
    value: true,
    message: VALIDATION_MESSAGES.BATCH.EMPTY,
  },
};

export const ValidateSubscription = {
  required: {
    value: true,
    message: VALIDATION_MESSAGES.SUBSCRIPTION.EMPTY,
  },
};

export const ValidateRemarks = {
  maxLength: {
    value: 80,
    message: VALIDATION_MESSAGES.REMARKS.MAX_LENGTH,
  },
};

export const ValidateChequeNumber = {
  required: {
    value: true,
    message: VALIDATION_MESSAGES.CHEQUE_NUMBER.EMPTY,
  },
  maxLength: {
    value: 10,
    message: VALIDATION_MESSAGES.CHEQUE_NUMBER.MAX_LENGTH,
  },
};

export const ValidateBankName = {
  required: {
    value: true,
    message: VALIDATION_MESSAGES.BANK_NAME.EMPTY,
  },
  maxLength: {
    value: 50,
    message: VALIDATION_MESSAGES.BANK_NAME.MAX_LENGTH,
  },
};

export const ValidateTimeSlot = {
  required: {
    value: true,
    message: VALIDATION_MESSAGES.TIME_SLOT.EMPTY,
  },
};

export const ValidateBatchDays = {
  required: {
    value: true,
    message: VALIDATION_MESSAGES.BATCH_DAYS.EMPTY,
  },
};

export const ValidateBatchLimit = {
  required: {
    value: true,
    message: VALIDATION_MESSAGES.BATCH_LIMIT.EMPTY,
  },
  validate: (value) => {
    const numericValue = /^[-+]?(\d+(\.\d*)?|\.\d+|Infinity)$/.test(value) ? Number(value) : NaN;

    if (Number.isNaN(numericValue)) return VALIDATION_MESSAGES.BATCH_LIMIT.INVALID;

    if (Number(numericValue) <= 0) {
      return VALIDATION_MESSAGES.BATCH_LIMIT.INVALID_LIMIT;
    }

    if (numericValue.toString().split('.')[0]?.length > 8) {
      return VALIDATION_MESSAGES.BATCH_LIMIT.INVALID_LIMIT;
    }

    return true;
  },
};

export const ValidateSubsPlanFee = {
  required: {
    value: true,
    message: VALIDATION_MESSAGES.SUBSCRIPTION_FEE.EMPTY,
  },
  validate: (value) => {
    const numericValue = /^[0-9\b]+$/.test(value) ? Number(value) : NaN;

    if (Number.isNaN(numericValue)) return VALIDATION_MESSAGES.SUBSCRIPTION_FEE.INVALID;

    if (Number(numericValue) <= 0) {
      return VALIDATION_MESSAGES.SUBSCRIPTION_FEE.INVALID_LIMIT;
    }

    if (numericValue.toString().split('.')[0]?.length > 8) {
      return VALIDATION_MESSAGES.SUBSCRIPTION_FEE.INVALID_LIMIT;
    }

    return true;
  },
};

export const ValidateEnrolmentFee = {
  validate: (value) => {
    if (!value) {
      return true;
    }
    const numericValue = /^[0-9\b]+$/.test(value) ? Number(value) : NaN;

    if (Number.isNaN(numericValue)) return VALIDATION_MESSAGES.ENROLMENT_FEE.INVALID;

    if (Number(numericValue) < 0) {
      return VALIDATION_MESSAGES.ENROLMENT_FEE.INVALID_LIMIT;
    }

    if (numericValue.toString().split('.')[0]?.length > 8) {
      return VALIDATION_MESSAGES.ENROLMENT_FEE.INVALID_LIMIT;
    }

    return true;
  },
};

export const ValidateGender = {
  required: {
    value: true,
    message: VALIDATION_MESSAGES.GENDER.EMPTY,
  },
};

export const ValidateNoOfCourts = {
  required: {
    value: true,
    message: VALIDATION_MESSAGES.NO_OF_COURTS.EMPTY,
  },
  validate: (value) => {
    if (!value) {
      return true;
    }
    const numericValue = /^[0-9\b]+$/.test(value) ? Number(value) : NaN;

    if (Number.isNaN(numericValue)) return VALIDATION_MESSAGES.NO_OF_COURTS.INVALID;

    if (Number(numericValue) <= 0) {
      return VALIDATION_MESSAGES.NO_OF_COURTS.INVALID_LIMIT;
    }

    if (numericValue.toString().split('.')[0]?.length > 3) {
      return VALIDATION_MESSAGES.NO_OF_COURTS.INVALID_LIMIT;
    }

    return true;
  },
};
