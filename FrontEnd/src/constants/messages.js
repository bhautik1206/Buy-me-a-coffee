export const EMAIL_FIELD_VALIDATION = {
  REQUIRED: `Email is required`,
  EMPTY: `Email is required`,
  INVALID: `Please enter valid email`,
  ALREADY_EXISTS: `Email already exists, Please enter another email`,
  MAX_LENGTH: `Email cannot be more than 50 characters`,
};

export const GMAP_FIELD_VALIDATION = {
  INVALID: `Please enter valid location Url`,
};

export const VALIDATION_MESSAGES = {
  OTP: {
    EMPTY: 'OTP is required',
    INVALID: 'Please enter a valid OTP',
  },
  IMAGE_UPLOAD: {
    EMPTY: 'Please upload an image',
    INVALID: `File type not supported, please upload a JPEG, JPG or PNG format image`,
    MAX_SIZE: `File size is too large, Please upload 5MB or less than that size`,
    MULTIPLE: `You can upload only one File`,
  },
  MOBILE_NUMBER: {
    EMPTY: `Mobile number is required`,
    INVALID: `Please enter a valid mobile number`,
    MIN_LENGTH: `Mobile number cannot be less than 10 characters`,
    MAX_LENGTH: `Mobile number cannot be more than 10 characters`,
  },
  ACADEMY_NAME: {
    EMPTY: `Academy name is required`,
    INVALID: `Academy name can contain only alpha numeric characters`,
    MAX_LENGTH: `Academy name cannot exceed 50 characters`,
  },
  GST_NUMBER: {
    EMPTY: `GST number is required`,
    INVALID: `Please enter a valid GST number`,
    MAX_LENGTH: `GST number cannot exceed more than 15 characters`,
  },
  ADDRESS: {
    EMPTY: 'Address is required',
    INVALID: 'Only hyphen allowed as a special character',
    MAX_LENGTH: 'Address can contain upto maximum 100 characters only',
  },
  CITY: {
    EMPTY: 'City is required',
    MAX_LENGTH: 'City can contain upto maximum 50 characters only',
    INVALID: 'Please enter valid city name',
  },
  REMARKS: {
    MAX_LENGTH: 'Remarks can contain upto maximum 80 characters only',
  },
  BANK_NAME: {
    EMPTY: 'Required field',
    MAX_LENGTH: 'Bank name can contain upto maximum 50 characters only',
  },
  CHEQUE_NUMBER: {
    EMPTY: 'Required field',
    MAX_LENGTH: 'Cheque number can contain upto maximum 10 characters only',
  },
  PIN_CODE: {
    EMPTY: 'Pincode is a required',
    INVALID: 'Enter only numeric',
    MIN_LENGTH: 'Pincode should be minimum 6 characters long',
    MAX_LENGTH: 'Pincode cannot be more than 8 characters',
  },
  NAME: {
    EMPTY: `Name is required`,
    INVALID: `Name can contain only alpha numeric characters`,
    MAX_LENGTH: `Name cannot exceed 50 characters`,
  },
  SPORT_ACCESS: {
    EMPTY: 'Please select at least one sport',
  },
  SPORT: {
    EMPTY: 'Required field',
  },
  AMENITY: {
    EMPTY: 'Required field',
  },
  COACHING: {
    EMPTY: 'Required field',
  },
  TIME_SLOT: {
    EMPTY: 'Required field',
  },
  BATCH_LIMIT: {
    EMPTY: 'Filed is required',
    INVALID_LIMIT: 'Limit is invalid',
    INVALID: 'Limit can contain only numeric characters',
  },
  BATCH_DAYS: {
    EMPTY: 'Please select at least one option',
  },
  SUBSCRIPTION_FEE: {
    EMPTY: 'Required field',
    INVALID_LIMIT: 'Fee is invalid',
    INVALID: 'Fee can contain only numeric characters',
  },
  ENROLMENT_FEE: {
    EMPTY: 'Required field',
    INVALID_LIMIT: 'Enrolment fee is invalid',
    INVALID: 'Enrolment fee can contain only numeric characters',
  },
  NO_OF_COURTS: {
    EMPTY: 'Required field',
    INVALID_LIMIT: 'No of courts must be greater than 0',
  },
  BATCH: {
    EMPTY: 'Required field',
  },
  SUBSCRIPTION_PLAN: {
    EMPTY: 'Required field',
  },
  FULL_NAME: {
    EMPTY: 'Required field',
    MAX_LENGTH: `Full name cannot exceed 200 characters`,
    INVALID: 'Full name can contain only alpha characters',
  },
  LAST_NAME: {
    EMPTY: 'Required field',
    MAX_LENGTH: `Last name cannot exceed 50 characters`,
    INVALID: 'Last name can contain only alpha characters',
  },
  MIDDLE_NAME: {
    EMPTY: 'Required field',
    MAX_LENGTH: `Middle name cannot exceed 50 characters`,
    INVALID: 'Middle name can contain only alpha characters',
  },
  JOINING_DATE: {
    EMPTY: 'Required field',
  },
  BIRTH_DATE: {
    EMPTY: 'Required field',
  },
  SUBSCRIPTION: {
    EMPTY: 'Required field',
  },
  PAYMENT_TYPE: {
    EMPTY: 'Required field',
  },
  DATE: {
    EMPTY: 'Required field',
  },
  REASON: {
    EMPTY: 'Required field',
    MAX_LENGTH: 'Reason can contain upto maximum 250 characters only',
  },
  PERSON_NAME: {
    EMPTY: `Required field`,
    INVALID: `Name can contain only alpha numeric characters`,
    MAX_LENGTH: `Name cannot exceed 50 characters`,
  },
  TEMPLATE: {
    EMPTY: `Required field`,
  },
  GENDER: {
    EMPTY: `Required field`,
  },
  BATCH_NAME: {
    EMPTY: `Required field`,
    MAX_LENGTH: `Batch name cannot exceed 50 characters`,
  },
  GROUND_LOCATION: {
    EMPTY: `Required field`,
  },
};

