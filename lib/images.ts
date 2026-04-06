const IMAGEKIT_BASE_URL = "https://ik.imagekit.io/s0558jeir/yokaidex/";

const CLOUDINARY_YOKAI_PREFIX =
    /^https:\/\/res\.cloudinary\.com\/dcrcweea8\/image\/upload\/(?:v\d+\/)?Yokai\//i;

export const resolveImageUrl = (src: string) => {
    if (!src) {
        return src;
    }

    if (src.startsWith(IMAGEKIT_BASE_URL)) {
        return src;
    }

    if (CLOUDINARY_YOKAI_PREFIX.test(src)) {
        return src.replace(CLOUDINARY_YOKAI_PREFIX, IMAGEKIT_BASE_URL);
    }

    return src;
};
