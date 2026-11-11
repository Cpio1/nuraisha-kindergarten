import { Apple, Croissant, HeartHandshake, MessageCircleHeart, Salad, Soup, Sprout, Puzzle } from "lucide-react";
import type { ComponentType } from "react";
import { AbcIcon, BeltIcon } from "./BrandIcons";

export type Tone = "mint" | "lilac" | "peach";
type Icon = ComponentType<{ className?: string }>;

/** Цветовые наборы — общие для мобильной и десктопной версий. */
export const tones: Record<Tone, { bg: string; soft: string; deep: string; text: string; hex: string; deepHex: string }> = {
  mint: { bg: "bg-mint", soft: "bg-mint-soft", deep: "bg-mint-deep", text: "text-mint-deep", hex: "#B8E5D0", deepHex: "#6FC29D" },
  lilac: { bg: "bg-lilac", soft: "bg-lilac-soft", deep: "bg-lilac-deep", text: "text-lilac-deep", hex: "#DCCDF7", deepHex: "#9C80E0" },
  peach: { bg: "bg-peach", soft: "bg-peach-soft", deep: "bg-peach-deep", text: "text-peach-deep", hex: "#FFD6B8", deepHex: "#F39A62" },
};

export const pillars: { Icon: Icon; tone: Tone }[] = [
  { Icon: HeartHandshake, tone: "peach" },
  { Icon: Puzzle, tone: "lilac" },
  { Icon: Sprout, tone: "mint" },
];

export const groupTones: Tone[] = ["lilac", "peach"];

export const clubs = [
  { key: "speech", Icon: MessageCircleHeart as Icon, tone: "lilac" },
  { key: "taekwondo", Icon: BeltIcon as Icon, tone: "peach" },
  { key: "english", Icon: AbcIcon as Icon, tone: "mint" },
] as const satisfies readonly { key: string; Icon: Icon; tone: Tone }[];

export const meals = [
  { key: "breakfast", Icon: Croissant as Icon, tone: "peach" },
  { key: "lunch", Icon: Soup as Icon, tone: "mint" },
  { key: "snack", Icon: Apple as Icon, tone: "lilac" },
  { key: "dinner", Icon: Salad as Icon, tone: "peach" },
] as const satisfies readonly { key: string; Icon: Icon; tone: Tone }[];