export const INFO = {
  IMAGE_INPUT: `PNG or JPEG Less than 5MB`,
  DOCUMENT_INPUT: `PNG, JPEG or PDF Less than 5MB`,
};

export const SUCCESS_MESSAGE = {
  DEACTIVATE_SUCCESSFULLY: 'Academy deactivate successfully',
  ACTIVATE_SUCCESSFULLY: 'Academy activate successfully',
  DELETE_OWNER_SUCCESSFULLY: 'Owner deleted successfully',
  OWNER_ACTIVATE_SUCCESSFULLY: 'Owner activate successfully',
  OWNER_DEACTIVATE_SUCCESSFULLY: 'Owner deactivate successfully',
  ADMIN_ACTIVATE_SUCCESSFULLY: 'Admin activate successfully',
  ADMIN_DEACTIVATE_SUCCESSFULLY: 'Admin deactivate successfully',
  DELETE_ADMIN_SUCCESSFULLY: 'Admin deleted successfully',
  BATCH_ACTIVATE_SUCCESSFULLY: 'Batch activate successfully',
  BATCH_DEACTIVATE_SUCCESSFULLY: 'Batch deactivate successfully',
  BATCH_CREATED_SUCCESSFULLY: 'Batch created successfully',
  BATCH_UPDATED_SUCCESSFULLY: 'Batch updated successfully',
  GROUND_CREATED_SUCCESSFULLY: 'Ground created successfully',
  SUBSCRIPTION_CREATED_SUCCESSFULLY: 'Subscription created successfully',
  SUBSCRIPTION_ACTIVATE_SUCCESSFULLY: 'Subscription activate successfully',
  SUBSCRIPTION_DEACTIVATE_SUCCESSFULLY: 'Subscription deactivate successfully',
  SUBSCRIPTION_UPDATED_SUCCESSFULLY: 'Subscription updated successfully',
  USER_ACTIVATE_SUCCESSFULLY: 'User activate successfully',
  USER_DEACTIVATE_SUCCESSFULLY: 'User deactivate successfully',
  PAYMENT_DONE: 'Payment done successfully',
  EXPORT_ATHLETE_SUCCESSFULLY: 'Export users successfully',
  BULK_USER_UPLOAD_SUCCESSFULLY: 'Bulk upload successfully',
  COURT_UPDATE_SUCCESSFULLY: 'Court updated successfully',
  COURT_ACTIVATE_SUCCESSFULLY: 'Court activate successfully',
  COURT_DEACTIVATE_SUCCESSFULLY: 'Court deactivate successfully',
  GROUND_UPDATED_SUCCESSFULLY: 'Ground updated successfully',
  USER_DELETE_SUCCESSFULLY: 'User deleted successfully',
  MODULE_SETTINGS_UPDATE_SUCCESSFULLY: 'Module setting updated successfully',
  IN_TIME_ADDED_SUCCESSFULLY: 'User in time added successfully',
  OUT_TIME_ADDED_SUCCESSFULLY: 'User out time added successfully',
  IN_TIME_UPDATED_SUCCESSFULLY: 'User in time updated successfully',
  OUT_TIME_UPDATED_SUCCESSFULLY: 'User out time updated successfully',
};

export const ATHLETE = {
  DELETE: 'Delete User',
};

export const SLOTS_ERROR = 'Please select at least one slot';
