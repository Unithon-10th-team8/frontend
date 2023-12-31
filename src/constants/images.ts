import { RELEASE_ENV, ReleaseEnv } from "./env";

export const IMAGE_BASE_URL_MAP: Record<ReleaseEnv, string> = {
  production: "https://assets-unithon-10th-team8-prod.betaman.xyz",
  development: "https://assets-unithon-10th-team8-dev.betaman.xyz",
};

export const IMAGE_BASE_URL = IMAGE_BASE_URL_MAP[RELEASE_ENV];
const NOTIFICATION_IMAGES = {
  birthday: "/notification/birthday.svg",
  contract: "/notification/contract.svg",
  meal: "/notification/meal.svg",
  obituary: "/notification/obituary.svg",
  meeting: "/notification/meeting.svg",
};

const SIGN_IN = {
  google: "/signIn/google.svg",
};

const CONTACT_IMAGES = {
  iconChevronDown: "/contacts/icon-chevron-down.svg",
  iconChevronLeft: "/contacts/icon-chevron-left.svg",
  iconContactMenuMore: "/contacts/icon-contact-menu-more.svg",
  iconContactSearch: "/contacts/icon-contact-search.svg",
  iconContactAdd: "/contacts/icon-contact-add.svg",
  iconContactBookmark: "/contacts/icon-contact-bookmark.svg",
};

const COMMON_IMAGES = {};

const CONTACT_DETAIL_IMAGE = {
  profileDefault: "/contacts/detail/profile-default.svg",
  editProfileIcon: "/contacts/detail/edit-profile-icon.svg",
};

const ETC = {
  check: "/etc/check.svg",
  bell: "/etc/bell.svg",
  KAMY: "/etc/KAMY.svg",
};

type ImageObj<T extends string | number> = Record<
  T,
  Record<T, Record<T, T> | T> | T
>;

const getImageAbsolutePath = (path: string) => `${IMAGE_BASE_URL}${path}`;

const traverseObject = (obj?: ImageObj<string | number>) => {
  if (!obj) return;
  Object.entries(obj).forEach(([key, value]) => {
    if (typeof value === "object") {
      traverseObject(value);
    } else {
      // change asset path
      obj[key] = getImageAbsolutePath(String(value));
    }
  });
};

const addPathToImageObjects = () =>
  [
    /* image url objects */
    COMMON_IMAGES,
    CONTACT_DETAIL_IMAGE,
    NOTIFICATION_IMAGES,
    CONTACT_IMAGES,
    SIGN_IN,
    ETC,
  ].forEach(traverseObject);

addPathToImageObjects();

export {
  COMMON_IMAGES,
  CONTACT_IMAGES,
  NOTIFICATION_IMAGES,
  CONTACT_DETAIL_IMAGE,
  SIGN_IN,
  ETC,
};
