import {
  IconBold,
  IconCode,
  IconH1,
  IconH2,
  IconH3,
  IconH4,
  IconItalic,
  IconList,
  IconListNumbers,
  IconUnderline,
} from "@tabler/icons-react";

export const Bold = {
  icon: IconBold,
  isActive: {
    name: "bold",
  },
  operation: {
    action: "toggleBold",
  },
} as const;

export const Italic = {
  icon: IconItalic,
  isActive: {
    name: "italic",
  },
  operation: {
    action: "toggleItalic",
  },
} as const;

export const UnderLine = {
  icon: IconUnderline,
  isActive: {
    name: "underline",
  },
  operation: {
    action: "toggleUnderline",
  },
} as const;

export const UnOrderedList = {
  icon: IconList,
  isActive: {
    name: "bulletList",
  },
  operation: {
    action: "toggleBulletList",
  },
} as const;

export const OrderedList = {
  icon: IconListNumbers,
  isActive: {
    name: "orderedList",
  },
  operation: {
    action: "toggleOrderedList",
  },
} as const;

export const Code = {
  icon: IconCode,
  isActive: {
    name: "code",
  },
  operation: {
    action: "toggleCode",
  },
} as const;

export const Heading1 = {
  icon: IconH1,
  isActive: {
    name: "heading",
    attributes: {
      level: 1,
    },
  },
  operation: {
    action: "toggleHeading",
    attributes: {
      level: 1,
    },
  },
} as const;

export const Heading2 = {
  icon: IconH2,
  isActive: {
    name: "heading",
    attributes: {
      level: 2,
    },
  },
  operation: {
    action: "toggleHeading",
    attributes: {
      level: 2,
    },
  },
} as const;

export const Heading3 = {
  icon: IconH3,
  isActive: {
    name: "heading",
    attributes: {
      level: 3,
    },
  },
  operation: {
    action: "toggleHeading",
    attributes: {
      level: 3,
    },
  },
} as const;

export const Heading4 = {
  icon: IconH4,
  isActive: {
    name: "heading",
    attributes: {
      level: 4,
    },
  },
  operation: {
    action: "toggleHeading",
    attributes: {
      level: 4,
    },
  },
} as const;
