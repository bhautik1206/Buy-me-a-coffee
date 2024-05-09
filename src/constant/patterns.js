export const EMAIL_PATTERN =
  /^[\d\w]+[-._+]{0,1}([\d\w]+|[-._+]{0,1})?[\d\w+]+([^\W-._+]+)@([\w\d]+)((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/;

export const ALPHABET_PATTERN = /^[a-zA-Z]*$/;

export const MOBILE_NUMBER = /^\d{10}$/;

export const USER_NAME = /^(?=^.{1,30}$)[0-9a-zA-Z-_.]+$/;

export const GST_NUMBER = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;

export const NAME_REGEX = /^[a-zA-Z]+(\s+[a-zA-Z]+)*\s*$/;

export const URL_REGEX = /^(?:https?:\/\/)?(?:www\.)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\/[\w.-]*)*$/;
