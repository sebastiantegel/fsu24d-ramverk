export type Pokemon = {
  name: string;
  weight: number;
  sprites: Sprite;
  moves: Move[];
  types: Type[];
};

type Sprite = {
  front_default: string;
};

type Move = {
  move: NameUrl;
};

type NameUrl = {
  name: string;
  url: string;
};

type Type = {
  type: NameUrl;
};
